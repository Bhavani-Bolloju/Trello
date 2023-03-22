import React, { useState } from "react";
import classes from "./Card.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { InputTextArea } from "../ui/Components";
import { SaveButton } from "../ui/Components";
import { useDispatch } from "react-redux";
import { editTodo, newTodo } from "../store/AllTasksSlice";

function Card({ todo, id, columnId, edit, provided, snapshot }) {
  const [editedText, setEditedText] = useState(todo);

  const dispatch = useDispatch();

  const editCardHandler = function () {
    if (editedText.trim().length !== 0) {
      dispatch(newTodo({ columnId, id, todo: editedText }));
    }
    dispatch(editTodo({ id, columnId }));
  };

  return (
    <li
      className={classes.card}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{ ...provided.draggableProps.style }}
    >
      {!edit && (
        <div className={classes.task}>
          <div className={classes["todo"]}>{todo}</div>
          <button
            className={classes["edit-btn"]}
            onClick={() => {
              dispatch(editTodo({ id, columnId }));
            }}
          >
            <AiOutlineEdit />
          </button>
        </div>
      )}
      {edit && (
        <div className={classes["edit_todo"]}>
          <InputTextArea value={editedText} onAddText={setEditedText} />
          <SaveButton onClick={editCardHandler} />
        </div>
      )}
    </li>
  );
}

export default Card;
