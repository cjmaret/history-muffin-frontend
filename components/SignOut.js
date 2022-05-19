import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;
export default function SignOut() {
  const [signout, { data, loading }] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  function handleSignout() {
    signout();
    Router.push('/products');
  }

  return (
    <button type="button" onClick={handleSignout}>
      Sign Out!
    </button>
  );
}
