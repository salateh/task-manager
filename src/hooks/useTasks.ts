import React, { useState } from "react";
import { initialTasks, Task } from "../types/Task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks((prev) => [...prev.filter((a) => a.id !== id)]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return { tasks, addTask, removeTask, toggleTask };
}
