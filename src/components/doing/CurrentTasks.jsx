import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskWrapper from "../ui/TaskWrapper";
import { nanoid } from "nanoid";
import { InputTextArea } from "../ui/Components";
import { currentTodo, newTodo } from "../store/TodoSlice";
import Card from "../todo/Card";

function CurrentTasks() {
  const { currentTodos } = useSelector((state) => state.todos);
  console.log(currentTodos);
  return (
    <TaskWrapper>
      <h2>To Do</h2>
      <ul></ul>
    </TaskWrapper>
  );
}

export default CurrentTasks;
