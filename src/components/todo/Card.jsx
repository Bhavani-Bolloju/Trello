import React, { useState } from "react";
import classes from "./Card.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { InputTextArea } from "../ui/Components";
import { SaveButton } from "../ui/Components";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, newTodo } from "../store/TodoSlice";

function Card({ todo, id, onEdit, edit }) {
  const [editedText, setEditedText] = useState(todo);

  const dispatch = useDispatch();

  const editCardHandler = function () {
    if (editedText.trim().length !== 0) {
      dispatch(
        newTodo({
          id,
          todo: editedText,
        })
      );
    }
  };

  return (
    <li className={classes.card}>
      {!edit && (
        <div className={classes.task}>
          <div className={classes["todo"]}>{todo}</div>
          <button
            className={classes["edit-btn"]}
            onClick={() => {
              onEdit(id);
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
