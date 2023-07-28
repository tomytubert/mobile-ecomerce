import styled from "styled-components";
import variables from "../../styles/_variables";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
    }
    h2 {
      font-size: 18px;
      font-family: ${variables.font.title};
      color: ${variables.colors.black};
    }
    p {
      font-size: 16px;
      font-family: ${variables.font.text};
      color: ${variables.colors.grey_shadow};
    }
  }
  p {
    font-size: 16px;
    font-family: ${variables.font.text};
    color: ${variables.colors.grey_shadow};
  }
`;
