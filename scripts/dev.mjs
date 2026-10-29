import { serve, root } from './server.mjs';
serve(root, Number(process.env.PORT) || 5173);
