import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

import ModeSwitcher from "./ModeSwitcher";
import Search from "./Search";
import Tabs from "./Tabs";

function Navigation() {
  return (
    <Toolbar bg={"text"}>
      <Tabs />
      <ModeSwitcher />
      <Search />
    </Toolbar>
  );
}

export default Navigation;

const Toolbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  ${color}
  @media (max-width: 600px) {
    flex-direction: column;
    height: 120px;
  }
`;
