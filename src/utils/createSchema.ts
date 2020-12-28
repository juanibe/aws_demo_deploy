/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { buildSchema } from 'type-graphql';

import UserResolver from '../resolvers/UserResolver';

export const createSchema = () =>
  buildSchema({
    resolvers: [UserResolver]
  });
