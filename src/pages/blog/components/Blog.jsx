import { useSelector } from "react-redux";

import { selectPosts } from "src/pages/blog/selectors";

export const Blog = () => {
  const posts = useSelector(selectPosts);

  return (
    <>
      <div className="text-slate-700">This is the Blog section</div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3 className="text-slate-600">{post.title}</h3>
          <h6 className="text-slate-500 ">{post.author._ref}</h6>
        </div>
      ))}
    </>
  );
};

export default Blog;
