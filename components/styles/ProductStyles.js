import styled from 'styled-components';

export const ProductComponent = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0.5rem;
`;

export const ProductLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// export const TitleImageContainer = styled.div`
//   position: relative;
//   margin-bottom: 0.5rem;
//   @media (min-width: 1080px) {
//     margin-bottom: 22px;
//   }
// `;

export const ImageContainer = styled.div`
  height: calc(30vw);
  margin-bottom: 0.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1080px) {
    height: 320px;
    margin: 0;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media (min-width: 1080px) {
    padding: .5rem 1rem;
  }
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: calc(0.7rem + 2vw);
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 1080px) {
    font-size: 3rem;
    padding: 0;
  }
`;

const ProductParagraph = styled.p`
  margin: 0.25rem 0;
  line-height: 1.6;
  font-weight: 300;
  flex-grow: 1;
  padding: 0;
  font-size: calc(0.3rem + 1vw);
  @media (min-width: 1080px) {
    font-size: 1.5rem;
    padding: 0;
  }
`;

export const ProductDescription = styled(ProductParagraph)``;

export const ProductPrice = styled(ProductParagraph)``;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--lightGray);
  grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
  grid-gap: 1px;
  & > * {
    background: white;
    border: 0;
    width: 100%;
    border-right: 1px solid var(--lightGray);
    font-size: calc(0.2rem + 0.9vw);
    padding: 0;
    margin: 0.5rem auto;
    padding: 0 2px;
    &:last-child {
      border-right: none;
    }
    @media (min-width: 1080px) {
      font-size: 12px;
    }
  }
  a {
    text-align: center;
    color: black;
  }
`;
