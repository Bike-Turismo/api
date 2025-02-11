import admin, {
  initializeApp, credential, ServiceAccount, auth, firestore,
} from 'firebase-admin';
import { logger } from 'firebase-functions';
import dataPoint from './data-point';

try {
  // eslint-disable-next-line global-require
  const serviceAccountCredentials: ServiceAccount = require('../../../.serviceaccount.json');

  initializeApp({
    credential: credential.cert(serviceAccountCredentials),
  });
} catch (ex) {
  logger.warn('Error on importing service account, this application can only access locally resources', ex);

  initializeApp({});
}

const db = firestore();

const authentication = auth();

export default admin;

export { db, authentication as auth, dataPoint };
