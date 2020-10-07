<!--  -->
<template>
  <div class="product">
    <div class="content">
      <div class="leftNav">
        <ul>
          <li>热销榜</li>
          <li>单人精彩套餐</li>
          <li>冰爽饮品限时特惠</li>
          <li>精选热菜</li>
          <li>爽口凉菜</li>
          <li>精选套餐</li>
          <li>果拼果汁</li>
          <li>小吃主食</li>
        </ul>
      </div>
      <div class="main">
        <div class="rexiao">
         <p class="reb">热销榜</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        flag:false
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
.content {
  width: 100%;
  min-height: 300px;
  display: flex;
}

.content .leftNav {
  width: 100%;
  flex: 2.2;
  background: rgb(235, 221, 221);
}

.content .leftNav li {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.content .leftNav li:hover {
  background: #fff;
}

.content .main {
  flex: 7.8;
  background: #f1f9cb;
}

.content .main .rexiao p{width: 100%;
height: 30px;
background: #f4f5f7;
line-height: 30px;
text-indent: 20px;
font-size: 13px;
font-weight: 600;}
</style>
