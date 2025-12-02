// src/sections/Projects.jsx

const projects = [
  {
    name: "Litchfield Perk – Coffee Shop Site",
    goal:
      "Give a local coffee shop a modern, mobile-friendly site that matches their brand and makes key info obvious.",
    build:
      "React + Vite, semantic layout, reusable components, and a focus on typography and mobile performance.",
    result:
      "Clear menu, hours, and location details that load quickly on phones so regulars can get what they need in seconds.",
    live: "https://litchfieldperk.example.com", // update when live
    repo: "https://github.com/nmswainston/litchfield-perk"
  },
  {
    name: "Console.Log(ic) – Studio Site",
    goal:
      "Create a focused marketing site for my freelance work that explains what I do and gives clients a clear way to start.",
    build:
      "Simple, single-page layout with clear sections for services, projects, and contact, tuned for fast load and easy updates.",
    result:
      "A home for my client work that I can point recruiters and small businesses to, with a straightforward contact path.",
    live: "https://www.consolelogic.net",
    repo: "https://github.com/nmswainston/console-logic-site"
  },
  {
    name: "Dwellpath – Residency Tracker (Concept)",
    goal:
      "Explore a product idea to help snowbirds track tax residency days without spreadsheets and manual counting.",
    build:
      "Early UX flows and a React prototype: dashboard, day counter, simple rules engine concept, and UI for explaining residency status.",
    result:
      "A working concept that shows how I think about product, constraints, and front-end architecture for a more complex tool.",
    live: "",
    repo: ""
  }
];

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
