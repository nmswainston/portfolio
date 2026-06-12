import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";
import TagBadge from "../components/TagBadge.jsx";
import { projects } from "./projectsData.js";

// Derive filter tags: all unique tags that appear in 2+ projects, sorted by frequency
const tagCounts = {};
projects.forEach((p) => p.tags?.forEach((t) => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
const FILTER_TAGS = Object.entries(tagCounts)
  .filter(([, count]) => count >= 2)
  .sort((a, b) => b[1] - a[1])
  .map(([tag]) => tag);

export default function AllWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    document.title = "All Work | Nick Swainston";
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute("content");
    meta?.setAttribute(
      "content",
      "All projects by Nick Swainston: case studies in React, Tailwind CSS, and AI automation."
    );
    return () => {
      document.title = "Nick Swainston | Portfolio";
      if (previous) meta?.setAttribute("content", previous);
    };
  }, []);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <section id="all-work" className="section" aria-labelledby="all-work-heading">
      <div className="container">
        <header className="max-w-xl mb-10">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-2">Portfolio</p>
          <h1 id="all-work-heading" className="text-2xl md:text-3xl font-semibold mb-3">
            All of my work
          </h1>
          <p className="text-sm opacity-80 leading-relaxed">
            A collection of projects and experiments that show how I think about
            layout, semantics, and front-end implementation.
          </p>
        </header>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter projects by technology">
          {["All", ...FILTER_TAGS].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              aria-pressed={activeFilter === tag}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-150 cursor-pointer
                ${activeFilter === tag
                  ? "bg-(--accent) border-(--accent) text-white"
                  : "border-(--line) opacity-70 hover:opacity-100 hover:border-(--accent)"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {filtered.map((project, index) => (
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
                    {project.featured ? "Featured project" : "Project"}
                  </p>
                  <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
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
                    <Link to={`/work/${project.slug}`} className="btn">View case study</Link>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        Live site
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="py-16 text-sm opacity-60">No projects match that filter.</p>
          )}
        </div>
      </div>
    </section>
  );
}
