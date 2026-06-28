const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  "src/app/audit/page.tsx",
  "src/app/case-studies/page.tsx",
  "src/app/industries/page.tsx",
  "src/app/process/page.tsx",
  "src/components/home/CTA.tsx",
  "src/components/home/Hero.tsx",
  "src/components/home/Process.tsx",
  "src/components/layout/Footer.tsx",
  "src/components/layout/Navbar.tsx"
];

for (const file of filesToUpdate) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if we need to add the import for personalInfo
  if (!content.includes('import { personalInfo }') && !content.includes('import {personalInfo}')) {
    // Add import statement after the first import or 'use client'
    if (content.includes('"use client";')) {
      content = content.replace('"use client";\n', '"use client";\n\nimport { personalInfo } from "@/lib/data";\n');
    } else {
      content = 'import { personalInfo } from "@/lib/data";\n' + content;
    }
  }

  // Find `<Link href="/book-consultation"` and replace
  // We need to account for multi-line or different attributes, so let's use a regex
  // It could be `<Link href="/book-consultation" className="...">`
  // We want it to be `<Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer" className="...">`
  
  content = content.replace(/<Link\s+href="\/book-consultation"/g, '<Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"');
  
  // Sometimes it's on a new line: `href="/book-consultation"` inside a Link tag.
  // We can just replace `href="/book-consultation"` with `href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"` across the board, 
  // since this string uniquely identifies the CTA buttons linking to that page.
  // Actually, wait, some might just be regular text links? No, they are all Next.js Links based on the grep search.
  
  // Let's do a more robust replace that handles newlines:
  content = content.replace(/href="\/book-consultation"/g, 'href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${file}`);
}
