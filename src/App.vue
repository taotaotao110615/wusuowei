<template>
  <div id="app">
    <div v-if="pp">
    <router-view></router-view>
    </div>
    <div class="dd" v-else><img src="./components/index/img/dt.gif"></div>
  </div>
</template>

<script>



	export default {
  name: 'app',
  computed:{
    pp(){
      return this.$store.state.city
    }
  },
  created () {
    this.$store.dispatch('fun')
  }
}
</script>

<style lang="less">
  .dd{
    height: 100vh;
    font-size: 0.5rem;
    background-color: white;
    z-index: 10;
    text-align: center;
    line-height: 100vh;
  }
  .dd>img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
