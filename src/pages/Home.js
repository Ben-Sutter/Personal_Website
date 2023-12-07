/**
 * Represents the homepage. The default page when the user first visits the website or clicks the title/logo.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
import React, { useState, useEffect } from "react";
import pic from "../files/pictures/framed_buffalo_pic.png";
import introFile from "../files/general_text/intro.txt";
import funSectionFile from "../files/general_text/funSection.txt";


const Home = () => {
  const [introText, setIntroText] = useState("");
  const [funSectionText, setFunSectionText] = useState("");

  useEffect(() => {
    fetch(introFile)
      .then((response) => response.text())
      .then((data) => setIntroText(data))
      .catch((error) => console.log(error));

    fetch(funSectionFile)
      .then((response) => response.text())
      .then((data) => setFunSectionText(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full p-10 flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-7/8 lg:w-7/8 xl:w-7/8 pr-0 md:pr-10 flex flex-col justify-center mx-auto">
          <div className="flex justify-between space-x-4 md:space-x-16">
            <div className="w-full md:w-1/2 text-purple-950">
              <h1 className="text-4xl font-bold mb-4 text-center">
                Welcome to My Website!
              </h1>
              <p className="mb-8">
                {introText}
              </p>
              <div className="rounded">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Fun Section
                </h2>
                <p className="mb-2">
                  {funSectionText}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={pic} alt="my pic" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
