import styled from "styled-components";
import variables from "../../styles/_variables";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ItemPage = styled.main`
  animation: ${fadeIn} 2.5s;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  min-height: 100vh;
  section:nth-child(2) {
    background-color: ${variables.colors.white};
    border-radius: 50px 50px 0 0;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -50px;
    padding: 20px 50px;
  }
  @media only screen and (min-width: 450px) and (max-width: 1024px) {
    section:nth-child(2) {
      flex-direction: row;
      gap: 10%;
    }
  }
  @media only screen and (min-width: 1025px) {
    flex-direction: row;
    padding: 50px;
    section {
      flex: 1;
    }
    section:nth-child(2) {
      background: transparent;
      box-shadow: none;
      margin-top: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  background-color: white;
  padding: 100px 50px 75px 50px;
  img {
    max-height: 300px;
    object-fit: contain;
    width: 100%;
  }
  @media only screen and (min-width: 1025px) {
    border-radius: 50px;
    padding: 50px;
  }
`;

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

export const ActionContainer = styled.div`
  h2 {
    color: ${variables.colors.black};
    font-size: 18px;
    font-family: ${variables.font.text};
  }
  form {
    margin-top: 10px;
  }
  select {
    background-color: ${variables.colors.accent};
    border-radius: 5px;
    border: none;
    color: ${variables.colors.white};
    cursor: pointer;
    font-family: ${variables.font.text};
    font-size: 13px;
    font-weight: bold;
    padding: 8px 14px;
    width: fit-content;
  }
  button {
    background-color: ${variables.colors.accent};
    border-radius: 5px;
    border: none;
    color: ${variables.colors.white};
    cursor: pointer;
    font-family: ${variables.font.text};
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
  }
  label {
    color: ${variables.colors.black};
    font-family: ${variables.font.title};
    font-size: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
      display: flex;
      gap: 20px;
      div {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
  }
  @media only screen and (min-width: 1025px) {
    button {
      max-width: 250px;
    }
  }
`;
