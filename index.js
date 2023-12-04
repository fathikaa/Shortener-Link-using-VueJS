import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomeView from "../components/Home.vue";
import RegisterView from "../components/Daftar.vue";
import UsersView from "../components/Users.vue";
//import DashboardView from "../components/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //login
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: DashboardView,
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: LoginView,
    // },
    // {
    //   path: "/links",
    //   name: "links",
    //   component: LinksView,
    // },
    // {
    //   path: "/update",
    //   name: "update",
    //   component: UpdateView,
    // },
    {
      path: "/users",
      name: "users",
      component: UsersView,
    }
  ],
});

export default router;
