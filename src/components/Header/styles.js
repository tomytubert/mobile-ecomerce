import styled from "styled-components";
import variables from "../../styles/_variables";

export const Nav = styled.nav`
  background: rgba(255,255,255,0.7);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
 > div {
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      p {
        padding: 2px 0;
        font-size: 24px;
        font-family: ${variables.font.title};
        color: ${variables.colors.accent};
        font-weight: bold;
        background-image: linear-gradient(
          ${variables.colors.black},
          ${variables.colors.black}
        );
        background-size: 100% 3px;
        background-repeat: no-repeat;
        background-position: 0% 100%;
        transition: color 1s ,background-image 2s, background-position 0.5s ease-in-out;
        &:hover {
          color: ${variables.colors.black};
          background-position: 100% 0%;
          transition: color 1s, background-image 1s,background-position 0.7s ease-in-out;
          background-image: linear-gradient(
          ${variables.colors.accent},
          ${variables.colors.accent}
        );
        }
      }
    }
    svg {
      width: 24px;
    }
  }
  @media (min-width: 450px) {
    >div {
      padding: 20px 60px;
    }
  }
`;
