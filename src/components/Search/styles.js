import styled from "styled-components";
import variables from "../../styles/_variables";

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${variables.colors.accent};
  color: ${variables.colors.black};
  font-family: ${variables.font.text};
  font-size: 16px;
  min-width: 300px;
  padding: 10px 15px;
  &::placeholder {
    color: ${variables.colors.grey};
  }
`;
