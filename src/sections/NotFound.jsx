import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Nick Swainston";
    return () => { document.title = "Nick Swainston | Portfolio"; };
  }, []);

  return (
    <main className="section">
      <div className="container">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">404</p>
        <h1 className="text-3xl font-semibold mb-4">Page not found</h1>
        <p className="copy opacity-80 mb-6">
          That page doesn&apos;t exist. It may have been moved or the URL might be wrong.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="btn">Go home</Link>
          <Link to="/work" className="btn btn-ghost">View my work</Link>
        </div>
      </div>
    </main>
  );
}
