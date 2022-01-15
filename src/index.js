import { createWebHistory, createRouter } from "vue-router";
import MemeList from "./components/MemeList.vue";
import RandomMeme from "./components/RandomMeme.vue";

// Definiowanie œcie¿ek dla routera
const routes = [
    {
        path: "/",
        name: "Memes",
        component: MemeList
    },
    {
        path: "/random",
        name: "Random",
        component: RandomMeme
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;