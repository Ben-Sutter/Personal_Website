import React, { useState } from 'react';
import '../styles/generated.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <form name="contact" netlify className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone Number</span>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default Contact;