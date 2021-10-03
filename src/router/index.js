import { createRouter,createWebHistory} from "vue-router";
import home from "../views/home"
import page from "../views/page"
const routerHistory = createWebHistory()
const router=createRouter({
        history:routerHistory,
        routes:[
            {
                path:'/',
                component:home
            },
            {
                path:'/page',
                component:page
            },
        ]
})
export default router