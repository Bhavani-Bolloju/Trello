import { createSlice } from "@reduxjs/toolkit";
// import { updateTodos } from "./TodoSlice";
import { nanoid } from "nanoid";

const initialState = {
  allTodos: {
    current: {
      name: "current",
      todos: [
        {
          todo: "Shopping",
          id: nanoid(3),
        },
        {
          todo: "Library",
          id: nanoid(3),
        },
      ],
      addCard: false,
      editCard: false,
    },
    doing: {
      name: "doing",
      todos: [],
      addCard: false,
      editCard: false,
    },
    done: {
      name: "done",
      todos: [],
      addCard: false,
      editCard: false,
    },
  },
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

const allTasksSlice = createSlice({
  name: "allTodos",
  initialState,
  reducers: {
    newTodo: (state, action) => {
      updateTodos(state.currentTodos, action);
    },

    addTodo: (state) => {
      state.addCTCard = !state.addCTCard;
    },

    editTodo: (state, action) => {
      const items = [...state.currentTodos];
      const findTodo = items.findIndex((item) => item.id === action.payload);
      const todo = items[findTodo];
      const updatedTodo = { ...todo, edit: !todo.edit };
      state.currentTodos[findTodo] = updatedTodo;
    },
  },
});

export const { newTodo, addTodo, editTodo } = allTasksSlice.actions;

export default allTasksSlice.reducer;
