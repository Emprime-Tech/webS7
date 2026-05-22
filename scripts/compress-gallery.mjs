import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

const files = ['p1.jpeg', 'p2.jpeg', 'p3.jpeg', 'p4.jpeg', 'p5.jpeg', 'p6.jpeg'];

for (const file of files) {
  const input = path.join(assetsDir, file);
  const output = path.join(assetsDir, file.replace('.jpeg', '-opt.webp'));
  await sharp(input)
    .resize(640, 480, { fit: 'cover', withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(output);
  console.log(`OK ${file} -> ${path.basename(output)}`);
}
