import React from 'react';
import '../styles/generated.css';

const Blog = () => {
  // Array of blog post data
  const blogPosts = [
    {
      title: 'First Blog Post',
      author: 'John Doe',
      date: '2022-01-01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Second Blog Post',
      author: 'Jane Smith',
      date: '2022-01-05',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
