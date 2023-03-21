import React from "react";
import { useDispatch } from "react-redux";
import { SaveButton } from "./Components";
import classes from "./TaskWrapper.module.scss";
// import { Droppable } from "react-beautiful-dnd";

function TaskWrapper(props) {
  const dispatch = useDispatch();
  return (
    <div className={classes.task}>
      <div>{props.children}</div>
      {!props.addCard && (
        <button
          onClick={() => {
            dispatch(props.onAddTodo());
          }}
        >
          <span>+</span>
          <span>Add a Card</span>
        </button>
      )}
      {props.addCard && (
        <SaveButton
          onClick={() => {
            props.onAdd();
          }}
        />
      )}
    </div>
  );
}

export default TaskWrapper;
