// src/sections/Projects.jsx
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container section"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-title">
        Projects
      </h2>

      <p className="text-sm opacity-80 max-w-xl mb-4">
        A mix of shipped client work and product concepts that show how I
        approach UI, structure, and real-world constraints.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>

            <p>
              <strong>Goal:</strong> {project.goal}
            </p>
            <p>
              <strong>Build:</strong> {project.build}
            </p>
            <p>
              <strong>Result:</strong> {project.result}
            </p>

            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live site
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
