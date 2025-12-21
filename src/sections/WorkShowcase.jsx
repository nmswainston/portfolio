// src/sections/WorkShowcase.jsx

import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";

import { projects } from "./projectsData.js";

export default function WorkShowcase() {
  // Get exactly 6 featured projects in the order they appear in projectsData.js
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section
      id="hero"
      className="section container"
      aria-labelledby="hero-heading"
    >
      <div className="pt-10 md:pt-14 pb-8 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 items-start lg:min-h-[calc(100vh-140px)]">
            {/* Left column - Intro content */}
            <div className="lg:col-span-5 max-w-xl w-full">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">
                Portfolio · Frontend · Automation
              </p>

              <h1
                id="hero-heading"
                className="text-3xl md:text-[2.4rem] font-semibold leading-tight mb-4"
              >
                Hello!
                <br />
                I&apos;m Nick
                <br />
                I&apos;m a Developer.
              </h1>

              <p className="text-sm md:text-[0.95rem] leading-[1.55] opacity-90 mb-6">
                I like connecting the dots between design and implementation. I
                build clean UIs, wire them to real data and tools, and use
                automation or AI when it actually makes people&apos;s lives easier.
              </p>
            </div>

            {/* Right column - Selected Work */}
            <div className="lg:col-span-7">
              {/* Compact section header */}
              <div className="mb-6">
                <h2 id="work-heading" className="text-2xl md:text-3xl font-semibold mb-1">
                  Selected Work
                </h2>
                <div className="h-px w-12 bg-(--line) mt-2"></div>
              </div>

              {/* Project grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => {
                  return (
                    <article
                      key={project.slug}
                      className="work-tile group relative flex flex-col h-full w-full p-4 transition-transform duration-200 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-(--accent)/60 focus-within:ring-offset-0"
                      aria-label={project.title}
                    >
                      {/* Overlay link covering entire card */}
                      <Link
                        to={`/work/${project.slug}`}
                        className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none"
                        aria-label={`View ${project.title}`}
                      />

                      <div className="flex flex-col flex-1">
                        {/* Laptop mockup with standardized height */}
                        <div className="w-full aspect-16/10 flex items-center justify-center">
                          <div className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:drop-shadow-xl group-focus-within:-translate-y-1 group-focus-within:drop-shadow-xl">
                            <DeviceMockup
                              type="laptop"
                              alt={project.title}
                              image={project.image}
                              className="scale-[1.05]"
                            />
                          </div>
                        </div>

                        {/* Content section with consistent spacing */}
                        <div className="mt-4 space-y-2">
                          {/* Title */}
                          <h3 className="text-base font-semibold tracking-tight group-hover:opacity-100 opacity-95 transition-opacity">
                            {project.title}
                          </h3>

                          {/* Description */}
                          {project.description && (
                            <p className="text-xs leading-relaxed opacity-80 line-clamp-2">
                              {project.description}
                            </p>
                          )}

                          {/* Tags */}
                          {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.slice(0, 3).map((tag, idx) => (
                                <span key={idx} className="tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Buttons row - positioned above overlay */}
                        <div className="mt-auto flex items-center gap-3 pt-2 relative z-20">
                          <Link 
                            to={`/work/${project.slug}`} 
                            className="link-text text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) focus-visible:rounded"
                          >
                            Case Study →
                          </Link>
                          {project.liveUrl && (
                            <>
                              <span className="text-xs opacity-40">·</span>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-text text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) focus-visible:rounded"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Live →
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* View all work link */}
              <div className="mt-10 pb-8 md:pb-12">
                <Link to="/work" className="link-text">
                  View all work →
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
