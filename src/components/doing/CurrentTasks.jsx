import React from "react";
import TaskWrapper from "../ui/TaskWrapper";

function CurrentTasks() {
  const addCurrentTaskHandler = function () {
    console.log("current");
  };

  return (
    <TaskWrapper onClick={addCurrentTaskHandler}>
      <h2>Doing</h2>
    </TaskWrapper>
  );
}

export default CurrentTasks;
