import React from 'react';
import ReactDOM from 'react-dom/client';
import { SquadProvider } from './contexts/SquadContext'; 
import { UserProvider } from './contexts/UserContext';
import { TasksProvider } from './contexts/TasksContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TasksProvider>
        <SquadProvider> 
          <App />
        </SquadProvider>
      </TasksProvider>
    </UserProvider>
  </React.StrictMode>
);
