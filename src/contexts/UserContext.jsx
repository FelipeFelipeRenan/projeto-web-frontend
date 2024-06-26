import  { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  // Função para atualizar o usuário no contexto e no localStorage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const assignTaskToUser = (userId, task) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user
      )
    );
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/participantes/login/${email}`
      );
      console.log(response.data.pwd === password);
      if (response.data.pwd === password) {
        updateUser(response.data);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  };

  useEffect(() => {
    // Exemplo de ação a ser realizada após o login (redirecionamento, etc.)
    if (user) {
      console.log("Usuário logado:", user);
      console.log("tasks", user.tasksIds);
      console.log("email", user.email);
      // Adicione qualquer ação que você deseja realizar após o login aqui
    }

  }, [user]); // Este useEffect será acionado quando o valor de 'user' mudar

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        assignTaskToUser,
        loginUser,
        logoutUser,
        addUser,
        deleteUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
