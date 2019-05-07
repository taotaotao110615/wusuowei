<template>
<div class="home">
  <img src="./img/icon_arrow_right.png" class="img"/>
  <input type="" name="" class="inp" value="" placeholder=" O 输入城市/景点/游玩主题"/>
  <router-link to="/City">
    <div class="changshu">
      <p>{{yi}}</p><img src="./img/下三角形.png" />
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'sousuo',
  data () {
    return {
      yi:""
    }
  },
  created () {
    this.yi = this.$route.query.id
    if (!this.yi) {
      this.yi="地址"
    }
  }
}

</script>

<style type="text/css" scoped>
*{
  margin: 0;
  padding: 0;
}
.home{
  display: flex;
  width: 7.5rem;
  height: 0.86rem;
  background-color: #00bcd4;
}
.img{
  width: 0.6rem;
  height: 0.6rem;
  transform: rotateY(180deg);
  margin-top: 0.1rem;
}

.inp{
  width: 4.92rem;
  height: 0.64rem;
  font-size: 0.32rem;
  margin: 0.1rem auto 0;
  border-radius: 0.1rem;
}

.changshu{
  display: flex;
  color: white;
  font-size: 0.3rem;
  background-color: #00bcd4;
  margin-right: 0.21rem;
  line-height: 0.86rem;
}

.changshu>img{
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.3rem;
}
</style>
