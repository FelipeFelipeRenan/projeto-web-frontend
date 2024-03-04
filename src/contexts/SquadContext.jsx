import React, { createContext, useState, useContext } from "react";

const SquadContext = createContext();

export const SquadProvider = ({ children }) => {
  const [squads, setSquads] = useState([]);

  const addSquad = (newSquad) => {
    setSquads([...squads, { ...newSquad, participants: [] }]);
  };

  const deleteSquad = (squadId) => {
    setSquads((prevSquads) =>
      prevSquads.filter((squad) => squad.id !== squadId)
    );
  };

  return (
    <SquadContext.Provider value={{ squads, addSquad, deleteSquad }}>
      {children}
    </SquadContext.Provider>
  );
};

export const useSquad = () => useContext(SquadContext);
