import React from "react";
import TaskWrapper from "./TaskWrapper";
import { InputTextArea } from "./Components";
import Card from "../todo/Card";

function Tasks({
  onAddHandler,
  addCard,
  onAddTodo,
  todos,
  value,
  onSetText,
  onEdit,
  dispatchTodo,
  HeaderTitle,
}) {
  return (
    <TaskWrapper onAdd={onAddHandler} addCard={addCard} onAddTodo={onAddTodo}>
      <h2>{HeaderTitle}</h2>
      <ul className="todoList">
        {todos.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            todo={task.todo}
            text={value}
            onEdit={onEdit}
            edit={task.edit}
            dispatchTodo={dispatchTodo}
          />
        ))}
      </ul>
      {addCard && <InputTextArea value={value} onAddText={onSetText} />}
    </TaskWrapper>
  );
}

export default Tasks;
