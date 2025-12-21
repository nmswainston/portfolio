// src/sections/ProjectDetail.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./projectsData.js";
import CaseStudyLayout from "../components/CaseStudyLayout.jsx";
import CaseStudySection from "../components/CaseStudySection.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top when case study route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

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

