import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveButton } from "./Components";
import classes from "./TaskWrapper.module.scss";
import { addCardHandler, newTodo } from "../store/TodoSlice";
import { nanoid } from "nanoid";

function TaskWrapper(props) {
  const { addCard } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const id = nanoid(4);
  return (
    <div className={classes.task}>
      <div>{props.children}</div>
      {!addCard && (
        <button
          onClick={() => {
            dispatch(addCardHandler());
          }}
        >
          <span>+</span>
          <span>Add a Card</span>
        </button>
      )}
      {addCard && (
        <SaveButton
          onClick={() => {
            props.onAdd();
            // dispatch(addCardHandler());
            // dispatch(
            //   newTodo({
            //     id,
            //     todo: props.taskText,
            //     edit: false,
            //   })
            // );
            // props.onAddText("");
          }}
        />
      )}
    </div>
  );
}

export default TaskWrapper;
