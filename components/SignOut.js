import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export const SignoutButton = styled.button`
  color: var(--black);
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
    <SignoutButton type="button" onClick={handleSignout}>
      Sign Out!
    </SignoutButton>
  );
}
