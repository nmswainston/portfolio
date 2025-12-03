// src/sections/projectsData.js
import litchfieldShot from "../assets/projects/litchfield-perk.png.png";
import consoleLogicShot from "../assets/projects/console-logic.png.png";

export const projects = [
  {
    slug: "litchfield-perk",
    name: "Litchfield Perk – Coffee Shop Site",
    role: "Design & build",
    stack: ["React", "Vite", "Tailwind", "Netlify"],
    featured: true,
    image: litchfieldShot,
    description:
      "One-page marketing site for a neighborhood coffee shop with a focus on cozy vibes and mobile-first browsing.",
    link: "https://litchfieldperk.your-domain-here", // update this
    goal:
      "Give the shop a simple, modern web presence that looks great on phones, makes the menu easy to skim, and feels like a natural extension of the in-store experience.",
    process:
      "Started by mapping the core content sections (hero, menu highlights, location, hours, contact). Built the layout in React with semantic HTML and Tailwind utility classes for spacing and typography. Used a warm color palette and subtle background textures to match the brand. Paid extra attention to keyboard navigation and clear heading hierarchy so the page is easy to navigate for everyone.",
    result:
      "Shipped a fast, lightweight site that the owners can share on social and use in their Google Business profile. The layout is easy to extend with seasonal promos without breaking the overall structure.",
  },
  {
    slug: "console-logic-studio",
    name: "Console.Log(ic) – Studio Site",
    role: "Branding, design, build",
    stack: ["React", "Vite", "Tailwind"],
    featured: true,
    description:
      "Personal studio site for web development, automation, and AI projects with a clean, developer-centric aesthetic.",
    link: "https://consolelogic.net",
    image: consoleLogicShot,
    goal:
      "Create a home base that explains what I do in plain language, shows off selected work, and feels like a polished, professional brand instead of a generic portfolio template.",
    process:
      "Developed a simple brand system built around a 'terminal' theme: dark background, high-contrast green accents, and mono-inspired typography. Structured the content into clear sections (services, projects, contact) and kept copy concise. Implemented the layout with responsive grids and semantic sections, then optimized for performance with lazy-loaded images and a minimal dependency footprint.",
    result:
      "The site doubles as both a portfolio and a landing page for freelance work. It presents my projects in a way that feels cohesive and intentional, and the tech stack is simple enough to maintain and evolve as my focus shifts.",
  },
  {
    slug: "dwellpath-residency-tracker",
    name: "Dwellpath – Residency Tracker (Concept)",
    role: "Product concept & dashboard UI",
    stack: ["React", "TypeScript", "Tailwind"],
    featured: true,
    description:
      "Concept dashboard for tracking tax residency days across multiple locations for snowbirds and remote workers.",
    link: "https://github.com/nmswainston/dwellpath", // or your live URL
    goal:
      "Explore what a residency tracking tool could look like if it was actually pleasant to use: clear status at a glance, simple day-count visuals, and minimal friction for logging travel.",
    process:
      "Started with user stories around snowbirds and cross-border workers who need to avoid triggering residency in the wrong jurisdiction. Sketched a layout where the key metric—days in each region this year—is visible immediately. Built a React dashboard that uses cards for key stats, a calendar-style view for daily breakdowns, and a simple color system to indicate 'safe', 'approaching limit', and 'over the line'. Focused on readable typography, consistent spacing, and clean component structure over fancy visuals.",
    result:
      "While still a concept, the project demonstrates my ability to translate a fuzzy problem into a clear interface. The codebase is organized into reusable components and ready to be wired to real residency rules and APIs in a future iteration.",
  },
  {
    slug: "resume-portfolio-site",
    name: "Nick Swainston – Portfolio & Resume",
    role: "Design & implementation",
    stack: ["React", "Tailwind"],
    featured: true,
    description:
      "This site: a focused personal portfolio that highlights selected work, skills, and a clean, recruiter-friendly structure.",
    link: "https://nmswainston.com", // when live
  },
  {
    slug: "home-automation-ops",
    name: "Oasis – Home Automation Ops Improvements",
    role: "Internal tools & automation",
    stack: ["Monday.com", "n8n", "APIs"],
    featured: true,
    description:
      "In-progress work to streamline backend operations for a luxury home automation company using low-code automation tools.",
  },
  {
    slug: "ai-learning-library",
    name: "AI Learning Scripts & Explainers",
    role: "Content & dev",
    stack: ["Markdown", "JavaScript", "LLMs"],
    featured: true,
    description:
      "A growing library of scripts and explanations that teach AI and dev concepts in technician-friendly language.",
  },
];

