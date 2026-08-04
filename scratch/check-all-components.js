const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../components/seo-service/bus-accidents-lawyer-largo');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const h1 = (content.match(/<h1/g) || []).length;
  const h2 = (content.match(/<h2/g) || []).length;
  const h3 = (content.match(/<h3/g) || []).length;
  const h4 = (content.match(/<h4/g) || []).length;
  const h5 = (content.match(/<h5/g) || []).length;
  console.log(`${file}: h1=${h1}, h2=${h2}, h3=${h3}, h4=${h4}, h5=${h5}`);
}
