import { runWith } from 'firebase-functions';
import resources from 'utils/resources';

import express from 'express';

const app = express();

app.get('/', (_, res) => res.json({ message: 'success' }));

export default runWith(resources.low).https.onRequest(app);
