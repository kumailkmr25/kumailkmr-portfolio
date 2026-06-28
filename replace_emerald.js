const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  const dirFiles = fs.readdirSync(dir);
  for (const f of dirFiles) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p, files);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      files.push(p);
    }
  }
  return files;
}

const files = walk('src');

const replacements = [
  { regex: /bg-emerald-500\/[0-9]+/g, replacement: 'bg-primary-bg' }, // bg-emerald-500/10 -> bg-primary-bg
  { regex: /bg-emerald-950\/[0-9]+/g, replacement: 'bg-primary-bg' },
  { regex: /bg-emerald-900\/[0-9]+/g, replacement: 'bg-primary-bg' },
  { regex: /border-emerald-900\/[0-9]+/g, replacement: 'border-primary-border' },
  { regex: /border-emerald-500\/[0-9]+/g, replacement: 'border-primary-border' },
  { regex: /emerald-500/g, replacement: 'primary' },
  { regex: /emerald-400/g, replacement: 'primary-light' },
  { regex: /emerald-600/g, replacement: 'primary' },
  { regex: /emerald-700/g, replacement: 'primary' },
  { regex: /emerald-300/g, replacement: 'primary-light' },
  { regex: /emerald-200/g, replacement: 'primary-border' },
  { regex: /emerald-100/g, replacement: 'primary-border' },
  { regex: /emerald-50/g, replacement: 'primary-bg' },
  { regex: /emerald-900/g, replacement: 'primary-border' },
  { regex: /emerald-950/g, replacement: 'primary-bg' },
  // text-emerald-something handled by above
  // just need to fix specific composite classes if they end up weird, e.g. text-primary-border might happen
];

let filesUpdated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  for (const rule of replacements) {
    content = content.replace(rule.regex, rule.replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    filesUpdated++;
    console.log(`Updated: ${file}`);
  }
}

console.log(`\nCompleted. Files updated: ${filesUpdated}`);
