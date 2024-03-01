import React from 'react';
import { useTasks } from '../../contexts/TasksContext';
import { useUser } from '../../contexts/UserContext';
import { useSquad } from '../../contexts/SquadContext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './AdminPage.scss'; // Importe o arquivo de estilos SCSS
import Header from "../../components/Header/Header";

export default function AdminPage() {
  const { tasks, addTask } = useTasks();
  const { users, addUser } = useUser();
  const { squads, addSquad } = useSquad();

  const handleAddTask = () => {
    const newTask = { description: 'Nova Task', status: 'Pendente' };
    addTask(newTask);
  };

  const handleAddParticipant = () => {
    const newParticipant = { name: 'Novo Participante', tasks: [] };
    addUser(newParticipant);
  };

  const handleAddSquad = () => {
    const newSquad = { name: 'Nova Squad', participants: [], tasks: [] };
    addSquad(newSquad);
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <h1>Administração</h1>
          <h2>Tasks</h2>
          <Button label="Adicionar Task" className="p-button-raised p-button-rounded p-button-text" onClick={handleAddTask} />
        <div className="tasks-container">
          <div className="card-container">
            {tasks.map((task, index) => (
              <Card key={index} className="task-card" title={task.description}>
                <p>Status: {task.status}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="participants-container">
          <h2>Participantes</h2>
          <Button label="Adicionar Participante" className="p-button-raised p-button-rounded p-button-text" onClick={handleAddParticipant} />
          <div className="card-container">
            {users.map((user, index) => (
              <Card key={index} className="participant-card" title={user.name}>
                <p>Total de tasks: {user.tasks.length}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="squads-container">
          <h2>Squads</h2>
          <Button label="Adicionar Squad" className="p-button-raised p-button-rounded p-button-text" onClick={handleAddSquad} />
          <div className="card-container">
            {squads.map((squad, index) => (
              <Card key={index} className="squad-card" title={squad.name}>
                <p>Total de participantes: {squad.participants.length}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
