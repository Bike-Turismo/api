import { runWith, logger } from 'firebase-functions';
import UserModel, { IUser } from 'models/user';
import resources from 'utils/resources';

export default runWith(resources.low).firestore.document('users/{userId}').onCreate((snap, context) => {
  const userData: IUser = snap.data();
  const userModel = new UserModel(userData);

  logger.info(`welcome ${userModel.name} at ${context.timestamp}.`);
});
