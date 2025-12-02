import { useParams, Link } from "react-router-dom";
import { projects } from "../sections/projectsData.js";

export default function ProjectDetail() {
  const { slug } = useParams();

  // Find the project by matching the slug
  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <section className="section pt-20 pb-20">
        <div className="container">
          <h1 className="text-3xl font-semibold mb-4">Project Not Found</h1>
          <p className="mb-6 opacity-80">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/work" className="btn">
            Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section pt-20 pb-20" aria-labelledby="project-heading">
      <div className="container max-w-4xl">
        {/* Back link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 mb-8 transition-opacity"
        >
          ← Back to Case Studies
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 id="project-heading" className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            {project.name}
          </h1>
          <div className="h-px w-16 bg-[color:var(--line)] mb-6" />
        </div>

        {/* Project Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Goal</h2>
            <p className="opacity-90 leading-relaxed">{project.goal}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Build</h2>
            <p className="opacity-90 leading-relaxed">{project.build}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Result</h2>
            <p className="opacity-90 leading-relaxed">{project.result}</p>
          </div>

          {/* Links */}
          {(project.live || project.repo) && (
            <div className="pt-4 border-t border-[color:var(--line)]">
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View Live Site
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

