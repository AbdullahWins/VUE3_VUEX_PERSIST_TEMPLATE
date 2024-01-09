import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import About from "../pages/about/About.vue";
import Home from "../pages/home/Home.vue";
const routes = [
  {
    path: "/",
    component: Layout,

    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

export default router;
