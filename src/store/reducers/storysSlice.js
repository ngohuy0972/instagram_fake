import { createSlice } from '@reduxjs/toolkit';
import { storys } from '../../models/storys';

export const storysSlice = createSlice({
  name: 'storys',
  initialState: storys,

  reducers: {
    addStory() {
      alert('Add story')
    }
  }
});

const { actions, reducer } = storysSlice;
export const { addStory } = actions;
export default storysSlice.reducer;