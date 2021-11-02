import { runWith } from 'firebase-functions';
import resources from 'utils/resources';
import { GetUserByNameController } from 'controllers/user';

import express from 'express';

const app = express();

app.get('/:name', (req, res) => {
  const getUserByNameController = new GetUserByNameController;

  const { name } = req.params;

  if (!name) {
    return res.status(400).json({ message: 'Name invalid' });
  }

  return getUserByNameController.execute(name)
    .then(result => res.json(result))
    .catch(err => res.status(err.statusCode || 500).json({ message: err.message }));
});

export default runWith(resources.low).https.onRequest(app);
