const TECHS = [
  { name: "React",        icon: "https://cdn.simpleicons.org/react" },
  { name: "TypeScript",   icon: "https://cdn.simpleicons.org/typescript" },
  { name: "JavaScript",   icon: "https://cdn.simpleicons.org/javascript" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Vite",         icon: "https://cdn.simpleicons.org/vite" },
  { name: "HTML5",        icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3",         icon: "https://cdn.simpleicons.org/css3" },
  { name: "Node.js",      icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Netlify",      icon: "https://cdn.simpleicons.org/netlify" },
  { name: "Git",          icon: "https://cdn.simpleicons.org/git" },
];

function IconCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 px-5">
      <div className="w-12 h-12 rounded-xl border border-(--line) bg-(--card) flex items-center justify-center">
        <img src={icon} alt={name} width={24} height={24} loading="lazy" />
      </div>
      <span className="text-[0.65rem] uppercase tracking-[0.15em] opacity-50 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TechScroller() {
  return (
    <div className="overflow-hidden w-full" aria-label="Technologies I work with">
      <div className="marquee-track">
        {TECHS.map((t) => <IconCard key={t.name} {...t} />)}
        {/* Duplicate for seamless loop */}
        {TECHS.map((t) => <IconCard key={`${t.name}-dup`} {...t} />)}
      </div>
    </div>
  );
}
