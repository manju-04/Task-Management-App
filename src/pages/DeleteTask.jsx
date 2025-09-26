import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, deleteTask } = useTasks();
  
  const task = getTaskById(id);

  const handleDelete = () => {
    deleteTask(id);
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
        <h2>Delete Task</h2>
        <p>Are you sure you want to delete this task?</p>
        
        <div style={{background: '#f8f9fa', padding: '1rem', margin: '1rem 0'}}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status} | Priority: {task.priority}</p>
          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>

        <div style={{display: 'flex', gap: '1rem'}}>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Cancel
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;