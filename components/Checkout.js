import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import SickButton from './styles/SickButton';
import { useCart } from '../lib/cartState';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // 2. start the page transition
    nProgress.start();

    // 3. create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);

    // 4. handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return; // stops the checkout from happening
    }

    // 5. send the token from step 4 to our keystone server, via a custom mutation
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });

    console.log('finished order!');
    console.log(order);

    // 6. change the page to view the order

    router.push({
      pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id,
      },
    });

    // 7. close the cart.

    closeCart();

    // 8. turn the loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      {graphQLError && <p>{graphQLError.message}</p>}
      <CardElement />
      <SickButton>Check Out Now</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };
