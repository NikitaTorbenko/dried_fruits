import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
