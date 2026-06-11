import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";
import TagBadge from "../components/TagBadge.jsx";
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
            <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">
              Portfolio · Frontend · Automation
            </p>
            <h1
              id="hero-heading"
              className="text-3xl md:text-[2.4rem] font-semibold leading-tight mb-4"
            >
              Hi, I&apos;m Nick.<br />I build clean frontends<br />and practical automation.
            </h1>
            <p className="text-sm md:text-[0.95rem] leading-[1.55] opacity-90 mb-6 max-w-md">
              I like connecting the dots between design and implementation. I build
              clean UIs, wire them to real data and tools, and use automation or AI
              when it actually makes people&apos;s lives easier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/work" className="btn">View My Work →</Link>
              <a href="/resume.pdf" download="Nicholas_Swainston_Resume.pdf" className="btn">
                Download Resume
              </a>
            </div>
          </div>

          {/* Tech carousel */}
          <div>
            <div className="h-px w-full bg-(--line) mb-5" />
            <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-40 mb-5">
              Working with modern technologies
            </p>
            <TechScroller />
          </div>
        </div>

        {/* Right column — terminal */}
        <div className="flex justify-center">
          <TerminalCard />
        </div>
      </div>

      {/* Selected Work */}
      <div>
        <div className="flex items-center justify-between mb-2">
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
            <article
              key={project.slug}
              className="rounded-2xl border border-(--line) bg-(--card) p-8 lg:p-12"
              style={{ boxShadow: "var(--shadow)" }}
              aria-label={project.title}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* Mockup — alternates sides on desktop */}
                <div className={`flex items-start justify-center ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="w-full max-w-lg">
                    <DeviceMockup
                      type="laptop"
                      alt={project.title}
                      image={project.image}
                      fullWidth
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60 mb-2">
                    Featured project
                  </p>
                  <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                  {project.role && (
                    <p className="text-sm opacity-60 mb-4">{project.role}</p>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, i) => <TagBadge key={i} tag={tag} />)}
                    </div>
                  )}

                  {/* Teaser only: the full Goal/Process/Result lives on the case study page */}
                  {project.description && (
                    <p className="text-[0.9375rem] leading-relaxed opacity-85 mb-8">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Link to={`/work/${project.slug}`} className="btn">
                      View case study
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                      >
                        Live site
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-(--line) flex">
          <Link to="/work" className="btn">
            View all work →
          </Link>
        </div>
      </div>

    </section>
  );
}
