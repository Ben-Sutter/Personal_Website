/**
 * Renders the Resume page component.
 * @returns {JSX.Element} The rendered Resume page component.
 */
import React from "react";
import "../styles/generated.css";
import resume from "../files/resume.pdf"; // Import the PDF

const Resume = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 p-10">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <embed
          src={resume}
          type="application/pdf"
          width="100%"
          height="600px"
          className="shadow-lg rounded"
        />
      </div>
    </div>
  );
};

export default Resume;
