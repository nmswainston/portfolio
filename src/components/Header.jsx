import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="site-header border-b border-[color:var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity">
          <p className="tag">nmswainston.com</p>
          {/* was <h1> – keep same look, just not the main heading */}
          <p className="m-0 text-sm font-semibold">Nick Swainston</p>
          <p className="m-0 opacity-80 text-[0.7rem]">
            Frontend developer · AI &amp; automation
          </p>
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="Main">
            <ul className="nav">
              <li>
                <Link className="header-link" to="/work">
                  Case Studies
                </Link>
              </li>
              {isHomePage && (
                <>
                  <li>
                    <a className="header-link" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="header-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="header-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
