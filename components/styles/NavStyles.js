import styled from 'styled-components';

function handleNavDisplay(props) {
  if (props.mobileMenu) {
    return props.isMenuOpen ? 'flex' : 'none';
  }
  return 'flex';
}

export const NavStyles = styled.ul`
  margin: 0 2rem 0 0;
  padding: 0;
  display: ${(props) => handleNavDisplay(props)};
  justify-content: flex-end;
  font-size: 1.5rem;
  width: 65%;
  max-width: 700px;
  border-radius: 10px;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    white-space: nowrap;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: calc(90%);
      }
    }
  }
  @media (max-width: 1440px) {
    font-size: 1.5rem;
    a,
    button {
      padding: 0.5rem 1.5rem;
    }
  }

  @media (max-width: 940px) {
    font-size: 1rem;
  }
  a,
  button {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 740px) {
    font-size: 1rem;
    a,
    button {
      padding: 0.5rem 0.5rem;
    }
  }

  @media (max-width: 640px) {
    z-index: 500;
    background-color: white;
    position: absolute;
    width: 40%;
    max-width: 120px;
    flex-direction: column;
    align-items: flex-end;
    right: 1%;
    top: 40px;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    a,
    button {
      &:hover,
      &:focus {
        outline: none;
        text-decoration: none;
        &:after {
          transform: none;
          transition: none;
          visibility: hidden;
          width: 0%;
        }
      }
      &:before {
        background: none;
      }
    }
  }
`;

export const Hamburger = styled.button`
  margin-right: 2rem;
  width: 25px;
  height: 25px;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 490px) {
    top: 13px;
  }
`;

export const HamburgerIcon = styled.img`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
`;
