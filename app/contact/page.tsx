"use client";
import { useState, useRef } from 'react';
import type { NextPage } from 'next';
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (formData.name.trim().length < 2) {
      setStatus('Name must be at least 2 characters long');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus('Please enter a valid email address');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setStatus('Message must be at least 10 characters long');
      return false;
    }
    if (!captchaToken) {
      setStatus('Please complete the CAPTCHA');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');

    if (!validateForm()) {
      return;
    }

    setStatus('Sending...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken('');
        recaptchaRef.current?.reset();
      } else {
        setStatus(`Failed to send message: ${data.error}`);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token || '');
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              minLength={2}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              minLength={10}
              maxLength={500}
            />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={handleCaptchaChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {status && <p className="text-sm text-center w-full">{status}</p>}
      </CardFooter>
    </Card>
  );
};

export default Contact;