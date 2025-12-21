import { Link } from "react-router-dom";
import DeviceMockup from "./DeviceMockup.jsx";
import { projects } from "../sections/projectsData.js";

/**
 * Shared layout component for all case study pages.
 * Provides consistent structure, spacing, and visual hierarchy.
 */
export default function CaseStudyLayout({ project, children }) {
  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <div className="case-study-container">
            <p className="text-sm opacity-70 mb-4">Work</p>
            <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
            <p className="mb-6 text-sm opacity-80">
              I could not find that project. It might have been renamed or moved.
            </p>
            <Link to="/" className="link-text inline-flex">
              Back to portfolio →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const mockupType = project.detailMockupType || "laptop";
  const hasVisual = project.image;
  const liveUrl = project.liveUrl || project.live || project.link;
  const repoUrl = project.repoUrl || project.repo;

  return (
    <main className="section">
      <article className="container">
        <div className="case-study-container">
          {/* Back Link */}
          <Link
            to="/work"
            className="link-text inline-flex items-center gap-2 mb-8 case-study-back-link"
          >
            ← Back to All Work
          </Link>

          {/* Hero Section - 2 Column Layout */}
          <header className="case-study-hero">
            <div className="case-study-hero-content">
              {/* Label */}
              <p className="case-study-label">Case study</p>

              {/* Title - Strongest element */}
              <h1 className="case-study-title">{project.title}</h1>

              {/* Role */}
              {project.role && (
                <p className="case-study-role">{project.role}</p>
              )}

              {/* Stack */}
              {project.stack && project.stack.length > 0 && (
                <p className="case-study-stack">
                  Stack: {project.stack.join(" · ")}
                </p>
              )}

              {/* Summary / Description */}
              {(project.description || project.summary) && (
                <p className="case-study-summary">
                  {project.description || project.summary}
                </p>
              )}

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Visual - Right side on desktop */}
            {hasVisual && (
              <div className="case-study-hero-visual">
                <div className="case-study-mockup-container w-full max-w-[640px] lg:max-w-[720px] xl:max-w-[820px] 2xl:max-w-[920px] mx-auto">
                  <DeviceMockup
                    type={mockupType}
                    alt={project.title}
                    image={project.image}
                    className="case-study-mockup w-full"
                  />
                </div>
              </div>
            )}
          </header>

          {/* Content Sections */}
          {children && (
            <div className="case-study-content">
              {children}
            </div>
          )}

          {/* Project Links / CTAs */}
          {(liveUrl || repoUrl) && (
            <div className="case-study-cta-section">
              <div className="h-px w-full bg-(--line) mb-6" />
              <div className="flex flex-wrap gap-4">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View live project
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    View repository
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project Navigation - Prev/Next */}
          <nav className="case-study-project-nav" aria-label="Project navigation">
            {(() => {
              const currentIndex = projects.findIndex((p) => p.slug === project.slug);
              const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
              const nextProject =
                currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

              return (
                <>
                  {prevProject ? (
                    <Link
                      to={`/work/${prevProject.slug}`}
                      className="case-study-nav-link case-study-nav-link--prev"
                    >
                      <span className="case-study-nav-arrow">←</span>
                      <span className="case-study-nav-label">
                        <span className="case-study-nav-label-text">Previous</span>
                        <span className="case-study-nav-project-name">{prevProject.title}</span>
                      </span>
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  {nextProject ? (
                    <Link
                      to={`/work/${nextProject.slug}`}
                      className="case-study-nav-link case-study-nav-link--next"
                    >
                      <span className="case-study-nav-arrow">→</span>
                      <span className="case-study-nav-label">
                        <span className="case-study-nav-label-text">Next</span>
                        <span className="case-study-nav-project-name">{nextProject.title}</span>
                      </span>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </>
              );
            })()}
          </nav>
        </div>
      </article>
    </main>
  );
}
