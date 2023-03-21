import { createSlice, current } from "@reduxjs/toolkit";
// import { updateTodos } from "./TodoSlice";
import { nanoid } from "nanoid";

const initialState = {
  allTodos: {
    current: {
      name: "current",
      todos: [
        {
          todo: "Shopping",
          id: "f1",
        },
        {
          todo: "Library",
          id: "f2",
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
    drapDrop: (state, action) => {
      const { source, destination } = action.payload;
      if (!destination) return;
      const todos = current(state.allTodos);

      const sourceColumn = { ...todos[source.droppableId] };
      const sourceTodos = [...sourceColumn.todos];
      if (source.droppableId !== destination.droppableId) {
        const destColumns = { ...todos[destination.droppableId] };
        const destTodos = [...destColumns.todos];
        const [removed] = sourceTodos.splice(source.index, 1);

        destTodos.splice(destination.index, 0, removed);

        state.allTodos = {
          ...todos,
          [source.droppableId]: {
            ...sourceColumn,
            todos: sourceTodos,
          },
          [destination.droppableId]: {
            ...destColumns,
            todos: destTodos,
          },
        };
      } else {
        const [removed] = sourceTodos.splice(source.index, 1);
        sourceTodos.splice(destination.index, 0, removed);
        state.allTodos[source.droppableId] = {
          ...sourceColumn,
          todos: sourceTodos,
        };
      }
    },
  },
});

export const { newTodo, addTodo, editTodo, drapDrop } = allTasksSlice.actions;

export default allTasksSlice.reducer;
