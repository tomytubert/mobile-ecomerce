import styled from "styled-components";
import variables from "../../styles/_variables";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ItemPage = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: ${fadeIn} 2.5s;
  section:nth-child(2) {
    padding: 20px 50px;
    background-color: ${variables.colors.white};
    border-radius: 50px 50px 0 0;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (min-width: 450px) and (max-width: 1024px) {
    section:nth-child(2) {
      flex-direction: row;
      gap: 10%;
      box-shadow: none;
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
      margin-top: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  background-color: white;
  padding: 100px 50px 75px 50px;
  img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }
  @media only screen and (min-width: 1025px) {
    border-radius: 50px;
    padding: 50px;
  }
`;

export const DetailsContainer = styled.div`
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    p {
      font-family: ${variables.font.text};
      color: ${variables.colors.accent};
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
    font-family: ${variables.font.title};
    color: ${variables.colors.black};
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
    border: none;
    font-family: ${variables.font.text};
    color: ${variables.colors.white};
    padding: 8px 14px;
    font-size: 13px;
    background-color: ${variables.colors.accent};
    border-radius: 5px;
    font-weight: bold;
    width: fit-content;
    cursor: pointer;
  }
  button {
    border: none;
    font-family: ${variables.font.text};
    font-size: 16px;
    color: ${variables.colors.white};
    padding: 10px 20px;
    background-color: ${variables.colors.accent};
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  label {
    font-family: ${variables.font.title};
    font-size: 16px;
    color: ${variables.colors.black};
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
