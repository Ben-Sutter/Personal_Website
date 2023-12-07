import React, { useState, useEffect } from "react";
import "../styles/generated.css";
import MarkdownIt from 'markdown-it';
import axios from 'axios';

const md = new MarkdownIt();

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const dirResponse = await axios.get('https://api.github.com/repos/username/repo/contents/posts');
      const mdFiles = dirResponse.data.filter(file => file.name.endsWith('.md'));
  
      const posts = [];
      for (const file of mdFiles) {
        const fileResponse = await axios.get(file.download_url);
        const result = md.parse(fileResponse.data, {});
  
        const post = {
          title: result[1].content,
          date: result[2].content,
          content: result.slice(6).map(token => token.content).join('\n')
        };
        posts.push(post);
      }
      setBlogPosts(posts);
    };
  
    loadPosts();
  }, []);

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