// Renders public/og-image.png (1200x630), referenced by the og:image and
// twitter:image meta tags in index.html. Run with: npm run og-image
import { Buffer } from "node:buffer";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "og-image.png");

// Colors mirror the dark theme in src/index.css and the TerminalCard component
const BG = "#020617";
const FG = "#e5e7eb";
const MUTED = "#94a3b8";
const ACCENT = "#38bdf8";
const CARD = "#0b1220";
const CARD_HEADER = "#1e293b";
const LINE = "#1f2933";
const PUNCT = "#64748b";
const KEY = "#7dd3fc";
const STR = "#34d399";
const KW = "#a78bfa";

const SANS = "'Segoe UI', Arial, sans-serif";
const MONO = "Consolas, 'Courier New', monospace";

// Non-breaking space: librsvg collapses regular spaces between tspans
const NB = "\u00A0";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="624" width="1200" height="6" fill="${ACCENT}"/>

  <text x="80" y="200" font-family="${SANS}" font-size="22" letter-spacing="5" fill="${MUTED}">PORTFOLIO · FRONTEND · AUTOMATION</text>
  <text x="80" y="296" font-family="${SANS}" font-size="76" font-weight="700" fill="${FG}">Nick Swainston</text>
  <text x="80" y="356" font-family="${SANS}" font-size="32" fill="${MUTED}">Frontend Developer · AI Automation</text>
  <text x="80" y="472" font-family="${MONO}" font-size="28" fill="${ACCENT}">nmswainston.com</text>

  <!-- terminal card -->
  <rect x="720" y="150" width="400" height="330" rx="16" fill="${CARD}" stroke="${LINE}" stroke-width="2"/>
  <path d="M720 166 a16 16 0 0 1 16 -16 h368 a16 16 0 0 1 16 16 v36 h-400 z" fill="${CARD_HEADER}"/>
  <circle cx="750" cy="176" r="7" fill="#ef4444"/>
  <circle cx="774" cy="176" r="7" fill="#f59e0b"/>
  <circle cx="798" cy="176" r="7" fill="#10b981"/>
  <text x="822" y="183" font-family="${MONO}" font-size="17" fill="${PUNCT}">~/portfolio</text>

  <g xml:space="preserve" font-family="${MONO}" font-size="20">
    <text x="748" y="246"><tspan fill="${KW}">const</tspan><tspan fill="${FG}">${NB}nick${NB}</tspan><tspan fill="${PUNCT}">=${NB}{</tspan></text>
    <text x="772" y="280"><tspan fill="${KEY}">role</tspan><tspan fill="${PUNCT}">:${NB}</tspan><tspan fill="${STR}">"Frontend Dev"</tspan><tspan fill="${PUNCT}">,</tspan></text>
    <text x="772" y="314"><tspan fill="${KEY}">based</tspan><tspan fill="${PUNCT}">:${NB}</tspan><tspan fill="${STR}">"Avondale, AZ"</tspan><tspan fill="${PUNCT}">,</tspan></text>
    <text x="772" y="348"><tspan fill="${KEY}">focus</tspan><tspan fill="${PUNCT}">:${NB}[</tspan><tspan fill="${STR}">"UI"</tspan><tspan fill="${PUNCT}">,${NB}</tspan><tspan fill="${STR}">"AI"</tspan><tspan fill="${PUNCT}">],</tspan></text>
    <text x="772" y="382"><tspan fill="${KEY}">status</tspan><tspan fill="${PUNCT}">:${NB}</tspan><tspan fill="${STR}">"Open to work"</tspan></text>
    <text x="748" y="416" fill="${PUNCT}">}</text>
    <text x="748" y="452"><tspan fill="${PUNCT}">&gt;</tspan><tspan fill="${MUTED}">${NB}_</tspan></text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log(`Wrote ${OUT}`);
