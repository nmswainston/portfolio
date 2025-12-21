import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read the SVG
const svgBuffer = readFileSync(join(rootDir, 'public', 'favicon.svg'));

// Generate PNG at different sizes for ICO
const sizes = [16, 32, 48];

async function generateFavicon() {
  try {
    // Create PNG versions
    for (const size of sizes) {
      const png = await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      
      writeFileSync(join(rootDir, 'public', `favicon-${size}.png`), png);
    }

    // Create ICO file (multi-size)
    // Note: sharp doesn't directly support ICO, so we'll create a 32x32 PNG as favicon.ico
    // Most browsers will accept PNG as ICO
    const icoPng = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    writeFileSync(join(rootDir, 'public', 'favicon.ico'), icoPng);
    
    console.log('✅ Favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
}

generateFavicon();

