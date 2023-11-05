import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  topics: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.topics = action.payload?.map((post) => post.title);
    },
  },
});

export const { setPosts } = blogSlice.actions;

export default blogSlice.reducer;
