import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

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

  const fetchSquadById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/squads/${id}`);
      const squadData = response.data;
      setSquads([...squads, squadData]);
    } catch (error) {
      console.error("Error fetching squad:", error);
    }
  };

  useEffect(() => {
    // Replace 'id' with the actual ID you want to fetch
    const userFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUser"));
    fetchSquadById(userFromLocalStorage.squadsIds);
  }, []);

  return (
    <SquadContext.Provider value={{ squads, setSquads, addSquad, deleteSquad, fetchSquadById }}>
      {children}
    </SquadContext.Provider>
  );
};

export const useSquad = () => useContext(SquadContext);
