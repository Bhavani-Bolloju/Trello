import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../store/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: taskReducer,
  },
});
