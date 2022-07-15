import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { useUser } from './User';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, setProductDeleted, children }) {
  const user = useUser();

  function doesUserOwnProduct() {
    return user?.products.some((userProduct) => userProduct.id === id);
  }

  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: {
        id,
      },
      update,
    }
  );

  if (error) {
    console.log(error);
  }

  function handleClick() {
    if (doesUserOwnProduct()) {
      if (confirm('Are you sure?')) {
        deleteProduct()
          .then(() => {
            setProductDeleted(true);
            Router.push({
              pathname: `/products`,
            });
          })
          .catch((err) => alert(err.message));
      }
    } else {
      alert(`Sorry, you can't delete products you don't own`);
    }
  }

  return (
    <button type="button" disabled={loading} onClick={handleClick}>
      {children}
    </button>
  );
}
