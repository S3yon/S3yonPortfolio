const fs = require('fs');
const path = require('path');

// Create a simple SVG icon as base
const createSVGIcon = (size) => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size}" fill="#0a0a0a"/>
    <circle cx="${size/2}" cy="${size/2}" r="${size * 0.35}" fill="url(#gradient)"/>
    <text x="${size/2}" y="${size/2 + 8}" text-anchor="middle" font-family="monospace" font-size="${size * 0.25}" fill="#0a0a0a" font-weight="bold">S</text>
  </svg>`;
};

// Generate icons for different sizes
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '..', 'public', 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

sizes.forEach(size => {
  const svgContent = createSVGIcon(size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join(iconsDir, filename);
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`Generated ${filename}`);
});

console.log('PWA icons generated successfully!');
console.log('Note: For production, consider converting SVG icons to PNG format for better compatibility.');