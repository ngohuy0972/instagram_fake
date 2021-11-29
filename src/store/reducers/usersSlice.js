import { createSlice } from "@reduxjs/toolkit";
import { users } from '../../models/users';

export const usersSlice = createSlice({
  name: 'users',
  initialState: users,
  reducers: {}
})

const { actions, reducer } = usersSlice;
export const getAllUser = state => state.users;
export default usersSlice.reducer;