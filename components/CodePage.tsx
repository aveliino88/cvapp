import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, dark, nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const codeString = `
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

console.log(contactInfo);
`;

const CodePage = () => {
  return (
    <div className='flex flex-col justify-center'>
       <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight flex justify-center">Contact Me 🙂 </h3>
      <SyntaxHighlighter language="javascript" style={nightOwl} wrapLines={true}
       customStyle={{ padding: '20px', borderRadius: '15px', }}
       lineProps={{ style: { wordBreak: 'break-all' } }}
       >
        {codeString}
      </SyntaxHighlighter>
      </div>
  );
};

export default CodePage;
