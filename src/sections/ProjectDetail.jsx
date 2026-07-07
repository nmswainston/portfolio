// src/sections/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import { projects } from "./projectsData.js";
import CaseStudyLayout from "../components/CaseStudyLayout.jsx";
import CaseStudySection from "../components/CaseStudySection.jsx";
import NotFound from "./NotFound.jsx";
import usePageMeta from "../usePageMeta.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  usePageMeta({
    title: project ? `${project.title} | Nick Swainston` : "Page Not Found | Nick Swainston",
    description: project
      ? `${project.title} case study: ${project.description}`
      : undefined,
    path: `/work/${slug}`,
    // Unknown slugs are a soft 404: keep them out of the index.
    noindex: !project,
  });

  if (!project) {
    return <NotFound />;
  }

  return (
    <CaseStudyLayout project={project}>
      {project?.goal && (
        <CaseStudySection title="Goal">
          <p className="case-study-text">{project.goal}</p>
        </CaseStudySection>
      )}

      {project?.process && (
        <CaseStudySection title="Process">
          <p className="case-study-text">{project.process}</p>
        </CaseStudySection>
      )}

      {project?.result && (
        <CaseStudySection title="Result">
          <p className="case-study-text">{project.result}</p>
        </CaseStudySection>
      )}

      {/* Support for alternative field names from projectsData */}
      {project?.build && (
        <CaseStudySection title="Build">
          <p className="case-study-text">{project.build}</p>
        </CaseStudySection>
      )}
    </CaseStudyLayout>
  );
}

