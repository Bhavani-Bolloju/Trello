import { createSlice } from "@reduxjs/toolkit";
import { updateTodos } from "./TodoSlice";

const initialState = {
  completedTodos: [],
  addcompletedCard: false,
  editCompletedCard: false,
};

const doneSlice = createSlice({
  name: "doneTodos",
  initialState,
  reducers: {
    newDoneTodo: (state, action) => {
      updateTodos(state.completedTodos, action);
    },

    addDoneTodo: (state) => {
      state.addcompletedCard = !state.addcompletedCard;
    },

    editDoneTodo: (state, action) => {
      const items = [...state.completedTodos];
      const findTodo = items.findIndex((item) => item.id === action.payload);
      const todo = items[findTodo];
      const updatedTodo = { ...todo, edit: !todo.edit };
      state.completedTodos[findTodo] = updatedTodo;
    },
  },
});

export const { newDoneTodo, addDoneTodo, editDoneTodo } = doneSlice.actions;

export default doneSlice.reducer;
