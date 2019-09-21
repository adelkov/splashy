import theme from "../design-system/theme";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export const CustomThemeContext = React.createContext({});

export const CustomThemeProvider = ({ children }) => {
  const [isDark, toggleIsDark] = useState([]);

  useEffect(() => {
    const initialMode = localStorage.getItem("isDark");

    toggleIsDark(initialMode === "true");
  }, []);

  const toggleMode = () => {
    localStorage.setItem("isDark", !isDark);
    toggleIsDark(!isDark);
  };

  return (
    <CustomThemeContext.Provider value={{ isDark, toggleMode }}>
      <ThemeProvider theme={theme(isDark)}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
