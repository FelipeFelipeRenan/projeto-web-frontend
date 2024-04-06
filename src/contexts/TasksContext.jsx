import React, { createContext, useState, useContext } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const assignTaskToParticipant = (taskId, participantId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, assignedTo: participantId } : task
      )
    );
  };

  const markTaskAsCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "Fechada" } : task
      )
    );
  };

  const adjustTaskAvailability = (taskId, availability) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: availability } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        assignTaskToParticipant,
        markTaskAsCompleted,
        adjustTaskAvailability,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// Hook para consumir o contexto em componentes filhos
export const useTasks = () => useContext(TasksContext);
