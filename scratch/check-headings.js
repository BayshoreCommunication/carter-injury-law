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
  const file = path.join(base, dir, 'WhyRightLawyerSection.jsx');
  if (!fs.existsSync(file)) {
    console.log(`NOT FOUND: ${dir}`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');
  const h3Matches = content.match(/<h3/g) || [];
  const h4Matches = content.match(/<h4/g) || [];
  const h2Matches = content.match(/<h2/g) || [];
  console.log(`${dir}: h2=${h2Matches.length}, h3=${h3Matches.length}, h4=${h4Matches.length}`);
}
