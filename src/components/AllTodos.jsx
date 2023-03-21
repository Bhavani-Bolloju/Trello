import React from "react";
import CompletedTasks from "./done/CompletedTasks";
import CurrentTasks from "./doing/CurrentTasks";
import Todos from "./todo/NewTodos";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
          // console.log(id);
          return (
            <Tasks
              HeaderTitle={column.name}
              todos={column.todos}
              key={id}
              id={id}
            />
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default AllTodos;
