import styled from "styled-components";
import variables from "../../styles/_variables";

export const CartContainer = styled.div`
  position: relative;
  span {
    align-items: center;
    background: ${variables.colors.accent};
    border-radius: 100%;
    bottom: 10px;
    color: white;
    display: flex;
    font-family: ${variables.font.title};
    font-size: 10px;
    height: 15px;
    justify-content: center;
    position: absolute;
    right: 10px;
    width: 15px;
  }
`;
