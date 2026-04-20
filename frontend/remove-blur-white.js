const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\Admin\\nakshatra\\app',
  'C:\\Users\\Admin\\nakshatra\\components',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Remove blur
  content = content.replace(/backdrop-blur(-\w+)?/g, '');
  
  // Replace white borders, backgrounds, text with cyan variants
  // E.g., border-white/10 -> border-[#00f5ff]/10
  content = content.replace(/border-white(\/[0-9\[\]\.]+)?/g, 'border-[#00f5ff]$1');
  content = content.replace(/bg-white(\/[0-9\[\]\.]+)?/g, 'bg-[#00f5ff]$1');
  content = content.replace(/text-white(\/[0-9\[\]\.]+)?/g, 'text-[#00f5ff]$1');
  
  // Replace hardcoded "rgba(255,255,255,X)" and "white" text 
  content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,/g, 'rgba(0, 245, 255,');
  
  // This one is dangerous, so we only target obvious ones:
  content = content.replace(/color:\s*(["'])white(["'])/g, 'color: $1#00f5ff$2');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

dirs.forEach(traverse);
console.log("Done!");
