import styled, { keyframes } from "styled-components";
import { color } from "styled-system";

import { createGlobalStyle } from "styled-components";

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

export const ImageCard = styled.div`
  cursor: pointer;
  height: fit-content;
  margin-right: 6%;
  margin-bottom: 6%;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-left: 6%;
  }
  position: relative;
`;

export const Favo = styled.div`
  font-family: "Londrina Shadow", cursive;
  font-size: 60px;
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${ImageCard}:hover & {
    color: white;
    opacity: 1;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  transition: transform 400ms ease-out;
  vertical-align: middle;
  width: 100%;
`;

export const Column = styled.div`
  flex: 33%;
  max-width: 33%;
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1%;
  @media screen and (max-width: 600px) {
    padding-left: 0%;
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
