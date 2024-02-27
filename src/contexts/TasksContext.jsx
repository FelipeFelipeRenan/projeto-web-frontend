import React, { createContext, useState, useContext } from 'react';

// Criando o contexto para armazenar as tarefas e as funções para manipulá-las
const TasksContext = createContext();

// Componente de provedor do contexto que encapsula toda a aplicação
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', priority: 'Alta', status: 'Aberta' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', priority: 'Média', status: 'Disponível' },
    { id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3', priority: 'Baixa', status: 'Fechada' },
    { id: 4, title: 'Tarefa 4', description: 'Descrição da tarefa 4', priority: 'Alta', status: 'Fechada' },
    { id: 5, title: 'Tarefa 5', description: 'Descrição da tarefa 5', priority: 'Baixa', status: 'Aberta' },
    // Adicione mais tarefas conforme necessário
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

// Hook para consumir o contexto em componentes filhos
export const useTasks = () => useContext(TasksContext);
