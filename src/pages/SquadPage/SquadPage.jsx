import React, { useEffect } from "react";
import { useSquad } from "../../contexts/SquadContext";
import { useUser } from "../../contexts/UserContext";
import "./SquadPage.scss";
import Header from "../../components/Header/Header";

export default function SquadPage() {
  const { squads, fetchSquadById } = useSquad();
  const { user } = useUser();

  const participantId = user?.id;
  const userFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (userFromLocalStorage.squadsIds) {
      fetchSquadById(userFromLocalStorage.squadsIds);
    }
  }, [participantId, fetchSquadById]);

  const participantSquad = squads.find((squad) =>
    squad.participantes.some((participant) => participant.id === participantId)
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
            {participantSquad.participantes.map((participant) => (
              <li key={participant.id} className="participant-item">
                <span className="participant-name">{participant.nome}</span> -{" "}
                {participant.tasksIds.length} tasks
                <ul className="task-list">
                  {participant.tasksIds.map((taskId) => {
                    const task = participantSquad.sprint.tasks.find((t) => t.id === taskId);
                    return (
                      <li key={taskId} className="task-item">
                        {task.description} - {task.status}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
