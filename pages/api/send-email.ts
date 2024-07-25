import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import axios from 'axios';

type Data = {
  message: string
}

type ErrorData = {
  error: string
}

// Improved input validation
function validateInput(name: string, email: string, message: string): boolean {
  if (typeof name !== 'string' || name.length < 2 || name.length > 100) return false;
  if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) return false;
  if (typeof message !== 'string' || message.length < 10 || message.length > 1000) return false;
  return true;
}

async function verifyCaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await axios.post(verifyUrl);
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

// Rate limiting (simple in-memory implementation)
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
const requestCounts: { [key: string]: { count: number, timestamp: number } } = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (!requestCounts[ip] || now - requestCounts[ip].timestamp > RATE_LIMIT_WINDOW) {
    requestCounts[ip] = { count: 1, timestamp: now };
    return false;
  }
  if (requestCounts[ip].count >= MAX_REQUESTS) return true;
  requestCounts[ip].count++;
  return false;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Check rate limit
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (typeof clientIp === 'string' && isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests, please try again later' });
  }

  const { name, email, message, captchaToken } = req.body as { name: string; email: string; message: string; captchaToken: string };

  // Input validation
  if (!validateInput(name, email, message)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Verify reCAPTCHA
  const isHuman = await verifyCaptcha(captchaToken);
  if (!isHuman) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string),
    secure: true, // Use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      // HTML version for better formatting
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}