import { LoginResponse, RegisterResponse } from '../types/user/userResponse';
import { LoginInput, RegisterInput } from '../types/user/userInput';
import { User } from '../entity/User';
import { hash, compare } from 'bcrypt';
import { createToken } from '../utils/token';
import { Service } from 'typedi';
import { UserRepository } from '../repositories/UserRepository';

@Service()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(data: LoginInput): Promise<LoginResponse> {
    const { email, password } = data;

    try {
      const userLogged: User | undefined = await this.userRepository.getUserByEmail(email);

      if (!userLogged) {
        throw new Error('User not found');
      }

      const valid: boolean = await compare(password, userLogged.password);

      if (!valid) {
        throw new Error('Invalid password');
      }

      return {
        token: createToken(userLogged),
        user: userLogged
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async register(data: RegisterInput): Promise<RegisterResponse> {
    try {
      const userExists = await this.userRepository.getUserByEmail(data.email);

      if (userExists) {
        return {
          response: 'User already exist'
        };
      }

      const hashPassword = await hash(data.password, 12);

      data.password = hashPassword;

      const createdUser = await this.userRepository.create(data);

      return {
        response: 'User created Succesfully',
        user: createdUser
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      return await this.userRepository.getAll();
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
