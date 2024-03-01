import React from "react";
import ReactDOM from "react-dom/client";
import { SquadProvider } from "./contexts/SquadContext";
import { UserProvider } from "./contexts/UserContext";
import { TasksProvider } from "./contexts/TasksContext";
import App from "./App";
import { AdminProvider } from "./contexts/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <UserProvider>
        <TasksProvider>
          <SquadProvider>
            <App />
          </SquadProvider>
        </TasksProvider>
      </UserProvider>
    </AdminProvider>
  </React.StrictMode>
);
