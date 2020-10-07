<!--  -->
<template>
  <div class="delicious">
    <ul class="nav">
      <router-link tag="li" to="/delicious/watch">关注</router-link>
      <router-link tag="li" to="/delicious/xiang">真香</router-link>
      <img src="../../assets/pic9.gif" alt="">
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

.delicious .nav{height: 40px;
width: 100%;
line-height: 40px;
background: #eee;
}
.delicious .nav li:first-child{margin-left: 150px;
margin-right: 20px;}
.delicious .nav li{float: left;}
.delicious .nav li.active{font-weight: 600;
font-size: 16px;}
.delicious .nav img{height: 30px;
margin-top: 5px;
float: right;}
</style>
