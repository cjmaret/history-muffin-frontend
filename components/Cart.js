import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import { useUser } from './User';
import { formatCentsToDollars } from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import { Checkout } from './Checkout';
import { useEffect } from 'react';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>Quantity: {cartItem.quantity}</p>
        <p>Price: {formatCentsToDollars(product.price)}</p>
        <p>Total: {formatCentsToDollars(product.price * cartItem.quantity)}</p>
        {/* <em>
          {cartItem.quantity} &times; {formatCentsToDollars(product.price)} each
        </em> */}
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();

  useEffect(() => {
    const cart = document.querySelector('.cart-styles');
    function closeCartOnClickOutside(e) {
      if (cartOpen && !cart.contains(e.target)) {
        closeCart();
      }
    }
    document.addEventListener('click', closeCartOnClickOutside);
    return () => document.removeEventListener('click', closeCartOnClickOutside);
  });

  if (!me) return null;
  return (
    <CartStyles open={cartOpen} className="cart-styles">
      <header>
        <h2>{me.name}'s Cart</h2>
      </header>
      <CloseButton onClick={closeCart}>&times;</CloseButton>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>Total: {formatCentsToDollars(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
