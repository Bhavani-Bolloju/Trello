import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskWrapper from "../ui/TaskWrapper";
import { newTodo } from "../store/TodoSlice";
import { nanoid } from "nanoid";
import Card from "./Card";
import { InputTextArea } from "../ui/Components";

function NewTodos() {
  const [task, setTask] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { newTodos } = useSelector((state) => state.todos);
  const id = nanoid(4);

  // useEffect(() => {
  //   if (task) {
  //     inputRef.current.focus();
  //   }
  // }, [task]);

  const addNewTaskHandler = function () {
    setTask((prev) => !prev);
    if (task) {
      dispatch(
        newTodo({
          todo: text,
          id,
        })
      );
    }
    setText("");
  };

  return (
    <TaskWrapper onClick={addNewTaskHandler} add={task}>
      <h2>To Do</h2>
      <ul className="todoList">
        {newTodos.map((task) => (
          <Card key={task.id} id={task.id} todo={task.todo} />
        ))}
      </ul>
      {task && <InputTextArea onSetText={setText} text={text} />}
    </TaskWrapper>
  );
}

export default NewTodos;
