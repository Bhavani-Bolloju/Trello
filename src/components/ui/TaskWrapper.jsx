import React from "react";
import { SaveButton } from "./Components";
import classes from "./TaskWrapper.module.scss";

function TaskWrapper(props) {
  return (
    <div className={classes.task}>
      <div>{props.children}</div>
      {!props.add && (
        // btn that triggers to open text input to add new item
        <button onClick={props.onClick}>
          <span>+</span>
          <span>Add a Card</span>
        </button>
      )}

      {props.add && <SaveButton onClick={props.onClick} />}
    </div>
  );
}

export default TaskWrapper;
