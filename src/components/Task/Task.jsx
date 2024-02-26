import React from "react";
import "./Task.scss"; // Importe os estilos da Task

function Task({ taskInfo, onClick }) {
  return (
    <div className="task-container" onClick={() => onClick(taskInfo)}>
      <p className="task-text">{taskInfo.title}</p> {/* Use o título da tarefa como texto */}
    </div>
  );
}

export default Task;
