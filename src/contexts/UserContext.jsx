import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com', password: 'senhaAlice', role: 'Desenvolvedor', tasks: [] },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: 'senhaBob', role: 'Gerente', tasks: [] },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'senhaCharlie', role: 'Analista', tasks: [] },
  ]);
  const [user, setUser] = useState(null);

  // Verifica se há um usuário salvo no localStorage ao carregar a página
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      const foundUser = users.find(u => u.id === parsedUser.id);
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [users]);

  const assignTaskToUser = (userId, task) => {
    setUsers(users.map(user => user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user));
  };

  const loginUser = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user)); // Salva o usuário no localStorage ao fazer login
      return true; // Retorna verdadeiro se o login for bem-sucedido
    } else {
      return false; // Retorna falso se as credenciais estiverem incorretas
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove o usuário do localStorage ao fazer logout
  };

  return (
    <UserContext.Provider value={{ users, assignTaskToUser, loginUser, logoutUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
