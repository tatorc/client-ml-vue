import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import items from '../views/Items.vue'
import detail from '../views/Detail.vue'

const routes = [

    { path: '/items', component: items, name: 'items'},
    { path: '/items/:id', component: detail, name: 'detail'},
]

const router = new VueRouter({
	mode: 'history',
    base: process.env.BASE_URL,
	routes
})

export default router
