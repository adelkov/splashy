import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { color } from "styled-system";

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 74px;
    margin: 0;
    ${color}
    @media (max-width: 600px) {
      padding-top: 140px;
    }
  }
`;

export const Heading = styled.h1`
  font-family: "Londrina Shadow", cursive;
  ${color}heading
`;

const spinning = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 164px;
  height: 164px;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spinning} 1.2s infinite;
  }
`;

export const CenteredConainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
