export default function Header() {
    return (
      <header className="container">
        <div className="tag">nmswainston.com</div>
        <nav style={{ marginTop: 12, display:'flex', gap:14 }}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  }
  