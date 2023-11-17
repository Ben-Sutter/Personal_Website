import React from 'react';
import '../styles/generated.css';
import resume from '../files/resume.pdf'; // Import the PDF

const Resume = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <embed src={resume} type="application/pdf" width="100%" height="600px" className="shadow-lg rounded" />
    </div>
  );
};

export default Resume;