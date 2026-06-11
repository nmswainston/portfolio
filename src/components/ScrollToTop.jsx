import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position on route change. Without this, React Router keeps
// the previous page's scroll offset (e.g. bottom of home → middle of /work).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let in-page anchors handle their own scrolling
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
