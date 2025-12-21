// src/sections/projectsData.js
// Note: Screenshot filenames must use single extensions (e.g., .png) to work with Vite imports.
// Double extensions (e.g., .png.png) will cause import/resolve errors.
import consoleLogicShot from "../assets/projects/console-logic.png";
import litchfieldShot from "../assets/projects/litchfield-perk.png";
import relayShot from "../assets/projects/relay.png";
import dwellpathShot from "../assets/projects/dwellpath.png";
import stacys40thShot from "../assets/projects/stacys-40th.png";
import signalOverNoiseShot from "../assets/projects/signal-over-noise.png";
import neuralVaultShot from "../assets/projects/neural-vault.png";
import miniSaaSShot from "../assets/projects/mini-saas-starter.png";

export const projects = [
  // Featured Projects (show on Home and /work) - in specified order
  {
    slug: "console-logic",
    title: "console.log(ic)",
    role: "Branding, design, build",
    tags: ["React", "Vite", "Tailwind", "Web Development"],
    stack: ["React", "Vite", "Tailwind"],
    featured: true,
    image: consoleLogicShot,
    description: "Personal studio site for web development, automation, and AI projects with a clean, developer-centric aesthetic.",
    liveUrl: "https://www.consolelogic.net/",
    goal: "Create a home base that explains what I do in plain language, shows off selected work, and feels like a polished, professional brand instead of a generic portfolio template.",
    process: "Developed a simple brand system built around a 'terminal' theme: dark background, high-contrast green accents, and mono-inspired typography. Structured the content into clear sections (services, projects, contact) and kept copy concise. Implemented the layout with responsive grids and semantic sections, then optimized for performance with lazy-loaded images and a minimal dependency footprint.",
    result: "The site doubles as both a portfolio and a landing page for freelance work. It presents my projects in a way that feels cohesive and intentional, and the tech stack is simple enough to maintain and evolve as my focus shifts.",
    // Legacy field for backward compatibility
    link: "https://www.consolelogic.net/",
  },
  {
    slug: "litchfield-perk",
    title: "Litchfield Perk",
    role: "Design & build",
    tags: ["React", "Vite", "Tailwind", "Netlify", "Marketing Site"],
    stack: ["React", "Vite", "Tailwind", "Netlify"],
    featured: true,
    image: litchfieldShot,
    description: "One-page marketing site for a neighborhood coffee shop with a focus on cozy vibes and mobile-first browsing.",
    liveUrl: "https://litchfield-perk.netlify.app/",
    goal: "Give the shop a simple, modern web presence that looks great on phones, makes the menu easy to skim, and feels like a natural extension of the in-store experience.",
    process: "Started by mapping the core content sections (hero, menu highlights, location, hours, contact). Built the layout in React with semantic HTML and Tailwind utility classes for spacing and typography. Used a warm color palette and subtle background textures to match the brand. Paid extra attention to keyboard navigation and clear heading hierarchy so the page is easy to navigate for everyone.",
    result: "Shipped a fast, lightweight site that the owners can share on social and use in their Google Business profile. The layout is easy to extend with seasonal promos without breaking the overall structure.",
    // Legacy field for backward compatibility
    link: "https://litchfield-perk.netlify.app/",
  },
  {
    slug: "relay",
    title: "Relay",
    role: "Product design & development",
    tags: ["React", "SaaS", "Operations", "Dashboard"],
    stack: ["React", "TypeScript", "Tailwind"],
    featured: true,
    image: relayShot,
    description: "A client operations management platform designed to streamline workflows and improve team collaboration.",
    liveUrl: "https://relay-clientops.netlify.app/login",
    goal: "Build an intuitive operations platform that simplifies complex client management tasks and improves team efficiency.",
    process: "Focused on creating a clean, user-friendly interface that prioritizes clarity and ease of use. Implemented robust authentication and dashboard features with a focus on performance and scalability.",
    result: "A powerful operations tool that helps teams manage client relationships more effectively while maintaining a simple, approachable user experience.",
    // Legacy field for backward compatibility
    link: "https://relay-clientops.netlify.app/login",
  },
  {
    slug: "dwellpath",
    title: "Dwellpath",
    role: "Product concept & dashboard UI",
    tags: ["React", "TypeScript", "Tailwind", "Dashboard", "Concept"],
    stack: ["React", "TypeScript", "Tailwind"],
    featured: true,
    image: dwellpathShot,
    description: "Concept dashboard for tracking tax residency days across multiple locations for snowbirds and remote workers.",
    liveUrl: "https://dwellpath-demo.netlify.app/",
    goal: "Explore what a residency tracking tool could look like if it was actually pleasant to use: clear status at a glance, simple day-count visuals, and minimal friction for logging travel.",
    process: "Started with user stories around snowbirds and cross-border workers who need to avoid triggering residency in the wrong jurisdiction. Sketched a layout where the key metric—days in each region this year—is visible immediately. Built a React dashboard that uses cards for key stats, a calendar-style view for daily breakdowns, and a simple color system to indicate 'safe', 'approaching limit', and 'over the line'. Focused on readable typography, consistent spacing, and clean component structure over fancy visuals.",
    result: "While still a concept, the project demonstrates my ability to translate a fuzzy problem into a clear interface. The codebase is organized into reusable components and ready to be wired to real residency rules and APIs in a future iteration.",
    // Legacy field for backward compatibility
    link: "https://dwellpath-demo.netlify.app/",
  },
  {
    slug: "stacys-40th",
    title: "Stacy's 40th",
    role: "Design & build",
    tags: ["React", "Event Site", "Web Design"],
    stack: ["React", "Vite", "Tailwind"],
    featured: true,
    image: stacys40thShot,
    description: "A festive event website celebrating Stacy's 40th birthday with an engaging, party-focused design.",
    liveUrl: "https://www.stacys40thfiesta.com/",
    goal: "Create a vibrant, celebratory website that captures the fun and excitement of a milestone birthday party.",
    process: "Designed with a festive theme in mind, focusing on visual appeal and user engagement. Built with modern web technologies for a smooth, responsive experience across all devices.",
    result: "A delightful event site that helps guests get excited about the celebration and provides all necessary information in an accessible, visually appealing format.",
    // Legacy field for backward compatibility
    link: "https://www.stacys40thfiesta.com/",
  },
  {
    slug: "signal-over-noise",
    title: "Signal Over Noise",
    role: "Design & development",
    tags: ["React", "Content", "Web Design"],
    stack: ["React", "Vite", "Tailwind"],
    featured: true,
    image: signalOverNoiseShot,
    description: "A content platform focused on cutting through the noise to deliver meaningful, high-quality information.",
    liveUrl: "https://signalovernoise.netlify.app/",
    goal: "Create a content platform that emphasizes quality over quantity, helping users find the most valuable information without distraction.",
    process: "Designed with a minimalist approach, prioritizing content readability and user focus. Built with performance in mind, ensuring fast load times and smooth interactions.",
    result: "A clean, focused platform that puts content first and provides an exceptional reading experience for users seeking quality information.",
    // Legacy field for backward compatibility
    link: "https://signalovernoise.netlify.app/",
  },

  // Additional Projects (show only on /work)
  {
    slug: "neural-vault",
    title: "Neural Vault",
    role: "Design & development",
    tags: ["React", "Knowledge Base", "Documentation"],
    stack: ["React", "Markdown", "Content Management"],
    featured: false,
    image: neuralVaultShot,
    description: "A knowledge base and documentation platform for organizing and accessing information efficiently.",
    liveUrl: "https://neural-vault.netlify.app/",
    goal: "Build a structured knowledge base that makes information easy to find, organize, and reference.",
    process: "Created a system that combines markdown-based content with a clean, navigable interface. Focused on making the knowledge base both powerful and easy to use.",
    result: "A functional knowledge base platform that demonstrates effective information architecture and content organization.",
    // Legacy field for backward compatibility
    link: "https://neural-vault.netlify.app/",
  },
  {
    slug: "mini-saas-starter",
    title: "Mini SaaS Starter Kit",
    role: "Template & tooling",
    tags: ["React", "SaaS", "Template", "Starter Kit"],
    stack: ["React", "Vite", "Tailwind", "Authentication"],
    featured: false,
    image: miniSaaSShot,
    description: "A starter kit for quickly building SaaS applications with essential features and modern tooling.",
    liveUrl: "https://mini-saas-template.netlify.app/",
    goal: "Create a comprehensive starter kit that includes all the essential features needed to launch a SaaS product quickly.",
    process: "Built a modular template with authentication, user management, and core SaaS features. Designed to be easily customizable while providing a solid foundation.",
    result: "A production-ready starter kit that significantly reduces the time needed to build and launch new SaaS applications.",
    // Legacy field for backward compatibility
    link: "https://mini-saas-template.netlify.app/",
  },
];
