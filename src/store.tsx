import { createStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./moviesReducer";

export const store = createStore(moviesReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
