/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Verificar se há um usuário logado ao carregar a página
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const fetchUserFromApi = async (email, password) => {
    try {
      const response = await axios.post("http://sua-api.com/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário na API:", error);
      return null;
    }
  };

  const assignTaskToUser = (userId, task) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user
      )
    );
  };

  const loginUser = async (email, password) => {
    const userFromApi = await fetchUserFromApi(email, password);
    if (userFromApi) {
      setCurrentUser(userFromApi);
      localStorage.setItem("currentUser", JSON.stringify(userFromApi));
      return true;
    } else {
      return false;
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <UserContext.Provider
      value={{
        setUsers,
        currentUser,
        users,
        assignTaskToUser,
        loginUser,
        logoutUser,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
