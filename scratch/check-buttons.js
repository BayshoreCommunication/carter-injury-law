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

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('<button') && !line.includes('type="submit"') && !line.includes('toggle(') && !line.includes('/contact')) {
      console.log(`${path.relative(baseDir, file)}:${idx + 1} -> ${line.trim()}`);
    }
  });
}
