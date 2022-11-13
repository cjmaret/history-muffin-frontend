import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';
import { useEffect, useRef, useState } from 'react';
import LogoImage from '../images/logo.png';

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0 0 0 2rem;
  position: relative;
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  div {
    display: flex;
    justify-content: flex-start;
    transition: opacity 0.4s ease;
    width: 200px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &:hover {
      text-decoration: none;
      opacity: 0.7;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 950px) {
    div {
      width: 100px;
      height: 40px;
    }
  }
`;

const HeaderStyles = styled.header`
  width: 100%;
  .bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
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
            <div onClick={() => setIsMenuOpen(false)}>
              <img src={LogoImage} alt="" />
            </div>
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
