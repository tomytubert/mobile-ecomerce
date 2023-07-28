import styled from "styled-components";
import variables from "../../styles/_variables";

export const BreadCrumpsContainer = styled.div`
  border-radius: 20px;
  padding: 15px;
  background-color: ${variables.colors.white};
  display: flex;
  gap: 5px;
  a {
    font-family: ${variables.font.title};
    color: ${variables.colors.accent};
    font-size: 15px;
  }
`;
