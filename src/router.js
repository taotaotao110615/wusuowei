import Vue from 'vue'
import Router from 'vue-router'
import Index from'@/components/index.vue'
import City from'@/components/City.vue'
import Jingqu from'@/components/jingqu.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Index,
      name:'Index'
    },
    {
      path:'/city',
      component:City,
      name:'city'
    },
    {
      path:'/jingqu',
      component:Jingqu,
      name:'jingqu'
    }
  ]
})
