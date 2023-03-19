import { createSlice } from "@reduxjs/toolkit";
import { updateTodos } from "./TodoSlice";

const initialState = {
  currentTodos: [],
  addCTCard: false,
  editCTCard: false,
};

const doingSlice = createSlice({
  name: "doingTodos",
  initialState,
  reducers: {
    newDoingTodo: (state, action) => {
      updateTodos(state.currentTodos, action);
    },

    addDoingTodo: (state) => {
      state.addCTCard = !state.addCTCard;
    },

    editDoingTodo: (state, action) => {
      const items = [...state.currentTodos];
      const findTodo = items.findIndex((item) => item.id === action.payload);
      const todo = items[findTodo];
      const updatedTodo = { ...todo, edit: !todo.edit };
      state.currentTodos[findTodo] = updatedTodo;
    },
  },
});

export const { newDoingTodo, addDoingTodo, editDoingTodo } = doingSlice.actions;

export default doingSlice.reducer;
