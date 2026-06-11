const TECHS = [
  { name: "React",        icon: "https://cdn.simpleicons.org/react" },
  { name: "TypeScript",   icon: "https://cdn.simpleicons.org/typescript" },
  { name: "JavaScript",   icon: "https://cdn.simpleicons.org/javascript" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Vite",         icon: "https://cdn.simpleicons.org/vite" },
  // Next.js brand color is black; .tech-icon-adaptive inverts it in dark mode
  { name: "Next.js",      icon: "https://cdn.simpleicons.org/nextdotjs", adaptive: true },
  { name: "HTML5",        icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3",         icon: "https://cdn.simpleicons.org/css" },
  { name: "Git",          icon: "https://cdn.simpleicons.org/git" },
  { name: "Netlify",      icon: "https://cdn.simpleicons.org/netlify" },
  { name: "Firebase",     icon: "https://cdn.simpleicons.org/firebase" },
];

export default function TechScroller() {
  return (
    <div className="overflow-hidden w-full" aria-label="Technologies I work with">
      <div className="marquee-track">
        {TECHS.map((t) => (
          <img
            key={t.name}
            src={t.icon}
            alt={t.name}
            title={t.name}
            width={36}
            height={36}
            loading="lazy"
            className={`mx-5 flex-shrink-0${t.adaptive ? " tech-icon-adaptive" : ""}`}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {TECHS.map((t) => (
          <img
            key={`${t.name}-dup`}
            src={t.icon}
            alt=""
            aria-hidden="true"
            title={t.name}
            width={36}
            height={36}
            loading="lazy"
            className={`mx-5 flex-shrink-0${t.adaptive ? " tech-icon-adaptive" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
