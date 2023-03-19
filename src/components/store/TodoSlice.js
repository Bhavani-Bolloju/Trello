import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newTodos: [],
  addCard: false,
  editCard: false,
};

export const updateTodos = function (items, action) {
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

const taskSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    newTodo: (state, action) => {
      updateTodos(state.newTodos, action);
    },

    addCardHandler: (state) => {
      state.addCard = !state.addCard;
    },

    editTodo: (state, action) => {
      const items = [...state.newTodos];
      const findTodo = items.findIndex((item) => item.id === action.payload);
      const todo = items[findTodo];
      const updatedTodo = { ...todo, edit: !todo.edit };
      state.newTodos[findTodo] = updatedTodo;
    },
  },
});

export const { newTodo, addCardHandler, editTodo } = taskSlice.actions;
export default taskSlice.reducer;
