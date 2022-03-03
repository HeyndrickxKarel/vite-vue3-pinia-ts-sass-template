import { defineStore } from "pinia";

export const appStore = defineStore({
  id: "app",
  state: () => ({
    rawTasks: [] as string[],
  }),
  getters: {
    hiddenTasks: (state: any) => {
      return state.rawTasks.filter((t: string) =>
        t.toLowerCase().includes("hidden")
      );
    },
  },
  actions: {
    addTask(task: string) {
      this.rawTasks.push(task);
    },
    removeTask(task: string) {
      const index = this.rawTasks.findIndex((t: any) => t == task);
      if (index > -1) {
        this.rawTasks.splice(index, 1);
      }
    },
  },
});
