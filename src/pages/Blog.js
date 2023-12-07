import React, { useState, useEffect } from "react";
import "../styles/generated.css";
import axios from 'axios';


const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 p-10">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <h4 className="text-lg mb-2">{post.date}</h4>
            <p className="text-base">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;