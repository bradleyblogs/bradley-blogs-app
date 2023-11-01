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
        <h1 className="text-5xl font-bold text-slate-200">Bradley Blogs</h1>
        {blogs &&
          blogs.map((blog) => (
            <div key={blog._id}>
              <h3 className="text-slate-500">{blog.title}</h3>
              <h6 className="text-slate-600">{blog.author._ref}</h6>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
