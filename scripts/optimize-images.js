// Converts project screenshots in src/assets/projects from PNG to WebP
// (max 1200px wide, quality 82) and removes the source PNGs.
// Run after npm run screenshots: npm run optimize-images
import { readdirSync, statSync, unlinkSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "src", "assets", "projects");

const pngs = readdirSync(dir).filter((f) => f.endsWith(".png"));
if (pngs.length === 0) {
  console.log("No PNGs found in src/assets/projects, nothing to convert.");
}

for (const file of pngs) {
  const src = path.join(dir, file);
  const out = src.replace(/\.png$/, ".webp");
  const before = statSync(src).size;
  await sharp(src)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const after = statSync(out).size;
  unlinkSync(src);
  const pct = Math.round((1 - after / before) * 100);
  console.log(
    `${file} -> ${path.basename(out)}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB (${pct}% smaller)`
  );
}
