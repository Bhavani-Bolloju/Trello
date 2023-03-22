import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  allTodos: {
    current: {
      name: 'current',
      todos: [
        {
          todo: 'Shopping',
          id: 'f1',
          edit: false,
        },
      ],
      addCard: false,
    },
    doing: {
      name: 'doing',
      todos: [],
      addCard: false,
    },
    done: {
      name: 'done',
      todos: [],
      addCard: false,
    },
  },
  changed: false,
  backDrop: false,
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
  name: 'allTodos',
  initialState,
  reducers: {
    addFetchData: (state, action) => {
      const { current: curr, doing, done } = action.payload;
      const allTodos = current(state.allTodos);
      const currentTodos = {
        ...curr,
        todos: curr.todos || [],
      };
      const doingTodos = {
        ...doing,
        todos: doing.todos || [],
      };
      const doneTodos = {
        ...done,
        todos: done.todos || [],
      };

      state.allTodos = {
        current: {
          ...currentTodos,
        },
        doing: {
          ...doingTodos,
        },
        done: {
          ...doneTodos,
        },
      };
    },
    newTodo: (state, action) => {
      state.changed = true;
      const { columnId, id, todo } = action.payload;
      const allTodos = current(state.allTodos);
      const column = {
        ...allTodos[columnId],
      };

      const findIndex = column.todos.findIndex((todo) => todo.id === id);

      if (findIndex < 0) {
        state.allTodos[columnId].todos.push({
          id,
          todo,
          edit: false,
        });
      } else {
        const findTodo = column.todos[findIndex];
        const updatedTodo = {
          ...findTodo,
          todo,
        };

        const todos = [...column.todos];
        todos[findIndex] = updatedTodo;

        state.allTodos[columnId] = {
          ...state.allTodos[columnId],
          todos,
        };
      }
    },

    addTodo: (state, action) => {
      const columnId = action.payload;
      state.allTodos[columnId].addCard = !state.allTodos[columnId].addCard;
    },

    editTodo: (state, action) => {
      state.changed = true;
      const { id, columnId } = action.payload;
      const allTodos = current(state.allTodos);

      const todos = [...allTodos[columnId].todos];

      const findTodo = todos.findIndex((todo) => todo.id === id);
      const todo = todos[findTodo];
      const updatedTodo = {
        ...todo,
        edit: !todo.edit,
      };

      todos[findTodo] = updatedTodo;

      state.allTodos[columnId] = {
        ...state.allTodos[columnId],
        todos,
      };
      state.backDrop = !state.backDrop;
    },
    drapDrop: (state, action) => {
      state.changed = true;
      const { source, destination } = action.payload;
      if (!destination) return;
      const todos = current(state.allTodos);

      const sourceColumn = {
        ...todos[source.droppableId],
      };
      const sourceTodos = [...sourceColumn.todos];
      if (source.droppableId !== destination.droppableId) {
        const destColumns = {
          ...todos[destination.droppableId],
        };
        // console.log(destColumns);
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

export const { newTodo, addTodo, editTodo, drapDrop, addFetchData } = allTasksSlice.actions;

export default allTasksSlice.reducer;
