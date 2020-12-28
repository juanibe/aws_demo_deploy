import { User } from '../entity/User';
import { sign } from 'jsonwebtoken';
import { config } from '../config';

export const createToken = (userLoged: User): string => {
  return sign({ userId: userLoged.id }, config.tokenSecret, { expiresIn: '7d' });
};
