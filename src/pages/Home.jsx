import { useState, useMemo } from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskTable from '../components/TaskTable';
import TaskFilters from '../components/TaskFilters';

const Home = () => {
  const { tasks } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = useMemo(() => {
    if (!searchTerm) return tasks;
    
    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tasks, searchTerm]);

  return (
    <div className="container">
      <div className="card">
        <h2>All Tasks ({filteredTasks.length})</h2>
        <TaskFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <TaskTable tasks={filteredTasks} />
      </div>
    </div>
  );
};

export default Home;