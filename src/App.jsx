import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";


const routes = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
