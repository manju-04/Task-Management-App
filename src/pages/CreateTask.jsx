import { useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';

const CreateTask = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const handleSubmit = (taskData) => {
    addTask(taskData);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create New Task</h2>
        <TaskForm
          onSubmit={handleSubmit}
          submitText="Create Task"
        />
      </div>
    </div>
  );
};

export default CreateTask;