import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../design-system/theme";

export const DarkModeContext = React.createContext({});

export const DarkModeProvider = ({ children }) => {
  const [isDark, toggleIsDark] = useState([]);

  useEffect(() => {
    const initialMode = localStorage.getItem("isDark");

    toggleIsDark(initialMode == "true");
  }, []);

  const toggleMode = () => {
    localStorage.setItem("isDark", !isDark);
    toggleIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleMode }}>
      <ThemeProvider theme={theme(isDark)}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};
