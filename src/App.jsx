import "./styles/layout/layout.scss";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css";

import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import MainHome from "./pages/MainHome/MainHome";
import UserHome from "./pages/Home/UserHome";

const routes = createBrowserRouter([
  {
    path: "/userHome/:id",
    element: <UserHome/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mainHome",
    element: <MainHome />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
