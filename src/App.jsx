import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import sanityClient from "src/client";
import { setPosts } from "src/features/blog/blogSlice";
import { selectPosts } from "src/features/blog/selectors";
import "./App.css";

import About from "./features/about/components/About";
import Blog from "./features/blog/components/Blog";
import Home from "./features/home/components/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "post"]')
      .then((res) => dispatch(setPosts(res)))
      .catch(console.error);
  }, [dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <main>
      <div>
        <h1 className="text-5xl font-bold text-slate-200">Bradley Blogs</h1>
        <Blog></Blog>
        {posts.map((post) => (
          <div key={post._id}>
            <h3 className="text-slate-500">{post.title}</h3>
            <h6 className="text-slate-600">{post.author._ref}</h6>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
