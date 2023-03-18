import React from "react";
import { SaveButton } from "./Components";
import classes from "./TaskWrapper.module.scss";

function TaskWrapper(props) {
  return (
    <div className={classes.task}>
      <div>{props.children}</div>
      {!props.add && (
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
