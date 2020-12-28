import { Connection } from 'typeorm';
import faker from 'faker';
import { testConn } from '../../test-utils/conection';
import { graphqlCall } from '../../test-utils/graphqlCall';
import { User } from '../../../entity/User';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(
    input: $data
  ) {
      response
      user {
        id
        firstName
        lastName
        email
      }
  }
}
`;

describe('Register', () => {
  it('create new user', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    const response = await graphqlCall({
      source: registerMutation,
      variableValues: {
        data: user
      }
    });
    expect(response).toMatchObject({
      data: {
        register: {
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          }
        }
      }
    });

    const dbUser = await User.findOne({ where: { email: user.email } });
    expect(dbUser).toBeDefined();
    expect(dbUser?.confirmed).toBeFalsy();
    expect(dbUser?.firstName).toBe(user.firstName);
  });
});
