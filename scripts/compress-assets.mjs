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
  { in: 'desktop.png', out: 'hero-desktop-opt.webp', w: 1920, h: 1080 },
  { in: 'mobile.png', out: 'hero-mobile-opt.webp', w: 828, h: 1200 },
  { in: 'partnership-bg.png', out: 'partnership-bg-opt.webp', w: 1920, h: 1080 },
  { in: 'partner-cta-bg.png', out: 'partner-cta-bg-opt.webp', w: 1600, h: 900 },
  { in: 'c1.jpeg', out: 'c1-opt.webp', w: 576, h: 576 },
  { in: 'c2.jpeg', out: 'c2-opt.webp', w: 576, h: 576 },
  { in: 'c3.PNG', out: 'c3-opt.webp', w: 576, h: 576 },
  { in: 'c4.jpeg', out: 'c4-opt.webp', w: 576, h: 576 },
  { in: 'c5.jpeg', out: 'c5-opt.webp', w: 576, h: 576 },
  { in: 'c6.jpeg', out: 'c6-opt.webp', w: 576, h: 576 },
  { in: 'c7.jpeg', out: 'c7-opt.webp', w: 576, h: 576 },
  { in: 'c8.jpeg', out: 'c8-opt.webp', w: 576, h: 576 },
  { in: 'c9.jpeg', out: 'c9-opt.webp', w: 576, h: 576 },
  { in: 'c10.jpeg', out: 'c10-opt.webp', w: 576, h: 576 },
];

const logoJobs = [
  { in: 'SS7.PNG', out: 'ss7-logo-opt.webp', w: 512, h: 512 },
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

for (const { in: inputName, out, w, h } of logoJobs) {
  const input = path.join(assetsDir, inputName);
  const output = path.join(assetsDir, out);
  await sharp(input)
    .resize(w, h, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(output);
  console.log(`OK ${inputName} -> ${out}`);
}
