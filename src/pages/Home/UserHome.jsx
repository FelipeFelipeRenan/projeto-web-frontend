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

function UserHome() {
  const { tasks } = useTasks();
  const { users, user: loggedInUser } = useUser();
  const { id: userIdFromParams } = useParams();
  const navigate = useNavigate();
  const [participantTasks, setParticipantTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

 /* useEffect(() => {
    const user = users.find((u) => u.id === parseInt(userIdFromParams, 10));
    if (!user) {
      if (loggedInUser && loggedInUser.id.toString() !== userIdFromParams) {
        navigate(`/userHome/${loggedInUser.id}`);
      } else {
        navigate("/");
      }
    } else {
      const filteredTasks = tasks.filter((task) => {
        if (activeIndex === 0) {
          return task.assignedTo === user.id;
        } else {
          const filter = filterItems[activeIndex].value.toLowerCase();
          return (
            task.assignedTo === user.id &&
            (filter === "abertas"
              ? task.status.toLowerCase() === "aberta"
              : task.status.toLowerCase() === "fechada")
          );
        }
      });
      setParticipantTasks(filteredTasks);
    }
  }, [userIdFromParams, tasks, users, navigate, loggedInUser, activeIndex]);
*/
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
          Lista de Tarefas de {localStorage.getItem("name")}
          
        </h1>
        {/* Adicione esta linha para mostrar as informações do usuário */}
        <p>Email: {localStorage.getItem("email")}</p>
        <p>Cargo: {localStorage.getItem("cargo")}</p>
      
        <div className="filter-buttons">
          <TabMenu
            model={filterItems}
            activeIndex={activeIndex}
            onTabChange={handleFilterChange}
          />
        </div>
        <div className="tasks-container">
          {participantTasks.length === 0 ? (
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
          )}
        </div>
      </main>
      {isModalOpen && <Modal taskInfo={selectedTask} onClose={closeModal} />}
    </>
  );
}

export default UserHome;
