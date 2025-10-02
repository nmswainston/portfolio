export default function Hero() {
    return (
      <section className="container hero">
        <h1 style={{ fontSize: 40, margin: "12px 0" }}>Hi, I’m Nick Swainston.</h1>
        <p style={{ maxWidth: 720, opacity: 0.9 }}>
          I learn, build, and ship web projects. I like clean UI, tidy repos, and results you can measure.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <a className="btn" href="#projects">See projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </section>
    );
  }
  