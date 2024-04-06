import  { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useUser } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import "./UserInfos.scss";

export default function UserInfos() {
  const { id } = useParams();
  const { users } = useUser();
  const [participant, setParticipant] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUser"));
    setParticipant(userFromLocalStorage);
  }, []);

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
              <strong>Nome:</strong> {participant.nome}
            </p>
            <p>
              <strong>E-mail:</strong> {participant.email}
            </p>
            <p>
              <strong>Cargo:</strong> {participant.cargo}
            </p>
          </div>
        ) : (
          <p className="not-found">Participante não encontrado.</p>
        )}
      </div>
    </>
  );
}
