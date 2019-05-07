<template>
<div class="index">
    <sousuo></sousuo>
    <lunbo :sonmsg='pc'></lunbo>
    <daohang :sonmst='pc'></daohang>
    <gundong :gd="pc"></gundong>
    <tuijian :tj='pc'></tuijian>
    <zhoumo :zm='pc'></zhoumo>
</div>
</template>

<script>
import sousuo from './index/sousuo.vue'
import lunbo from './index/lunbo.vue'
import daohang from './index/daohang.vue'
import tuijian from './index/tuijian.vue'
import zhoumo from './index/zhoumo.vue'
import gundong from './index/gundon.vue'




export default {
  name: 'index',
  components:{
    sousuo,
    lunbo,
    daohang,
    tuijian,
    zhoumo,
    gundong
  },
  data () {
    return {
    }
  },
  computed:{
    pc (){
      return this.$store.state.index
    }
  },
}
</script>

<style>
</style>
