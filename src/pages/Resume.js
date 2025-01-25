/**
 * Renders the Resume page component.
 * @returns {JSX.Element} The rendered Resume page component.
 */
import React from "react";
import "../styles/generated.css";
import resume from "../files/resume.pdf"; // Import the PDF

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full md:w-3/4 lg:w-2/3 p-6">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Resume</h1>
            <p className="text-gray-600">
              View my resume below. Thanks for checking it out!
            </p>
          </div>
          <div className="p-6 bg-gray-50">
            <embed
              src={resume}
              type="application/pdf"
              width="100%"
              height="700px"
              className="shadow-lg rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
