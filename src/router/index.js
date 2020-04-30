import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('views/Home/Home.vue');
const Category = () =>
    import ('../views/Category/Category.vue');
const Shopcart = () =>
    import ('../views/Shopcart/Shopcart.vue');
const Profile = () =>
    import ('../views/Profile/Profile.vue');
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: Category
}, {
    path: '/shopcart',
    component: Shopcart
}, {
    path: '/profile',
    component: Profile
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router