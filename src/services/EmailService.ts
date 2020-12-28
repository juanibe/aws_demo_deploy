import nodemailer from 'nodemailer';
import { config } from '../config';
import { Service } from 'typedi';
@Service()
export class EmailService {
  async sendEmail(message: any): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: config.email.user,
          pass: config.email.password
        }
      });
      await transporter.sendMail(message);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
