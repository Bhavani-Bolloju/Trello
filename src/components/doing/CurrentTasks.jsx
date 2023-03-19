import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { newDoingTodo, addDoingTodo, editDoingTodo } from "../store/DoingSlice";
import Tasks from "../ui/Tasks";

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
    <Tasks
      onAddHandler={addNewDoingTodoHandler}
      addCard={addCTCard}
      onAddTodo={addDoingTodo}
      todos={currentTodos}
      value={text}
      onSetText={setText}
      onEdit={editTodoCard}
      dispatchTodo={newDoingTodo}
      HeaderTitle="Doing"
    />
  );
}

export default CurrentTasks;
