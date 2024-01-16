// App.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('https://localhost:5001/blogs'); // Update with your API URL
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
