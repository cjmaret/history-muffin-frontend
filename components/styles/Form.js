import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  margin-top: 3rem;
  border: 5px solid white;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    border-radius: 10px;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--blue);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--blue);
    color: white;
    border: 0;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 500px) {
      font-size: 2rem;
    }
    &[disabled] {
      opacity: 0.6;
      background: gray;
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--blue) 0%,
        #33658a 50%,
        var(--blue) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
