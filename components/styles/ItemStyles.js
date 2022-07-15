import styled from 'styled-components';

const Item = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  .title-image-container {
    position: relative;
    margin-bottom: 2vw;
    @media (min-width: 1080px) {
      margin-bottom: 22px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image-container {
    height: calc(46vw);
    @media (min-width: 1080px) {
      height: 500px;
    }
  }
  p {
    margin: 0.5rem 0;
    line-height: 1.6;
    font-weight: 300;
    flex-grow: 1;
    padding: 1vw 1rem;
    font-size: calc(0.3rem + 1vw);
    @media (min-width: 1080px) {
      font-size: 16px;
      padding: 1.8rem 1rem;
    }
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
    grid-gap: 1px;
    & > * {
      background: white;
      border: 0;
      width: 100%;
      border-right: 1px solid var(--lightGray);
      font-size: calc(0.3rem + 0.8vw);
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
  }
`;

export default Item;
