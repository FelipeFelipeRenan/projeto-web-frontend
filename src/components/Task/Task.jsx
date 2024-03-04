import React from "react";
import "./Task.scss";

function Task({ taskInfo, onClick }) {
  return (
    <div className="task-container" onClick={() => onClick(taskInfo)}>
      <p className="task-text">{taskInfo.title}</p>
    </div>
  );
}

export default Task;
