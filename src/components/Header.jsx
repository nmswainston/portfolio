export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="tag">nmswainston.com</div>

        <nav className="nav" aria-label="Main">
          <a className="btn" href="#projects">
            Projects
          </a>
          <a className="btn" href="#skills">
            Skills
          </a>
          <a className="btn" href="#about">
            About
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
