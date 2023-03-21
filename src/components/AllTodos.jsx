import React from "react";
import CompletedTasks from "./done/CompletedTasks";
import CurrentTasks from "./doing/CurrentTasks";
import Todos from "./todo/NewTodos";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import classes from "./AllTodos.module.scss";
import { useSelector } from "react-redux";

function AllTodos() {
  const { allTodos } = useSelector((state) => state.allTodos);
  console.log(allTodos);

  return (
    <div className={classes.todos}>
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        {Object.entries(allTodos).map(([id, column], i) => {
          // console.log(id);
          return (
            <div key={id}>
              <h2>{column.name}</h2>
              <div>
                <Droppable droppableId={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.todos.map((todo, index) => {
                          // console.log(todo.id);
                          return (
                            <Draggable
                              key={todo.id}
                              index={index}
                              draggableId={todo.id}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {todo.todo}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default AllTodos;

// function AllTodos() {
//   return (
//     <DragDropContext onDragEnd={(result) => console.log(result)}>
//       <div className={classes.todos}>
//         <Todos />
//         <CurrentTasks />
//         <CompletedTasks />
//       </div>
//     </DragDropContext>
//   );
// }
