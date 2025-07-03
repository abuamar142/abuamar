"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("Current theme:", theme);

    // Simple toggle between light and dark only
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Switching to:", newTheme);
    setTheme(newTheme);

    // Force DOM update
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className='fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-700'
      aria-label='Toggle theme'
    >
      {theme === "light" ? (
        <Sun className='h-5 w-5 text-yellow-500' />
      ) : (
        <Moon className='h-5 w-5 text-blue-500' />
      )}
    </button>
  );
}
