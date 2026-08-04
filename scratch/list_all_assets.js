const fs = require('fs');
const path = require('path');

const publicAssetsDir = path.join(__dirname, '..', 'public', 'assets');

function listImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      listImages(filePath, fileList);
    } else if (/\.(png|jpg|jpeg|webp|svg)$/i.test(file)) {
      fileList.push(path.relative(publicAssetsDir, filePath));
    }
  });
  return fileList;
}

const images = listImages(publicAssetsDir);
console.log(`Found ${images.length} images in public/assets:`);
images.forEach(img => console.log(img));
