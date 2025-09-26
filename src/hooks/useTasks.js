import { useLocalStorage } from './useLocalStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...taskData
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, taskData) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...taskData } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    getTaskById
  };
};