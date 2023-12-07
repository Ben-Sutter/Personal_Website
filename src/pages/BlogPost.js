// import React from "react";
// import "../styles/generated.css";
// import MarkdownIt from 'markdown-it';
// import post1 from '../posts/post1.md';
// import post2 from '../posts/post2.md';

// const md = new MarkdownIt();

// const Blog = () => {
//   const blogPosts = [post1, post2].map(data => {
//     const result = md.parse(data, {});

//     return {
//       title: result[1].content,
//       date: result[2].content,
//       content: result.slice(6).map(token => token.content).join('\n')
//     };
//   });

//   return (
//     <div className="flex justify-center">
//       <div className="w-full md:w-3/4 p-10">
//         <h1 className="text-4xl font-bold mb-4">Blog</h1>
//         {blogPosts.map((post, index) => (
//           <div key={index} className="mb-8">
//             <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
//             <h4 className="text-lg mb-2">{post.date}</h4>
//             <p className="text-base">{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;