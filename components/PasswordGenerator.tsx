"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface PasswordOptions {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

type CharSetKey = keyof PasswordOptions;

const charSets: Record<CharSetKey, string> = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [length, setLength] = useState<number>(12);
  const [options, setOptions] = useState<PasswordOptions>({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  });

  const generatePassword = (): void => {
    let charset = '';
    let newPassword = '';

    // Add at least one character from each selected set
    (Object.keys(options) as CharSetKey[]).forEach((option) => {
      if (options[option]) {
        charset += charSets[option];
        newPassword += charSets[option][Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * charSets[option].length)];
      }
    });

    // Fill the rest of the password
    for (let i = newPassword.length; i < length; i++) {
      newPassword += charset[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * charset.length)];
    }

    // Shuffle the password
    newPassword = newPassword.split('').sort(() => 0.5 - Math.random()).join('');

    setPassword(newPassword);
    setCopied(false);
  };

  const copyPassword = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
      // Handle copy error here
    }
  };

  return (
    <div className='mt-5 flex flex-col items-center'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center mb-5">Password Generator</h2>
      
      <div className="mb-4">
        <label className="block text-md font-medium text-black dark:text-white">Password Length: {length}</label>
        <Slider min={8} max={32} step={1} value={[length]} onValueChange={(value) => setLength(value[0])} />
      </div>

      <div className="mb-4 space-y-2">
        {(Object.keys(options) as CharSetKey[]).map((option) => (
          <div key={option} className="flex items-center">
            <Checkbox
              id={option}
              checked={options[option]}
              onCheckedChange={(checked: boolean) => setOptions(prev => ({ ...prev, [option]: checked }))}
            />
            <label htmlFor={option} className="ml-2 text-md font-medium text-black dark:text-white">
              Include {option}
            </label>
          </div>
        ))}
      </div>

      <Button variant="secondary" onClick={generatePassword}>Generate Password</Button>

      {password && (
        <div className="mt-5">
          <small className="text-sm font-medium leading-none">Your generated password:</small>
          <p className='mt-2 flex justify-center border-2 border-green-600 rounded select-all text-lg p-2'>{password}</p>
          <div className='mt-3 flex justify-center'>
            <Button
              variant={copied ? 'default' : 'outline'}
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