import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ToDoStore {
  createdTaskScore: number;
  completedTaskScore: number;
  deletedTaskScore: number;
  updateCreateScore: (count: number) => void;
  updateCompleteScore: (count: number) => void;
  updateDeleteScore: (count: number) => void;
}
export const useToDoStatistic = create<ToDoStore>()(
  persist((set, get) => ({
    createdTaskScore: 0,
    completedTaskScore: 0,
    deletedTaskScore: 0,
    updateCreateScore: (count) => {
      let { createdTaskScore } = get();
      set({
        createdTaskScore: (createdTaskScore += count),
      })
    },
    updateCompleteScore: (count) => {
      let { completedTaskScore } = get();
      set({
        completedTaskScore: (completedTaskScore += count),
      })
    },
    updateDeleteScore: (count) => {
      let { deletedTaskScore } = get();
      set({
        deletedTaskScore: (deletedTaskScore += count),
      })
    },
  }), { name: 'statisticStorage', }))