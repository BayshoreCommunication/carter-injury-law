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
  const file = path.join(base, dir, 'FreeEvaluationCard.jsx');
  if (!fs.existsSync(file)) {
    console.log(`NOT FOUND: ${dir}`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');

  // Only replace the <h3> that wraps "Schedule Your Free" — use a targeted block match
  const before = content;

  // Replace opening tag: <h3 className="..."> immediately before "Schedule Your Free"
  content = content.replace(
    /(<h3\s+className="[^"]*">)(\s*\n\s*Schedule Your Free)/g,
    (match, tag, text) => tag.replace('<h3 ', '<h2 ').replace('</h3>', '</h2>') + text
  );

  // Replace closing </h3> that appears after the span containing the heading text
  // Strategy: find the pattern "</span>\n              </h3>" near the Schedule block
  content = content.replace(
    /(Schedule Your Free[\s\S]*?<\/span>\s*\n\s*)<\/h3>/,
    '$1</h2>'
  );

  if (content === before) {
    console.log(`⚠️  No change: ${dir}`);
  } else {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${dir}`);
  }
}
console.log('Done!');
