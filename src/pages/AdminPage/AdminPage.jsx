import React from "react";
import { useTasks } from "../../contexts/TasksContext";
import { useUser } from "../../contexts/UserContext";
import { useSquad } from "../../contexts/SquadContext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import "./AdminPage.scss"; // Importe o arquivo de estilos SCSS
import Header from "../../components/Header/Header";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";

export default function AdminPage() {
  const { tasks, addTask } = useTasks();
  const { users, addUser } = useUser();
  const { squads, addSquad } = useSquad();
  const [taskDialog, setTaskDialog] = useState(false);
  const [participanteDialog, setParticipanteDialog] = useState(false);
  const [squadDialog, setSquadDialog] = useState(false);
  const [value, setValue] = useState("");
  const [selectedPrioridade, setSelectedPrioridade] = useState(null);
  const [selectedCargo, setSelectedCargo] = useState(null);

  const cargos = [
    { name: "Cargo 1", code: "0" },
    { name: "Cargo 2", code: "1" },
    { name: "Cargo 3", code: "2" },
    { name: "Cargo 4", code: "3" },
    { name: "Cargo 5", code: "4" },
  ];
  const prioridades = [
    { name: "Alta", code: "0" },
    { name: "Média", code: "1" },
    { name: "Baixa", code: "2" },
  ];

  const handleAddTask = () => {
    const newTask = { description: "Nova Task teste", status: "Pendente" };
    addTask(newTask);
    setTaskDialog(false);
  };

  const handleAddParticipant = () => {
    setParticipanteDialog(false); // Add na ultima linha
    const newParticipant = { name: "Novo Participante teste", tasks: [] };
    addUser(newParticipant);
  };

  const handleAddSquad = () => {
    setSquadDialog(false); // Add na ultima linha
    const newSquad = { name: "Nova Squad teste", participants: [], tasks: [] };
    addSquad(newSquad);
  };
  const actionTaskDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={() => setTaskDialog(false)}
      />
      <Button
        label="Cadastrar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={handleAddTask}
      />
    </>
  );
  const actionParticipanteDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={() => setParticipanteDialog(false)}
      />
      <Button
        label="Cadastrar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={handleAddParticipant}
      />
    </>
  );
  const actionSquadDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={() => setSquadDialog(false)}
      />
      <Button
        label="Cadastrar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={handleAddSquad}
      />
    </>
  );
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
                      icon="pi pi-trash"
                      className="p-button-rounded p-button custom-button"
                      style={{
                        color: "red",
                      }}
                      tooltip={"Excluir"}
                      // onClick={() => handleDeleteTask(index)}
                    />
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button custom-button"
                      style={{
                        color: "blue",
                      }}
                      tooltip={"Editar"}
                      // onClick={() => handleEditTask(index)}
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
            onClick={() => setParticipanteDialog(true)}
          />
          <div className="card-container">
            {users.map((user, index) => (
              <Card key={index} className="participant-card" title={user.name}>
                <p>Total de tasks: {user.tasks.length}</p>
                <div className="card-actions">
                  <div className="card-buttons">
                    <Button
                      icon="pi pi-trash"
                      className="p-button-rounded p-button custom-button"
                      style={{
                        color: "red",
                      }}
                      tooltip={"Excluir"}
                      // onClick={() => handleDeleteTask(index)}
                    />
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button custom-button"
                      style={{
                        color: "blue",
                      }}
                      tooltip={"Editar"}
                      // onClick={() => handleEditTask(index)}
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
                      icon="pi pi-trash"
                      className="p-button-rounded p-button custom-button"
                      style={{
                        color: "red",
                      }}
                      tooltip={"Excluir"}
                      // onClick={() => handleDeleteTask(index)}
                    />
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button custom-button"
                      style={{
                        color: "blue",
                      }}
                      tooltip={"Editar"}
                      // onClick={() => handleEditTask(index)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Dialog
          header="Cadastro/Detalhe Task"
          visible={taskDialog}
          style={{ width: "50%" }}
          modal
          footer={actionTaskDialogFooter}
          onHide={() => setTaskDialog(false)}
        >
          <div className="form-group">
            <label
              htmlFor="titulo"
              className="block text-900 text-xl font-medium mb-2"
            >
              Titulo
            </label>
            <InputText
              id="titulo"
              type="text"
              placeholder="Nome"
              className="w-full "
              style={{ padding: "1rem" }}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="prioridade"
              className="block text-900 font-medium text-xl mb-2"
            >
              Prioridade
            </label>
            <Dropdown
              value={selectedPrioridade}
              onChange={(e) => setSelectedPrioridade(e.value)}
              options={prioridades}
              optionLabel="name"
              placeholder="Prioridade"
              className="w-full"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="detalhes"
              className="block text-900 font-medium text-xl mb-2"
            >
              Descrição
            </label>
            <InputTextarea
              autoResize
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              cols={30}
              className="w-full"
            />
          </div>
        </Dialog>
        <Dialog
          header="Cadastro/Detalhe Participante"
          visible={participanteDialog}
          style={{ width: "50%" }}
          modal
          footer={actionParticipanteDialogFooter}
          onHide={() => setParticipanteDialog(false)}
        >
          <label
            htmlFor="nome1"
            className="block text-900 text-xl font-medium mb-2"
          >
            Nome
          </label>
          <InputText
            id="nome1"
            type="text"
            placeholder="Nome"
            className="w-full md:w-30rem mb-5"
            style={{ padding: "1rem" }}
          />
          <label
            htmlFor="email1"
            className="block text-900 text-xl font-medium mb-2"
          >
            E-mail
          </label>
          <InputText
            id="email1"
            type="text"
            placeholder="Email"
            className="w-full md:w-30rem mb-5"
            style={{ padding: "1rem" }}
          />
          <label
            htmlFor="cargo"
            className="block text-900 font-medium text-xl mb-2"
          >
            Cargo
          </label>
          <Dropdown
            value={selectedCargo}
            onChange={(e) => setSelectedCargo(e.value)}
            options={cargos}
            optionLabel="name"
            placeholder="Selecione o cargo"
            className="w-full"
          />
        </Dialog>
        <Dialog
          header="Cadastro/Detalhe Squad"
          visible={squadDialog}
          style={{ width: "50%" }}
          modal
          footer={actionSquadDialogFooter}
          onHide={() => setSquadDialog(false)}
        >
          <label
            htmlFor="titulo"
            className="block text-900 text-xl font-medium mb-2"
          >
            Titulo
          </label>
          <InputText
            id="titulo"
            type="text"
            placeholder="Nome"
            className="w-full md:w-30rem mb-5"
            style={{ padding: "1rem" }}
          />
          <label
            htmlFor="prioridade"
            className="block text-900 font-medium text-xl mb-2"
          >
            Prioridade
          </label>
          <Dropdown
            value={selectedPrioridade}
            onChange={(e) => setSelectedPrioridade(e.value)}
            options={prioridades}
            optionLabel="name"
            placeholder="Prioridade"
            className="w-full"
          />
          <div className="w-full" style={{ marginTop: "5%" }}>
            <label
              htmlFor="detalhes"
              className="block text-900 font-medium text-xl mb-2"
            >
              Detalhes
            </label>
            <InputTextarea
              autoResize
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              cols={30}
              className="w-full"
            />
          </div>
        </Dialog>
      </div>
    </>
  );
}
