import styled from "styled-components";
import variables from "../../styles/_variables";

export const Item = styled.li`
  margin: 0 auto;
  max-width: 300px;
  a {
    background: ${variables.colors.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    text-decoration: none;
    img {
      border-radius: 20px 20px 0 0;
      height: 300px;
      object-fit: contain;
      width: 100%;
    }
    div {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
      }
      h2 {
        color: ${variables.colors.black};
        font-family: ${variables.font.title};
        font-size: 18px;
      }
      p {
        color: ${variables.colors.grey_shadow};
        font-family: ${variables.font.text};
        font-size: 16px;
        white-space: nowrap;
      }
    }
    > div {
      display: flex;
      gap: 10px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;
