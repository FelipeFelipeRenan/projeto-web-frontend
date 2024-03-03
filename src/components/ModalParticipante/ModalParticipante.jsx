import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export default function ParticipantModal({ visible, onHide, addUser }) {
  const [participantName, setParticipantName] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");
  const [participantRole, setParticipantRole] = useState("");
  const [lastParticipantkId, setLastParticipantId] = useState(0);

  const roles = [
    { name: "Cargo 1", code: "0" },
    { name: "Cargo 2", code: "1" },
    { name: "Cargo 3", code: "2" },
    { name: "Cargo 4", code: "3" },
    { name: "Cargo 5", code: "4" },
  ];

  const handleAddParticipant = () => {
    const newParticipant = {
      id: lastParticipantkId + 1,
      name: participantName,
      email: participantEmail,
      role: participantRole,
    };
    addUser(newParticipant);
    setLastParticipantId(lastParticipantkId + 1);
    onHide();
    setParticipantName("");
    setParticipantEmail("");
    setParticipantRole("");
  };

  return (
    <Dialog
      header="Cadastro Participante"
      visible={visible}
      style={{ width: "50%" }}
      modal
      onHide={onHide}
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
      <div className="form-group">
        <Button
          label="Adicionar Participante"
          className="p-button-raised p-button-rounded p-button-text"
          onClick={handleAddParticipant}
        />
      </div>
    </Dialog>
  );
}
