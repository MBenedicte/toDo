<template>
  <section>
    <div class="activity-list">
      <li v-for="activity in activities" :key="activity.id">
        {{ activity.title }}
      </li>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import Activity from "../types/activity";
console.log("here there");
export default defineComponent({
  props: {
    activities: {
      required: true,
      type: Array as PropType<Activity[]>,
    },
  },
});
</script>
<style scoped></style>
