"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
