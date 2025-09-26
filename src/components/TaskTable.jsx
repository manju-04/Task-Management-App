import { Link } from 'react-router-dom';

const TaskTable = ({ tasks }) => {
  if (tasks.length === 0) {
    return <div>No tasks found.</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>
              <div>
                <strong>{task.title}</strong>
                <div>{task.description}</div>
              </div>
            </td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
            <td>{new Date(task.dueDate).toLocaleDateString()}</td>
            <td>
              <Link to={`/edit/${task.id}`} className="btn btn-primary">
                Edit
              </Link>
              <Link to={`/delete/${task.id}`} className="btn btn-danger">
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;