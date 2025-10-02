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
      <section id="skills" className="container" style={{ marginTop: 32 }}>
        <h2>Skills</h2>
        <div className="grid" style={{ marginTop: 16 }}>
          <div className="card"><strong>Frontend</strong><p>HTML, CSS, JavaScript, React</p></div>
          <div className="card"><strong>Backend</strong><p>Node.js, REST APIs, basic databases</p></div>
          <div className="card"><strong>Other</strong><p>Automation tools, AV systems, deployment on Netlify</p></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container" style={{ marginTop: 32 }}>
        <h2>Projects</h2>
        <p className="footer" style={{ marginTop: 4 }}>
          Case studies use a simple format: Goal → Build → Result → Link.
        </p>

        <div className="grid" style={{ marginTop: 16 }}>
          {/* Example case study card */}
          <article className="card">
            <strong>Example Project</strong>
            <p><em>Goal:</em> Make a small site load fast and feel modern.</p>
            <p><em>Build:</em> Vite + React, image optimization, simpler nav.</p>
            <p><em>Result:</em> First contentful paint from 2.8s to 1.4s. Cleaner CTA flow.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
              <a className="btn" href="#" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>

          {/* Add more cards by copy pasting this block */}
          {/* 
          <article className="card">
            <strong>Project Name</strong>
            <p><em>Goal:</em> ...</p>
            <p><em>Build:</em> ...</p>
            <p><em>Result:</em> ...</p>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
              <a className="btn" href="#" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
          */}
        </div>
      </section>

      {/* Link to your business site */}
      <section className="container" style={{ marginTop: 32 }}>
        <h2>Hire me</h2>
        <p style={{ maxWidth: 720, opacity: 0.9 }}>
          For client work, visit <a href="https://www.consolelog.com" target="_blank" rel="noreferrer">Console.Log(ic)</a>.
          Small business sites, makeovers, and automation tools.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="container" style={{ marginTop: 32 }}>
        <h2>Contact</h2>
        <form name="contact" method="POST" data-netlify="true" className="card">
          <input type="hidden" name="form-name" value="contact" />
          <label>Name<input name="name" required style={{ width: "100%", marginTop: 6, marginBottom: 12 }} /></label>
          <label>Email<input name="email" type="email" required style={{ width: "100%", marginTop: 6, marginBottom: 12 }} /></label>
          <label>Message<textarea name="message" rows="5" required style={{ width: "100%", marginTop: 6, marginBottom: 12 }} /></label>
          <button className="btn" type="submit">Send</button>
        </form>
        <p className="footer">Or email me at <a href="mailto:hi@nmswainston.com">hi@nmswainston.com</a></p>
      </section>
    </main>
  );
}
