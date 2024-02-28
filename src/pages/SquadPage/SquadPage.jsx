import React from "react";
import { useSquad } from "../../contexts/SquadContext";
import { useUser } from "../../contexts/UserContext";
import "./SquadPage.scss"; // Importe o arquivo de estilos SCSS
import Header from "../../components/Header/Header";

export default function SquadPage() {
  const { squads } = useSquad();
  const { user } = useUser();

  const participantId = user?.id;

  const participantSquad = squads.find((squad) =>
    squad.participants.some((participant) => participant.id === participantId)
  );

  if (!participantSquad) {
    return <div>Você não está associado a nenhuma squad.</div>;
  }

  return (
    <>
      <Header />
      <div className="squad-container">
        <h1 className="squad-title">Squad: {participantSquad.name}</h1>
        <div>
          <h2>Participantes</h2>
          <ul className="participants-list">
            {participantSquad.participants.map((participant) => (
              <li key={participant.id} className="participant-item">
                <span className="participant-name">{participant.name}</span> -{" "}
                {participant.tasks.length} tasks
                <ul className="task-list">
                  {participant.tasks.map((task) => (
                    <li key={task.id} className="task-item">
                      {task.description} - {task.status}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
