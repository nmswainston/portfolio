import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Left: Brand cluster */}
          <Link to="/" className="brand" aria-label="Go to homepage">
            <span className="brand-mark" aria-hidden="true">
              N
            </span>

            <span className="brand-text">
              <span className="brand-name">Nick Swainston</span>
              <span className="brand-tag">Frontend developer • AI automation</span>
            </span>
          </Link>

          {/* Right: Nav */}
          <nav className="nav" aria-label="Primary">
            <NavLink to="/work" className="nav-pill">
              Case Studies
            </NavLink>
            {isHomePage && (
              <>
                <a href="#skills-focus" className="nav-pill">
                  Skills
                </a>
                <a href="#about" className="nav-pill">
                  About
                </a>
                <a href="#contact" className="nav-pill">
                  Contact
                </a>
              </>
            )}

            {/* Social icons */}
            <a
              href="https://github.com/nmswainston"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="theme-icon-toggle"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/nmswainston"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="theme-icon-toggle"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a href="/#contact" className="btn" style={{ fontSize: "0.8rem", padding: "6px 14px" }}>
              Let&apos;s Talk
            </a>

            <ThemeToggle />
          </nav>

          {/* Hamburger Button - visible on mobile only */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="mobile-menu-toggle"
          >
            <span
              className={`mobile-menu-line ${
                isMenuOpen ? "mobile-menu-line--open-1" : ""
              }`}
            />
            <span
              className={`mobile-menu-line ${
                isMenuOpen ? "mobile-menu-line--open-2" : ""
              }`}
            />
            <span
              className={`mobile-menu-line ${
                isMenuOpen ? "mobile-menu-line--open-3" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
      >
        <nav aria-label="Primary mobile">
          <Link
            className="mobile-menu-link"
            to="/work"
            onClick={handleLinkClick}
          >
            Case Studies
          </Link>
          {isHomePage && (
            <>
              <a
                className="mobile-menu-link"
                href="#skills-focus"
                onClick={handleLinkClick}
              >
                Skills
              </a>
              <a
                className="mobile-menu-link"
                href="#about"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a
                className="mobile-menu-link"
                href="#contact"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </>
          )}
          <a
            className="mobile-menu-link"
            href="https://github.com/nmswainston"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            GitHub
          </a>
          <a
            className="mobile-menu-link"
            href="https://www.linkedin.com/in/nmswainston"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
