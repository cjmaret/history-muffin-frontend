import styled from 'styled-components';

const Title = styled.h3`
  position: absolute;
  bottom: calc(60px + 0.7vw);
  left: 50%;
  margin: 0 0.5rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg) translate(-50%, 0);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  line-height: 1.2;
  @media (min-width: 1080px) {
    bottom: 69px;
  }
  a {
    background: var(--blue);
    display: inline;
    line-height: 1.3;
    font-size: 4.5vw;
    text-align: center;
    color: white;
    padding: 0 0.5rem;
    /* white-space: nowrap; */
    @media (min-width: 1080px) {
      font-size: 49px;
    }
  }
`;

export default Title;
