import React from "react";
import { useUser } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import "./UserInfos.scss"; // Importe o arquivo SCSS
import "primereact/resources/themes/md-dark-deeppurple/theme.css"; // Importe o tema do PrimeReact
import "primereact/resources/primereact.min.css"; // Importe os estilos do PrimeReact
import Header from "../../components/Header/Header";

export default function UserInfos() {
  const { id } = useParams();
  const { users } = useUser();

  const participant = users.find((user) => user.id === parseInt(id));

  return (
    <>
      <Header />
      <div className="user-info-container">
        <h1>Informações do Participante</h1>
        {participant ? (
          <div className="participant-info">
            <p>
              <strong>ID:</strong> {participant.id}
            </p>
            <p>
              <strong>Nome:</strong> {participant.name}
            </p>
            <p>
              <strong>E-mail:</strong> {participant.email}
            </p>
          </div>
        ) : (
          <p className="not-found">Participante não encontrado.</p>
        )}
      </div>
    </>
  );
}
