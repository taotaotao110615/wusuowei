import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Reset from './reset.css'
import store from './vuex.js'

document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth * 100 / 750 + "px";


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.config.productionTip = false

new Vue({
  router,
  Reset,
  store,
  render: h => h(App),
  data () {
    return {
      msg:'',
      msh:'',
      msj:''
    }
  },
}).$mount('#app')





