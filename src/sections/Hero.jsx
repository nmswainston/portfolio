export default function Hero() {
  return (
    <section
      id="hero"
      className="hero border-b border-[color:var(--line)]"
      aria-labelledby="hero-heading"
    >
      <div className="container py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)] mb-3">
          Portfolio · Frontend · Automation
        </p>

        <h1
          id="hero-heading"
          className="hero-title text-3xl sm:text-4xl md:text-[2.6rem] font-semibold mb-4"
        >
          I build clean UIs and automate the boring parts.
        </h1>

        <p className="hero-subtitle max-w-xl text-sm sm:text-base opacity-90 mb-6">
          I’m Nick Swainston, a front-end developer who ships practical web
          projects and uses AI and automation when it actually helps people get
          things done faster.
        </p>

        <div className="hero-actions flex flex-wrap items-center gap-3">
          <a className="btn" href="#projects">
            View my projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
