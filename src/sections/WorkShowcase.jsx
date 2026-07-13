import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import TerminalCard from "../components/TerminalCard.jsx";
import TechScroller from "../components/TechScroller.jsx";
import { projects } from "./projectsData.js";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function WorkShowcase() {
  return (
    <section id="hero" className="section container" aria-labelledby="hero-heading">

      {/* Hero — full viewport height, vertically centered */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:min-h-[calc(100vh-64px)]"
      >
        {/* Left column */}
        <div className="flex flex-col gap-10 py-12 lg:py-0">
          {/* Text + CTAs */}
          <div>
            <p className="availability-badge mb-4 hero-rise">
              <span className="status-dot" aria-hidden="true" />
              Open to opportunities
            </p>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3 hero-rise" style={{ "--rise-step": 1 }}>
              Portfolio · Frontend · Automation
            </p>
            <h1
              id="hero-heading"
              className="text-3xl md:text-[2.4rem] font-semibold leading-tight mb-4 hero-rise"
              style={{ "--rise-step": 2 }}
            >
              Hi, I&apos;m Nick.<br />I build clean frontends<br />and practical automation.
            </h1>
            <p className="text-sm md:text-[0.95rem] leading-[1.55] opacity-90 mb-6 max-w-md hero-rise" style={{ "--rise-step": 3 }}>
              I like connecting the dots between design and implementation. I build
              clean UIs, wire them to real data and tools, and use automation or AI
              when it actually makes people&apos;s lives easier.
            </p>
            <div className="flex flex-wrap gap-3 hero-rise" style={{ "--rise-step": 4 }}>
              <Link to="/work" className="btn">View My Work →</Link>
              <a href="/resume.pdf" download="Nicholas_Swainston_Resume.pdf" className="btn">
                Download Resume
              </a>
            </div>
          </div>

          {/* Tech carousel */}
          <div className="hero-rise" style={{ "--rise-step": 5 }}>
            <div className="h-px w-full bg-(--line) mb-5" />
            <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-40 mb-5">
              Working with modern technologies
            </p>
            <TechScroller />
          </div>
        </div>

        {/* Right column — terminal (rises alongside the heading) */}
        <div className="flex justify-center hero-rise" style={{ "--rise-step": 2 }}>
          <TerminalCard />
        </div>
      </div>

      {/* Selected Work */}
      <div>
        <div className="flex items-center justify-between mb-2" data-reveal>
          <h2 id="work-heading" className="text-2xl md:text-3xl font-semibold">
            Selected Work
          </h2>
          <Link to="/work" className="btn" style={{ fontSize: "0.8rem", padding: "6px 14px" }}>
            View all →
          </Link>
        </div>
        <div className="h-px w-12 bg-(--line) mb-12" />

        <div className="flex flex-col gap-6">
          {featuredProjects.map((project, index) => (
            // Reveal lives on the wrapper so its transform doesn't fight
            // the .work-card hover lift on the article itself
            <div key={project.slug} data-reveal>
              <article
                className="work-card rounded-2xl border border-(--line) bg-(--card) p-8 lg:p-12"
                style={{ boxShadow: "var(--shadow)" }}
                aria-label={project.title}
              >
                <ProjectCard project={project} index={index} headingLevel="h3" />
              </article>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-(--line) flex" data-reveal>
          <Link to="/work" className="btn">
            View all work →
          </Link>
        </div>
      </div>

    </section>
  );
}
