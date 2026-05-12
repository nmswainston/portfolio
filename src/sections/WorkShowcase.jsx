import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";
import TagBadge from "../components/TagBadge.jsx";
import { projects } from "./projectsData.js";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function WorkShowcase() {
  return (
    <section id="hero" className="section container" aria-labelledby="hero-heading">

      {/* Intro */}
      <div className="pt-10 md:pt-14 pb-12 md:pb-16 max-w-2xl">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">
          Portfolio · Frontend · Automation
        </p>
        <h1
          id="hero-heading"
          className="text-3xl md:text-[2.4rem] font-semibold leading-tight mb-4"
        >
          Hello!<br />I&apos;m Nick<br />I&apos;m a Developer.
        </h1>
        <p className="text-sm md:text-[0.95rem] leading-[1.55] opacity-90 mb-6 max-w-xl">
          I like connecting the dots between design and implementation. I build
          clean UIs, wire them to real data and tools, and use automation or AI
          when it actually makes people&apos;s lives easier.
        </p>
        <a href="/resume.pdf" download="Nicholas_Swainston_Resume.pdf" className="btn self-start">
          Download résumé
        </a>
      </div>

      {/* Selected Work */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 id="work-heading" className="text-2xl md:text-3xl font-semibold">
            Selected Work
          </h2>
          <Link to="/work" className="link-text text-sm">
            View all →
          </Link>
        </div>
        <div className="h-px w-12 bg-(--line) mb-12" />

        <div className="flex flex-col">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="py-16 border-t border-(--line) first:border-t-0 first:pt-0"
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

                  {project.description && (
                    <p className="text-[0.9375rem] leading-relaxed opacity-85 mb-6">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-col gap-5 mb-8">
                    {project.goal && (
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold opacity-55 mb-1.5">Goal</p>
                        <p className="text-sm leading-relaxed opacity-85">{project.goal}</p>
                      </div>
                    )}
                    {project.process && (
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold opacity-55 mb-1.5">Process</p>
                        <p className="text-sm leading-relaxed opacity-85">{project.process}</p>
                      </div>
                    )}
                    {project.result && (
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold opacity-55 mb-1.5">Result</p>
                        <p className="text-sm leading-relaxed opacity-85">{project.result}</p>
                      </div>
                    )}
                  </div>

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

        <div className="mt-12 pb-8 border-t border-(--line) pt-8">
          <Link to="/work" className="link-text">
            View all work →
          </Link>
        </div>
      </div>

    </section>
  );
}
