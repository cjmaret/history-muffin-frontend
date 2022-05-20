import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import { Checkout, CREATE_ORDER_MUTATION } from '../components/Checkout';
import { fakeCartItem, fakeCreditCard } from '../lib/testUtils';

const cartItem = fakeCartItem();
const creditCard = fakeCreditCard();

describe('<Checkout/>', () => {
  it('renders and matches snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Checkout />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  // it('handles the updating', async () => {
  //   // 1. render the form out
  //   const { container, debug } = render(
  //     <MockedProvider>
  //       <Checkout />
  //     </MockedProvider>
  //   );
  //   // 2. type into the boxes
  //   await userEvent.type(screen.getByPlaceholderText(/Name/i), item.name);
  //   userEvent.clear(screen.getByPlaceholderText(/Price/i));
  //   await userEvent.type(
  //     screen.getByPlaceholderText(/Price/i),
  //     item.price.toString()
  //   );
  //   await userEvent.type(
  //     screen.getByPlaceholderText(/Description/i),
  //     item.description
  //   );
  //   // 3. check that those boxes are populated
  //   expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
  //   expect(screen.getByDisplayValue(item.price)).toBeInTheDocument();
  //   expect(screen.getByDisplayValue(item.description)).toBeInTheDocument();
  // });

  it('returns the order page on successful order', async () => {
    const mocks = [
      {
        request: {
          query: CREATE_ORDER_MUTATION,
          variables: { token: 'token' },
        },
        result: {},
      },
    ];

    const { container, debug } = render(
      <MockedProvider>
        <Checkout />
      </MockedProvider>
    );
  });
});
