import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com', password: 'senhaAlice', role: 'Desenvolvedor', tasks: [] },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: 'senhaBob', role: 'Gerente', tasks: [] },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'senhaCharlie', role: 'Analista', tasks: [] },
  ]);
  const [user, setUser] = useState(null);

  const assignTaskToUser = (userId, task) => {
    setUsers(users.map(user => user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user));
  };

  const loginUser = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setUser(user);
      return true; // Retorna verdadeiro se o login for bem-sucedido
    } else {
      return false; // Retorna falso se as credenciais estiverem incorretas
    }
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