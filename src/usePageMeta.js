import { useEffect } from "react";

const SITE_URL = "https://nmswainston.com";
const DEFAULT_TITLE = "Nick Swainston | Portfolio";
const DEFAULT_DESCRIPTION =
  "Web projects and case studies by Nick Swainston. Clean builds. Clear results.";

function setAttr(selector, attr, value) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/**
 * Keeps title, description, canonical, and social meta in sync with the
 * current route. Every routed page should call this; the build-time
 * prerender (scripts/prerender.js) bakes the same values into the static
 * HTML for crawlers that don't run JavaScript.
 */
export default function usePageMeta({ title, description, path, noindex } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path || "/"}`;

    document.title = resolvedTitle;
    setAttr('meta[name="description"]', "content", resolvedDescription);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:title"]', "content", resolvedTitle);
    setAttr('meta[property="og:description"]', "content", resolvedDescription);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[name="twitter:title"]', "content", resolvedTitle);
    setAttr('meta[name="twitter:description"]', "content", resolvedDescription);

    let robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute("content", "noindex");
    } else {
      robots?.remove();
    }
  }, [title, description, path, noindex]);
}
