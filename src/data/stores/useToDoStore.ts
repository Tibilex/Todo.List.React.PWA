import { create } from "zustand";

interface Task {
  id: number;
  title: string;
  createdAt: number;
  updatedAt: number;
  isComplete: boolean;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: number, title: string) => void;
  removeTask: (id: number) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [
    {
      id: 1,
      title: "Учить реакт",
      createdAt: 123,
      updatedAt: 234,
      isComplete: false,
    },
    {
      id: 2,
      title: "Учить Nest.js",
      createdAt: 123,
      updatedAt: 234,
      isComplete: false,
    },
    {
      id: 3,
      title: "Учить Next.js",
      createdAt: 123,
      updatedAt: 234,
      isComplete: false,
    },
    {
      id: 4,
      title: "Учить Tailwind",
      createdAt: 123,
      updatedAt: 234,
      isComplete: false,
    },
    {
      id: 5,
      title: "Учить Javascript",
      createdAt: 123,
      updatedAt: 234,
      isComplete: true,
    },
  ],
  createTask: (title) => {
    const { tasks } = get();
    const newTask = {
      id: Date.now(),
      title,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isComplete: false,
    }
    set({
      tasks: [newTask].concat(tasks),
    })
  },
  updateTask: (id: number, title: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))
    })
  },
  removeTask: (id: number) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id),
    })
  },
}))