import { useEffect } from "react";

/**
 * Global scroll-reveal engine. Any element with a `data-reveal` attribute
 * rises into view the first time it enters the viewport.
 *
 * - Stagger a sibling group by setting `--reveal-step` inline (0, 1, 2, ...);
 *   the CSS computes the delay (80ms per step) via calc().
 * - Elements are hidden only after the `js-reveal` class lands on <html>,
 *   so prerendered HTML stays fully visible for crawlers and no-JS visitors.
 * - Reveals happen once per element (unobserved after firing), and the
 *   whole system disables itself for prefers-reduced-motion users.
 * - A MutationObserver picks up elements added after mount (route changes,
 *   filtered lists), which also gives filter switches a soft fade-in.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // never hide anything; content renders static
    }
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const observeWithin = (node) => {
      if (node.nodeType !== 1) return;
      if (node.matches?.("[data-reveal]:not(.revealed)")) io.observe(node);
      node
        .querySelectorAll?.("[data-reveal]:not(.revealed)")
        .forEach((el) => io.observe(el));
    };

    observeWithin(document.body);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(observeWithin);
      }
    });
    mo.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mo.disconnect();
      document.documentElement.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
