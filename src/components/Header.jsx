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

            {/* Theme toggle button stays here */}
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
        </nav>
      </div>
    </header>
  );
}
