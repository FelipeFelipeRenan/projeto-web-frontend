import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export default function TaskModal({ visible, onHide, addTask }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [lastTaskId, setLastTaskId] = useState(0);

  const priorities = [
    { name: "Alta", code: "0" },
    { name: "Média", code: "1" },
    { name: "Baixa", code: "2" },
  ];

  const handleAddTask = () => {
    const newTask = {
      id: lastTaskId + 1,
      description: taskDescription,
      priority: selectedPriority,
      status: "Pendente",
    };

    addTask(newTask);
    setLastTaskId(lastTaskId + 1);
    setTaskDescription("");
    setSelectedPriority(null);
    onHide();
  };

  return (
    <Dialog
      header="Cadastro/Detalhe Task"
      visible={visible}
      style={{ width: "50%" }}
      modal
      onHide={onHide}
    >
      <div className="form-group">
        <label
          htmlFor="descricao"
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
          required
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="prioridade"
          className="block text-900 text-xl font-medium mb-2"
        >
          Prioridade
        </label>
        <Dropdown
          id="prioridade"
          value={selectedPriority}
          options={priorities.map((option) => ({
            label: option.name,
            value: option.code,
          }))}
          onChange={(e) => setSelectedPriority(e.value)}
          optionLabel="label"
          placeholder="Selecione a Prioridade"
          className="w-full"
        />
      </div>
      <div className="form-group">
        <Button
          label="Adicionar Task"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={handleAddTask}
        />
      </div>
    </Dialog>
  );
}
