import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { Link } from "react-router-dom";
import { ImageContext } from "../../providers/ImagesProvider";

function Navigation() {
  const { toggleMode, isDark } = useContext(DarkModeContext);
  const { searchImage } = useContext(ImageContext);

  const [query, setQuery] = useState("");

  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      <Link to="/">Gallery</Link>
      <div onClick={() => toggleMode()}>
        {isDark ? "TOGGLE ME DARK" : "TOGGLE ME LIGHT"}
      </div>
        <input type="text" onChange={e => setQuery(e.target.value)} />
        <div onClick={()=> searchImage(query)}> SEARCHHH </div>
    </div>
  );
}

export default Navigation;
