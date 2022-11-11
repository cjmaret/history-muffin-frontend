import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';
import { useEffect, useRef, useState } from 'react';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  a {
    font-family: 'Pacifico';
    color: linear-gradient(blue, yellow);
    background: linear-gradient(#e66465, #9198e5);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    white-space: nowrap;
  }
  @media screen and (max-width: 1440px) {
    font-size: 2rem;
  }

  @media (max-width: 490px) {
    font-size: 1.5rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

// Only mount `Search` component on the client to stop infinite re-renders
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const menuIconRef = useRef();

  // close menu on click outside
  useEffect(() => {
    function checkIfClickedOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !menuIconRef.current?.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('mousedown', checkIfClickedOutside);

    return () => window.removeEventListener('mousedown', checkIfClickedOutside);
  }, [isMenuOpen]);

  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a onClick={() => setIsMenuOpen(false)}>History Muffin</a>
          </Link>
        </Logo>
        <Nav
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuRef={menuRef}
          menuIconRef={menuIconRef}
        />
      </div>

      <div className="sub-bar">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>
      <Cart />
    </HeaderStyles>
  );
}
