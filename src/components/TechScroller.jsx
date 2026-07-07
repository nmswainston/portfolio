// Icons are self-hosted copies from simpleicons.org (CC0) so the hero never
// shows broken images if a CDN is down or blocked by an ad-blocker.
import reactIcon from "../assets/icons/react.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import viteIcon from "../assets/icons/vite.svg";
import nextIcon from "../assets/icons/nextdotjs.svg";
import html5Icon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css.svg";
import gitIcon from "../assets/icons/git.svg";
import netlifyIcon from "../assets/icons/netlify.svg";
import firebaseIcon from "../assets/icons/firebase.svg";

const TECHS = [
  { name: "React",        icon: reactIcon },
  { name: "TypeScript",   icon: typescriptIcon },
  { name: "JavaScript",   icon: javascriptIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Vite",         icon: viteIcon },
  // Next.js brand color is black; .tech-icon-adaptive inverts it in dark mode
  { name: "Next.js",      icon: nextIcon, adaptive: true },
  { name: "HTML5",        icon: html5Icon },
  { name: "CSS3",         icon: cssIcon },
  { name: "Git",          icon: gitIcon },
  { name: "Netlify",      icon: netlifyIcon },
  { name: "Firebase",     icon: firebaseIcon },
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
