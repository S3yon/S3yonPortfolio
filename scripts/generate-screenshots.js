const fs = require('fs');
const path = require('path');

// Create placeholder SVG screenshots
const createScreenshot = (width, height, type) => {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#0a0a0a"/>
    <rect x="20" y="20" width="${width-40}" height="${height-40}" fill="#1a1a1a" rx="8"/>
    <rect x="40" y="40" width="${width-80}" height="60" fill="#22c55e" rx="4"/>
    <text x="${width/2}" y="${height/2}" text-anchor="middle" font-family="monospace" font-size="24" fill="#f5f5f5">
      Seyon Sri Portfolio
    </text>
    <text x="${width/2}" y="${height/2 + 40}" text-anchor="middle" font-family="monospace" font-size="16" fill="#a3a3a3">
      ${type} Screenshot Placeholder
    </text>
    <circle cx="${width/2}" cy="${height/2 + 80}" r="30" fill="#22c55e" opacity="0.3"/>
    <rect x="${width/2 - 100}" y="${height - 100}" width="200" height="40" fill="#22c55e" rx="8"/>
    <text x="${width/2}" y="${height - 75}" text-anchor="middle" font-family="monospace" font-size="14" fill="#0a0a0a">
      Progressive Web App
    </text>
  </svg>`;
};

const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots');

// Ensure screenshots directory exists
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Create desktop screenshot
const desktopSVG = createScreenshot(1280, 720, 'Desktop');
fs.writeFileSync(path.join(screenshotsDir, 'desktop.svg'), desktopSVG);

// Create mobile screenshot
const mobileSVG = createScreenshot(390, 844, 'Mobile');
fs.writeFileSync(path.join(screenshotsDir, 'mobile.svg'), mobileSVG);

console.log('PWA screenshots generated successfully!');
console.log('Note: These are placeholder screenshots. For production, capture actual screenshots of your app.');