const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const quality = 80;
const maxWidth = 2000;

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        if (metadata.width > maxWidth || (stat.size > 1024 * 1024)) { // Resize if > 2000px OR > 1MB
            console.log(`Optimizing: ${filePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
            
            const buffer = await image
                .resize({ width: maxWidth, withoutEnlargement: true })
                .jpeg({ quality: quality }) // Convert everything to JPEG for simplicity/compatibility in this script? No, keep format.
                 // Actually, let's keep format but compress.
                 // Sharp's toBuffer() with no options doesn't compress? 
                 // We need to know format.
            if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
                 await image.jpeg({ quality, mozjpeg: true }).toFile(filePath + '.tmp');
            } else if (metadata.format === 'png') {
                 await image.png({ quality, compressionLevel: 8 }).toFile(filePath + '.tmp');
            } else if (metadata.format === 'webp') {
                 await image.webp({ quality }).toFile(filePath + '.tmp');
            } else if (metadata.format === 'avif') {
                 await image.avif({ quality, effort: 4 }).toFile(filePath + '.tmp');
            } else {
                 console.log(`Skipping unknown format optimization logic for ${file}, just resizing if needed.`);
                  await image.resize({ width: maxWidth, withoutEnlargement: true }).toFile(filePath + '.tmp');
            }
            
            fs.unlinkSync(filePath);
            fs.renameSync(filePath + '.tmp', filePath);
            console.log(`Done.`);
        }
      } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
      }
    }
  }
}

console.log('Starting source image optimization...');
processDirectory(inputDir).then(() => console.log('All images processed.'));
