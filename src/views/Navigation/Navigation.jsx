import React, { useContext } from "react";
import { Heading } from "../../design-system/primitives";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Dummy } from "../../design-system/primitives";

function Navigation() {
  const { toggleMode, isDark } = useContext(DarkModeContext);
  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      <Link to="/">Gallery</Link>
      <div onClick={() => toggleMode()}>
        {isDark ? "TOGGLE ME DARK" : "TOGGLE ME LIGHT"}
      </div>
    </div>
  );
}

export default Navigation;
