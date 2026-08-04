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
  const file = path.join(base, dir, 'HeroHeader.jsx');
  if (!fs.existsSync(file)) {
    console.log(`NOT FOUND: ${dir}`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');
  const before = content;

  // Replace all <h4 ...> with <p ...> and </h4> with </p>
  content = content.replace(/<h4(\s)/g, '<p$1');
  content = content.replace(/<\/h4>/g, '</p>');

  if (content === before) {
    console.log(`⚠️  No change: ${dir}`);
  } else {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${dir}`);
  }
}
console.log('Done!');
