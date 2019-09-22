import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";

import { CustomThemeContext } from "../../providers/CustomThemeProvider";

function ModeSwitcher() {
  const { toggleMode, isDark } = useContext(CustomThemeContext);

  return (
    <NightModeIcon onClick={() => toggleMode()}>
      {isDark ? (
        <FontAwesomeIcon icon={faMoon} color={"#303030"} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faSun} color={"#dcdcdc"} size="2x" />
      )}
    </NightModeIcon>
  );
}

export default ModeSwitcher;

const NightModeIcon = styled.div`
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`;
