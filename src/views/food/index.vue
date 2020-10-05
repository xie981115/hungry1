<!--  -->
<template>
  <div id="content">
    <ul>
      <li>
        <p>
          <i class="el-icon-location-outline"></i><span>济南</span
          ><i class="el-icon-caret-bottom"></i>
        </p>
        <p>
          <span class="iconfont icon-saoma"></span
          ><i class="el-icon-chat-dot-square"></i>
        </p>
      </li>
    </ul>
    <div class="search">
      <span id="ser" class="iconfont icon-comiissousuo"></span>
      <input type="text" placeholder="黄焖鸡" /><span class="btn">搜索</span>
    </div>

    <div class="menu">
      <span>炒饭</span>
      <span>饺子</span>
      <span>米线</span>
      <span>华莱士</span>
      <span>盖浇饭</span>
      <span>鸭血粉丝汤</span>
      <span>肠粉</span>
    </div>
    <div class="swiper">
      <mt-swipe @change="handleChange">
        <mt-swipe-item>
          <img
            src="http://img.mp.itc.cn/upload/20160319/f790090638304da2a257bd6a6f6320e8.jpg"
            alt=""
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://i01piccdn.sogoucdn.com/bdad863bbefc0861" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://i01piccdn.sogoucdn.com/e20152ab34256231" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="case">
      <li>
        <img src="../../assets/pic2.gif" alt="" />
        <span>美食外卖</span>
      </li>
      <li>
        <img src="../../assets/pic2.gif" alt="" />
        <span>美食外卖</span>
      </li>
      <li>
        <img src="../../assets/pic2.gif" alt="" />
        <span>美食外卖</span>
      </li>
      <li>
        <img src="../../assets/pic2.gif" alt="" />
        <span>美食外卖</span>
      </li>
      <li>
        <img src="../../assets/pic2.gif" alt="" />
        <span>美食外卖</span>
      </li>
    </div>

    <div class="cases">
      <div class="first">
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
      </div>

      <div class="first">
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
        <li>
          <img src="../../assets/pic3.gif" alt="" />
          <span>送药上门</span>
        </li>
      </div>
    </div>

    <div class="banner">
      <img src="https://i01piccdn.sogoucdn.com/bdad863bbefc0861" alt="" />
    </div>

    <div class="miao">
      <div class="left">
      <p class="top">限时秒杀</p>
      <img src="" alt="">
      </div>
      <div class="right"></div>
    </div>
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
#content ul {
  width: 100%;
  height: 40px;
  background: #0eb5f5;
  line-height: 40px;
  padding: 0 10px;
}

#content ul li {
  display: flex;
  justify-content: space-between;
}
#content ul li p {
  display: inline-block;
}
#content ul li span {
  color: #fff;
}
#content ul li i {
  font-size: 18px;
  color: white;
}

#content ul li .el-icon-chat-dot-square {
  margin-left: 20px;
  font-size: 20px;
}
#content .search {
  padding: 0 10px;
  position: relative;
  margin-top: 7px;
}
#content .search .btn {
  text-align: center;
  position: absolute;
  right: 10px;
  top: 0;
  height: 25px;
  line-height: 25px;
  width: 55px;
  background: #0eb5f5;
  color: #fff;
  margin-top: 1px;
  border-radius: 12px;
}

#content .search #ser {
  position: absolute;
  left: 20px;
  top: 3px;
}

#content .search input {
  width: 100%;
  background: #eee;
  border: none;
  height: 27px;
  border-radius: 13.5px;
  color: #999;
  text-indent: 30px;
}

#content .menu {
  height: 40px;
  line-height: 40px;
  padding: 0 8px;
  width: 100%;
  overflow: hidden;
}

#content .menu span {
  font-size: 10px;
  display: inline-block;
  line-height: 18px;
  height: 18px;
  padding: 0 8px;
  background: #ddd;
  margin-right: 8px;
  border-radius: 9px;
}

#content .swiper {
  height: 80px;
  width: 100%;
  padding: 0 10px;
}

#content .swiper img {
  width: 100%;
  height: 80px;
}

#content .case {
  width: 100%;
  padding: 0 10px;
  display: flex;
  margin-top: 13px;
  height: 66px;
}

#content .case li {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 66px;
}
#content .case img {
  width: 40px;
  height: 40px;
}

#content .cases {
  width: 100%;
  padding: 0 10px;
}

#content .cases .first {
  display: flex;
}
#content .cases li {
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 46px;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
}

#content .cases img {
  width: 20px;
  height: 20px;
}

#content .banner {
  height: 80px;
  width: 100%;
  padding: 0 10px;
  margin-top: 20px;
}

#content .banner img {
  width: 100%;
  height: 80px;
}

#content .miao{width: 100%;
padding: 0 10px;
height: 120px;
margin-top: 20px;
background: rgb(223, 223, 197);}

#content .miao .left{width: 50%;
height: 120px;
background: blue;
float: left;}

#content .miao .right{width: 50%;
height: 120px;
background: red;
float: left;}
</style>
