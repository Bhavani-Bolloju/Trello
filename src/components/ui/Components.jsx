import React from "react";
import classes from "./Components.module.scss";

export const InputTextArea = function ({ onSetText, text }) {
  return (
    <textarea
      className={classes["input_text"]}
      type="text"
      value={text}
      onChange={(e) => onSetText(e.target.value)}
    />
  );
};

export const SaveButton = function ({ onClick }) {
  return (
    <button onClick={onClick} className={classes["save-btn"]}>
      Save
    </button>
  );
};
