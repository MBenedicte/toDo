<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">To Do</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/activities" class="nav-link"
            >All activities</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/addActivity" class="nav-link"
            >Add new Activity</router-link
          >
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
