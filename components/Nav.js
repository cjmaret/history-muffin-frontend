import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavStyles, Hamburger, HamburgerIcon } from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import HamburgerImage from '../images/hamburger.png';

export default function Nav({
  isMenuOpen,
  setIsMenuOpen,
  menuRef,
  menuIconRef,
}) {
  const user = useUser();
  const { openCart } = useCart();
  const [mobileMenu, setMobileMenu] = useState();

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

  console.log(isMenuOpen);

  return (
    <>
      <NavStyles isMenuOpen={isMenuOpen} mobileMenu={mobileMenu} ref={menuRef}>
        <Link href="/products">
          <a onClick={() => setIsMenuOpen(false)}>Products</a>
        </Link>
        {user && (
          <>
            <Link href="/sell">
              <a onClick={() => setIsMenuOpen(false)}>Sell</a>
            </Link>
            <Link href="/orders">
              <a onClick={() => setIsMenuOpen(false)}>Orders</a>
            </Link>
            <Link href="/account">
              <a onClick={() => setIsMenuOpen(false)}>Account</a>
            </Link>
            <SignOut onClick={() => setIsMenuOpen(false)} />
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openCart();
              }}>
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
              <a onClick={() => setIsMenuOpen(false)}>Sign In</a>
            </Link>
          </>
        )}
      </NavStyles>
      {mobileMenu && (
        <Hamburger
          ref={menuIconRef}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HamburgerIcon src={HamburgerImage} />
        </Hamburger>
      )}
    </>
  );
}
