import { configureStore } from "@reduxjs/toolkit";

import allTasksReducer from "../store/AllTasksSlice";

export const store = configureStore({
  reducer: {
    allTodos: allTasksReducer,
  },
});
