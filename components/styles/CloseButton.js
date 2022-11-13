import styled from 'styled-components';

const CloseButton = styled.button`
  color: white;
  background-color: transparent;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export default CloseButton;
