import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import Link from 'next/link';
import AddToCart from './AddToCart';
import DeleteProduct from './DeleteProduct';
import { useUser } from './User';
import { formatCentsToDollars } from '../lib/formatMoney';

const ProductStyles = styled.div`
  display: flex;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  align-items: top;
  gap: 2rem;
  img {
    width: 50%;
    object-fit: contain;
  }
  .buttonList {
    display: flex;
    margin-top: 25px;
    & > * {
      border: none;
      background-color: rgb(126, 213, 206);
      border-radius: 5px;
      color: white;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      margin: 15px 15px 15px 0;
      font-size: 20px;
      padding: 5px 15px;
      &:hover {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  .details {
    & > h2 {
      margin-bottom: 5px;
      font-size: 3.5rem;
    }
    & > p {
      margin: 5px 0 5px 0;
      font-size: 2rem;
    }
  }
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
    }
    .buttonList {
      justify-content: center;
    }
  }
  @media (max-width: 450px) {
    .buttonList > * {
      font-size: 15px;
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const user = useUser();
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  function doesUserOwnProduct() {
    return user?.products.some((userProduct) => userProduct.id === id);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <ProductStyles data-testid="singleProduct">
      <Head>
        <title>History Muffin | {Product.name}</title>
      </Head>
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
        <p>Price: {formatCentsToDollars(Product.price)}</p>
        <div className="buttonList">
          <Link
            href={
              doesUserOwnProduct()
                ? {
                    pathname: '/update',
                    query: {
                      id: Product.id,
                    },
                  }
                : { pathname: '' }
            }>
            <a
              onClick={() =>
                doesUserOwnProduct()
                  ? ''
                  : alert(`Sorry, you can't edit products you don't own`)
              }>
              Edit
            </a>
          </Link>
          <AddToCart id={Product.id} />
          <DeleteProduct id={Product.id}>Delete</DeleteProduct>
        </div>
      </div>
    </ProductStyles>
  );
}

export { SINGLE_ITEM_QUERY };
