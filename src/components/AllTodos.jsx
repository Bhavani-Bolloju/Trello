import React from "react";
import CompletedTasks from "./done/CompletedTasks";
import CurrentTasks from "./doing/CurrentTasks";
import Todos from "./todo/NewTodos";

import classes from "./AllTodos.module.scss";

function AllTodos() {
  return (
    <div className={classes.todos}>
      <Todos />
      <CurrentTasks />
      <CompletedTasks />
    </div>
  );
}

export default AllTodos;
