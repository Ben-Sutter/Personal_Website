import React from 'react';
import pic from '../files/wingpic.png';

const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full p-10 flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-3/4 pr-0 md:pr-10">
                    <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Website!</h1>
                    <p className="mb-4 text-center">
                        Hi there! I'm Ben, a software developer passionate about creating amazing web applications.
                        This is my personal website where I showcase my projects and share my thoughts on various topics.
                        Feel free to explore and get in touch with me if you have any questions or collaboration ideas!
                    </p>
                    <div className="mb-4">
                        <img src={pic} alt="my pic" className="w-full h-auto mx-auto" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-center">Fun Section</h2>
                        <p className="text-center">
                            In this fun section, you can add any interesting content you like. It could be a list of your hobbies,
                            a random fact about yourself, or even a mini game. Let your creativity run wild!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/6 mt-10 md:mt-0 md:ml-auto">
                    <h2 className="text-2xl font-bold mb-2 text-center">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/blog" className="text-blue-600 hover:underline">Blog</a></li>
                        <li><a href="/resume" className="text-blue-600 hover:underline">Resume</a></li>
                        <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
                        <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;