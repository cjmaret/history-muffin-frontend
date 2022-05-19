import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { CURRENT_USER_QUERY, useUser } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const user = useUser();
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  function handleClick() {
    if (user) {
      addToCart();
    } else {
      Router.push('/signin');
    }
  }
  return (
    <button disabled={loading} type="button" onClick={handleClick}>
      Add{loading && 'ing'} To Cart
    </button>
  );
}
