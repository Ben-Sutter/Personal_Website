/**
 * Renders a blog page with a list of blog posts.
 *
 * @returns {JSX.Element} The rendered blog page.
 */
import React from "react";
import "../styles/generated.css";

const Blog = () => {
  // Array of blog post data
  const blogPosts = [
    {
      title: "First Blog Post",
      author: "John Doe",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Second Blog Post",
      author: "Jane Smith",
      date: "2022-01-05",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more blog posts as needed
  ];
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 p-10">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {post.author} - {post.date}
            </p>
            <p className="text-lg">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
