import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

const jobs = [
  { in: 'court.png', out: 'court-opt.webp', w: 1920, h: 1080 },
  { in: 'location.png', out: 'location-opt.webp', w: 1600, h: 900 },
  { in: 'footer.png', out: 'footer-opt.webp', w: 1920, h: 600 },
  { in: 'home-bg.png', out: 'home-bg-opt.webp', w: 1920, h: 1080 },
  { in: 'partnership-bg.png', out: 'partnership-bg-opt.webp', w: 1920, h: 1080 },
  { in: 'partner-cta-bg.png', out: 'partner-cta-bg-opt.webp', w: 1600, h: 900 },
];

for (const { in: inputName, out, w, h } of jobs) {
  const input = path.join(assetsDir, inputName);
  const output = path.join(assetsDir, out);
  await sharp(input)
    .resize(w, h, { fit: 'cover', withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(output);
  console.log(`OK ${inputName} -> ${out}`);
}
