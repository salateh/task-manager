export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
export const initialTasks: Task[] = [
  { id: 1, title: "Изучить React", completed: false },
  { id: 2, title: "Настроить роутинг", completed: true },
  { id: 3, title: "Сделать хуки", completed: false },
];
