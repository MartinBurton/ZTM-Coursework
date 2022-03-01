import express  from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const root = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(root + '/public'));

app.listen(3000);
