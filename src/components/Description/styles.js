import styled from "styled-components";
import variables from "../../styles/_variables";


export const DetailsContainer = styled.div`
  > div {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    p {
      color: ${variables.colors.accent};
      font-family: ${variables.font.text};
      font-size: 30px;
      font-weight: bold;
    }
  }
  h2,
  h3,
  h3,
  h4 {
    font-family: ${variables.font.text};
  }
  h1 {
    color: ${variables.colors.black};
    font-family: ${variables.font.title};
    font-size: 35px;
    font-weight: bold;
  }
  h2 {
    color: ${variables.colors.grey_shadow};
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  h3 {
    color: ${variables.colors.black};
    font-size: 18px;
  }
  h4 {
    color: ${variables.colors.black};
    font-size: 16px;
    font-weight: 300;
    span {
      font-weight: 400;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 10px;
  }
  @media only screen and (min-width: 1024px) {
    > div {
      max-width: 450px;
    }
  }
`;
