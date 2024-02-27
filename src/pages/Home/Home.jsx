import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import Modal from "../../components/Modal/Modal";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      priority: "Alta",
      status: "Aberta",
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      priority: "Média",
      status: "Disponível",
    },
    {
      id: 3,
      title: "Tarefa 3",
      description: "Descrição da tarefa 3",
      priority: "Baixa",
      status: "Fechada",
    },
  ]);

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

export default Home;
