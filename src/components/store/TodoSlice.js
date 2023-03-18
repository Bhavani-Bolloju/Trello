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
      const todos = [...state.newTodos];
      const id = action.payload.id;
      const findId = todos.findIndex((todo) => todo.id === id);
      if (findId < 0) {
        //when no todo found push to the todo list
        state.newTodos.push(action.payload);
      } else {
        //when todo already exists replace it with updated one
        state.newTodos[findId] = action.payload;
      }
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
