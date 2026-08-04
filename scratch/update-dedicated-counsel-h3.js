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
  const file = path.join(base, dir, 'DedicatedCounselSection.jsx');
  if (!fs.existsSync(file)) {
    console.log(`NOT FOUND: ${dir}`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');
  const before = content;

  // Replace <p className="text-xs font-extrabold text-secondary uppercase tracking-widest mb-1">
  // with <h3 className="text-xs font-extrabold text-secondary uppercase tracking-widest mb-1">
  content = content.replace(
    /<p(\s+className="[^"]*text-secondary uppercase[^"]*">\s*\n?\s*\{f\.title\}\s*\n?\s*)<\/p>/g,
    '<h3$1</h3>'
  );

  // Fallback if formatting is single line
  content = content.replace(
    /<p(\s+className="[^"]*uppercase[^"]*">\s*\{f\.title\}\s*)<\/p>/g,
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
