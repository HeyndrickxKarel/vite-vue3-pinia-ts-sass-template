import { Task } from "@/models/task";
import { defineStore } from "pinia";

export const appStore = defineStore({
  id: "app",
  state: () => ({
    tasks: [] as Task[],
  }),
  getters: {
    hiddenTasks: (state: any) => {
      return state.tasks.filter((t: Task) =>
        t.description.toLowerCase().includes("hidden")
      );
    },
    regularTasks: (state: any) => {
      return state.tasks.filter((t: Task) =>
        !t.description.toLowerCase().includes("hidden")
      );
    }
  },
  actions: {
    addTask(description: string) {
      this.tasks.push({description: description, completed: false});
    },
    removeTask(task: Task) {
      const index = this.tasks.findIndex((t: Task) => t == task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    },
  },
});
