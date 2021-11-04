import UserModel, { IUser } from 'models/user';
import UserRepository from 'repositories/user';

class GetUserByNameController {
  async execute(name: string): Promise<IUser> {
    const userRepository = new UserRepository();
    const userModel = new UserModel({ name });

    try {
      const user = await userRepository.getUserByName(userModel);

      return user;
    } catch (ex) {
      return Promise.reject(ex);
    }
  }
}

export default GetUserByNameController;
