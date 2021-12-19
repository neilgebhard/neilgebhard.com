import React from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDarkMode = theme === "dark" ? true : false;

  return (
    <DarkModeToggle
      className="float-right mb-5"
      onChange={handleChange}
      checked={isDarkMode}
      size="3rem"
    />
  );
}
