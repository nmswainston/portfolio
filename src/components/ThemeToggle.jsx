import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const SunSvg = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.3v2.4m0 15v2.4m9.3-9.3h-2.4M4.3 12H2m14.8-7.8l-1.7 1.7M7.7 19.8L6 21.5M6 5.8L7.7 7.5m9.1 9.1l1.7 1.7" />
  </svg>
);

const MoonSvg = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    {/* Standard lucide-style crescent, clean outline */}
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-icon-toggle"
    >
      <span className="theme-icon-wrapper" aria-hidden="true">
        {/* Sun (active in light mode) */}
        <span
          className={
            "theme-icon theme-icon--sun " +
            (!isDark ? "theme-icon--active" : "")
          }
        >
          <SunSvg />
        </span>

        {/* Moon (active in dark mode) */}
        <span
          className={
            "theme-icon theme-icon--moon " +
            (isDark ? "theme-icon--active" : "")
          }
        >
          <MoonSvg />
        </span>
      </span>
    </button>
  );
}
