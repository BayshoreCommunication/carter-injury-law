const fs = require('fs');
const path = require('path');

const dirs = [
  "bus-accidents-lawyer-largo",
  "bus-accidents-lawyers-tampa",
  "motorcycle-accident-lawyer-largo-fl",
  "tampa-motorcycle-accidents-lawyer",
  "tampa-personal-injury-lawyers-firm",
  "tampa-wrongful-death-car-accident-lawyer",
  "largo-wrongful-death-lawyer"
];

const base = path.join(__dirname, '../components/seo-service');

for (const dir of dirs) {
  const file = path.join(base, dir, 'FAQSection.jsx');
  if (!fs.existsSync(file)) {
    console.log(`NOT FOUND: ${dir}`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');
  const before = content;

  // 1. Change "Have More Questions?" heading from h3 (or h2/h4) to p
  content = content.replace(
    /<h[234](\s+className="[^"]*">)\s*\n?\s*Have More Questions\?\s*\n?\s*<\/h[234]>/g,
    '<p$1\n                  Have More Questions?\n                </p>'
  );

  // 2. Change faq.question span (or p/div) to h3
  content = content.replace(
    /<span(\s+className="text-secondary font-extrabold[^"]*">\s*\n?\s*\{faq\.question\}\s*\n?\s*)<\/span>/g,
    '<h3$1</h3>'
  );

  // Fallback for faq.question if className varies slightly
  content = content.replace(
    /<span(\s+className="[^"]*">\s*\{faq\.question\}\s*)<\/span>/g,
    '<h3$1</h3>'
  );

  if (content === before) {
    console.log(`⚠️  No change: ${dir}`);
  } else {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${dir}`);
  }
}
console.log('Done!');
