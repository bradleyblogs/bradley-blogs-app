import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import sanityClient from "src/client";
import { setPosts } from "src/pages/blog/blogSlice";
import { selectPosts } from "src/pages/blog/selectors";
import "./App.css";

import About from "./pages/about/components/About";
import Blog from "./pages/blog/components/Blog";
import Home from "./pages/home/components/Home";
import NoMatch from "./pages/noMatch/components/NoMatch";
import Navbar from "./core/components/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "post" && published == true]')
      .then((res) => dispatch(setPosts(res)))
      .catch(console.error);
  }, [dispatch]);

  const posts = useSelector(selectPosts);

  console.log(posts);

  return (
    <Router>
      <Navbar />
      <main>
        <div>
          <h1 className="text-5xl font-bold text-slate-800">Bradley Blogs</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
