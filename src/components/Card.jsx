export default function Card({ title, children, actions }) {
    return (
      <article className="card">
        {title && <strong style={{ display: 'block', marginBottom: 6 }}>{title}</strong>}
        <div>{children}</div>
        {actions && <div style={{ display:'flex', gap:8, marginTop: 8 }}>{actions}</div>}
      </article>
    );
  }
  