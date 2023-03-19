import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTodos: [],
  addCTCard: false,
  editCTCard: false,
};

const updateTodos = function (items, action) {
  const todos = [...items];
  const id = action.payload.id;
  const findId = todos.findIndex((todo) => todo.id === id);
  if (findId < 0) {
    items.push(action.payload);
  } else {
    //when todo already exists replace it with updated one
    const EditedItem = todos[findId];
    const updateItem = {
      ...EditedItem,
      todo: action.payload.todo,
      edit: !EditedItem.edit,
    };
    items[findId] = updateItem;
  }
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
