/**
 * Represents the homepage. The default page when the user first visits the website or clicks the title/logo.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
import React from "react";
import pic from "../files/framed_wings2.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-10 flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-3/4 pr-0 md:pr-10 flex flex-col justify-center mx-auto">
          <div className="flex justify-between space-x-16">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to My Website!
              </h1>
              <p className="mb-8">
                Hi there! I'm Ben, a software engineer passionate about
                creating amazing web applications. This is my personal website
                where I showcase my projects and share my thoughts on various
                topics. Feel free to explore and get in touch with me if you
                have any questions!
              </p>
              <h2 className="text-2xl font-bold mb-2">
                Fun Section
              </h2>
              <p className="mb-2">
                In this fun section, you can add any interesting content you
                like. It could be a list of your hobbies, a random fact about
                yourself, or even a mini game. Let your creativity run wild!
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={pic} alt="my pic" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
