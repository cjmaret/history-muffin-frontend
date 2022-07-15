import styled from 'styled-components';

const Title = styled.h3`
  position: absolute;
  bottom: -5%;
  left: 50%;
  margin: 0 0.5rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg) translate(-50%, 0);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  line-height: .7;
  @media (min-width: 1080px) {
    margin-top: -3rem;
  }
  a {
    background: var(--blue);
    display: inline;
    line-height: 1.3;
    font-size: calc(0.1rem + 4vw);
    text-align: center;
    color: white;
    padding: 0 0.5rem;
    @media (min-width: 1080px) {
      font-size: 49px;
    }
  }
`;

export default Title;
