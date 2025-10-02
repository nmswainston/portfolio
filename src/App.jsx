import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <main>
      {/* Header */}
      <header className="container">
        <div className="tag">nmswainston.com</div>
      </header>

      {/* Hero */}
      <section className="container hero">
        <h1 style={{ fontSize: 40, margin: "12px 0" }}>Hi, I’m Nick Swainston.</h1>
        <p style={{ maxWidth: 720, opacity: 0.9 }}>
          I learn, build, and ship web projects. I like clean UI, tidy repos, and results you can measure. I may be dumb enough to not know some things, but I'm smart enough to learn.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <a className="btn" href="#projects">See projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container">
        <h2>About</h2>
        <p style={{ maxWidth: 720, opacity: 0.9 }}>
          I’ve worked in tech and automation since 2007. Now I’m focused on web development and AI projects.
          This portfolio tracks what I’m learning and building, with honest writeups of what worked and what didn’t.
        </p>
      </section>

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Link to your business site */}
      <section className="container" style={{ marginTop: 32 }}>
        <h2>Hire me</h2>
        <p style={{ maxWidth: 720, opacity: 0.9 }}>
          For client work, visit <a href="https://www.consolelogic.net" target="_blank" rel="noreferrer">Console.Log(ic)</a>.
          Small business sites, makeovers, and automation tools.
        </p>
      </section>

      {/* Contact */}
      <Contact />
      <footer className="container" style={{ marginTop: 48, paddingBottom: 24 }}>
        <p className="footer">© {new Date().getFullYear()} Nick Swainston • Built with Vite + React • <a href="https://www.consolelogic.net" target="_blank" rel="noreferrer">Console.Log(ic)</a></p>
      </footer>
    </main>
  );
}
