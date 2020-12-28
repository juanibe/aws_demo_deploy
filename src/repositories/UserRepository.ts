import { RegisterInput } from '../types/user/userInput';
import { User } from '../entity/User';
import { Service } from 'typedi';

@Service()
export class UserRepository {
  async getUserByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }

  async create(data: RegisterInput): Promise<User> {
    const createdUser = await User.create(data);
    createdUser.save();
    return createdUser;
  }

  async getAll(): Promise<User[]> {
    return await User.find();
  }
}
