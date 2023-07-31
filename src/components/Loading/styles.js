import styled from "styled-components";
import variables from "../../styles/_variables";
import { keyframes } from "styled-components";

const lds_ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const lds_ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const lds_ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

export const Ellipsis = styled.div`
  display: inline-block;
  left: 40%;
  position: relative;
  top: 40vh;
  @media (min-width: 768px) {
    left: 47%;
  }
  div {
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background: ${variables.colors.accent};
    border-radius: 50%;
    height: 13px;
    position: absolute;
    top: 33px;
    width: 13px;
  }
  div:nth-child(1) {
    animation: ${lds_ellipsis1} 0.6s infinite;
    left: 8px;
  }
  div:nth-child(2) {
    animation: ${lds_ellipsis2} 0.6s infinite;
    left: 8px;
  }
  div:nth-child(3) {
    animation: ${lds_ellipsis2} 0.6s infinite;
    left: 32px;
  }
  div:nth-child(4) {
    animation: ${lds_ellipsis3} 0.6s infinite;
    left: 56px;
  }
`;

