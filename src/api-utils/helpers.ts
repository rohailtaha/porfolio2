import { MY_EMAIL } from '@/utils/constants';
import nodemailer from 'nodemailer';
import {
  APP_ENV,
  EMAIL_SERVER_PASSWORD,
  EMAIL_SERVICE,
  SERVER_ERROR_MESSAGE,
} from './constants';

export function getProtocol(): string {
  return process.env.PROTOCOL!;
}

export function getDomain(): string {
  return process.env.DOMAIN!;
}

export function getAbsoluteUrl(path: string = ''): string {
  return `${getProtocol()}://${getDomain()}${path}`;
}

export function getMailTransport() {
  return nodemailer.createTransport({
    service: EMAIL_SERVICE,
    auth: {
      user: MY_EMAIL,
      pass: EMAIL_SERVER_PASSWORD,
    },
  });
}

export function serverErrorResponse(message?: string): Response {
  return Response.json(
    {
      error: {
        type: 'server-error',
        message: message ?? SERVER_ERROR_MESSAGE,
      },
    },
    {
      status: 500,
    }
  );
}

export function handleServerError({
  err,
  key,
  subject,
  metadata = {},
}: {
  err: any;
  key: string;
  subject?: string;
  metadata?: Record<any, any>;
}) {
  console.error('**************** SERVER ERROR ****************');
  console.error('Key: ', key);
  console.error('Error:\n', err);
  console.error('\n\n');

  return sendEmailForServerError({
    err,
    subject: subject ?? `Error with key: ${key}`,
    key,
    metadata,
  });
}

function sendEmailForServerError({
  err,
  key,
  subject,
  metadata = {},
}: {
  err: any;
  key: string;
  subject?: string;
  metadata?: Record<any, any>;
}): Promise<any> {
  if (APP_ENV !== 'production') {
    return Promise.resolve();
  }

  let emailContent = `
      <h2>Error Report</h2>
      <p><strong>Error Message:</strong> ${err.message}</p>
      <pre><strong>Stack Trace:</strong> ${err.stack}</pre>\n`;

  emailContent += generateServerErrorEmailContent(metadata);

  return getMailTransport()
    .sendMail({
      to: MY_EMAIL,
      subject: subject ?? `Error with key: ${key}`,
      html: emailContent,
    })
    .catch(err => {
      console.error('Error in sending email for server error report:\n' + err);
    });
}

function generateServerErrorEmailContent(data: Record<any, any>): string {
  let content = '';
  Object.keys(data).forEach(key => {
    const value =
      typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key];
    content += `<p><strong>${key}: </strong>${value}</p>\n`;
  });
  return content;
}
