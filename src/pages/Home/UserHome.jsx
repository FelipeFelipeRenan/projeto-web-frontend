import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import Modal from "../../components/Modal/Modal";
import { TabMenu } from "primereact/tabmenu";
import { Card } from "primereact/card";
import "./UserHome.scss";
import { useTasks } from "../../contexts/TasksContext";
import { useUser } from "../../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserHome() {
  const { tasks } = useTasks();
  const { user: loggedInUser } = useUser();
  const { id: userIdFromParams } = useParams();
  const navigate = useNavigate();
  const [participantTasks, setParticipantTasks] = useState([]); // Inicializando como uma array vazia
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/tasks/${userIdFromParams}`);
        setParticipantTasks(response.data); // Atualizando participantTasks com as tarefas retornadas pela API
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userIdFromParams]);

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterItems = [
    { label: "Todas", value: "all" },
    { label: "Abertas", value: "abertas" },
    { label: "Fechadas", value: "fechadas" },
  ];

  const handleFilterChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">
          Lista de Tarefas de {loggedInUser && loggedInUser.nome}
        </h1>
        {/* Adicione esta linha para mostrar as informações do usuário */}
        <p>Email: {loggedInUser && loggedInUser.email}</p>
        <p>Cargo: {loggedInUser && loggedInUser.cargo}</p>

        <div className="filter-buttons">
          <TabMenu
            model={filterItems}
            activeIndex={activeIndex}
            onTabChange={handleFilterChange}
          />
        </div>
        <div className="tasks-container">
          {/* {participantTasks.length === 0 ? (
            <p>Nenhuma tarefa encontrada.</p>
          ) : (
            participantTasks.map((task) => (
              <Card
                key={task.id}
                title={task.title}
                subTitle={`Status: ${task.status}`}
                className="task-card"
                onClick={() => handleTaskClick(task)}
              >
                <Task taskInfo={task} />
              </Card>
            ))
          )} */}
        </div>
      </main>
      {isModalOpen && <Modal taskInfo={selectedTask} onClose={closeModal} />}
    </>
  );
}

export default UserHome;
