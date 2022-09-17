import { useEffect, useState } from "react";

export default function useDarkMode() {
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : systemPreference);
  const currentTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, currentTheme]);

  return [currentTheme, setTheme];
}
