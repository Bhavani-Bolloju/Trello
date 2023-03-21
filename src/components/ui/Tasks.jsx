import React from "react";
import TaskWrapper from "./TaskWrapper";
import { InputTextArea } from "./Components";
import Card from "../todo/Card";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Tasks({
  // onAddHandler,
  // addCard,
  // onAddTodo,
  todos,
  // value,
  // onSetText,
  // onEdit,
  // dispatchTodo,
  HeaderTitle,
  id,
}) {
  return (
    // <TaskWrapper onAdd={onAddHandler} addCard={addCard} onAddTodo={onAddTodo}>
    <TaskWrapper id={id}>
      <h2>{HeaderTitle}</h2>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <ul
              className="todoList"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "red" : "orange",
                // padding: 4,
                // width: 250,
                // minHeight: 500,
              }}
            >
              {todos.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <Card
                        // ref={provided.innerRef}
                        provided={provided}
                        snapshot={snapshot}
                        id={task.id}
                        todo={task.todo}
                        // text={value}
                        // onEdit={onEdit}
                        // edit={task.edit}
                        // dispatchTodo={dispatchTodo}
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

      {/* {addCard && <InputTextArea value={value} onAddText={onSetText} />} */}
    </TaskWrapper>
  );
}

export default Tasks;
