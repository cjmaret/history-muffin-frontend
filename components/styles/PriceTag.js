import styled from 'styled-components';

const PriceTag = styled.span`
  background: var(--blue);
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: calc(4vw);
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
  @media(min-width: 1080px) {
    font-size: 43px;
  }
`;

export default PriceTag;
