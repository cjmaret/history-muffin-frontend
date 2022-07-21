import styled from 'styled-components';

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  border-top: 10px solid var(--blue);
  & > p {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 0;
    border-bottom: 1px solid var(--offWhite);
    span {
      box-sizing: border-box;
      padding: 1rem;
      font-size: 2vw;
      @media (min-width: 1080px) {
        font-size: 2rem;
      }
      &:first-child {
        padding: 1rem 0 1rem 0;
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid var(--offWhite);
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    font-size: 2vw;
    @media (min-width: 1080px) {
      font-size: 2rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding-right: 2vw;
      @media (min-width: 1080px) {
        padding-right: 5rem;
      }
    }
  }
`;
export default OrderStyles;
