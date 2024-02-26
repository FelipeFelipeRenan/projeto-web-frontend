import React from "react";
import "./Modal.scss"; // Importe os estilos do modal

function Modal({ taskInfo, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Detalhes da Tarefa</h2>
        <p>Descrição: {taskInfo.description}</p>
        <p>Prioridade: {taskInfo.priority}</p>
        <p>Disponibilidade: {taskInfo.status}</p>
        {/* Adicione mais informações da task conforme necessário */}
      </div>
    </div>
  );
}

export default Modal;
