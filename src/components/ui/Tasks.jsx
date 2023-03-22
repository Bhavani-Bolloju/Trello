import React, { useState } from "react";
import TaskWrapper from "./TaskWrapper";
import { InputTextArea } from "./Components";
import Card from "../todo/Card";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Tasks({ addCard, todos, HeaderTitle, id }) {
  const [todoText, setTodoText] = useState("");
  // console.log(todos);
  return (
    <TaskWrapper id={id} addCard={addCard} todoText={todoText}>
      <h2>{HeaderTitle}</h2>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <ul
              className="todoList"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "#f8f9fa" : "",
              }}
            >
              {todos.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <Card
                        provided={provided}
                        snapshot={snapshot}
                        id={task.id}
                        edit={task.edit}
                        columnId={id}
                        todo={task.todo}
                        todoText={todoText}
                      />
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>

      {addCard && <InputTextArea value={todoText} onAddText={setTodoText} />}
    </TaskWrapper>
  );
}

export default Tasks;
