
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

import "./Header.scss";

export default function Header() {
  const { user, logoutUser } = useUser();
  const location = useLocation();

  const isUserInfosPage = location.pathname.includes('userInfos');
  const linkText = isUserInfosPage ? 'Minhas Tasks' : 'Informações';
  const linkTo = isUserInfosPage ? (user ? `/userhome/${localStorage.getItem("id")}` : '/mainHome') : `/userInfos/${localStorage.getItem("id") || ''}`;

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <header className="header-container">
        <nav className="linksto">
          <Link to="/mainHome">Tasks</Link>
          {user && <Link to="/squad">Squad</Link>} {/* Adiciona o link para a página de squad se o usuário estiver logado */}
          <Link to={linkTo}>{linkText}</Link>
        </nav>
        <nav>
          {user ? (
            <Link to="/" onClick={handleLogout}>Sair</Link>
          ) : (
            <Link to="/">Login</Link>
          )}
        </nav>
      </header>
    </>
  );
}
