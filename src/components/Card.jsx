export default function Card({ title, children, actions, ...rest }) {
    return (
      <article className="card" {...rest}>
        {title && <strong className="block mb-1.5">{title}</strong>}
        <div>{children}</div>
        {actions && <div className="flex gap-2 mt-2">{actions}</div>}
      </article>
    );
  }
  