/**
 * Represents the homepage. The default page when the user first visits the website or clicks the title/logo.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
import React from "react";
import styled from 'styled-components';
import pic from "../files/pictures/framed_buffalo_pic.png";

const Home = () => {
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
                Hi, my name is Ben. Earlier this year I was laid off and
                remained unemployed for four months. During that time, I told
                myself I would build a new website for my name's domain. I now
                find myself two weeks [now over a year] into employment, finally
                getting to doing this, and I promise more is coming [no i dont
                lol]. Feel free to check out what I have so far, I will continue
                to add things (at least that's what I am telling myself). For
                the latest content check out the section marked "Latest" below.
                Hopefully I will add some sort of thing below for you to see my
                latest posts/updates,commit history, or something, otherwise
                this is a lil awk
              </p>
              <div className="rounded">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Fun Section
                </h2>
                <p className="mb-2">
                  This was going to be the section where I shared a few hobbies,
                  interests, and a fun fact when I began this project, hoping to
                  use my website as a way to stand out in an application (not
                  that they would look lol). Since I am not writing this as a
                  branding tool anymore, I decided that as time goes on, I will
                  try to make some new pages, hopefully programming cool
                  features or making something fun that I want to share, idrk.
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
