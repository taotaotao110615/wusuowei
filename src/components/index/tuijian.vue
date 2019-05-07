<template>
<div id="tuijian">
  <div class="tuijianlan">
    <p>热销推荐</p>
  </div>
  <div class="cont" v-for='item in tj.data.data.recommendList'>
    <img :src=item.imgUrl />
    <div class="cont-wenzi">
      <div class="wenzi-h1">
        <p>{{item.title}}</p>
      </div>
      <div class="wenzi-h2">
        <p>{{item.desc}}</p>
      </div>
      <router-link to="/jingqu">
        <div class="wenzi-h3">
          <p>查看详情</p>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'tuijian',
  data () {
    return {
    }
  },
  props: ['tj']
}
</script>

<style>
.tuijianlan{
width: 7.5rem;
height: 0.8rem;
background-color: #eeeeee;

}
.tuijianlan>p{
  font-size: 0.26rem;
  padding-left: 0.2rem;
  line-height: 0.8rem;
}
.cont{
  display: flex;
  width: 7.5rem;
  height: 1.88rem;
  border-bottom: 1px solid #f2f2f2;
}
.cont>img{
  width: 30%;
  height: 90%;
  padding: 0.1rem 0 0 0.1rem;
}
.cont-wenzi{
  margin-top: 0.2rem;

}
.wenzi-h1{
  font-size: 0.35rem;
  margin-left: 0.2rem;
  padding-bottom: 0.24rem;
}
.wenzi-h2{
  font-size: 0.26rem;
  color: #7E8C8D;
  margin-left: 0.2rem;
  padding-bottom: 0.24rem;
}
.wenzi-h3{
  width: 1.5rem;
  height: 0.4rem;
  font-size: 0.26rem;
  line-height: 0.4rem;
  color: white;
  text-align: center;
  background-color: orange;
  border-radius: 0.05rem;
  margin-left: 0.2rem;
}
</style>
