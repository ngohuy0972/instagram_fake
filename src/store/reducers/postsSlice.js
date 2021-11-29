import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { posts } from "../../models/posts";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: posts,

  reducers: {
    getAllPosts() {
      alert('Get all post')
    }
  }
}); 

const { actions, reducer } = postsSlice;
export const { getAllPosts } = actions;
export default postsSlice.reducer;