<template>
<div id="zhoumo">
  <div class="quna">
    <p>周末去哪儿</p>
  </div>
  <div class="diqu" v-for='item in zm.data.data.weekendList'>
    <router-link to="/jingqu">
      <img :src=item.imgUrl height="100%" width="100%" />
    </router-link>
    <div class="jieshao" >
      <div style="margin-left: 0.1rem">
      <p class="p-one">{{item.title}}</p>
      <p class="p-two">{{item.desc}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'zhoumo',
  data () {
    return {
    }
  },
  props: ['zm']
}
</script>

<style>
.quna{
width: 7.5rem;
height: 0.8rem;
background-color: #eeeeee;

}
.quna>p{
  font-size: 0.26rem;
  padding-left: 0.2rem;
  line-height: 0.8rem;
}
.jieshao{
width: 7.5rem;
height: 1.13rem;
}
  .p-one{
    font-size: 0.34rem;
    margin-top: 0.1rem;
  }
.p-two{
  font-size: 0.32rem;
  color: darkgray;
  margin-top: 0.21rem;
}

</style>
