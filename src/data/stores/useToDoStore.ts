import { nanoid } from 'nanoid';
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Task {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  isComplete: boolean;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  completeStatus: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>()(
  persist(
    (set, get) => ({
      tasks: [
        {
          id: nanoid(),
          title: "Learn React",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isComplete: false,
        },
        {
          id: nanoid(),
          title: "Learn Nest.js",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isComplete: false,
        },
        {
          id: nanoid(),
          title: "Learn Next.js",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isComplete: false,
        },
        {
          id: nanoid(),
          title: "Learn Tailwind",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isComplete: false,
        },
        {
          id: nanoid(),
          title: "Learn Javascript",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isComplete: true,
        },
      ],
      createTask: (title) => {
        const { tasks } = get();
        const newTask = {
          id: nanoid(),
          title,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isComplete: false,
        }
        set({
          tasks: [newTask].concat(tasks),
        })
      },
      updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
          tasks: tasks.map((task) => ({
            ...task,
            title: task.id === id ? title : task.title
          }))
        })
      },
      removeTask: (id: string) => {
        const { tasks } = get();
        set({
          tasks: tasks.filter((task) => task.id !== id),
        })
      },
      completeStatus: (id: string) => set({
        tasks: get().tasks.map(task => id === task.id ?
          { ...task, isComplete: !task.isComplete } : task)
      }),
    }
    ), { name: 'todoStorage', }
  )
)