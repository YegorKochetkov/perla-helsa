import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/omega-3",
    name: "omega-3",
    component: () => import("@/views/Omega3View.vue"),
  },
  {
    path: "/vitamins",
    name: "vitamins",
    component: () => import("@/views/VitaminsView.vue"),
  },
  {
    path: "/supplement",
    name: "food_supplement",
    component: () => import("@/views/FoodSupplementView.vue"),
  },
  {
    path: "/delivery",
    name: "delivery",
    component: () => import("@/views/DeliveryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
