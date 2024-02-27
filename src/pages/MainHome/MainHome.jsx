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
  const [filter, setFilter] = useState('all');
  const [filterIndex, setFilterIndex] = useState(0);

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.value);
    setFilterIndex(filterItems.findIndex(item => item.value === e.value));
    console.log("Filter value:", e.value); // Verifica o valor do filtro no console
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter.value) { // Correção aqui: Use filter.value em vez de filter
      case 'abertas':
        return task.status === 'Aberta';
      case 'fechadas':
        return task.status === 'Fechada';
      case 'disponiveis':
        return task.status === 'Disponível';
      default:
        return true; // Para o filtro 'all' ou qualquer outro valor desconhecido
    }
  });

  const filterItems = [
    { label: 'Todas', value: 'all' },
    { label: 'Abertas', value: 'abertas' },
    { label: 'Fechadas', value: 'fechadas' },
    { label: 'Disponíveis', value: 'disponiveis' },
  ];

  console.log("Filtered tasks:", filteredTasks); // Verifica as tarefas filtradas no console

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas</h1>
        <div className="filter-buttons">
          <TabMenu model={filterItems} activeIndex={filterIndex} onTabChange={handleFilterChange} />
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
