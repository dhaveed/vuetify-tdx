import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },
  {
    path: "/overview",
    name: "productoverview",
    component: () => import("../views/ProductOverview.vue")
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/comparison",
    name: "comparison",
    component: () => import("../views/Comparison.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/Favorite.vue")
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/Orders.vue")
  },
  {
    path: "/postad",
    name: "postad",
    component: () => import("../views/PostAd.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/gridlist",
    name: "gridlist",
    component: () => import("../views/Gridlist.vue")
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/List.vue")
  },  
  {
    path: "/rating",
    name: "rating",
    component: () => import("../views/Rating.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
