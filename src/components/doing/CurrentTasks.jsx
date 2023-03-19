import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskWrapper from "../ui/TaskWrapper";
import { nanoid } from "nanoid";
import { InputTextArea } from "../ui/Components";
import { newDoingTodo, addDoingTodo, editDoingTodo } from "../store/DoingSlice";

import Card from "../todo/Card";

function CurrentTasks() {
  const dispatch = useDispatch();
  const id = nanoid(4);

  const [text, setText] = useState("");
  const { currentTodos, addCTCard } = useSelector((state) => state.doingTodos);

  const addNewDoingTodoHandler = function () {
    if (text.trim().length !== 0) {
      dispatch(
        newDoingTodo({
          todo: text,
          id,
          edit: false,
        })
      );
    }
    dispatch(addDoingTodo());
    setText("");
  };

  const editTodoCard = function (id) {
    dispatch(editDoingTodo(id));
    console.log(id);
  };

  return (
    <TaskWrapper
      onAdd={addNewDoingTodoHandler}
      addCard={addCTCard}
      onAddTodo={addDoingTodo}
    >
      <h2>Doing</h2>
      <ul className="todoList">
        {currentTodos.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            todo={task.todo}
            text={text}
            onEdit={editTodoCard}
            edit={task.edit}
            dispatchTodo={newDoingTodo}
          />
        ))}
      </ul>
      {addCTCard && <InputTextArea value={text} onAddText={setText} />}
    </TaskWrapper>
  );
}

export default CurrentTasks;
