"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false); // New state to track copy status

  const generatePassword = (length = 12) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
    setCopied(false); // Reset copied state when generating a new password
  };

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true); // Set copied state to true on successful copy
    } catch (err) {
      console.error('Failed to copy password:', err);
      // Handle copy error here, if desired (e.g., display an error message)
    }
  };

  return (
    <div className='mt-5 flex flex-col items-center'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center mb-5">Password Generator</h2>
      <Button variant="secondary" onClick={() => generatePassword()}>Generate Password</Button>
      {password && (
        <div>
          <small className="text-sm font-medium leading-none mt-5">This is your password</small>
          <p className='mt-5 flex justify-center border-2 border-green-600 rounded select-all text-lg'>{password}</p>
          <div className='mt-5 flex justify-center'>
            <Button
              variant={copied ? 'default' : 'outline'} // Change button style based on copied state
              onClick={copyPassword}
            >
              {copied ? 'Copied!' : 'Copy Password'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;