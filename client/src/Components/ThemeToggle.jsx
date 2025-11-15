import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; // optional icons (from lucide-react)

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 
                 bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--text)]"
    >
      {theme === "light" ? (
        <>
          <Moon size={18} />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Sun size={18} />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
