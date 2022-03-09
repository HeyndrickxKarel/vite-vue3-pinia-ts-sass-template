<template>
  <div class="app-container">
    <h1>This page show the hidden tasks</h1>
    <small>The task needs to contain 'hidden' to appear here.</small>
     <div class="list-item" v-for="task in app.hiddenTasks" :key="task">
      <input type="checkbox" id="checkbox" v-model="task.completed">
      {{ task.description }}
      <button class="button-secondary" @click="app.removeTask(task)">
        Remove
      </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import { appStore } from '../stores/app'
const app = appStore();
</script>
