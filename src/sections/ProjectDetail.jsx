// src/sections/ProjectDetail.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./projectsData.js";
import CaseStudyLayout from "../components/CaseStudyLayout.jsx";
import CaseStudySection from "../components/CaseStudySection.jsx";

const DEFAULT_DESCRIPTION =
  "Web projects and case studies by Nick Swainston. Clean builds. Clear results.";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = project
      ? `${project.title} | Nick Swainston`
      : "Project | Nick Swainston";
    const meta = document.querySelector('meta[name="description"]');
    if (meta && project?.description) {
      meta.setAttribute("content", `${project.title} case study: ${project.description}`);
    }
    return () => {
      document.title = "Nick Swainston | Portfolio";
      meta?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [slug, project]);

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

