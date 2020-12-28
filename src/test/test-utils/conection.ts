/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createConnection } from 'typeorm';

export const testConn = (drop = false) => {
  return createConnection({
    name: 'default',
    type: 'sqlite',
    database: 'test.sqlite',
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + '/../../entity/*.*']
  });
};
