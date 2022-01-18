import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/activities",
    name: "activities",
    component: () => import("./components/Activities.vue"),
  },
  {
    path: "/addActivity",
    name: "addActivities",
    component: () => import("./components/AddActivity.vue"),
  },
  {
    path: "/ActivityDetails",
    name: "ActivityDetails",
    component: () => import("./components/ActivityDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
