import React, { useRef } from "react";
import classes from "./Components.module.scss";

export const InputTextArea = function ({ value, onAddText }) {
  // const inputRef = useRef();

  return (
    <textarea
      // ref={inputRef}
      className={classes["input_text"]}
      type="text"
      value={value}
      onChange={(e) => onAddText(e.target.value)}
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
