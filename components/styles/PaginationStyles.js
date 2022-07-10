import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  white-space: nowrap;
  font-size: calc(.5rem + 1.5vw);
  width: calc(100px + 40vw);
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  @media (min-width: 1080px) {
    width: 530px;
  }
`;

export default PaginationStyles;
