// src/sections/WorkShowcase.jsx
import DeviceMockup from "../components/DeviceMockup.jsx";
import { projects } from "./projectsData.js"; // uses shared projects data

export default function WorkShowcase() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="work-heading"
    >
      <div className="container lg:grid lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:gap-16">
        {/* Left intro column */}
        <div className="mb-10 lg:mb-0 lg:sticky lg:top-20 self-start">
          <p className="text-xs uppercase tracking-[0.25em] opacity-70 mb-2">
            Portfolio · Frontend · Automation
          </p>
          <h1
            id="work-heading"
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            Hello! <br />
            I&apos;m Nick. <br />
            I&apos;m a Developer.
          </h1>
          <p className="text-sm md:text-base max-w-xs opacity-90 mb-4">
            I like connecting the dots between design and implementation. I
            build clean UIs, hook them up to real data and tools, and use
            automation/AI when it actually makes people&apos;s lives easier.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] mt-6 opacity-60">
            Selected work
          </p>
          <hr className="mt-2 border-[color:var(--line)] max-w-[120px]" />
        </div>

        {/* Right project grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            // For now: first two as laptops, third as phone, rest laptops.
            const mockupType = index === 2 ? "phone" : "laptop";

            return (
              <article
                key={project.name}
                className="group"
                aria-label={project.name}
              >
                <DeviceMockup
                  type={mockupType}
                  alt={project.name}
                  // no image prop yet – shows placeholder gradient
                />

                <h2 className="text-sm font-semibold mt-3 mb-1">
                  {project.name}
                </h2>

                <p className="text-xs opacity-80 mb-2">
                  {project.goal}
                </p>

                <div className="flex flex-wrap gap-3 text-[0.76rem] opacity-90">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[color:var(--accent)] hover:underline"
                    >
                      View project
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[color:var(--accent)] hover:underline"
                    >
                      View code
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

