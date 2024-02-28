import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

import "./Header.scss";

export default function Header() {
  const { user } = useUser();
  const location = useLocation();

  useEffect(() => {
    console.log('Location:', location.pathname);
    console.log('User:', user);
  }, [location, user]);

  return (
    <>
      <header className="header-container">
        <nav className="linksto">
          <Link to="/mainHome">Tasks</Link>
          {user && <Link to={`/userInfos/${user.id}`}>Informações</Link>}
        </nav>
        <nav>
          {user ? (
            <Link to="/login">Sair</Link>
          ) : (
            <button onClick={() => console.log("Implemente a lógica de login aqui")}>Login</button>
          )}
        </nav>
      </header>
    </>
  );
}
