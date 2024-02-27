import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import Modal from "../../components/Modal/Modal";
import "./UserHome.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../../contexts/TasksContext";

function UserHome() {
  const { tasks } = useTasks();
  const { id } = useParams();
  const [participantTasks, setParticipantTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Filtra as tarefas atribuídas ao participante com base no ID na URL
    const filteredTasks = tasks.filter((task) => task.assignedTo === parseInt(id));
    setParticipantTasks(filteredTasks);
  }, [tasks, id]);

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
      <div className="participant-page-container">
        <div className="surface-card">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">
              Tarefas do Participante
            </div>
          </div>

          <div className="tasks-container">
            {participantTasks.map((task) => (
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
