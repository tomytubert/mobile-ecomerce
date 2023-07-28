import styled from "styled-components";
import variables from "../../styles/_variables";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${variables.colors.white};
  border-radius: 20px;
  padding-bottom: 15px;
  img {
    width: 100%;
    object-fit: contain;
    height: 300px;
    border-radius: 20px 20px 0 0;
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
      white-space: nowrap;
    }
  }
  > div {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
