import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavStyles, Hamburger, HamburgerIcon } from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import HamburgerImage from '../images/hamburger.png';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  const [mobileMenu, setMobileMenu] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function getWindowWidth() {
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    }
    getWindowWidth();
    window.addEventListener('resize', getWindowWidth);
    return () => window.removeEventListener('resize', getWindowWidth);
  });

  return (
    <>
      <NavStyles menuOpen={menuOpen} mobileMenu={mobileMenu}>
        <Link href="/products">
          <a onClick={() => setMenuOpen(false)}>Products</a>
        </Link>
        {user && (
          <>
            <Link href="/sell">
              <a onClick={() => setMenuOpen(false)}>Sell</a>
            </Link>
            <Link href="/orders">
              <a onClick={() => setMenuOpen(false)}>Orders</a>
            </Link>
            <Link href="/account">
              <a onClick={() => setMenuOpen(false)}>Account</a>
            </Link>
            <SignOut onClick={() => setMenuOpen(false)} />
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openCart();
              }}
            >
              My Cart
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.product ? cartItem.quantity : 0),
                  0
                )}
              />
            </button>
          </>
        )}
        {!user && (
          <>
            <Link href="/signin">
              <a onClick={() => setMenuOpen(false)}>Sign In</a>
            </Link>
          </>
        )}
      </NavStyles>
      {mobileMenu && (
        <Hamburger type="button" onClick={() => setMenuOpen(!menuOpen)}>
          <HamburgerIcon src={HamburgerImage} />
        </Hamburger>
      )}
    </>
  );
}
