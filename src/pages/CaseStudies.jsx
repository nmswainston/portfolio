import { Link } from "react-router-dom";
import { projects } from "../sections/projectsData.js";

export default function CaseStudies() {
  return (
    <section className="section pt-20 pb-20" aria-labelledby="case-studies-heading">
      <div className="container">
        {/* Hero Section */}
        <div className="mb-16 md:mb-24">
          <h1
            id="case-studies-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
          >
            Case Studies
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-70">—</p>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed opacity-90">
            A collection of selected design and development work,
            <br />
            with in-depth breakdowns of my process and decisions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="project-card block"
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm opacity-80 line-clamp-2">{project.goal || project.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

