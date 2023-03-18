import React, { useState } from "react";
import classes from "./Card.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { InputTextArea } from "../ui/Components";
import { SaveButton } from "../ui/Components";
import { useDispatch } from "react-redux";
import { newTodo } from "../store/TodoSlice";

function Card({ todo, id }) {
  const [editting, setEditting] = useState(false);
  const [editedText, setEditedText] = useState(todo);

  const dispatch = useDispatch();

  const editHandler = function () {
    setEditting(true);
  };

  return (
    <li className={classes.card}>
      {!editting && (
        //state when task is added and when task is not in editable state
        <div className={classes.task}>
          <div className={classes["todo"]}>{todo}</div>
          <button className={classes["edit-btn"]} onClick={editHandler}>
            <AiOutlineEdit />
          </button>
        </div>
      )}
      {editting && (
        //when task is in editable state
        <div className={classes["edit_todo"]}>
          <InputTextArea onSetText={setEditedText} text={editedText} />

          <SaveButton
            onClick={() => {
              setEditting(false);
              //here dispatch the edited todo

              dispatch(
                newTodo({
                  id,
                  todo: editedText,
                })
              );
            }}
          />
        </div>
      )}
    </li>
  );
}

export default Card;
