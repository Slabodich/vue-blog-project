import MainPage from "@/components/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import PostsPages from "@/components/pages/PostsPages";


const routes = [
    {
        path: '/',
        component:MainPage
    },
    {
        path: '/posts',
        component: PostsPages
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;