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

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'abertas') {
      return task.status === 'Aberta';
    } else if (filter === 'fechadas') {
      return task.status === 'Fechada';
    } else if (filter === 'disponiveis') {
      return task.status === 'Disponível';
    }
    return true;
  });

  const filterItems = [
    { label: 'Todas', value: 'all' },
    { label: 'Abertas', value: 'abertas' },
    { label: 'Fechadas', value: 'fechadas' },
    { label: 'Disponíveis', value: 'disponiveis' },
  ];

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas</h1>
        <div className="filter-buttons">
          <TabMenu model={filterItems} activeItem={filter} onTabChange={handleFilterChange} />
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
