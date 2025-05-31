import { useState, useEffect } from "react";
import styles from "./taskList.module.css"

export default function switchTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); 
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return(
    <button className={styles.btn} onClick={toggleTheme}>Switch Theme</button>
  );
}