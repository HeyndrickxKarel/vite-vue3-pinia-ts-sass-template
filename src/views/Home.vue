<template>
  <div class="app-container">
    <h1>Tasks</h1>
    <hr />
    <div class="input-container">
      <input type="text" v-model="taskValue" />
      <button class="button-primary" :disabled="taskValue.length == 0" @click="addTask()">Toevoegen</button>
    </div>
    <div class="list-item" v-for="task in app.regularTasks" :key="task">
      <input type="checkbox" id="checkbox" v-model="task.completed">
      {{ task.description }}
      <button class="button-secondary" @click="app.removeTask(task)">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from "../models/task";
import { appStore } from '../stores/app'
import { ref } from 'vue'

const taskValue = ref("");
const app = appStore();

function addTask(){
  app.addTask(taskValue.value);
  taskValue.value = "";
}

</script>

<style lang="scss">
@import "./Home.scss";
</style>