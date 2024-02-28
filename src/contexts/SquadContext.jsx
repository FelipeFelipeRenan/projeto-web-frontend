import React, { createContext, useState, useContext } from 'react';
import { useUser } from './UserContext';

const SquadContext = createContext();

export const SquadProvider = ({ children }) => {
  const { users } = useUser();
  const [squads, setSquads] = useState([
    {
      id: 1,
      name: 'Squad A',
      participants: users.slice(0, 2), // Adiciona os dois primeiros participantes
    },
    {
      id: 2,
      name: 'Squad B',
      participants: users.slice(2, 4), // Adiciona os próximos dois participantes
    },
    // Adicione mais squads conforme necessário
  ]);

  const createSquad = (name, participantIds) => {
    const participants = users.filter(user => participantIds.includes(user.id));
    const newSquad = { id: squads.length + 1, name, participants };
    setSquads([...squads, newSquad]);
  };

  const addParticipantsToSquad = (squadId, participantIds) => {
    const updatedSquads = squads.map(squad => {
      if (squad.id === squadId) {
        const participants = users.filter(user => participantIds.includes(user.id));
        return { ...squad, participants: [...squad.participants, ...participants] };
      }
      return squad;
    });
    setSquads(updatedSquads);
  };

  return (
    <SquadContext.Provider value={{ squads, createSquad, addParticipantsToSquad }}>
      {children}
    </SquadContext.Provider>
  );
};

export const useSquad = () => useContext(SquadContext);
