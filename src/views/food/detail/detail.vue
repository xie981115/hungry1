<!--  -->
<template>
  <div class="detail">
    <div class="header">
      <div class="blank"></div>
      <div class="top">
        <img src="../../../assets/pic12.gif" alt="" />
        <div class="right">
          <p class="first"><span>品牌</span><i>粥品香坊(回龙观)</i> </p>
          <p class="second">蜂鸟专送/38分钟送达</p>
          <p class="third"><span>减</span><i>在线支付满28减5</i></p>
        </div>
      </div>
      <div class="bottom">
        <p>
          <span>公告</span
          ><i>粥品相仿其v超市不都是立方式不是失败四v和是符合是v和法会返回的哦i会发生司法和ishf水电费vIdahoi哦i啊的话i哦爱德华ih</i>
        </p>
      </div>
    </div>

    <div class="nav">
    <ul class="nav1">
        <router-link tag="li" to="/food/detail/product"><i>商品</i><span></span></router-link>
        <router-link tag="li" to="/food/detail/ping"><i>评论</i><span></span></router-link>
        <router-link tag="li" to="/food/detail/business"><i>商家</i><span></span></router-link>
    </ul>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 150px;
}

.header .blank {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: #6b6158;
  z-index: -2;
  opacity: 0.6;
  ;
}

.header .top{width: 100%;
height: 120px;
padding: 25px;}

.header img {
    width: 70px;
    height: 70px;
  z-index: 3;
  float: left;
}

.header .right{float: left;
text-indent: 16px;}

.header .right .first span{
    background: #f00;
    padding: 3px;
    text-align: center;
    width: 45px;
    margin-right: 6px;
    font-weight: 600;
    font-size: 12px;
    color: #fff;
}

.header .right .first i{font-size: 18px;
font-weight: 600;
color: #fff;}

.header .right .second{color: #fff;
font-size: 13px;}

.header .right .third span{
    padding: 1px;
    background: #fff;
    color:red;
    font-size: 11px;
    margin-right: 5px;
}

.header .right .third i{color: #fff;
font-size: 12px;}


.header .bottom{width: 100%;
height: 30px;
background: #5b595a;
line-height: 30px;}

.header .bottom p{width: 100%;
overflow: hidden;
white-space: nowrap;
color: #fff;
text-overflow: ellipsis;}

.header .bottom p span{background: #fff;
padding: 1px;
color:#666;
font-size: 10px;
font-weight: 600;
margin-left: 10px;
margin-right: 8px;}

.header .bottom p i{color: #fff;
font-size: 12px;}

.nav .nav1 {display: flex;
text-align: center;
height: 40px;
}
.nav .nav1 li.active{color: red;}
.nav .nav1 li{flex: 1;
display: flex;
flex-direction: column;}
.nav .nav1 li span{width: 100%;
display: inline-block;
height: 2px;
background: red;
display: none;
margin-top: 7px;}

.nav .nav1 li i{font-size: 16px;
margin-top: 7px;}
.nav .nav1 li:hover span{display: block;}
</style>
