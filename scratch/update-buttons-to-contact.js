const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.jsx') || name.endsWith('.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const baseDir = path.join(__dirname, '../components/seo-service');
const files = getFiles(baseDir);

let count = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('scrollTo')) {
    const newContent = content.replace(/window\.scrollTo\([^)]*\)/g, "window.location.href = '/contact'");
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated: ${path.relative(baseDir, file)}`);
    count++;
  }
}

console.log(`Done! Replaced scrollTo in ${count} files.`);
