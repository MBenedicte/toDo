<template>
  <div>
    <ActivityComponent :activities="activities" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Activity from "./types/activity";
import ActivityComponent from "./components/Activities.vue";

export default defineComponent({
  name: "App",
  components: {
    ActivityComponent,
  },
  setup() {
    const activities = ref<Activity[]>([
      {
        id: 1,
        title: "title1",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        id: 2,
        title: "title2",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        id: 3,
        title: "title3",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        id: 4,
        title: "title4",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
    ]);
    return { activities };
  },
  data() {
    return {
      name: "Link",
      age: 25 as number | string,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: string | number) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style></style>
