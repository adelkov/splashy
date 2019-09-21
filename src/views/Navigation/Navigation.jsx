import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import styled, { css } from "styled-components";
import { color } from "styled-system";

import Search from "../../components/Search";
import { CustomThemeContext } from "../../providers/CustomThemeProvider";

function Navigation() {
  useEffect(() => {
    setTabs(
      tabs.map(tab => (
        tab.url === window.location.pathname
          ? { ...tab, selected: true }
          : { ...tab, selected: false }
      ))
    );
  }, []);

  const { toggleMode, isDark } = useContext(CustomThemeContext);

  const initialTabs = [
    { url: "/", title: "Gallery", selected: true },
    { url: "/favorites", title: "Favorites", selected: false }
  ];
  const [tabs, setTabs] = useState(initialTabs);

  const selectTab = (url, history) => {
    history.push(url);
    const updatedTabs = tabs.map(tab =>
      tab.url === url ? { ...tab, selected: true } : { ...tab, selected: false }
    );
    setTabs(updatedTabs);
  };

  return (
    <Toolbar bg={"text"}>
      <div>
        {tabs.map(tab => (
          <Route
            key={tab.url + tab.title}
            render={({ history }) => (
              <NavLink
                color={"negtext"}
                selected={tab.selected}
                onClick={() => selectTab(tab.url, history)}
              >
                {tab.title}
              </NavLink>
            )}
          />
        ))}
      </div>
      <div onClick={() => toggleMode()}>
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} color={"#303030"} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faSun} color={"#dcdcdc"} size="2x" />
        )}
      </div>
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
`;

const NavLink = styled.div`
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  // font-family: "Luckiest Guy", cursive;
  display: inline;
  font-size: 24px;
  padding-right: 20px;
  padding-left: 20px;
  &:hover {
    opacity: 0.4;
  }
  ${color}
  ${props =>
    props.selected &&
    css`
      color: palevioletred;
    `}
`;
