import React from "react";
import TaskWrapper from "../ui/TaskWrapper";

function CompletedTasks() {
  const addCompletedTaskHandler = function () {
    console.log("completed task");
  };

  return (
    <TaskWrapper onClick={addCompletedTaskHandler}>
      <h2>Done</h2>
    </TaskWrapper>
  );
}

export default CompletedTasks;