import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task';
import Modal from '../../components/Modal/Modal';
import { TabMenu } from 'primereact/tabmenu';
import './UserHome.scss';
import { useTasks } from '../../contexts/TasksContext';
import { useUser } from '../../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';

function UserHome() {
  const { tasks } = useTasks();
  const { users } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const [participantTasks, setParticipantTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Inicializa o activeIndex com 0

  useEffect(() => {
    const foundUser = users.find(u => u.id === parseInt(id, 10));
    if (foundUser) {
      // Aplica o filtro às tarefas do participante com base no filtro atual
      const filteredTasks = tasks.filter(task => {
        if (activeIndex === 0) {
          // Se "Todas" for selecionado, não aplicar filtro de status
          return task.assignedTo === parseInt(id, 10);
        } else {
          const filter = filterItems[activeIndex].value.toLowerCase(); // Obtém o valor do filtro selecionado
          return task.assignedTo === parseInt(id, 10) &&
                 (filter === 'abertas' ? task.status.toLowerCase() === 'aberta' : task.status.toLowerCase() === 'fechada');
        }
      });
      setParticipantTasks(filteredTasks);
    } else {
      navigate("/login");
    }
  }, [id, tasks, users, navigate, activeIndex]); // Adicione activeIndex como dependência

  const handleTaskClick = (taskInfo) => {
    setSelectedTask(taskInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterItems = [
    { label: 'Todas', value: 'all' },
    { label: 'Abertas', value: 'abertas' },
    { label: 'Fechadas', value: 'fechadas' },
  ];

  const handleFilterChange = (e) => {
    setActiveIndex(e.index); // Atualiza o activeIndex com o índice do item selecionado
  };

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-title">Lista de Tarefas de {users.find(user => user.id === parseInt(id, 10)).name}</h1>
        <div className="filter-buttons">
          <TabMenu model={filterItems} activeIndex={activeIndex} onTabChange={handleFilterChange} />
        </div>
        <div className="tasks-container">
          {participantTasks.length === 0 ? (
            <p>Nenhuma tarefa encontrada.</p>
          ) : (
            participantTasks.map((task) => (
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

export default UserHome;
