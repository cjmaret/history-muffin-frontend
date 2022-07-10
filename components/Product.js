import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import { formatCentsToDollars } from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';

export default function Product({ product }) {
  const user = useUser();

  function doesUserOwnProduct() {
    return user?.products.some((userProduct) => userProduct.id === product.id);
  }

  return (
    <ItemStyles>
      <div className="image-container">
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </div>
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatCentsToDollars(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
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
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
