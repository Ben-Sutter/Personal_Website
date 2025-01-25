/**
 * Renders a contact form component.
 *
 * @returns {JSX.Element} The Contact component.
 */

import React, { useState } from "react";
import "../styles/generated.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    submitted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", formState.name);
    console.log("Email:", formState.email);
    console.log("Phone Number:", formState.phoneNumber);
    console.log("Message:", formState.message);
    setFormState({ ...formState, submitted: true });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 p-10">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        {formState.submitted ? (
          <p>Thank you for your message. We will get back to you soon.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
          >
            {/* Hidden field for Netlify form handling */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field to prevent spam submissions */}
            <div style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human:
                <input type="text" name="bot-field" />
              </label>
            </div>
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </label>
            <div className="flex">
              <label className="block w-1/2 pr-2">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
              <label className="block w-1/2 pl-2">
                <span className="text-gray-700">Phone Number</span>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formState.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </label>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              netlify
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
