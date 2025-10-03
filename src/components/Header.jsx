export default function Header() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="tag">nmswainston.com</div>
          <nav className="nav">
            <button type="button" className="btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}>Projects</button>
            <button type="button" className="btn" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior:'smooth' })}>Skills</button>
            <button type="button" className="btn" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}>About</button>
            <button type="button" className="btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}>Contact</button>
          </nav>
        </div>
      </header>
    );
  }
  