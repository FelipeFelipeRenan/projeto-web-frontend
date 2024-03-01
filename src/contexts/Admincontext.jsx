import React, { createContext, useContext, useState } from 'react';

// Criação do contexto do administrador
const AdminContext = createContext();

// Provedor do contexto do administrador
export const AdminProvider = ({ children }) => {
  const [squads, setSquads] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Funções para adicionar squads, participantes e tasks
  const addSquad = (newSquad) => {
    setSquads([...squads, newSquad]);
  };

  const addParticipant = (newParticipant) => {
    setParticipants([...participants, newParticipant]);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <AdminContext.Provider value={{ squads, participants, tasks, addSquad, addParticipant, addTask }}>
      {children}
    </AdminContext.Provider>
  );
};

// Hook para utilizar o contexto do administrador
export const useAdmin = () => useContext(AdminContext);
