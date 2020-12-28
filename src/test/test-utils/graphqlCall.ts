/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { graphql, GraphQLSchema } from 'graphql';

import { createSchema } from '../../utils/createSchema';

let schema: GraphQLSchema;

export const graphqlCall = async ({ source, variableValues }: any) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    variableValues
  });
};
