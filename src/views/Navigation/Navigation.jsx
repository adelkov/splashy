import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { Link } from "react-router-dom";
import { ImageContext } from "../../providers/ImagesProvider";
import styled, { css } from "styled-components";
import { color, border } from "styled-system";
import Search from "../../components/Search";

function Navigation() {
  const { toggleMode, isDark } = useContext(DarkModeContext);

  const initialTabs = [
    { url: "/", title: "Gallery", selected: true },
    { url: "/favorites", title: "Favorites", selected: false }
  ];
  const [tabs, setTabs] = useState(initialTabs);

  const selectTab = url => {
    const updatedTabs = tabs.map(tab =>
      tab.url === url ? { ...tab, selected: true } : { ...tab, selected: false }
    );
    setTabs(updatedTabs)
  };

  const Toolbar = styled.div`
    overflow: hidden;
    ${color}
  `;

  const NavLink = styled.div`
    font-family: "Luckiest Guy", cursive;
    float: left;
    display: block;
    ${color}
    text-align: center;
    text-decoration: none;
    font-size: 26px;
    padding: 30px 12px 20px 12px;
    &:hover {
      opacity: .4;
    }
    ${props =>
      props.selected &&
      css`
        background: palevioletred;
      `}
  `;

  return (
    <Toolbar bg={"text"}>
      <div>
        {tabs.map(tab => (
          <Link
            to={tab.url}
            style={{ textDecoration: "none" }}
            onClick={() => selectTab(tab.url)}
          >
            <NavLink color={"negtext"} selected={tab.selected}>
              {tab.title}
            </NavLink>
          </Link>
        ))}
      </div>
      <Search />
      <div onClick={() => toggleMode()}>
        {isDark ? "TOGGLE ME DARK" : "TOGGLE ME LIGHT"}
      </div>
    </Toolbar>
  );
}

export default Navigation;
