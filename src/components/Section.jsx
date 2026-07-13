// src/components/Section.jsx

export default function Section({ id, title, hint, children }) {
  const headingId = title && id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className="container section"
      {...(headingId ? { "aria-labelledby": headingId } : {})}
    >
      {title && (
        <h2 id={headingId} className="section-title" data-reveal>
          {title}
        </h2>
      )}
      {hint && <p className="hint" data-reveal style={{ "--reveal-step": 1 }}>{hint}</p>}
      {children}
    </section>
  );
}
  