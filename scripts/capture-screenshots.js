// scripts/capture-screenshots.js
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Projects with their URLs and slugs (only missing ones)
const projects = [
  { slug: 'relay', url: 'https://relay-clientops.netlify.app/login' },
  { slug: 'dwellpath', url: 'https://dwellpath-demo.netlify.app/' },
  { slug: 'stacys-40th', url: 'https://www.stacys40thfiesta.com/' },
  { slug: 'signal-over-noise', url: 'https://signalovernoise.netlify.app/' },
  { slug: 'neural-vault', url: 'https://neural-vault.netlify.app/' },
  { slug: 'mini-saas-starter', url: 'https://mini-saas-template.netlify.app/' },
];

const outputDir = join(__dirname, '../src/assets/projects');

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

async function captureScreenshot(browser, slug, url) {
  console.log(`Capturing screenshot for ${slug}...`);
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to a standard laptop size (16:10 aspect ratio works well for laptop frames)
    await page.setViewport({
      width: 1920,
      height: 1200,
      deviceScaleFactor: 1,
    });
    
    // Navigate to the page
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });
    
    // Wait a bit for any animations or dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot
    const screenshotPath = join(outputDir, `${slug}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: false, // Only capture viewport
      type: 'png',
    });
    
    console.log(`✓ Screenshot saved: ${screenshotPath}`);
    await page.close();
  } catch (error) {
    console.error(`✗ Error capturing ${slug}:`, error.message);
  }
}

async function main() {
  console.log('Starting screenshot capture...\n');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  try {
    for (const project of projects) {
      await captureScreenshot(browser, project.slug, project.url);
    }
  } finally {
    await browser.close();
  }
  
  console.log('\n✓ All screenshots captured!');
}

main().catch(console.error);

