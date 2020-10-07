<!--  -->
<template>
  <div id="footer" isshow="flag">
    <ul>
    <router-link tag="li" to="/food"><i class="el-icon-eleme"></i> <span>外卖</span> </router-link>
    <router-link tag="li" to="/delicious"><i class="el-icon-picture-outline-round"></i><span>真香</span></router-link>
    <router-link tag="li" to="/order"><i class="el-icon-s-unfold"></i> <span>订单</span></router-link>
    <router-link tag="li" to="/mine"><i class="el-icon-user"></i> <span>我的</span></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      flag:true
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
#footer ul{display: flex;
text-align: center;
width: 100%;
position: fixed;
left: 0;
bottom: 0;
height: 50px;
background: #ddd;}

#footer ul li{flex: 1;
margin-top: 5px;
height: 40px;
display: flex;
flex-direction: column;}

#footer ul li.active{color:blue;}

#footer ul li i{font-size: 24px}

#footer ul li span{font-size: 12px}
</style>
