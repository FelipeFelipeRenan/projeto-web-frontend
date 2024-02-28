import React, { createContext, useState, useContext } from "react";

// Criando o contexto para armazenar as tarefas e as funções para manipulá-las
const TasksContext = createContext();

// Componente de provedor do contexto que encapsula toda a aplicação
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      priority: "Alta",
      status: "Aberta",
      assignedTo: 1,
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      priority: "Média",
      status: "Disponível",
      assignedTo: null,
    },
    {
      id: 3,
      title: "Tarefa 3",
      description: "Descrição da tarefa 3",
      priority: "Baixa",
      status: "Fechada",
      assignedTo: 2,
    },
    {
      id: 4,
      title: "Tarefa 4",
      description: "Descrição da tarefa 4",
      priority: "Alta",
      status: "Fechada",
      assignedTo: 2,
    },
    {
      id: 5,
      title: "Tarefa 5",
      description: "Descrição da tarefa 5",
      priority: "Baixa",
      status: "Aberta",
      assignedTo: 1,
    },
    {
      id: 6,
      title: "Tarefa 6",
      description: "Descrição da tarefa 6",
      priority: "Alta",
      status: "Aberta",
      assignedTo: 2,
    },
    {
      id: 7,
      title: "Tarefa 7",
      description: "Descrição da tarefa 7",
      priority: "Média",
      status: "Disponível",
      assignedTo: null,
    },
    {
      id: 8,
      title: "Tarefa 8",
      description: "Descrição da tarefa 8",
      priority: "Baixa",
      status: "Fechada",
      assignedTo: 1,
    },
    {
      id: 9,
      title: "Tarefa 9",
      description: "Descrição da tarefa 9",
      priority: "Alta",
      status: "Fechada",
      assignedTo: 1,
    },
    {
      id: 10,
      title: "Tarefa 10",
      description: "Descrição da tarefa 10",
      priority: "Média",
      status: "Aberta",
      assignedTo: 2,
    },
    // Adicione mais tarefas conforme necessário
  ]);

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
