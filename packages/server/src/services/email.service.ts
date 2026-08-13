import { Resend, type CreateEmailOptions } from 'resend';

type SendMailOptions = Omit<CreateEmailOptions, 'from'>;

class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  sendMail(options: SendMailOptions) {
    const updatedOptions = {
      ...options,
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
    } as CreateEmailOptions;

    return this.resend.emails.send(updatedOptions);
  }
}

export default new EmailService();
