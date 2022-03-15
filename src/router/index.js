import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Search from "@/views/Search.vue";
import Account from "@/components/dashboard/Account.vue";
import Favourites from "@/components/dashboard/Favourites.vue";

const routes = [
  {
    path: "/",
    alias: "/search",
    component: Search,
    name: "search",
  },
  {
    path: "/dashboard",
    alias: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    children: [
      {
        path: "",
        component: Account,
        name: "account",
        // meta: {
        //   requiresGuest: true,
        // },
      },
      {
        path: "/dashboard/favourites",
        component: Favourites,
        name: "favourites",
        // meta: {
        //   requiresGuest: true,
        // },
      },

      // {
      //   path: "create",
      //   alias: "createPassword",
      //   component: CreatePassword,
      //   name: "createPassword",
      //   // meta: {
      //   //   requiresGuest: true,
      //   // },
      // },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
