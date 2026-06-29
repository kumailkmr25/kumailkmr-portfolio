const fs = require('fs');
const path = require('path');

const replacements = [
  // Backgrounds
  { regex: /bg-\[#0a0a0a\]/g, replacement: 'bg-background' },
  { regex: /bg-\[#ffffff\]/g, replacement: 'bg-background' },
  { regex: /dark:bg-\[#0a0a0a\]/g, replacement: '' }, // because bg-background handles dark mode
  { regex: /bg-white dark:bg-\[#0a0a0a\]/g, replacement: 'bg-background' },
  { regex: /bg-white dark:bg-\[#111111\]/g, replacement: 'bg-surface' },
  { regex: /bg-white dark:bg-\[#1a1a1a\]/g, replacement: 'bg-surface-2' },
  { regex: /bg-\[#f4f4f5\]/g, replacement: 'bg-surface' },
  { regex: /dark:bg-\[#111111\]/g, replacement: '' },
  { regex: /bg-\[#f4f4f5\]\/50/g, replacement: 'bg-surface/50' },
  { regex: /dark:bg-\[#111111\]\/50/g, replacement: '' },
  
  // Foreground / Text
  { regex: /text-\[#09090b\]/g, replacement: 'text-foreground' },
  { regex: /dark:text-white/g, replacement: '' },
  { regex: /text-\[#71717a\]/g, replacement: 'text-foreground-muted' },
  { regex: /text-\[#a1a1aa\]/g, replacement: 'text-foreground-muted' },
  
  // Borders
  { regex: /border-black\/5/g, replacement: 'border-border' },
  { regex: /dark:border-white\/5/g, replacement: '' },
  { regex: /border-black\/10/g, replacement: 'border-border-strong' },
  { regex: /dark:border-white\/10/g, replacement: '' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      // Clean up composed classes first (e.g. "bg-white dark:bg-[#0a0a0a]")
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      // Clean up multiple spaces left by replacing with empty string
      content = content.replace(/  +/g, ' ');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Done!');
