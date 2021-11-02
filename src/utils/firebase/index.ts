import admin, { initializeApp, credential, ServiceAccount, auth, firestore } from 'firebase-admin';
import { logger } from 'firebase-functions';
import dataPoint from './data-point';

try {
  const serviceAccountCredentials: ServiceAccount = require("../../../service-account-file.json");

  initializeApp({
    credential: credential.cert(serviceAccountCredentials),
  });
} catch (ex) {
  logger.warn("Error on importing service account, this application can only access locally resources", ex);

  initializeApp({});
}

const db = firestore();

const authentication = auth();

export default admin;

export { db, authentication as auth, dataPoint };
