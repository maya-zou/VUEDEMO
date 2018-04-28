import login from './components/login.vue'
import home from './components/home.vue'
import todo from './components/todolist.vue'
import about from './components/about.vue'
import notfound from './components/notfound.vue'

const routes = [
    {
        path: '/',
        name:'notfound',
        component: notfound
    },
    {
        path: '/login',
        name:'login',
        component: login
    },
    {
        path: '/home',
        name:'home',
        component: home
    },
    {
        path: '/todo',
        name:'todo',        
        component: todo
    },
    {
        path: '/about',
        name:'about',        
        component: about
    }
]

export default routes