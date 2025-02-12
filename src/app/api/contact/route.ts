import {
  getMailTransport,
  handleServerError,
  serverErrorResponse,
} from '@/api-utils/helpers';
import { MY_EMAIL } from '@/utils/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email: fromEmail, name, subject, message } = body;
    const transporter = getMailTransport();

    const mailOptions = {
      from: fromEmail,
      to: MY_EMAIL,
      subject: subject ? subject : 'Contact Form Submission',
      text: `Email From: ${fromEmail}\nName: ${name}\n\n${message}`,
      replyTo: fromEmail,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(null, { status: 201 });
  } catch (err) {
    handleServerError({
      err,
      key: 'contact',
    });
    return serverErrorResponse();
  }
}
