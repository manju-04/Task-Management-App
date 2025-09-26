import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTasks();
  
  const task = getTaskById(id);

  const handleSubmit = (taskData) => {
    updateTask(id, taskData);
    navigate('/');
  };

  if (!task) {
    return (
      <div className="container">
        <div className="card">
          <h2>Task not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Edit Task</h2>
        <TaskForm
          initialValues={task}
          onSubmit={handleSubmit}
          submitText="Update Task"
        />
      </div>
    </div>
  );
};

export default EditTask;