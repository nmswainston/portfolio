const TAG_STYLES = {
  React:              "bg-sky-500/15 text-sky-500 border-sky-500/25",
  TypeScript:         "bg-blue-500/15 text-blue-500 border-blue-500/25",
  JavaScript:         "bg-amber-400/15 text-amber-500 border-amber-400/25",
  Tailwind:           "bg-cyan-500/15 text-cyan-500 border-cyan-500/25",
  Vite:               "bg-violet-500/15 text-violet-500 border-violet-500/25",
  Netlify:            "bg-emerald-500/15 text-emerald-600 border-emerald-500/25",
  "Web Development":  "bg-blue-400/15 text-blue-500 border-blue-400/25",
  SaaS:               "bg-indigo-500/15 text-indigo-500 border-indigo-500/25",
  Operations:         "bg-teal-500/15 text-teal-500 border-teal-500/25",
  Dashboard:          "bg-slate-500/15 text-slate-400 border-slate-500/25",
  "Web Design":       "bg-pink-500/15 text-pink-500 border-pink-500/25",
  "Marketing Site":   "bg-orange-500/15 text-orange-500 border-orange-500/25",
  "Event Site":       "bg-rose-500/15 text-rose-500 border-rose-500/25",
  Concept:            "bg-purple-500/15 text-purple-500 border-purple-500/25",
  Content:            "bg-lime-600/15 text-lime-600 border-lime-600/25",
  "Knowledge Base":   "bg-amber-600/15 text-amber-600 border-amber-600/25",
  Documentation:      "bg-slate-400/15 text-slate-500 border-slate-400/25",
  Template:           "bg-fuchsia-500/15 text-fuchsia-500 border-fuchsia-500/25",
  "Starter Kit":      "bg-green-500/15 text-green-600 border-green-500/25",
};

export default function TagBadge({ tag }) {
  const style = TAG_STYLES[tag] ?? "bg-transparent opacity-70 border-(--line)";
  return (
    <span className={`inline-block px-2.5 py-0.5 border rounded-full text-[0.65rem] uppercase tracking-[0.15em] font-medium ${style}`}>
      {tag}
    </span>
  );
}
