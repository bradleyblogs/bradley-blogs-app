import { useEffect, useState } from "react";
import sanityClient from "./client";

import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "post"]')
      .then(setBlogs)
      .catch(console.error);
  }, [setBlogs]);

  return (
    <main>
      <div>
        <h1>Blogs</h1>
        {blogs &&
          blogs.map((blog) => (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
              <h6>{blog.author._ref}</h6>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
