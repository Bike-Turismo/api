import { runWith } from 'firebase-functions';
import resources from 'utils/resources';

import express from 'express';

const app = express();

app.get('/', (_, res) => res.send('Hello world'));

export default runWith(resources.low).https.onRequest(app);
