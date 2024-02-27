import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task';
import Modal from '../../components/Modal/Modal';
import { TabMenu } from 'primereact/tabmenu';
import './MainHome.scss';
import { useTasks } from '../../contexts/TasksContext';

function MainHome() {
  const { tasks } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Inicializa o activeIndex com 0

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (e) => {
    setActiveIndex(e.index); // Atualiza o activeIndex com o índice do item selecionado
  };

  const filterItems = [
    { label: 'Todas', value: 'all' },
    { label: 'Abertas', value: 'Aberta' },
    { label: 'Fechadas', value: 'Fechada' },
    { label: 'Disponíveis', value: 'Disponível' },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeIndex === 0) {
      return true; // Mostra todas as tarefas se o índice ativo for 0 (Todas)
    } else {
      const status = filterItems[activeIndex].value.toLowerCase(); // Obtém o valor do filtro selecionado
      return task.status.toLowerCase() === status;
    }
  });

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas</h1>
        <div className="filter-buttons">
          <TabMenu model={filterItems} activeIndex={activeIndex} onTabChange={handleFilterChange} />
        </div>
        <div className="tasks-container">
          {filteredTasks.length === 0 ? (
            <p>Nenhuma tarefa encontrada.</p>
          ) : (
            filteredTasks.map((task) => (
              <div className="task-card" key={task.id} onClick={() => handleTaskClick(task)}>
                <Task taskInfo={task} />
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
