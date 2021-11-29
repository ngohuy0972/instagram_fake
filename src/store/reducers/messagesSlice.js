import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { messages } from "../../models/messages";

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: messages,

  reducers: {
    getAllMessages() {
      alert('Get all messages')
    }
  }
}); 

const { actions, reducer } = messagesSlice;
export const selectAllMess = state => state.messages;
export const { getAllMessages } = actions;
export default messagesSlice.reducer;