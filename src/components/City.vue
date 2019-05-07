<template>
<div class="city" ref="wrapper">
  <div>
    <div v-if="op">
      <div class="ss-cont" v-show="show">
        <div class="city-head">
          <router-link to="/">
            <img src="./index/img/icon_arrow_right.png" class="img"/>
          </router-link>
          <div class="xuanze">
            城市选择
          </div>
          <input type="" name="" class="inp" value=""  placeholder="输入城市名或拼音" v-model="show" />
        </div>
        <div v-for="item in arr" class="ss-wenzi">{{item.name}}</div>
      </div>
      <div v-show="!show">
        <div>
          <div class="city-head">
            <router-link to="/">
              <img src="./index/img/icon_arrow_right.png" class="img"/>
            </router-link>
            <div class="xuanze">
              城市选择
            </div>
            <input type="" name="" class="inp" value=""  placeholder="输入城市名或拼音" v-model="show" />
          </div>
          <div class="dangqian-box">
            <div class="dangqian">
              <p class="p">当前城市</p>
            </div>
            <div class="dangqian-cont">
              <!--需要加数据-->
              <div class="cont-wenzi">常熟</div>
            </div>
          </div>
          <div class="popular">
            <div class="popular-head">
              <p class="p">热门城市</p>
            </div>
              <div style="display: flex;flex-wrap: wrap">
                <div class="popular-cont" v-for="item in msh.hotCities">
                  <!--需要加数据-->
                  <div class="cont-wenzi" @click="dj(item.name)">{{item.name}}</div>
                </div>
              </div>
          </div>
          <div class="zimu-box" v-for="(val,key,index) in msh.cities" :key="index">
            <!--需要加数据-->
            <div class="zimu-a" ref="listGroup">
              <p class="a">{{key}}</p>
            </div>
            <!--需要加数据-->
            <div class="zimu-cont" v-for="item in val">
              <div class="cont-wenzi" @click="dj(item.name)">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="zimu" v-show="!show">
    <!--需要加数据-->
    <p v-for="(val,key,index) in msh.cities" :key="index" :data-index="index" @touchstart="jump">
      {{key}}
    </p>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'city',
  components: {},
  data () {
    return {
      msh:"",
      show: "",
      arr: [],
      loading: true
    }
  },
  computed:{
    op(){
      if (this.$store.state.city) {
        this.msh=this.$store.state.city
      }
      return this.$store.state.city
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true
    })
  },
  methods: {
    dj (xi) {
      this.$router.push({
        path: "/",
        query: { id: xi }
      })

    },
    jump (e) {
      // 获取绑定的index
      let index = e.target.getAttribute('data-index')
      // 使用better-scroll的scrollToElement方法实现跳转
      this.scroll.scrollToElement(this.$refs.listGroup[index], 3000)
    }
  },
  watch: {
    show () {
      var arr = [];
      // console.log(Object.keys(this.list));
      for (let i in this.msh.cities) {
        // console.log((this.cityData[i]));
        this.msh.cities[i].forEach((value) => {
          if (value.spell.indexOf(this.show) > -1 || value.name.indexOf(this.show) > -1) {
            arr.push(value)
          }
        })
      }
      this.arr = arr
      // Object.keys(this.list)
    }
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .city{
    height: 100vh;
  }
  .ss-cont{
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    background-color: white;
    z-index: 10;
  }
  .ss-wenzi{
    width: 2rem;
    font-size: 0.25rem;
    text-align: center;
    color: black;
    border: 1px solid #cccccc;
    padding: 0.15rem 0;
    margin: 0.2rem;
    border-radius: 0.1rem;
  }

.city-head{
width: 7.5rem;
height: 1.58rem;
background-color: #00bcd4;
.img{
  width: 0.6rem;
  height: 0.6rem;
  transform: rotateY(180deg);
  margin-bottom: 0.2rem;
}
.xuanze{
  font-size: 0.38rem;
  color: white;
  position: absolute;
  top: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
}
.inp{
  width: 7.28rem;
  height: 0.62rem;
  color: #757575;
  border-radius: 0.1rem;
  font-size: 0.38rem;
  text-align: center;
  position: absolute;
  top: 0.86rem;
  left: 0.1rem;
}
}

.dangqian-box{

.dangqian{
  width: 7.5rem;
  height: 0.52rem;
  background-color: #EEEEEE;
  .p{
    font-size: 0.25rem;
    margin-left: 0.2rem;
    line-height: 0.52rem;
  }
}
.dangqian-cont{
  padding:0 0.2rem 0.2rem 0.2rem;
  .cont-wenzi{
    width: 2rem;
    font-size: 0.25rem;
    text-align: center;
    color: black;
    border: 1px solid #cccccc;
    padding: 0.15rem 0;
    border-radius: 0.1rem;

  }

}

}

.popular{

.popular-head{
  width: 7.5rem;
  height: 0.52rem;
  background-color: #EEEEEE;
  .p{
    font-size: 0.25rem;
    margin-left: 0.2rem;
    line-height: 0.52rem;
  }
}
.popular-cont{

  .cont-wenzi{
    width: 2rem;
    font-size: 0.25rem;
    text-align: center;
    color: black;
    border: 1px solid #cccccc;
    padding: 0.15rem 0;
    margin: 0.2rem;
    border-radius: 0.1rem;

  }
}
}

.zimu-box{
.zimu-a{
  width: 7.5rem;
  height: 0.52rem;
  font-size: 0.3rem;
  background-color: #EEEEEE;
  .a{
    padding-left:  0.2rem;
    line-height: 0.52rem;
  }
}
.zimu-cont{
  border-bottom: 1px solid #EEEEEE;
  .cont-wenzi{
    font-size: 0.25rem;
    margin: 0.26rem 0.2rem;
  }
}
}

.zimu{
position: fixed;
right: 0.1rem;
top: 20%;
font-size: 0.3rem;
color: #00bcd4;
}
.zimu>p{
  padding-bottom: 0.15rem;
  text-align: center;
}
</style>
