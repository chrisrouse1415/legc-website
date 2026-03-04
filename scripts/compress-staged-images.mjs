import sharp from 'sharp';
import { stat, writeFile } from 'fs/promises';

const files = process.argv.slice(2);

function formatKB(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

for (const file of files) {
  try {
    const { size: before } = await stat(file);
    const { format } = await sharp(file).metadata();

    let buffer;
    if (format === 'jpeg') {
      buffer = await sharp(file).jpeg({ quality: 85, progressive: true }).toBuffer();
    } else if (format === 'png') {
      buffer = await sharp(file).png({ compressionLevel: 9 }).toBuffer();
    } else if (format === 'webp') {
      buffer = await sharp(file).webp({ quality: 85 }).toBuffer();
    } else {
      console.log(`  Skipping ${file} (unsupported format: ${format})`);
      continue;
    }

    if (buffer.length < before) {
      await writeFile(file, buffer);
      const saving = Math.round((1 - buffer.length / before) * 100);
      console.log(`  ${file}: ${formatKB(before)} -> ${formatKB(buffer.length)} (-${saving}%)`);
    } else {
      console.log(`  ${file}: already optimized, skipping`);
    }
  } catch (err) {
    console.error(`  Error processing ${file}: ${err.message}`);
  }
}
