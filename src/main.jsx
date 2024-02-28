import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TasksProvider } from "./contexts/TasksContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </UserProvider>
  </React.StrictMode>
);
