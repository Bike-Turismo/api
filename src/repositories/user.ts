import AppError from 'errors/app-error';
import UserModel, { IUser } from 'models/user';
import { dataPoint } from 'utils/firebase';

class UserRepository {
  public static readonly collection = 'users';

  private dataPoint() {
    return dataPoint<IUser>(UserRepository.collection);
  }

  public async getUserByName({ name }: UserModel) {
    try {
      const query = await this.dataPoint()
        .where('name', '==', name)
        .get()
        .catch(() => Promise.reject(new AppError('Query exception when finding user by name')));

      if (query.empty) {
        throw new AppError('User not found by name');
      }
      const doc = query.docs[0];
      if (doc.exists) {
        const data = doc.data();

        return data;
      }
      throw new AppError('User does not exist');
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default UserRepository;
