import { ObjectType, Field } from 'type-graphql';
import { User } from '../../entity/User';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}

@ObjectType()
export class RegisterResponse {
  @Field()
  response: string;

  @Field({ nullable: true })
  user?: User;
}
