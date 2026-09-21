import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filesToConvert = [
  'public/hero-bg.png',
  'public/wp-content/uploads/2024/11/5.png',
  'public/wp-content/uploads/2024/11/2-2.png',
  'public/wp-content/uploads/2024/11/3-1.png',
  'public/wp-content/uploads/2024/11/5-1.png',
  'public/wp-content/uploads/2024/11/1-1.png',
  'public/wp-content/uploads/elementor/thumbs/Untitled-design-11-1-qxpyb3itkifdvskhhkq3ijtvl30u2qvkjg63o0txzs.png'
];

async function convert() {
  const results = [];
  
  for (const file of filesToConvert) {
    const fullPath = path.resolve(file);
    if (!fs.existsSync(fullPath)) {
      console.log(`Missing: ${file}`);
      continue;
    }

    const { size: originalSize } = fs.statSync(fullPath);
    const parsedPath = path.parse(fullPath);
    const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    await sharp(fullPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);

    const { size: webpSize } = fs.statSync(webpPath);
    
    results.push({
      file,
      originalSizeKB: (originalSize / 1024).toFixed(2),
      webpSizeKB: (webpSize / 1024).toFixed(2),
      reductionPercentage: ((1 - webpSize / originalSize) * 100).toFixed(2)
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

convert().catch(console.error);
