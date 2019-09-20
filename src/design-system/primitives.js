import styled from "styled-components";
import { color, border } from "styled-system";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    ${color}
  }
`;

export const NavLink = styled.div`
  font-family: "Saira Stencil One", cursive;
  display: inline;
  padding: 14px;
  ${color}
  &:hover {
    background-color: yellow;
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
  z-index: 100;
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
