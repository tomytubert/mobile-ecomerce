import styled from "styled-components";
import variables from "../../styles/_variables";

export const BreadCrumpsContainer = styled.div`
  background-color: ${variables.colors.white};
  border-radius: 20px;
  display: flex;
  gap: 5px;
  padding: 15px;
  a {
    font-family: ${variables.font.title};
    color: ${variables.colors.accent};
    font-size: 15px;
  }
`;
