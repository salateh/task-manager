import React from "react";
import { type Task } from "../types/Task";

interface TaskProps {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export function TaskItem({ task, onRemove, onToggle }: TaskProps) {
  return (
    <>
      <div className="border py-2 px-4 reounded flex flex-col items-center mb-2">
        {task.title}
        <span className="font-bold border py-2 px-4 reounded">
          {task.completed ? "Completed" : "In progress"}
        </span>

        <div>
          <button
            onClick={() => onToggle(task.id)}
            className="font-bold border py-2 px-4 reounded"
          >
            {task.completed ? "Uncomplete" : "Complete"}
          </button>

          <button
            onClick={() => onRemove(task.id)}
            className="font-bold border py-2 px-4 reounded"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
