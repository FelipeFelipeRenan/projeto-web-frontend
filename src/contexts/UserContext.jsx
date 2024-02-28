import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com', tasks: [] },
    { id: 2, name: 'Bob', email: 'bob@example.com', tasks: [] },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', tasks: [] },
  ]);
  const [user, setUser] = useState(null);

  const assignTaskToUser = (userId, task) => {
    setUsers(users.map(user => user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user));
  };

  const loginUser = (userId) => {
    const selectedUser = users.find((user) => user.id === userId);
    setUser(selectedUser);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ users, assignTaskToUser, loginUser, logoutUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
