import styled from 'styled-components';

function handleNavDisplay(props) {
  if (props.mobileMenu) {
    return props.menuOpen ? 'flex' : 'none';
  }
  return 'flex';
}

export const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: ${(props) => handleNavDisplay(props)};
  justify-self: end;
  font-size: 2rem;
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
    &:before {
      content: '';
      width: 2px;
      background: var(--lightGray);
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: var(--blue);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
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
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: flex-end;
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
    border: 1px solid red;
    z-index: 500;
    background-color: white;
    position: absolute;
    width: 30%;
    flex-direction: column;
    align-items: flex-end;
    right: 5%;
    top: 67px;
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
    }
  }
`;

export const Hamburger = styled.button`
  position: absolute;
  right: 30px;
  top: 20px;
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
