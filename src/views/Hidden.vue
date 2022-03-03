<template>
  <div class="app-container">
    <h1>This page show the hidden tasks</h1>
    <small>The task needs to contain 'hidden' to appear here.</small>
     <div class="list-item" v-for="task in app.hiddenTasks" :key="task">
      <input type="checkbox" id="checkbox" v-model="task.completed">
      {{ task.description }}
      <button class="button-red" @click="removeTask(task)">
        Remove
      </button>
      </div>
  </div>
</template>

<script lang="ts">
import { setup, Options, Vue } from "vue-class-component";
import { appStore } from '../stores/app'

@Options({})
export default class Hidden extends Vue {
  app = appStore();
}
</script>
