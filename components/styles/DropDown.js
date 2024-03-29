import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchComponent = styled.div`
  position: relative;
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  .search-input-container {
    display: flex;
  }
  input {
    width: 100%;
    padding: 5px 5px;
    border: 0;
    font-size: calc(0.5rem + 2vw);
    &:focus {
      outline: none;
    }
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
    @media (min-width: 1080px) {
      font-size: 26.6px;
    }
  }
`;

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: ${(props) => (props.isOpen ? '1px solid var(--lightGray)' : 'none')};
`;

const DropDownItem = styled.a`
  border-bottom: 1px solid var(--lightGray);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
  &:hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export { SearchComponent, DropDown, DropDownItem };
