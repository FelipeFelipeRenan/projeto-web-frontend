import { useEffect, useState } from "react";
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
  const [participantTasks, setParticipantTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/tasks/${userIdFromParams}`);
        const taskData = response.data; // Aqui obtemos os dados da tarefa
        const formattedTask = {
          id: taskData.id,
          title: taskData.title,
          status: taskData.availability, // Aqui usamos 'availability' para status
          description: taskData.description,
          dueDate: taskData.dueDate,
          priority: taskData.priority,
          completed: taskData.completed,
        };
        setParticipantTasks([formattedTask]); // Aqui adicionamos a tarefa formatada ao estado
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userIdFromParams]);

  const [participant, setParticipant] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUser"));
    setParticipant(userFromLocalStorage);
  }, []);

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterItems = [
    { label: "Todas", value: "all" },
    { label: "Abertas", value: "Aberto" },
    { label: "Fechadas", value: "Fechado" },
  ];

  const handleFilterChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">
          Lista de Tarefas de {participant ? participant.nome : ""}
        </h1>
        {/* Adicione esta linha para mostrar as informações do usuário */}
        <p>Email: {participant ? participant.email : ""}</p>
        <p>Cargo: {participant ? participant.cargo : ""}</p>

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
