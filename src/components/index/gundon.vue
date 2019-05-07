<template>
<div class="gundon">
  <div class="jd">
    <p>著名景点</p>
  </div>
  <div class="ul" ref='hid'>
    <div class="li">
      <div v-for="item in gd.data.data.recommendList">
        <p><img :src=item.imgUrl /></p>
        <div class="p">{{item.title}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'gundon.vue',
  data () {
    return {

    }
  },
  props: [ "gd" ],
  mounted () {
    this.scroll = new BScroll(this.$refs.hid, { startX: 0, click: true, scrollX: true, scrollY: false })
  }
}
</script>

<style scoped>
.ul{
  overflow: hidden;
  margin-bottom: 0.1rem;
}
.li{
  display: flex;
  width: 14rem;
}
  .jd{
    height: 0.8rem;
    background-color: #eeeeee;
  }
.jd>p{
  font-size: 0.26rem;
  padding-left: 0.2rem;
  line-height: 0.8rem;
}
  .p{
    text-align: center;
    font-size: 0.32rem;
  }
</style>
