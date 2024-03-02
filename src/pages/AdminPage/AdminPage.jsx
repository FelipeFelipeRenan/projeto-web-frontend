import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect"; // Importe o componente MultiSelect
import { useTasks } from "../../contexts/TasksContext";
import { useUser } from "../../contexts/UserContext";
import { useSquad } from "../../contexts/SquadContext";
import "./AdminPage.scss";
import Header from "../../components/Header/Header";

export default function AdminPage() {
  const { tasks, addTask, deleteTask } = useTasks();
  const { users, addUser, deleteUser } = useUser();
  const { squads, addSquad, deleteSquad } = useSquad();
  const [taskDialog, setTaskDialog] = useState(false);
  const [participantDialog, setParticipantDialog] = useState(false);
  const [squadDialog, setSquadDialog] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");
  const [participantRole, setParticipantRole] = useState("");
  const [squadName, setSquadName] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState([]);

  const priorities = [
    { name: "Alta", code: "0" },
    { name: "Média", code: "1" },
    { name: "Baixa", code: "2" },
  ];

  const roles = [
    { name: "Cargo 1", code: "0" },
    { name: "Cargo 2", code: "1" },
    { name: "Cargo 3", code: "2" },
    { name: "Cargo 4", code: "3" },
    { name: "Cargo 5", code: "4" },
  ];

  const handleAddTask = () => {
    const newTask = { description: taskDescription, status: "Pendente" };
    addTask(newTask);
    setTaskDialog(false);
    setTaskDescription("");
  };

  const handleAddParticipant = () => {
    const newParticipant = {
      name: participantName,
      email: participantEmail,
      role: participantRole,
    };
    addUser(newParticipant);
    setParticipantDialog(false);
    setParticipantName("");
    setParticipantEmail("");
    setParticipantRole("");
  };

  const handleAddSquad = () => {
    const newSquad = {
      name: squadName,
      participants: selectedParticipants,
      tasks: [],
    };
    addSquad(newSquad);
    setSquadDialog(false);
    setSquadName("");
    setSelectedParticipants([]);
  };

  const handleDeleteTask = (index) => {
    deleteTask(tasks[index].id);
  };

  const handleDeleteParticipant = (index) => {
    deleteUser(users[index].id);
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
                      onClick={() => handleDeleteTask(index)}
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
                      onClick={() => handleDeleteParticipant(index)}
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
      <Dialog
        header="Cadastro/Detalhe Task"
        visible={taskDialog}
        style={{ width: "50%" }}
        modal
        onHide={() => setTaskDialog(false)}
      >
        <div className="form-group">
          <label
            htmlFor="titulo"
            className="block text-900 text-xl font-medium mb-2"
          >
            Descrição
          </label>
          <InputText
            id="descricao"
            type="text"
            placeholder="Descrição da Tarefa"
            className="w-full"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <Button
          label="Adicionar Task"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={handleAddTask}
        />
      </Dialog>

      <Dialog
        header="Cadastro Participante"
        visible={participantDialog}
        style={{ width: "50%" }}
        modal
        onHide={() => setParticipantDialog(false)}
      >
        <div className="form-group">
          <label
            htmlFor="nome"
            className="block text-900 text-xl font-medium mb-2"
          >
            Nome
          </label>
          <InputText
            id="nome"
            type="text"
            placeholder="Nome"
            className="w-full"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-900 text-xl font-medium mb-2"
          >
            E-mail
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email"
            className="w-full"
            value={participantEmail}
            onChange={(e) => setParticipantEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="role"
            className="block text-900 text-xl font-medium mb-2"
          >
            Cargo
          </label>
          <Dropdown
            id="role"
            value={participantRole}
            options={roles.map((option) => ({
              label: option.name,
              value: option.code,
            }))}
            onChange={(e) => setParticipantRole(e.value)}
            optionLabel="label"
            placeholder="Selecione o Cargo"
            className="w-full"
          />
        </div>
        <Button
          label="Adicionar Participante"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={handleAddParticipant}
        />
      </Dialog>

      <Dialog
        header="Cadastro Squad"
        visible={squadDialog}
        style={{ width: "50%" }}
        modal
        onHide={() => setSquadDialog(false)}
      >
        <div className="form-group">
          <label
            htmlFor="squadNome"
            className="block text-900 text-xl font-medium mb-2"
          >
            Nome da Squad
          </label>
          <InputText
            id="squadNome"
            type="text"
            placeholder="Nome da Squad"
            className="w-full"
            value={squadName}
            onChange={(e) => setSquadName(e.target.value)}
          />
        </div>
        {/* Adicione aqui a interface para selecionar os participantes */}
        <MultiSelect
          value={selectedParticipants}
          options={users.map((user) => ({ label: user.name, value: user.id }))}
          onChange={(e) => setSelectedParticipants(e.value)}
          optionLabel="label"
          placeholder="Selecione os Participantes"
          className="w-full"
        />
        <Button
          label="Adicionar Squad"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={handleAddSquad}
        />
      </Dialog>
    </>
  );
}
