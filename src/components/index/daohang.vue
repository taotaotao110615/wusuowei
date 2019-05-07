<template>
  <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for='item in hz'>
        <div class="daohang-cont" v-for='items in item'>
        <img :src=items.imgUrl />
        <h5>{{items.desc}}</h5>
      </div>
      </swiper-slide>
  </swiper>
</template>
<script>
export default {
  name: 'daohang',
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  props: ['sonmst'],
  computed: {
    hz () {
      let xi=this.sonmst.data.data.iconList;
      let arr=[];
      for(let i=0;i<xi.length;i+=8){
        arr.push(xi.slice(i,i+8))
      }
      return arr
    }
  }
}
</script>

<style scoped>
.daohang{
  width: 7.5rem;
  height: 4.06rem;
}
.daohang-cont{
  display: inline-block;
  width: 25%;
  margin-top: 0.1rem;
}
h5{
  font-size: 0.24rem;
  text-align: center;
  margin: 0.1rem 0 0.2rem;
}
.daohang-cont>img{
  width: 70%;
  height: 70%;
  margin-left: 0.3rem;
}
</style>
