export default function Section({ id, title, hint, children }) {
    return (
      <section id={id} className="container" style={{ marginTop: 32 }}>
        {title && <h2 className="section-title">{title}</h2>}
        {hint && <p className="hint">{hint}</p>}
        {children}
      </section>
    );
  }
  