import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { LoginResponse, RegisterResponse } from '../types/user/userResponse';
import { LoginInput, RegisterInput } from '../types/user/userInput';
// import * as UserService from '../services/UserService';
import { User } from '../entity/User';
import { UserService } from '../services/UserService';

@Resolver()
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => LoginResponse)
  async login(@Arg('input') data: LoginInput): Promise<LoginResponse> {
    try {
      const response = await this.userService.login(data);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  @Mutation(() => RegisterResponse)
  async register(@Arg('input') data: RegisterInput): Promise<RegisterResponse> {
    try {
      const response = await this.userService.register(data);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    try {
      const response = await this.userService.getUsers();
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
