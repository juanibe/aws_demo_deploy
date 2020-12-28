export const config = {
  enviroment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  email: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD
  },
  tokenSecret: process.env.TOKEN_SECRET || 'test'
};
