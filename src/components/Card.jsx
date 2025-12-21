export default function Card({ title, children, actions }) {
    return (
      <article className="card">
        {title && <strong className="block mb-1.5">{title}</strong>}
        <div>{children}</div>
        {actions && <div className="flex gap-2 mt-2">{actions}</div>}
      </article>
    );
  }
  