import styled from 'styled-components';

export const AccountStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0 0 0;
  .account-text {
    font-size: 3vw;
    @media (min-width: 1080px) {
      font-size: 32px;
    }
  }
  .account-image {
    width: 20%;
    margin-right: 5vw;
    display: flex;
    align-items: center;
    @media (min-width: 1080px) {
      margin-right: 54px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  margin: auto;
`;
