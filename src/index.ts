/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection, getConnectionOptions } from 'typeorm';
import UserResolver from './resolvers/UserResolver';
import { Container } from 'typedi';

const app: express.Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const main = async () => {
  const port = config.port || 4000;
  const options = await getConnectionOptions(config.enviroment);
  const dbConnection = await createConnection({ ...options, name: 'default' });
  await dbConnection.runMigrations();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      container: Container
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
  });
};

main();

//CAMIOOO
