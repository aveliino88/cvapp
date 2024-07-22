import React, { useState, useEffect, useCallback } from 'react';

const contactInfo = {
  name: "Andis Volkovs",
  title: "Aspiring Developer",
  location: {
    city: "Helsinki",
    region: "Uusimaa",
    country: "Finland"
  },
  phone: "+358452787636",
  email: "andis.v88@gmail.com",
  website: "https://a3v.pro"
};

const WELCOME_MESSAGE = 'Welcome! Type "help" to see available commands.';

const CodePage: React.FC = () => {
  const [terminalContent, setTerminalContent] = useState<string[]>([WELCOME_MESSAGE]);
  const [currentInput, setCurrentInput] = useState('');

  const addToTerminal = useCallback((content: string) => {
    setTerminalContent(prev => [...prev, content]);
  }, []);

  const resetTerminal = useCallback(() => {
    setTerminalContent([WELCOME_MESSAGE]);
  }, []);

  const handleCommand = useCallback((command: string) => {
    addToTerminal(`> ${command}`);
    
    switch(command.toLowerCase()) {
      case 'help':
        addToTerminal('Available commands: name, title, location, phone, email, website, all, exit');
        break;
      case 'name':
        addToTerminal(`Name: ${contactInfo.name}`);
        break;
      case 'title':
        addToTerminal(`Title: ${contactInfo.title}`);
        break;
      case 'location':
        addToTerminal(`Location: ${contactInfo.location.city}, ${contactInfo.location.region}, ${contactInfo.location.country}`);
        break;
      case 'phone':
        addToTerminal(`Phone: ${contactInfo.phone}`);
        break;
      case 'email':
        addToTerminal(`Email: ${contactInfo.email}`);
        break;
      case 'website':
        addToTerminal(`Website: ${contactInfo.website}`);
        break;
      case 'all':
        Object.entries(contactInfo).forEach(([key, value]) => {
          if (typeof value === 'object') {
            addToTerminal(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${Object.values(value).join(', ')}`);
          } else {
            addToTerminal(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
          }
        });
        break;
      case 'exit':
        addToTerminal('Resetting terminal...');
        setTimeout(resetTerminal, 1000); // Reset after a short delay for visual feedback
        break;
      default:
        addToTerminal('Unknown command. Type "help" for available commands.');
    }
  }, [addToTerminal, resetTerminal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput.trim());
      setCurrentInput('');
    }
  };

  return (
  <div className="flex flex-col justify-center p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-green-400 font-mono rounded-lg">
  <h3 className="text-2xl font-semibold tracking-tight text-center mb-4">Some information about me 🙂</h3>
  <div className="bg-white dark:bg-black p-4 rounded-lg overflow-auto h-64 border border-gray-200 dark:border-gray-700">
    {terminalContent.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
    <form onSubmit={handleInputSubmit} className="mt-2 flex">
      <span className="mr-2 text-gray-600 dark:text-green-400">{'>'}</span>
      <input
        type="text"
        value={currentInput}
        onChange={handleInputChange}
        className="flex-grow bg-transparent outline-none text-gray-800 dark:text-green-400"
        autoFocus
      />
    </form>
   </div>
  </div>
  );
};

export default CodePage;