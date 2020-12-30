import { Field, InputType } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class RegisterInput {
  @Length(2, 40)
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @IsEmail()
  @Field()
  email: string;

  @Length(5, 30)
  @Field()
  password: string;
}

//asdas
