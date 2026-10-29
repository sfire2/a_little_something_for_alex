import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from './server.mjs';
serve(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist'), Number(process.env.PORT) || 4173);
