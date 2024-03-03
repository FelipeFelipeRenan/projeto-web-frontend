import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";

export default function SquadModal({ visible, onHide, addSquad, users }) {
  const [squadName, setSquadName] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [lastSquadId, setLastSquadId] = useState(0);

  const handleAddSquad = () => {
    const newSquad = {
      id: lastSquadId + 1,
      name: squadName,
      participants: selectedParticipants,
      tasks: [],
    };
    addSquad(newSquad);
    setLastSquadId(lastSquadId + 1);
    setSquadName("");
    setSelectedParticipants([]);
    onHide();
  };

  return (
    <Dialog
      header="Cadastro Squad"
      visible={visible}
      style={{ width: "50%" }}
      modal
      onHide={onHide}
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
      <div className="form-group">
        <label
          htmlFor="squadNome"
          className="block text-900 text-xl font-medium mb-2"
        >
          Participantes
        </label>
        <MultiSelect
          value={selectedParticipants}
          options={users.map((user) => ({ label: user.name, value: user.id }))}
          onChange={(e) => setSelectedParticipants(e.value)}
          optionLabel="label"
          placeholder="Selecione os Participantes"
          className="w-full"
        />
      </div>
      <div className="form-group">
        <Button
          label="Adicionar Squad"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={handleAddSquad}
        />
      </div>
    </Dialog>
  );
}
