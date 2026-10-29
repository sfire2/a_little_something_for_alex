import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
if (!out.startsWith(root + path.sep)) throw new Error('Refusing to write outside the project folder.');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(out, 'index.html'));
fs.cpSync(path.join(root, 'src'), path.join(out, 'src'), { recursive: true });
const publicDir = path.join(root, 'public');
if (fs.existsSync(publicDir)) fs.cpSync(publicDir, path.join(out, 'public'), { recursive: true });
console.log('Production files written to dist/.');
