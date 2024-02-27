import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task';
import Modal from '../../components/Modal/Modal';
import { TabMenu } from 'primereact/tabmenu';
import './MainHome.scss';

function MainHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', priority: 'Alta', status: 'Aberta' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', priority: 'Média', status: 'Disponível' },
    { id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3', priority: 'Baixa', status: 'Fechada' },
    { id: 4, title: 'Tarefa 4', description: 'Descrição da tarefa 4', priority: 'Alta', status: 'Fechada' },
    { id: 5, title: 'Tarefa 5', description: 'Descrição da tarefa 5', priority: 'Baixa', status: 'Aberta' },
    // Adicione mais tarefas conforme necessário
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (index) => {
    setActiveIndex(index);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeIndex === 0) {
      return true;
    } else if (activeIndex === 1) {
      return task.status === 'Aberta';
    } else if (activeIndex === 2) {
      return task.status === 'Fechada';
    } else if (activeIndex === 3) {
      return task.status === 'Disponível';
    }
    return true;
  });

  const filterItems = [
    { label: 'Todas', icon: 'pi pi-fw pi-list', command: () => handleFilterChange(0) },
    { label: 'Abertas', icon: 'pi pi-fw pi-check', command: () => handleFilterChange(1) },
    { label: 'Fechadas', icon: 'pi pi-fw pi-times', command: () => handleFilterChange(2) },
    { label: 'Disponíveis', icon: 'pi pi-fw pi-clock', command: () => handleFilterChange(3) },
  ];

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas</h1>
        <div className="filter-buttons">
          <TabMenu model={filterItems} activeIndex={activeIndex} />
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

export default MainHome;
