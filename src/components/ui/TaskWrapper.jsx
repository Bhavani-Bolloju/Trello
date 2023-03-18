import React from "react";
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

      {props.add && (
        <button onClick={props.onClick} className={classes.save}>
          Save
        </button>
      )}
    </div>
  );
}

export default TaskWrapper;
