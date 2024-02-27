import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import Modal from "../../components/Modal/Modal";
import "./UserHome.scss";
import { useNavigate, useParams } from "react-router-dom"; // Importe o useParams para obter o ID do participante
import { useTasks } from "../../contexts/TasksContext";

function UserHome() {
  const { id } = useParams(); // Obtém o ID do participante da URL
  const { tasks } = useTasks(id); // Obtém as tarefas associadas ao participante com o ID fornecido
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    // Implemente a lógica de logout aqui
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="surface-card">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">
              Lista de Tarefas
            </div>
          </div>

          <div className="tasks-container">
            {tasks.map((task) => (
              <div
                className="task-card"
                key={task.id}
                onClick={() => handleTaskClick(task)}
              >
                <Task taskInfo={task} />
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && <Modal taskInfo={selectedTask} onClose={closeModal} />}
      </div>
    </>
  );
}

export default UserHome;
