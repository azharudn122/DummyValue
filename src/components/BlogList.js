// src/components/BlogList.js
import React, { useState, useEffect } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://your-api-url/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
