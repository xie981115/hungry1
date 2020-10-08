<!--  -->
<template>
  <div class="product">
    <div class="content">
      <div class="leftNav">
        <ul>
          <li v-for="list in leftNav" :key="list.name">{{list}}</li>
        </ul>
      </div>
      <div class="main">
        <div class="rexiao" ref="rexiao">
          <ul class="content1">
            <li v-for="item in right" :key="item.name">
              <p class="reb">{{item.name}}</p>
              <ul>
                <li v-for="num in item.content" :key="num.name">
                  <img :src="num.imgurl" alt="" />
                  <div class="txt">
                    <p class="one">{{num.sp1}}</p>
                    <p class="two">
                      <span>{{num.sp2}}</span> <span>{{num.sp3}}</span>
                    </p>
                    <p class="three">{{num.sp4}}</p>
                  </div>
                  <div class="btn">
                    <span class="iconfont icon-jianhao-copy"></span><i>1</i>
                    <span class="iconfont icon-jiahao"></span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  components: {},
  data() {
    return {
      leftNav: [
        "热销榜",
        "单人精彩套餐",
        "冰爽饮品限时特惠",
        "精选热菜",
        "爽口凉菜",
        "精选套餐",
        "果拼果汁",
        "小吃主食",
      ],
      right: {
        0: {
          name: "热销榜",
          content: {
            0: {
              imgurl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1429759235,2610608622&fm=26&gp=0.jpg",
              sp1: "绿豆粥粥",
              sp2: "月售202份",
              sp3: "好评率100%",
              sp4: "￥14",
            },
            1: {
              imgurl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2465384170,165211284&fm=26&gp=0.jpg",
              sp1: "大米粥",
              sp2: "月售20份",
              sp3: "好评率100%",
              sp4: "￥10",
            },
            2: {
              imgurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2723165810,975644465&fm=26&gp=0.jpg",
              sp1: "白粥",
              sp2: "月售50份",
              sp3: "好评率98%",
              sp4: "￥15",
            },
            3: {
              imgurl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3865882333,144741465&fm=26&gp=0.jpg",
              sp1: "皮蛋粥",
              sp2: "月售100份",
              sp3: "好评率95%",
              sp4: "￥18",
            },
            4: {
              imgurl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3563205453,1183234104&fm=26&gp=0.jpg",
              sp1: "瘦肉粥",
              sp2: "月售123份",
              sp3: "好评率91%",
              sp4: "￥17",
            }
          },
        },
        1: {
          name: "单人精彩套餐",
          content: {
            0: {
              imgurl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=605800775,4151438806&fm=26&gp=0.jpg",
              sp1: "黄焖鸡",
              sp2: "月售56份",
              sp3: "好评率96%",
              sp4: "￥28",
            },
            1: {
              imgurl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1025694866,3509025151&fm=26&gp=0.jpg",
              sp1: "鱼香肉丝",
              sp2: "月售70份",
              sp3: "好评率91%",
              sp4: "￥15",
            },
          },
        },
        2: {
          name: "冰爽饮品限时特惠",
          content: {
            0: {
              imgurl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1552988411,341789195&fm=26&gp=0.jpg",
              sp1: "皮蛋瘦肉粥",
              sp2: "月售220份",
              sp3: "好评率100%",
              sp4: "￥23",
            },
          },
        },
        3: {
          name: "精选热菜",
          content: {
            0: {
              imgurl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2808943973,1615942624&fm=26&gp=0.jpg",
              sp1: "皮蛋瘦肉粥",
              sp2: "月售100份",
              sp3: "好评率94%",
              sp4: "￥23",
            },
          },
        },
        4: {
          name: "爽口凉菜",
          content: {
            0: {
              imgurl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4117050082,2877919608&fm=26&gp=0.jpg",
              sp1: "大盘鸡",
              sp2: "月售230份",
              sp3: "好评率98%",
              sp4: "￥78",
            },
             1: {
              imgurl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=332825106,12765044&fm=26&gp=0.jpg",
              sp1: "酸菜鱼",
              sp2: "月售30份",
              sp3: "好评率91%",
              sp4: "￥48",
            }
          },
        },
         5: {
          name: "精选套餐",
          content: {
            0: {
              imgurl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022465302,371169732&fm=26&gp=0.jpg",
              sp1: "牛肉火锅",
              sp2: "月售103份",
              sp3: "好评率90%",
              sp4: "￥239",
            },
          },
        },
         6: {
          name: "果拼果汁",
          content: {
            0: {
              imgurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2523827971,4095614968&fm=26&gp=0.jpg",
              sp1: "皮蛋瘦肉粥",
              sp2: "月售25份",
              sp3: "好评率84%",
              sp4: "￥18",
            },
          },
        },
         7: {
          name: "小吃主食",
          content: {
            0: {
              imgurl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2123106962,818549888&fm=15&gp=0.jpg",
              sp1: "蛋炒饭",
              sp2: "月售100份",
              sp3: "好评率92%",
              sp4: "￥86",
            },
            1: {
              imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2997263,533464114&fm=26&gp=0.jpg",
              sp1: "蛋炒饭123",
              sp2: "月售19份",
              sp3: "好评率92%",
              sp4: "￥12",
            },
            2: {
              imgurl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=41688455,3122542115&fm=15&gp=0.jpg",
              sp1: "蛋炒饭333",
              sp2: "月售56份",
              sp3: "好评率97%",
              sp4: "￥16",
            }
          },
        }
      },
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.rexiao;
      this.aBScroll = new BScroll(bscrollDom, {
        click: true,
      });
    });
  },
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
  background: #f4f5f7;
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
}
.content .main .rexiao {
  height: 480px;
overflow: hidden;
}
.content .main .rexiao .content1{width: 100%;}
.content .main .rexiao .content1 li{width: 100%;}
.content .main .rexiao .reb {
  width: 100%;
  height: 30px;
  background: #f4f5f7;
  line-height: 30px;
  text-indent: 20px;
  font-size: 13px;
  font-weight: 600;
}

.content .main .rexiao .content1 li ul li {
  padding: 16px;
  overflow: hidden;
}
.content .main .rexiao li img {
  height: 45px;
  width: 60px;
  float: left;
}

.content .main .rexiao .txt {
  float: left;
  text-indent: 8px;
}

.content .main .rexiao .txt .two {
  font-size: 11px;
  color: #999;
}

.content .main .rexiao .txt .two span:first-child {
  margin-right: 8px;
}
.content .main .rexiao .txt .three {
  font-size: 14px;
  color: red;
}
.content .main .rexiao .btn {
  float: left;
  margin-top: 30px;
}

.content .main .rexiao .btn span {
  color: #0095ef;
  font-size: 22px;
}
.content .main .rexiao .btn i {
  margin: 0 6px 0;
  font-size: 16px;
}
</style>
