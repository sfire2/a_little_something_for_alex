import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentTypes = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.mp3':'audio/mpeg', '.ogg':'audio/ogg', '.wav':'audio/wav', '.m4a':'audio/mp4' };
export function serve(directory, port) {
  const base = path.resolve(directory);
  const server = http.createServer((req, res) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end('Bad request'); return; }
    let target = path.resolve(base, `.${pathname}`);
    if (!target.startsWith(base + path.sep) && target !== base) { res.writeHead(403).end('Forbidden'); return; }
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
      if (pathname !== '/' && path.extname(pathname)) { res.writeHead(404).end('Not found'); return; }
      target = path.join(base, 'index.html');
    }
    res.writeHead(200, { 'Content-Type': contentTypes[path.extname(target)] || 'application/octet-stream', 'Cache-Control':'no-cache' });
    fs.createReadStream(target).pipe(res);
  });
  let currentPort = port;
  server.on('listening', () => console.log(`Birthday Quest ready at http://localhost:${currentPort}`));
  const listen = candidate => {
    currentPort = candidate;
    server.once('error', error => {
      if (error.code === 'EADDRINUSE' && candidate < port + 20) {
        console.log(`Port ${candidate} is busy; trying ${candidate + 1}.`);
        listen(candidate + 1);
      } else throw error;
    });
    server.listen(candidate, '127.0.0.1');
  };
  listen(port);
}
export { root };
