import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";
import { projects } from "./projectsData.js";

export default function AllWork() {
  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="all-work"
      className="section"
      aria-labelledby="all-work-heading"
    >
      <div className="container">
        <header className="max-w-xl">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-2">
            Portfolio
          </p>
          <h2
            id="all-work-heading"
            className="text-xl md:text-2xl font-semibold"
          >
            All of my work
          </h2>
          <p className="mt-3 text-sm opacity-90">
            A collection of projects and experiments that show how I think about
            layout, semantics, and front end implementation.
          </p>
        </header>

        {/* Featured Projects */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold mb-6 opacity-90">Featured Projects</h3>
          <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-[repeat(3,1fr)]">
            {featuredProjects.map((project) => {
              return (
                <article
                  key={project.slug}
                  className="work-tile flex flex-col min-h-[520px] p-6 transition-all duration-200"
                  aria-label={project.title}
                >
                  <div className="group flex flex-col flex-1">
                    <Link
                      to={`/work/${project.slug}`}
                      className="flex flex-col gap-4 flex-1"
                    >
                      <div className="w-full flex justify-center mb-2">
                        <div className="w-full max-w-[520px] lg:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[680px]">
                          <DeviceMockup
                            type="laptop"
                            alt={project.title}
                            image={project.image}
                            className="w-full transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:drop-shadow-md"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col flex-1">
                        <h3 className="text-sm font-semibold group-hover:opacity-100 opacity-95 mb-1">
                          {project.title}
                        </h3>

                        {project.role && (
                          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] opacity-70">
                            {project.role}
                          </p>
                        )}

                        {project.description && (
                          <p className="mt-2 text-xs opacity-80 leading-relaxed">
                            {project.description}
                          </p>
                        )}

                        {project.stack && project.stack.length > 0 && (
                          <p className="mt-2 text-xs opacity-70">
                            {project.stack.join(" · ")}
                          </p>
                        )}
                      </div>
                    </Link>

                    {/* Actions */}
                    <div className="mt-auto pt-4 flex gap-2 border-t border-(--line)/50">
                      <Link
                        to={`/work/${project.slug}`}
                        className="link-text text-xs"
                      >
                        Case study →
                      </Link>
                      {project.liveUrl && (
                        <>
                          <span className="text-xs opacity-50">·</span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-text text-xs"
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
        </div>

        {/* Additional Projects */}
        {additionalProjects.length > 0 && (
          <div className="mt-20">
            <h3 className="text-sm font-semibold mb-6 opacity-90">Additional Projects</h3>
            <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-[repeat(3,1fr)]">
              {additionalProjects.map((project) => {
                return (
                  <article
                    key={project.slug}
                    className="work-tile flex flex-col min-h-[520px] p-6 transition-all duration-200"
                    aria-label={project.title}
                  >
                    <div className="group flex flex-col flex-1">
                      <Link
                        to={`/work/${project.slug}`}
                        className="flex flex-col gap-4 flex-1"
                      >
                        <div className="w-full flex justify-center mb-2">
                          <div className="w-full max-w-[520px] lg:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[680px]">
                            <DeviceMockup
                              type="laptop"
                              alt={project.title}
                              image={project.image}
                              className="w-full transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:drop-shadow-md"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <h3 className="text-sm font-semibold group-hover:opacity-100 opacity-95 mb-1">
                            {project.title}
                          </h3>

                          {project.role && (
                            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] opacity-70">
                              {project.role}
                            </p>
                          )}

                          {project.description && (
                            <p className="mt-2 text-xs opacity-80 leading-relaxed">
                              {project.description}
                            </p>
                          )}

                          {project.stack && project.stack.length > 0 && (
                            <p className="mt-2 text-xs opacity-70">
                              {project.stack.join(" · ")}
                            </p>
                          )}
                        </div>
                      </Link>

                      {/* Actions */}
                      <div className="mt-auto pt-4 flex gap-2 border-t border-(--line)/50">
                        <Link
                          to={`/work/${project.slug}`}
                          className="link-text text-xs"
                        >
                          Case study →
                        </Link>
                        {project.liveUrl && (
                          <>
                            <span className="text-xs opacity-50">·</span>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="link-text text-xs"
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
          </div>
        )}
      </div>
    </section>
  );
}
