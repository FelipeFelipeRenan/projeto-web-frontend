import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="header-container">
        <nav className="linksto">
          <Link>Tasks</Link>
          <Link>Squad</Link>
        </nav>
        <nav>
          <Link to="/login">Sair</Link>
        </nav>
      </header>
    </>
  );
}
