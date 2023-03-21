import React from "react";

import { DragDropContext } from "react-beautiful-dnd";
import Tasks from "./ui/Tasks";
import { drapDrop } from "./store/AllTasksSlice";

import classes from "./AllTodos.module.scss";
import { useSelector, useDispatch } from "react-redux";

function AllTodos() {
  const { allTodos } = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();

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
              todos={column.todos}
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
