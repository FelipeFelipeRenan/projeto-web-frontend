import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "Admin",
      email: "admin@example.com",
      password: "senhaAdmin",
      role: "Chefe",
      squadId: 0,
      tasks: [],
    },
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      password: "senhaAlice",
      role: "Desenvolvedor",
      squadId: 1,
      tasks: [],
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      password: "senhaBob",
      role: "Gerente",
      squadId: 2,
      tasks: [],
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      password: "senhaCharlie",
      role: "Analista",
      squadId: 1,
      tasks: [],
    },
  ]);
  const [user, setUser] = useState(null);

  const assignTaskToUser = (userId, task) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user
      )
    );
  };

  const loginUser = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUser(user);
      return true;
    } else {
      return false;
    }
  };

  const logoutUser = () => {
    setUser(null);
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
