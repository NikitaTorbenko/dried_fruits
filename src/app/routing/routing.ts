import { createWebHistory, createRouter } from "vue-router";
import { enumPath } from "shared/config/routes/route-path";
import { HomePage } from "pages/HomePage";

const routes = [
  { path: enumPath.HOME, component: HomePage },
  // { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
