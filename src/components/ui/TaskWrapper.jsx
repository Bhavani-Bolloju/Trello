import React from "react";
import { useDispatch } from "react-redux";
import { SaveButton } from "./Components";
import classes from "./TaskWrapper.module.scss";
import { addTodo, newTodo } from "../store/AllTasksSlice";
import { nanoid } from "nanoid";

function TaskWrapper(props) {
  const dispatch = useDispatch();
  return (
    <div className={classes.task}>
      <div>{props.children}</div>
      {!props.addCard && (
        <button
          className={classes.addTask}
          onClick={() => {
            dispatch(addTodo(props.id));
          }}
        >
          <span>+</span>
          <span>Add a Card</span>
        </button>
      )}
      {props.addCard && (
        <SaveButton
          onClick={() => {
            dispatch(
              newTodo({
                todo: props.todoText,
                id: nanoid(4),
                columnId: props.id,
              })
            );

            dispatch(addTodo(props.id));
          }}
        />
      )}
    </div>
  );
}

export default TaskWrapper;
