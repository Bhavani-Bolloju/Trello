import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { newDoneTodo, addDoneTodo, editDoneTodo } from "../store/DoneSlice";
import Tasks from "../ui/Tasks";

function CurrentTasks() {
  const dispatch = useDispatch();
  const id = nanoid(4);

  const [text, setText] = useState("");
  const { completedTodos, addcompletedCard } = useSelector(
    (state) => state.doneTodos
  );

  const addNewDoneTodoHandler = function () {
    if (text.trim().length !== 0) {
      dispatch(
        newDoneTodo({
          todo: text,
          id,
          edit: false,
        })
      );
    }
    dispatch(addDoneTodo());
    setText("");
  };

  const editTodoCard = function (id) {
    dispatch(editDoneTodo(id));
    console.log(id);
  };

  return (
    <Tasks
      onAddHandler={addNewDoneTodoHandler}
      addCard={addcompletedCard}
      onAddTodo={addDoneTodo}
      todos={completedTodos}
      value={text}
      onSetText={setText}
      onEdit={editTodoCard}
      dispatchTodo={newDoneTodo}
      HeaderTitle="Done"
    />
  );
}

export default CurrentTasks;
