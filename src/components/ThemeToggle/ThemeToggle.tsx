import { useContext, type JSX } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeToggle.scss";

const ThemeToggle = (): JSX.Element => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
