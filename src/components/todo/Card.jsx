import React, { useState } from "react";
import classes from "./Card.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { InputTextArea } from "../ui/Components";
import { SaveButton } from "../ui/Components";

function Card({ todo, id }) {
  const [editting, setEditting] = useState(false);
  const [editedText, setEditedText] = useState(todo);

  const editHandler = function () {
    setEditting(true);
  };

  return (
    <li className={classes.card}>
      {!editting && (
        <div className={classes.task}>
          <div className={classes["todo"]}>{todo}</div>
          <button className={classes["edit-btn"]} onClick={editHandler}>
            <AiOutlineEdit />
          </button>
        </div>
      )}
      {editting && (
        <div className={classes["edit_todo"]}>
          <InputTextArea onSetText={setEditedText} text={editedText} />
          <SaveButton onClick={() => setEditting(false)} />
        </div>
      )}
    </li>
  );
}

export default Card;
