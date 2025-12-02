// src/sections/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData.js";
import DeviceMockup from "../components/DeviceMockup.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="section">
        <div className="container py-16">
          <p className="text-sm opacity-70 mb-4">Work</p>
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <p className="mb-6 text-sm opacity-80">
            I could not find that project. It might have been renamed or moved.
          </p>
          <Link
            to="/"
            className="inline-flex text-sm font-medium underline opacity-90 hover:opacity-100"
          >
            Back to portfolio →
          </Link>
        </div>
      </main>
    );
  }

  const mockupType = project.detailMockupType || "laptop";

  return (
    <main className="section">
      <article className="container py-16 max-w-4xl">
        <p className="text-[0.7rem] uppercase tracking-[0.25em] opacity-70 mb-3">
          Case study
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">
          {project.name}
        </h1>

        {project.role && (
          <p className="text-[0.8rem] uppercase tracking-[0.16em] opacity-70 mb-4">
            {project.role}
          </p>
        )}

        {project.stack && project.stack.length > 0 && (
          <p className="text-xs opacity-70 mb-6">
            Stack: {project.stack.join(" · ")}
          </p>
        )}

        <div className="mb-10 flex justify-center">
          <DeviceMockup
            type={mockupType}
            alt={project.name}
            className="scale-[1.2]"
          />
        </div>

        {project.description && (
          <p className="text-sm leading-relaxed opacity-90 mb-6">
            {project.description}
          </p>
        )}

        {project.goal && (
          <>
            <h2 className="mt-6 mb-2 text-sm font-semibold">Goal</h2>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              {project.goal}
            </p>
          </>
        )}

        {project.process && (
          <>
            <h2 className="mt-6 mb-2 text-sm font-semibold">Process</h2>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              {project.process}
            </p>
          </>
        )}

        {project.result && (
          <>
            <h2 className="mt-6 mb-2 text-sm font-semibold">Result</h2>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              {project.result}
            </p>
          </>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-medium underline opacity-90 hover:opacity-100 mt-4"
          >
            View live project →
          </a>
        )}

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex text-sm font-medium underline opacity-80 hover:opacity-100"
          >
            ← Back to selected work
          </Link>
        </div>
      </article>
    </main>
  );
}

