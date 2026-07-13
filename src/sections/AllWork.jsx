import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import usePageMeta from "../usePageMeta.js";
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

  usePageMeta({
    title: "All Work | Nick Swainston",
    description:
      "All projects by Nick Swainston: case studies in React, Tailwind CSS, and AI automation.",
    path: "/work",
  });

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <section id="all-work" className="section" aria-labelledby="all-work-heading">
      <div className="container">
        <header className="max-w-xl mb-10" data-reveal>
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
        <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter projects by technology" data-reveal="1">
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
              data-reveal
            >
              <ProjectCard
                project={project}
                index={index}
                headingLevel="h2"
                label={project.featured ? "Featured project" : "Project"}
                eager={index === 0}
              />
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
