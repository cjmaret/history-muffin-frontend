import styled from 'styled-components';

const SickButton = styled.button`
  background: var(--blue);
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: all 0.5s;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    opacity: 0.5;
  }
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export default SickButton;
