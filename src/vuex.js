import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    city: null,
    index:null,
    detail:null
  },
  actions: {
    fun () {
      axios.get('http://www.shouzi.ltd/quner/city.php')
        .then((res) => {
          this.commit('sh', res.data.data)
          console.log(this.state)
        })
        .catch(function (error) {
          console.log(error)
        });

      axios.get('http://www.shouzi.ltd/quner/page.php')
        .then((res) => {
          console.log(res);
          this.commit('ph', res)
        })
        .catch(function (error) {
          console.log(error);
        });

      axios.get('http://www.shouzi.ltd/quner/detail.php')
        .then((res)=> {
          console.log(res);
          this.commit('ch', res.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });

    },
  },
  mutations: {
    sh (xi,value) {
      xi.city=value
    },
    ph (pi,value) {
      pi.index=value
    },
    ch (ci,value) {
      ci.detail=value
    },

  }

})

