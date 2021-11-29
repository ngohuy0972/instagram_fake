import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersSlice';
import postsReducer from './reducers/postsSlice';
import commentsReducer from './reducers/commentsSlice';
import storysReducer from './reducers/storysSlice';
import messagesReducer from './reducers/messagesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    storys: storysReducer,
    messages: messagesReducer
  },
});