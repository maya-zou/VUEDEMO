import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes.js'
import './assets/styles/global.styl'

let router = new VueRouter({
    //mode: 'history',
    routes:routes
})


new Vue({
    router,
    render:(h)=>h(App)
}).$mount('#app')

// const root = document.createElement('div')
// document.body.appendChild(root)

// new Vue({
//     render: (h) => h(App)
// }).$mount(root)

// new Vue({
//     el: '#app',
//     components: {
//         App
//     }
// });