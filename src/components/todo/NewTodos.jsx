import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskWrapper from "../ui/TaskWrapper";
import { newTodo, addCardHandler, editTodo } from "../store/TodoSlice";
import { nanoid } from "nanoid";
import Card from "./Card";
import { InputTextArea } from "../ui/Components";

function NewTodos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const id = nanoid(4);
  const { newTodos, addCard } = useSelector((state) => state.todos);

  const addNewTaskHandler = function () {
    if (text.trim().length !== 0) {
      dispatch(
        newTodo({
          todo: text,
          id,
          edit: false,
        })
      );
    }
    dispatch(addCardHandler());
    setText("");
  };

  const editCard = function (id) {
    dispatch(editTodo(id));
  };

  return (
    <TaskWrapper taskText={text} onAdd={addNewTaskHandler}>
      <h2>To Do</h2>
      <ul className="todoList">
        {newTodos.map((task) => (
          //each todo item in the todo list
          <Card
            key={task.id}
            id={task.id}
            todo={task.todo}
            text={text}
            onEdit={editCard}
            edit={task.edit}
          />
        ))}
      </ul>
      {addCard && (
        //to add new todo
        <InputTextArea onAddText={setText} value={text} />
      )}
    </TaskWrapper>
  );
}
//text input to add new task to the todo list

export default NewTodos;
