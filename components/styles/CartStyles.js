import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 0;
  position: relative;
  background: white;
  position: fixed;
  /* height: 50%; */
  top: 1%;
  right: 0;
  width: 40%;
  min-width: 500px;
  border-radius: 15px;
  overflow: hidden;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: inline-block;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(-2%);`};
  header {
    h2 {
      background-color: var(--blue);
      color: white;
      width: 100%;
      display: inline-block;
      text-align: center;
      padding: 4px 5px;
      margin: 0;
      font-size: 3.5rem;
      @media (max-width: 650px) {
        font-size: 2.5rem;
      }
      @media (max-width: 650px) {
        font-size: 2.5rem;
      }
    }
  }
  footer {
    margin: 20px 20px 20px 20px;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: 3rem;
    font-weight: 900;
    max-width: 100%;
    p {
      margin: 0;
    }
  }
  ul {
    padding: 2rem 0 0 0;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    margin: 30px 20px 0 20px;
    list-style: none;
    max-height: 50vh;
    overflow: scroll;
  }
  @media (max-width: 650px) {
    width: 60%;
    min-width: 300px;
  }
`;

export default CartStyles;
