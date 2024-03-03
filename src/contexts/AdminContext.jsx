import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [squads, setSquads] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [tasks, setTasks] = useState([]);

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
    <AdminContext.Provider
      value={{ squads, participants, tasks, addSquad, addParticipant, addTask }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
