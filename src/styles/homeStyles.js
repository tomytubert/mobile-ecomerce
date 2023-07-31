import styled from "styled-components";

export const MainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  > div {
    display: flex;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
  }
  @media only screen and (min-width: 450px) {
    > div {
      justify-content: flex-end;
    }
  }
  @media only screen and (min-width: 450px) and (max-width: 1025px) {
    > div {
      margin-right: 115px;
    }
  }
`;
