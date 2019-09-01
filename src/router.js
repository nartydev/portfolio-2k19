import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Work from "./views/Work.vue";
import About from "./views/About.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/:slug",
      name: "work",
      component: Work
    }
  ]
});

router.beforeEach((to, from, next) => {
  next()
})

export default router;