<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for='item in sonmsg.data.data.swiperList'>
      <img :src=item.imgUrl alt="出错" class="img"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      mun:'',
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  props: ['sonmsg'],
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log(this.sonmsg.data.data.swiperList)
    //    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style>
.img{
  width: 7.5rem;
  height: 2.34rem;
}
swiper-slide{
  width: 7.5rem;
  height: 2.34rem;
}
</style>
