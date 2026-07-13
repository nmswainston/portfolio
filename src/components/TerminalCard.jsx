import { useEffect, useState } from "react";
import nickPhoto from "../assets/nick.jpg";

// Syntax palette for the fake code block
const TOKEN_STYLES = {
  kw: "text-violet-400",
  name: "text-white",
  key: "text-sky-300",
  str: "text-emerald-400",
  punct: "text-slate-500",
};

const T = (cls, text) => ({ cls, text });

// The code block as token data rather than JSX so the typing effect can
// slice it character by character without losing syntax colors.
// Indentation is literal spaces; the line container uses whitespace-pre.
const CODE_LINES = [
  [T("kw", "const"), T("name", " nick "), T("punct", "= {")],
  [T("key", "  role"), T("punct", ": "), T("str", '"Frontend Developer"'), T("punct", ",")],
  [T("key", "  based"), T("punct", ": "), T("str", '"Avondale, AZ, USA"'), T("punct", ",")],
  [T("key", "  stack"), T("punct", ": [")],
  [T("str", '    "React"'), T("punct", ",")],
  [T("str", '    "TypeScript"'), T("punct", ",")],
  [T("str", '    "Tailwind"')],
  [T("punct", "  ],")],
  [T("key", "  focus"), T("punct", ": [")],
  [T("str", '    "Clean UI"'), T("punct", ",")],
  [T("str", '    "Automation"'), T("punct", ",")],
  [T("str", '    "AI"')],
  [T("punct", "  ],")],
  [T("key", "  status"), T("punct", ": "), T("str", '"Open to opportunities"')],
  [T("punct", "}")],
];

const LINE_LENGTHS = CODE_LINES.map((line) =>
  line.reduce((n, tk) => n + tk.text.length, 0)
);
const TOTAL_CHARS = LINE_LENGTHS.reduce((a, b) => a + b, 0);

// Type once per browser session; replays on every visit felt gimmicky.
const TYPED_FLAG = "terminal-typed";

function hasTypedThisSession() {
  try {
    return sessionStorage.getItem(TYPED_FLAG) === "1";
  } catch {
    return false;
  }
}

function markTyped() {
  try {
    sessionStorage.setItem(TYPED_FLAG, "1");
  } catch {
    // Private mode can block storage; worst case the animation replays.
  }
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * One line of code. Untyped characters render invisibly (opacity-0) so the
 * card keeps its final height from the first frame and nothing below it
 * shifts while the animation runs.
 */
function CodeLine({ tokens, visibleChars, showCursor }) {
  const parts = [];
  let used = 0;
  tokens.forEach((tk, i) => {
    const take = Math.max(0, Math.min(tk.text.length, visibleChars - used));
    if (take > 0) {
      parts.push(
        <span key={i} className={TOKEN_STYLES[tk.cls]}>
          {tk.text.slice(0, take)}
        </span>
      );
    }
    used += tk.text.length;
  });

  const fullText = tokens.map((tk) => tk.text).join("");
  const hidden = fullText.slice(Math.max(0, visibleChars));

  return (
    <div className="leading-7 whitespace-pre">
      {parts}
      {showCursor && (
        <span className="inline-block w-2 h-4 bg-slate-400 align-middle" aria-hidden="true" />
      )}
      {hidden && <span className="opacity-0">{hidden}</span>}
    </div>
  );
}

export default function TerminalCard() {
  const [mode, setMode] = useState("terminal");
  const [exitAnim, setExitAnim] = useState("");
  // Skip the animation entirely for reduced-motion users and repeat visits
  const [typedChars, setTypedChars] = useState(() =>
    hasTypedThisSession() || prefersReducedMotion() ? TOTAL_CHARS : 0
  );
  const isTyping = typedChars < TOTAL_CHARS;

  useEffect(() => {
    if (!isTyping) {
      markTyped();
      return;
    }
    const interval = setInterval(() => {
      setTypedChars((c) => Math.min(c + 2, TOTAL_CHARS));
    }, 22);
    return () => clearInterval(interval);
  }, [isTyping]);

  function animateOut(type) {
    setExitAnim(type);
    setTimeout(() => {
      setMode("photo");
      setExitAnim("");
    }, 220);
  }

  let lineStart = 0;

  return (
    <div className="w-full max-w-sm lg:max-w-md">
      {mode === "photo" ? (
        <button
          type="button"
          className="terminal-photo-reveal cursor-pointer block w-full"
          onClick={() => setMode("terminal")}
          aria-label="Reopen terminal card"
          title="Click to reopen"
          style={{ background: "none", border: 0, padding: 0 }}
        >
          <img
            src={nickPhoto}
            alt="Nick Swainston"
            className="w-full rounded-2xl object-cover"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
          />
          <p className="text-center text-xs opacity-40 mt-3 font-mono">click to reopen</p>
        </button>
      ) : (
        <div
          className={`rounded-2xl overflow-hidden border border-slate-700/60${exitAnim === "close" ? " terminal-exit-close" : exitAnim === "minimize" ? " terminal-exit-minimize" : ""}`}
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700/60">
            <button
              onClick={() => animateOut("close")}
              aria-label="Close terminal"
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
              style={{ border: "none", padding: 0 }}
            />
            <button
              onClick={() => animateOut("minimize")}
              aria-label="Minimize terminal"
              className="w-3 h-3 rounded-full bg-amber-400/80 hover:bg-amber-400 transition-colors cursor-pointer"
              style={{ border: "none", padding: 0 }}
            />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs text-slate-500 font-mono">~/portfolio</span>
          </div>

          {/* Code body — types itself out on first view each session */}
          <div className="bg-slate-900 px-6 py-6 font-mono text-sm text-slate-300">
            {CODE_LINES.map((tokens, i) => {
              const start = lineStart;
              lineStart += LINE_LENGTHS[i];
              const visible = typedChars - start;
              const isActiveLine =
                isTyping && visible >= 0 && visible < LINE_LENGTHS[i];
              return (
                <CodeLine
                  key={i}
                  tokens={tokens}
                  visibleChars={visible}
                  showCursor={isActiveLine}
                />
              );
            })}

            <div
              className={`mt-4 flex items-center gap-1 text-slate-500 ${isTyping ? "opacity-0" : ""}`}
            >
              <span>&gt;</span>
              <span className="cursor-blink w-2 h-4 bg-slate-400 inline-block ml-0.5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
