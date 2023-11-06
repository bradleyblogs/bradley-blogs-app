import { createSlice } from "@reduxjs/toolkit";
import get from "lodash/get";
import orderBy from "lodash/orderBy";
import uniq from "lodash/uniq";

const initialState = {
  posts: [],
  topics: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const orderedPosts = orderBy(action.payload, "publishedAt", "desc");

      state.posts = orderedPosts;
      state.topics = uniq(
        orderedPosts.reduce(
          (topics, post) => [...topics, ...get(post, "topics", [])],
          [],
        ),
      );
    },
  },
});

export const { setPosts } = blogSlice.actions;

export default blogSlice.reducer;
