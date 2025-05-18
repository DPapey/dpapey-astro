import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark =
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newDark = !prev;
      if (newDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      }
      return newDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={dark}
      className={`relative w-16 h-8 rounded-full transition-all flex items-center duration-500 ${
        dark ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <span
        className={`knob absolute bg-white w-6 h-6 rounded-full shadow transition-all duration-300 ${
          dark ? "left-8" : "left-1"
        }`}
      ></span>
    </button>
  );
}
