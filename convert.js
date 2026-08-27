import fs from 'fs';
import { Resvg } from '@resvg/resvg-js';

const svg = fs.readFileSync('public/favicon.svg', 'utf8');
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();
fs.writeFileSync('public/og-image.png', pngBuffer);
