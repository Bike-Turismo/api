import { runWith } from 'firebase-functions';
import resources from '../../utils/resources';

import express from 'express';

const app = express();

app.get('/', (_, res) => {
  return res.json({ message: 'success' });
});

export default runWith(resources.low).https.onRequest(app);