<!--  -->
<template>
<div class='con'>
<p class="header1"><span class="tit">订单</span> <span id="ser" class="iconfont icon-comiissousuo"></span></p>

<ul class="nav">
    <router-link tag="li" to="/order/all">全部</router-link>
    <router-link tag="li" to="/order/xiao">待消费</router-link>
    <router-link tag="li" to="/order/pin">待评价</router-link>
    <router-link tag="li" to="/order/tui">退款</router-link>
    <li class="last1">其他订单<i class="el-icon-caret-bottom"></i></li>
</ul>
<router-view></router-view>
<Footer></Footer>
</div>

</template>

<script>
import Footer from '../../components/Footer';
export default {
components: {Footer},
data() {
return {

}
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style scoped>
.con .header1{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 0 10px;
    background: #eee;
}

.con .header1 #ser{font-size: 20px;}

.con .nav {
    height: 30px;
    line-height: 30px;
width: 100%;
padding: 0 10px;
background: #eee;
}

.con .nav li{
    float: left;
    margin-right: 5%;
}

.con .nav li.active{
    font-size: 18px;
    font-weight: 600;
}

.con .nav .last1{float: right;}
</style>