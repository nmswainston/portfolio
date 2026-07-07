import { Link } from "react-router-dom";
import DeviceMockup from "./DeviceMockup.jsx";
import TagBadge from "./TagBadge.jsx";

/**
 * Shared card body for project listings (homepage showcase and /work).
 * The caller owns the <article> wrapper. Heading level varies by page
 * hierarchy: h3 under the homepage's "Selected Work" h2, h2 under the
 * /work page's h1.
 */
export default function ProjectCard({
  project,
  index,
  headingLevel = "h3",
  label = "Featured project",
  eager = false,
}) {
  const Heading = headingLevel;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* Mockup — alternates sides on desktop */}
      <div className={`flex items-start justify-center ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
        <div className="w-full max-w-lg">
          <DeviceMockup
            type="laptop"
            alt={project.title}
            image={project.image}
            fullWidth
            eager={eager}
          />
        </div>
      </div>

      {/* Content */}
      <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
        <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60 mb-2">
          {label}
        </p>
        <Heading className="text-2xl font-semibold mb-1">{project.title}</Heading>
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
  );
}
