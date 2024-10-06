import { createWebHistory, createRouter } from "vue-router";
import { enumPath } from "shared/config/routes/route-path";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

const routes = [
  { path: enumPath.HOME, component: HomePage },
  { path: enumPath.ABOUT, component: AboutPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
