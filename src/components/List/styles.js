import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const List = styled.ul`
  animation: ${fadeIn} 2.5s;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
  width: 100%;
`;
