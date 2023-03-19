import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../store/TodoSlice";
import doingTaskReducer from "../store/DoingSlice";

export const store = configureStore({
  reducer: {
    todos: taskReducer,
    doingTodos: doingTaskReducer,
  },
});
