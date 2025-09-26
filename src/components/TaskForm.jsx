import { useForm } from '../hooks/useForm';

const TaskForm = ({ initialValues, onSubmit, submitText }) => {
  const validate = (values) => {
    const errors = {};
    
    if (!values.title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!values.description.trim()) {
      errors.description = 'Description is required';
    }
    
    if (!values.dueDate) {
      errors.dueDate = 'Due date is required';
    }
    
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues || {
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
      dueDate: ''
    },
    validate
  );

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(onSubmit);
    }}>
      <div className="form-group">
        <label className="form-label">Title *</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="form-input"
        />
        {errors.title && <div className="error">{errors.title}</div>}
      </div>

      <div className="form-group">
        <label className="form-label">Description *</label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          className="form-textarea"
        />
        {errors.description && <div className="error">{errors.description}</div>}
      </div>

      <div className="form-group">
        <label className="form-label">Status</label>
        <select
          name="status"
          value={values.status}
          onChange={handleChange}
          className="form-select"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Priority</label>
        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
          className="form-select"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Due Date *</label>
        <input
          type="date"
          name="dueDate"
          value={values.dueDate}
          onChange={handleChange}
          className="form-input"
        />
        {errors.dueDate && <div className="error">{errors.dueDate}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        {submitText}
      </button>
    </form>
  );
};

export default TaskForm;