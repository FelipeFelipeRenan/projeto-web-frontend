import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useTasks } from "../../contexts/TasksContext";
import { useUser } from "../../contexts/UserContext";
import { useSquad } from "../../contexts/SquadContext";
import "./AdminPage.scss";
import Header from "../../components/Header/Header";
import TaskModal from "../../components/ModalTask/ModalTask";
import ParticipantModal from "../../components/ModalParticipante/ModalParticipante";
import SquadModal from "../../components/ModalSquad/ModalSquad";

export default function AdminPage() {
  const { tasks, addTask, deleteTask } = useTasks();
  const { users, addUser, deleteUser } = useUser();
  const { squads, addSquad, deleteSquad } = useSquad();
  const [taskDialog, setTaskDialog] = useState(false);
  const [participantDialog, setParticipantDialog] = useState(false);
  const [squadDialog, setSquadDialog] = useState(false);

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleDeleteParticipant = (participantId) => {
    deleteUser(participantId);
  };

  const handleDeleteSquad = (index) => {
    deleteSquad(squads[index].id);
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <h1>Administração</h1>
        <h2>Tasks</h2>
        <Button
          label="Adicionar Task"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={() => setTaskDialog(true)}
        />
        <div className="tasks-container">
          <div className="card-container">
            {tasks.map((task, index) => (
              <Card key={index} className="task-card" title={task.description}>
                <p>Status: {task.status}</p>
                <div className="card-actions">
                  <div className="card-buttons">
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button custom-button"
                      style={{ color: "blue" }}
                    />
                    <Button
                      icon="pi pi-trash"
                      className="p-button-rounded p-button custom-button"
                      style={{ color: "red" }}
                      onClick={() => handleDeleteTask(task.id)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="participants-container">
          <h2>Participantes</h2>
          <Button
            label="Adicionar Participante"
            className="p-button-raised p-button-rounded p-button-text"
            onClick={() => setParticipantDialog(true)}
          />
          <div className="card-container">
            {users.map((user, index) => (
              <Card key={index} className="participant-card" title={user.name}>
                <p>Email: {user.email}</p>
                <p>Cargo: {user.role}</p>
                <div className="card-actions">
                  <div className="card-buttons">
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button custom-button"
                      style={{ color: "blue" }}
                    />
                    <Button
                      icon="pi pi-trash"
                      className="p-button-rounded p-button custom-button"
                      style={{ color: "red" }}
                      onClick={() => handleDeleteParticipant(user.id)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="squads-container">
          <h2>Squads</h2>
          <Button
            label="Adicionar Squad"
            className="p-button-raised p-button-rounded p-button-text"
            onClick={() => setSquadDialog(true)}
          />
          <div className="card-container">
            {squads.map((squad, index) => (
              <Card key={index} className="squad-card" title={squad.name}>
                <p>Total de participantes: {squad.participants.length}</p>
                <div className="card-actions">
                  <div className="card-buttons">
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button custom-button"
                      style={{ color: "blue" }}
                    />
                    <Button
                      icon="pi pi-trash"
                      className="p-button-rounded p-button custom-button"
                      style={{ color: "red" }}
                      onClick={() => handleDeleteSquad(index)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <TaskModal
        visible={taskDialog}
        onHide={() => setTaskDialog(false)}
        addTask={addTask}
      />
      <ParticipantModal
        visible={participantDialog}
        onHide={() => setParticipantDialog(false)}
        addUser={addUser}
      />

      <SquadModal
        visible={squadDialog}
        onHide={() => setSquadDialog(false)}
        addSquad={addSquad}
        users={users}
      />
    </>
  );
}
