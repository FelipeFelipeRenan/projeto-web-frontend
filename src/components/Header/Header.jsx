import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

import "./Header.scss";

export default function Header() {
  const { user, logoutUser } = useUser();
  const location = useLocation();

  const isUserInfosPage = location.pathname.includes('userInfos');
  const linkText = isUserInfosPage ? 'Minhas Tasks' : 'Informações';
  const linkTo = isUserInfosPage ? (user ? `/userhome/${user.id}` : '/mainHome') : `/userInfos/${user?.id || ''}`;

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <header className="header-container">
        <nav className="linksto">
          <Link to="/mainHome">Tasks</Link>
          <Link to={linkTo}>{linkText}</Link>
        </nav>
        <nav>
          {user ? (
            <Link to="/login" onClick={handleLogout}>Sair</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>
    </>
  );
}
