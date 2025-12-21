/**
 * Reusable section component for case study content sections.
 * Ensures consistent spacing and hierarchy.
 */
export default function CaseStudySection({ title, children, className = "" }) {
  if (!children) return null;

  return (
    <section className={`case-study-section ${className}`}>
      <h2 className="case-study-section-title">{title}</h2>
      <div className="case-study-section-content">{children}</div>
    </section>
  );
}
