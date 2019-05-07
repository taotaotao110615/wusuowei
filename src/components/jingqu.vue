<template>
<div class="jingqu">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <div class="pht">
      <img :src=qo.bannerImg  width="100%" height="100%"/>
      </div>
    </swiper-slide>
    <swiper-slide v-if="qo.gallaryImgs">
      <div class="pht">
        <img :src=qo.gallaryImgs[1]  width="100%" height="100%"/>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  <router-link to="/">
    <div class="yuan">
      <p><img src="./index/img/icon_arrow_right.png" class="imp"/></p>
    </div>
  </router-link>
  <div class="tie">
      {{qo.sightName}}
  </div>
  <div v-for="(item,index) in qo.categoryList">
    <div class="piao">
      <div class="qiu"></div>
      <div class="zi">{{item.title}}</div>
    </div>
    <div class="tiao">
      <div v-for="items in item.children" class="zy">
        <div class="zy-cont">
          <div style="margin-left: 0.44rem;display: flex">
            <div class="qiu"></div>
            <p style="margin-left: 0.2rem">{{items.title}}</p>
          </div>
        </div>
        <div v-for="itemt in items.children" class="zy">
          <div class="zx-cont">
            <div class="qiu"></div>
            <div style="margin-left: 0.2rem">{{itemt.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>


  export default {
  name: 'jingqu',
  data(){
    return{
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed:{
    qo (){
      return this.$store.state.detail
    }
  },
}
</script>

<style scoped ref="stylesheet/less">
.pht{
    height: 4.123rem;
}
  .yuan{
    width: 0.82rem;
    height: 0.82rem;
    background-color: black;
    border-radius: 50% 50%;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 1;
  }
.imp{
  width: 100%;
  height: 100%;
  margin-bottom: 0.5rem;
  transform: rotateY(-180deg);
}
  .tie{
    font-size: 0.36rem;
    color: white;
    position: absolute;
    top: 3.6123rem;
    left: 0.2rem;
    z-index: 1;
  }
  .zi{
    font-size: 0.36rem;
    line-height: 0.8rem;
    margin-left: 0.2rem;
  }
  .piao{
    display: flex;
    width: 7.5rem;
    border-bottom: 0.01rem solid #EEEEEE;
  }
  .qiu{
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 50% 50%;
    margin-top: 0.25rem;
    margin-left: 0.27rem;
    background-color: #00bcd4;
  }
  .zy{
    width: 7.5rem;
    font-size: 0.36rem;
    line-height: 0.8rem;
    border-bottom: 0.01rem solid #EEEEEE;
  }
  .zy-cont{
    display: flex;
    width: 7.5rem;
    border-bottom: 0.01rem solid #EEEEEE;
  }
  .zx-cont{
    display: flex;
    margin-left: 0.66rem;
  }
</style>
