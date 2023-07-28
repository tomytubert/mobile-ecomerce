import styled from "styled-components";
import variables from "../../styles/_variables";

export const CartContainer = styled.div`
  position: relative;
  span {
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: ${variables.colors.accent};
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    font-family: ${variables.font.title};
    color: white;
  }
`;
