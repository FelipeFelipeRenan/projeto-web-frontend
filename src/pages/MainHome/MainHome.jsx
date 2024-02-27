import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import Modal from "../../components/Modal/Modal";
import "./MainHome.scss";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarefa 1", description: "Descrição da tarefa 1", priority: "Alta", status: "Aberta" },
    { id: 2, title: "Tarefa 2", description: "Descrição da tarefa 2", priority: "Média", status: "Disponível" },
    { id: 3, title: "Tarefa 3", description: "Descrição da tarefa 3", priority: "Baixa", status: "Fechada" },
    { id: 4, title: "Tarefa 4", description: "Descrição da tarefa 4", priority: "Alta", status: "Fechada" },
    { id: 5, title: "Tarefa 5", description: "Descrição da tarefa 5", priority: "Baixa", status: "Aberta" },
    // Adicione mais tarefas conforme necessário
  ]);

  const [filter, setFilter] = useState("all");

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "abertas") {
      return task.status === "Aberta";
    } else if (filter === "fechadas") {
      return task.status === "Fechada";
    } else if (filter === "disponiveis") {
      return task.status === "Disponível";
    }
    return true;
  });

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas</h1>
        <div className="filter-buttons">
          <button className={filter === "all" ? "active" : ""} onClick={() => handleFilterChange("all")}>
            Todas
          </button>
          <button className={filter === "abertas" ? "active" : ""} onClick={() => handleFilterChange("abertas")}>
            Abertas
          </button>
          <button className={filter === "fechadas" ? "active" : ""} onClick={() => handleFilterChange("fechadas")}>
            Fechadas
          </button>
          <button className={filter === "disponiveis" ? "active" : ""} onClick={() => handleFilterChange("disponiveis")}>
            Disponíveis
          </button>
        </div>
        <div className="tasks-container">
          {filteredTasks.map((task) => (
            <div className="task-card" key={task.id} onClick={() => handleTaskClick(task)}>
              <Task taskInfo={task} />
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && <Modal taskInfo={selectedTask} onClose={closeModal} />}
    </>
  );
}

export default Home;
