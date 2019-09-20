import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { Link } from "react-router-dom";
import { ImageContext } from "../../providers/ImagesProvider";
import styled from "styled-components";
import { Heading, NavLink } from "../../design-system/primitives";
import { color, border } from "styled-system";
import Search from '../../components/Search'

function Navigation() {
  const { toggleMode, isDark } = useContext(DarkModeContext);

  const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 12px;
    ${color}
  `;



  return (
    <Toolbar bg={"text"}>
      <div>
        <NavLink color={"negtext"} border={1} borderColor={"text"}>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", height: "100%" }}
          >
            Favorites
          </Link>
        </NavLink>

        <Link to="/" style={{ textDecoration: "none" }}>
          <NavLink color={"negtext"}>Gallery</NavLink>
        </Link>
      </div>
      <div>
       <Search />
      </div>
      <div onClick={() => toggleMode()}>
        {isDark ? "TOGGLE ME DARK" : "TOGGLE ME LIGHT"}
      </div>
    </Toolbar>
  );
}

export default Navigation;
