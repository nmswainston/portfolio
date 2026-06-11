// src/sections/projectsData.js
// Note: Screenshot filenames must use single extensions (e.g., .webp) to work with Vite imports.
// Screenshots are WebP, max 1200px wide. Pipeline: npm run screenshots, then npm run optimize-images.
import consoleLogicShot from "../assets/projects/console-logic.webp";
import litchfieldShot from "../assets/projects/litchfield-perk.webp";
import relayShot from "../assets/projects/relay.webp";
import dwellpathShot from "../assets/projects/dwellpath.webp";
import stacys40thShot from "../assets/projects/stacys-40th.webp";
import signalOverNoiseShot from "../assets/projects/signal-over-noise.webp";
import neuralVaultShot from "../assets/projects/neural-vault.webp";
import miniSaaSShot from "../assets/projects/mini-saas-starter.webp";

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
    process: "Developed a simple brand system built around a terminal theme: dark background, high-contrast green accents, and mono-inspired typography. Structured the content into clear sections (services, projects, contact) and kept copy concise. Implemented the layout with responsive grids and semantic sections, then optimized for performance with lazy-loaded images and a minimal dependency footprint.",
    result: "The site doubles as both a portfolio and a landing page for freelance work. It presents my projects in a way that feels cohesive and intentional, and the tech stack is simple enough to maintain and evolve as my focus shifts.",
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
    liveUrl: "https://litchfieldperk.com/",
    goal: "Give the shop a simple, modern web presence that looks great on phones, makes the menu easy to skim, and feels like a natural extension of the in-store experience.",
    process: "Started by mapping the core content sections (hero, menu highlights, location, hours, contact). Built the layout in React with semantic HTML and Tailwind utility classes for spacing and typography. Used a warm color palette and subtle background textures to match the brand. Paid extra attention to keyboard navigation and clear heading hierarchy so the page is easy to navigate for everyone.",
    result: "Shipped a fast, lightweight site that the owners can share on social and use in their Google Business profile. The layout is easy to extend with seasonal promos without breaking the overall structure.",
  },
  {
    slug: "relay",
    title: "Relay",
    role: "Product design & development",
    tags: ["React", "SaaS", "Operations", "Dashboard"],
    stack: ["React", "TypeScript", "Tailwind"],
    featured: true,
    image: relayShot,
    description: "A client-facing portal built as a self-initiated interview prep project. Lets customers check shipment status and view order history without calling support.",
    liveUrl: "https://relay-clientops.netlify.app/login",
    goal: "Build a working version of an app a prospective employer was actively developing, so I could walk into the interview with real code and concrete opinions instead of just ideas.",
    process: "Focused on the core use cases a client actually needs: where is my shipment, what have I ordered before. Built the dashboard in React and TypeScript with a data hierarchy that puts active shipments front and center and keeps order history accessible but secondary. Kept auth simple and the UI clean enough that a non-technical end user could navigate it without training.",
    result: "A functional demo that doubled as deep prep. Building it gave me firsthand opinions on the product decisions the team was working through, and showed I could scope and ship a realistic app independently.",
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
    process: "Started with user stories around snowbirds and cross-border workers who need to avoid triggering residency in the wrong jurisdiction. Sketched a layout where the key metric (days in each region this year) is visible immediately. Built a React dashboard that uses cards for key stats, a calendar-style view for daily breakdowns, and a simple color system to indicate 'safe', 'approaching limit', and 'over the line'. Focused on readable typography, consistent spacing, and clean component structure over fancy visuals.",
    result: "While still a concept, the project demonstrates my ability to translate a fuzzy problem into a clear interface. The codebase is organized into reusable components and ready to be wired to real residency rules and APIs in a future iteration.",
  },
  {
    slug: "stacys-40th",
    title: "Stacy's 40th",
    role: "Design & build",
    tags: ["React", "Event Site", "Web Design"],
    stack: ["React", "Vite", "Tailwind"],
    featured: true,
    image: stacys40thShot,
    description: "A party hub for my wife's 40th birthday. Guests could RSVP, coordinate rides, share travel tips, and submit memories and photos that I secretly compiled into a surprise slideshow played at the event.",
    liveUrl: "https://www.stacys40thfiesta.com/",
    goal: "Build one link that handled everything the party needed: RSVPs, ride coordination, and a way to collect memories from guests ahead of time, then use what they submitted to surprise my wife at the event.",
    process: "Built four sections: RSVP form, a rideshare board for guests to coordinate travel, a travel tips board for out-of-towners, and a shared memories board where guests could upload photos and leave notes. Designed it mobile-first since everyone would open it from a group chat. The memories board was the hidden piece: I quietly collected everything guests submitted and assembled it into a slideshow for the night.",
    result: "The surprise landed. Guests used every section of the site, and playing the slideshow for the room was the moment of the party.",
  },
  {
    slug: "signal-over-noise",
    title: "Signal Over Noise",
    role: "Design & development",
    tags: ["React", "Content", "Web Design"],
    stack: ["React", "Vite", "Tailwind"],
    featured: true,
    image: signalOverNoiseShot,
    description: "An AI learning hub for the generally curious. Courses and reference material written to give clear answers without the hype.",
    liveUrl: "https://signalovernoise.netlify.app/",
    goal: "Give people a place to actually learn about AI without wading through buzzwords and breathless takes. The name says it: cut the noise, surface what's useful.",
    process: "Wrote all the course content myself, then designed a layout that lets the writing do the work. Clean hierarchy, minimal distractions, easy to skim or go deep. Built in React with a focus on readability: strong typography, clear section breaks, nothing competing with the content for attention.",
    result: "A self-contained project that covers the full stack: researching and writing material for a non-technical audience, then designing and building the platform to deliver it.",
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
    description: "A personal knowledge management app. Store notes, documents, and ideas in one place and find them instantly with AI-powered search and tagging.",
    liveUrl: "https://neural-vault.netlify.app/",
    goal: "Build a second brain that actually works: centralized storage for notes and reference material, with smart search that retrieves by meaning rather than exact keywords.",
    process: "Designed around the core PKM loop: capture quickly, organize with tags, retrieve reliably. Implemented AI-powered search so users are not stuck remembering the exact phrase they wrote something under. Kept the UI minimal so the tool stays out of the way of the content.",
    result: "A working proof-of-concept for AI-enhanced knowledge management. Demonstrates how AI search can make a personal knowledge base genuinely more useful than a folder of scattered text files.",
  },
  {
    slug: "mini-saas-starter",
    title: "Mini SaaS Starter Kit",
    role: "Template & tooling",
    tags: ["React", "SaaS", "Template", "Starter Kit"],
    stack: ["React", "Vite", "Tailwind", "Authentication"],
    featured: false,
    image: miniSaaSShot,
    description: "A SaaS boilerplate that ships with auth, billing, protected routes, and a dashboard. Skip the infrastructure setup and start building the actual product.",
    liveUrl: "https://mini-saas-template.netlify.app/",
    goal: "Eliminate the repetitive scaffolding every SaaS needs before you can build anything interesting: auth, billing, user management, protected routes. Get past the setup and start validating the idea.",
    process: "Built the full suite of SaaS primitives: signup/login/password reset with session management, Stripe billing integration with a pricing page, protected routes, user dashboard, and account settings. Added deployment config for Netlify and Vercel so the first ship is one step. Kept the component structure clean and adaptable so it fits any product direction without major rework.",
    result: "A reusable foundation that cuts setup time from weeks to hours. Clone it and be building product features, not boilerplate, on day one.",
  },
];
