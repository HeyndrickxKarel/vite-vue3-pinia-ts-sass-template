<template>
  <div class="app-container">
    <h1>Tasks</h1>
    <hr />
    <div class="input-container">
      <input type="text" v-model="taskValue" />
      <button class="button-green" :disabled="taskValue.length == 0" @click="addTask()">Toevoegen</button>
    </div>
    <div class="list-item" v-for="task in app.regularTasks" :key="task">
      <input type="checkbox" id="checkbox" v-model="task.completed">
      {{ task.description }}
      <button class="button-red" @click="removeTask(task)">
        Remove
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Task } from "@/models/task";
import { setup, Options, Vue } from "vue-class-component";
import { appStore } from '../stores/app'

@Options({})
export default class Home extends Vue {
  taskValue = "";
  app = appStore();

  addTask(){
   this.app.addTask(this.taskValue);
   this.taskValue = "";
  }

  removeTask(task: Task){
    this.app.removeTask(task);
  }
}
</script>

<style>
.button-green {
  background-color: goldenrod;
  color: white;
}
.button-red {
  background: indianred;
  color: white;
}
.app-container {
  padding: 3rem;
}
.input-container {
  display: flex;
  align-items: center;
}
.list-item {
  border: 1px solid gainsboro;
  border-radius: 0.25rem;
  margin: 10px 0px;
}
</style>