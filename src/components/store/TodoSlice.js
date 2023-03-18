import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newTodos: [],
  currentTodos: [],
  CompletedTodos: [],
};

const taskSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    newTodo: (state, action) => {
      state.newTodos.push(action.payload);
    },
    currentTodo: (state, action) => {
      console.log(action.payload);
    },
    completedTodo: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { newTodo, currentTodo, completedTodo } = taskSlice.actions;
export default taskSlice.reducer;
