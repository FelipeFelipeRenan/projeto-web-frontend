import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import Modal from "../../components/Modal/Modal";
import { TabMenu } from "primereact/tabmenu";
import { Card } from "primereact/card";
import "./MainHome.scss";
import { useTasks } from "../../contexts/TasksContext";
import axios from "axios";

function MainHome() {
  const { tasks, setTasks } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (e) => {
    setActiveIndex(e.index);
  };

  const filterItems = [
    { label: "Todas", value: "all" },
    { label: "Abertas", value: "Aberto" },
    { label: "Fechadas", value: "Fechada" },
    { label: "Disponíveis", value: "Disponível" },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeIndex === 0) {
      return true;
    } else {
      const status = filterItems[activeIndex].value.toLowerCase();
      return task.availability.toLowerCase() === status;
    }
  });

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas</h1>
        <div className="filter-buttons">
          <TabMenu
            model={filterItems}
            activeIndex={activeIndex}
            onTabChange={handleFilterChange}
          />
        </div>
        <div className="tasks-container">
          {filteredTasks.length === 0 ? (
            <p>Nenhuma tarefa encontrada.</p>
          ) : (
            filteredTasks.map((task) => (
              <div key={task.id} onClick={() => handleTaskClick(task)}>
                <Card
                  title={task.title}
                  subTitle={`Status: ${task.priority}`}
                  style={{ marginBottom: "1rem", cursor: "pointer" }}
                >
                  <Task taskInfo={task} />
                </Card>
              </div>
            ))
          )}
        </div>
      </main>
      {isModalOpen && <Modal taskInfo={selectedTask} onClose={closeModal} />}
    </>
  );
}

export default MainHome;
