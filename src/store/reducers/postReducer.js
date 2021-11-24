import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { posts } from "../../models/posts";

const postReducer = createSlice({
  name: 'posts',
  innitialState: [],

  reducers: {
    getAllPosts(state, action) {
      console.log('Get all post successfully!!!')
    }
  }
})

const { actions, reducer } = postReducer;
export const { getAllPosts } = actions;
export default reducer;