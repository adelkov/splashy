import React, { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { Link } from "react-router-dom";

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
