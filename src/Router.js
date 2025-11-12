import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import SubordinatesComponent from "./components/SubordinatesComponent.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/profile", component: ProfileComponent },
    { path: "/subordinates", component: SubordinatesComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;