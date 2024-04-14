import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },

  });

  try {
    await transporter.sendMail({
      // from: email, 
      replyTo: email,
      // to: process.env.GMAIL_EMAIL_ADDRESS, 
      to: "john@webdevjohn.com", 
      subject: `New Contact Form Submission from ${name}`,
      html: `<p>You have a new contact form submission:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error("Failed to send email", error);
    return new Response('Failed to send email', { status: 500 });
  }
};


export async function GET(request: Request) {}
 
export async function HEAD(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}