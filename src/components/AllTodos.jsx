import React, { useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import Tasks from "./ui/Tasks";
import { drapDrop } from "./store/AllTasksSlice";
import { sendTodos, fetchTodosData } from "./store/action-thunks";

import classes from "./AllTodos.module.scss";
import { useSelector, useDispatch } from "react-redux";

let sending = false;
function AllTodos() {
  const { allTodos, changed } = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosData());
  }, []);

  useEffect(() => {
    if (changed) {
      dispatch(sendTodos(allTodos));
    }
  }, [allTodos, changed]);

  return (
    <div className={classes.todos}>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          dispatch(drapDrop({ source, destination }));
        }}
      >
        {Object.entries(allTodos).map(([id, column], i) => {
          return (
            <Tasks
              HeaderTitle={column.name}
              todos={column.todos || []}
              key={id}
              id={id}
              addCard={column.addCard}
            />
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default AllTodos;
