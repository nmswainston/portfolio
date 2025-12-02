import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container flex items-center justify-between gap-4 py-3">
        <div className="flex flex-col gap-0.5">
          <p className="tag">nmswainston.com</p>
          <h1 className="m-0 text-sm font-semibold">Nick Swainston</h1>
          <p className="m-0 opacity-80 text-[0.7rem]">
            Frontend developer · AI & automation
          </p>
        </div>

        <div className="flex items-center gap-3">
          <nav aria-label="Main">
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <a className="header-link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="header-link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="header-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="header-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
