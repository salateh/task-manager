import { useTasks } from "../hooks/useTasks";
import { TaskItem } from "../components/TaskItem";
import { TaskForm } from "../components/TaskForm";

export function TasksPage() {
  const { tasks, addTask, removeTask, toggleTask } = useTasks();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список задач</h1>
      
      <TaskForm onAdd={addTask} />
      
      <div className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onRemove={removeTask}
          />
        ))}
      </div>
    </div>
  );
}