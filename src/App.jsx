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
import UserInfos from "./pages/UserInfos/UserInfos";
import SquadPage from "./pages/SquadPage/SquadPage";
import Participantes from "./pages/Participantes/Participantes";
import Squad from "./pages/Squad/Squad";
import Task from "./pages/Task/Task";
import AdminPage from "./pages/AdminPage/AdminPage";

const routes = createBrowserRouter([
  {
    path: `/userHome/:id`,
    element: <UserHome />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/mainHome",
    element: <MainHome />,
  },
  {
    path: "/userInfos/:id",
    element: <UserInfos />,
  },
  {
    path: "/squad",
    element: <SquadPage />,
  },
  {
    path: "/cadastroparticipantes",
    element: <Participantes />,
  },
  {
    path: "/cadastrosquad",
    element: <Squad />,
  },
  {
    path: "/cadastrotask",
    element: <Task />,
  },
  { path: "/admin", element: <AdminPage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
