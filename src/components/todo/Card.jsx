import React from "react";
import classes from "./Card.module.scss";

function Card({ todo, id }) {
  return (
    <li className={classes.card}>
      <div>{todo}</div>
    </li>
  );
}

export default Card;
