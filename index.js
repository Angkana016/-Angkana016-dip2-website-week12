import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../view/HomePage.vue";
import UsersPage from "../view/UsersPage.vue";
import RedirectPage from "../view/RedirectVue.vue";
import NotFound from "../view/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/user",
      name: "user",
      component: UsersPage,
    },
    {
      path: "/redirect",
      name: "redirect",
      component: RedirectPage,
    },
    {
      path: "/member",
      redirect: "/redirect",
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component:NotFound
    }
  ],
});