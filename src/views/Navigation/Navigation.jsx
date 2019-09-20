import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { Link } from "react-router-dom";
import { ImageContext } from "../../providers/ImagesProvider";
import styled from "styled-components";
import { Heading, NavLink } from "../../design-system/primitives";
import { color, border } from "styled-system";

function Navigation() {
  const { toggleMode, isDark } = useContext(DarkModeContext);
  const { searchImage } = useContext(ImageContext);

  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("");

  const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    ${color}
  `;

  return (
    <Toolbar bg={'text'}>
      <div>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <NavLink color={"negtext"} border={1} borderColor={"text"}>
            Favorites
          </NavLink>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavLink color={"negtext"}>Gallery</NavLink>
        </Link>
      </div>

      <div onClick={() => toggleMode()}>
        {isDark ? "TOGGLE ME DARK" : "TOGGLE ME LIGHT"}
      </div>
      <div>
        <input type="text" onChange={e => setQuery(e.target.value)} />
        <div onClick={() => searchImage(query)}> SEARCHHH </div>
      </div>
    </Toolbar>
  );
}

export default Navigation;
