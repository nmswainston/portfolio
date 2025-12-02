import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return "light";
}

// Clean outline sun (balanced, centered)
const SunSvg = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93 6.34 6.34" />
    <path d="M17.66 17.66 19.07 19.07" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66 4.93 19.07" />
    <path d="M19.07 4.93 17.66 6.34" />
  </svg>
);

// Clean outline moon (centered enough to overlap nicely)
const MoonSvg = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
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
      aria-pressed={isDark}
      className="theme-icon-toggle"
    >
      <span className="theme-icon-wrapper" aria-hidden="true">
        {/* Sun (shows in LIGHT mode) */}
        <span
          className={
            "theme-icon theme-icon--sun " +
            (!isDark ? "theme-icon--active" : "")
          }
        >
          <SunSvg />
        </span>

        {/* Moon (shows in DARK mode) */}
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
