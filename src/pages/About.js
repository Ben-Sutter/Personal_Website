/**
 * Renders the About page component.
 * 
 * @returns {JSX.Element} The rendered About page component.
 */
import React from 'react';
import '../styles/generated.css';

const About = () => {
  return (
    <div className="flex justify-center">
    <div className="w-full md:w-3/4 p-10">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">Welcome to my personal website! My name is Ben Sutter.</p>
    </div>
    </div>
  );
};

export default About;