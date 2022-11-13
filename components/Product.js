import Link from 'next/link';
import {
  ButtonList,
  ImageContainer,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  TitleImageContainer,
  ProductDetails,
  ProductLink,
  ProductComponent,
} from './styles/ProductStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import { formatCentsToDollars } from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';
import { useState } from 'react';

export default function Product({ product }) {
  const user = useUser();
  const [productDeleted, setProductDeleted] = useState(false);

  function doesUserOwnProduct() {
    return user?.products.some((userProduct) => userProduct.id === product.id);
  }

  console.log(product);

  return (
    <ProductComponent>
      <ProductLink href={`/product/${product.id}`} />
      <ImageContainer>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </ImageContainer>
      <ProductDetails>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>
          {product.description.length > 40
            ? `${product.description.substring(0, 40)}...`
            : product.description}
        </ProductDescription>
        <ProductPrice>{formatCentsToDollars(product.price)}</ProductPrice>
      </ProductDetails>
      {/* <ButtonList>
        <Link
          href={
            doesUserOwnProduct()
              ? {
                  pathname: '/update',
                  query: {
                    id: product.id,
                  },
                }
              : { pathname: '' }
          }>
          <a
            href=""
            onClick={() =>
              doesUserOwnProduct()
                ? ''
                : alert(`Sorry, you can't edit products you don't own`)
            }>
            Edit
          </a>
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id} setProductDeleted={setProductDeleted}>
          Delete
        </DeleteProduct>
      </ButtonList> */}
    </ProductComponent>
  );
}
