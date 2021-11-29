import { createSlice } from '@reduxjs/toolkit';
import { comments } from '../../models/comments';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: comments,

  reducers: {
    addComment() {
      alert('Add comment')
    }
  }
});

const { actions, reducer } = commentsSlice;

export const selectAllComments = state => state.comments;
export const { addComment } = actions;
export default commentsSlice.reducer;