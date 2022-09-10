<template>
  <div class="repairbody">
    <div class="retop">
      <Repairimg></Repairimg>
    </div>
    <div class="aa"><div class="online"></div></div>
    <div class="recontant">
      <div class="contant">
        <div class="contantons">
          <div class="contanttop">
            <div class="ats">
              <h1 style="color: #ff0000">注意*</h1>
            </div>
            <div style="color: #ffffff" class="atscon">
              <p>1.請務必確保商品在維修範疇內</p>
              <p>
                2.請詳細描述商品之問題，如與敘述問題<br />
                不相符，該商品則無法修理
              </p>
            </div>
            <div style="color: #1d8133" class="atsun">
              <p>欲知商品維修進度請回報修首頁查詢</p>
            </div>
          </div>
        </div>
        <div class="contantml">
          <RePairdatasure></RePairdatasure>
        </div>
        <div class="under">
          <div class="unbtn">
            <div class="searchs">
              <button @click="search" class="grow_search" type="button">
                查詢進度
              </button>
            </div>
            <div class="gohomes">
              <button @click="gohome" class="grow_gohome" type="button">
                回首頁
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bb"><div class="underline"></div></div>
  </div>
</template>
<style lang="scss" scoped>
.repairbody {
  width: 100%;
  .aa {
    margin-bottom: 2rem;
    margin-left: 11rem;
    .online {
      overflow: hidden;
      width: 90%;
      border-bottom: 4px white solid;
    }
  }
  .recontant {
    background: #3a3a3a;
    width: 100%;
    .contant {
      width: 100%;
      .contantons {
        width: 100%;
        display: flex;
        justify-content: center;
        .contanttop {
          font-size: 2rem;
          .ats {
            margin-top: 4rem;
            margin-bottom: 3rem;
          }
          .atscon {
            margin-left: 3rem;
            margin-bottom: 3rem;
          }
          .atsun {
            margin-left: 3rem;
            margin-bottom: 5rem;
          }
        }
      }
      .contantml {
        width: 100%;
      }
      .under {
        margin-top: 10rem;
        .unbtn {
          display: flex;
          justify-content: center;
          margin-bottom: 10rem;
          .searchs {
            margin-right: 2rem;
            button {
              padding: 1rem;
              padding-left: 1.2rem;
              padding-right: 1.2rem;
              font-size: 2em;
              background: #595656;
              color: #fff;
              border: 1px solid #595656;
              position: relative;
              z-index: 1;
              overflow: hidden;
            }
            button:hover {
              color: #ffffff;
            }
            button::after {
              content: "";
              background: #ff8a00;
              position: absolute;
              z-index: -1;
              padding: 0.85em 0.75em;
              display: block;
            }
            button[class^="grow"]::after {
              transition: all 0.3s ease;
            }
            button[class^="grow"]:hover::after {
              transition: all 0.3s ease-out;
            }
            button.grow_box::after {
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              transform: scale(0, 0);
            }
            button.grow_box:hover::after {
              transform: scale(1, 1);
            }
            button.grow_search::after {
              border-radius: 50%;
              left: -50%;
              right: -50%;
              top: -150%;
              bottom: -150%;
              line-height: 8.34em;
              transform: scale(0, 0);
            }
            button.grow_search:hover::after {
              transform: scale(1, 1);
            }
          }

          .gohomes {
            button {
              padding: 1rem;
              padding-left: 1.2rem;
              padding-right: 1.2rem;
              font-size: 2em;
              background: #ff8a00;
              color: #fff;
              border: 1px solid #ff8a00;
              position: relative;
              z-index: 1;
              overflow: hidden;
            }
            button:hover {
              color: #ff8a00;
            }
            button::after {
              content: "";
              background: #ecf0f1;
              position: absolute;
              z-index: -1;
              padding: 0.85em 0.75em;
              display: block;
            }
            button[class^="grow"]::after {
              transition: all 0.3s ease;
            }
            button[class^="grow"]:hover::after {
              transition: all 0.3s ease-out;
            }
            button.grow_box::after {
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              transform: scale(0, 0);
            }
            button.grow_box:hover::after {
              transform: scale(1, 1);
            }
            button.grow_gohome::after {
              border-radius: 50%;
              left: -50%;
              right: -50%;
              top: -150%;
              bottom: -150%;
              line-height: 8.34em;
              transform: scale(0, 0);
            }
            button.grow_gohome:hover::after {
              transform: scale(1, 1);
            }
          }
        }
      }
    }
  }
  .bb {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    margin-left: 11rem;
    .underline {
      overflow: hidden;
      width: 90%;
      border-bottom: 4px white solid;
    }
  }
}
@media screen and(max-width: 720px) {
  .repairbody {
    width: 100%;
    .aa {
      margin-bottom: 2rem;
      margin-left: 2rem;
      .online {
        overflow: hidden;
        width: 90%;
        border-bottom: 4px white solid;
      }
    }
    .recontant {
      background: #3a3a3a;
      width: 100%;
      .contant {
        width: 100%;

        .contantons {
          width: 100%;
          display: flex;
          justify-content: center;
          .contanttop {
            font-size: 2rem;
            .ats {
              text-align: center;
              margin-top: 4rem;
              margin-bottom: 3rem;
            }
            .atscon {
              width: 100%;
              margin-left: 0rem;
              margin-bottom: 3rem;
              p {
                margin-left: 2rem;
                text-align-last: left;
                font-size: 1rem;
                letter-spacing: 0.2rem;
                line-height: 25px;
              }
            }
            .atsun {
              width: 80%;
              margin-left: 0rem;
              margin-bottom: 5rem;
              p {
                text-align: center;
                margin-left: 3rem;
                font-size: 1.8rem;
                letter-spacing: 0.2rem;
                line-height: 35px;
              }
            }
          }
        }
        .contantml {
          width: 100%;
        }
        .under {
          margin-top: 3rem;
          .unbtn {
            display: flex;
            justify-content: center;
            margin-bottom: 5rem;
            padding-bottom: 2rem;
            .searchs {
              margin-right: 2rem;
              button {
                padding: 1rem;
                padding-left: 1.2rem;
                padding-right: 1.2rem;
                font-size: 1rem;
                background: #595656;
                color: #fff;
                border: 1px solid #595656;
                position: relative;
                z-index: 1;
                overflow: hidden;
              }
              button:hover {
                color: #ffffff;
              }
              button::after {
                content: "";
                background: #ff8a00;
                position: absolute;
                z-index: -1;
                padding: 0.85em 0.75em;
                display: block;
              }
              button[class^="grow"]::after {
                transition: all 0.3s ease;
              }
              button[class^="grow"]:hover::after {
                transition: all 0.3s ease-out;
              }
              button.grow_box::after {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                transform: scale(0, 0);
              }
              button.grow_box:hover::after {
                transform: scale(1, 1);
              }
              button.grow_search::after {
                border-radius: 50%;
                left: -50%;
                right: -50%;
                top: -150%;
                bottom: -150%;
                line-height: 8.34em;
                transform: scale(0, 0);
              }
              button.grow_search:hover::after {
                transform: scale(1, 1);
              }
            }

            .gohomes {
              button {
                padding: 1rem;
                padding-left: 1.2rem;
                padding-right: 1.2rem;
                font-size: 1rem;
                background: #ff8a00;
                color: #fff;
                border: 1px solid #ff8a00;
                position: relative;
                z-index: 1;
                overflow: hidden;
              }
              button:hover {
                color: #ff8a00;
              }
              button::after {
                content: "";
                background: #ecf0f1;
                position: absolute;
                z-index: -1;
                padding: 0.85em 0.75em;
                display: block;
              }
              button[class^="grow"]::after {
                transition: all 0.3s ease;
              }
              button[class^="grow"]:hover::after {
                transition: all 0.3s ease-out;
              }
              button.grow_box::after {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                transform: scale(0, 0);
              }
              button.grow_box:hover::after {
                transform: scale(1, 1);
              }
              button.grow_gohome::after {
                border-radius: 50%;
                left: -50%;
                right: -50%;
                top: -150%;
                bottom: -150%;
                line-height: 8.34em;
                transform: scale(0, 0);
              }
              button.grow_gohome:hover::after {
                transform: scale(1, 1);
              }
            }
          }
        }
      }
    }
    .bb {
      margin-top: 1.5rem;
      margin-bottom: 3rem;
      margin-left: 3rem;
      .underline {
        overflow: hidden;
        width: 90%;
        border-bottom: 4px white solid;
      }
    }
  }
}
</style>

<script>
import Repairimg from "../components/RePairimg.vue";
import RePairdatasure from "../components/RePairdatasure.vue";
export default {
  data() {
    return {
      orderId: "",
      ordercont: {},
    };
  },
  components: {
    Repairimg,
    RePairdatasure,
  },
  created() {
    this.a();
  },
  inject: ["EmiTter"],
  methods: {
    a() {
      this.orderId = this.$route.params.orderId;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          e;
        }
      });
    },
    search() {
      this.$router.push(`/RePairdata/FinalSure/${this.orderId}`);
    },
    gohome() {
      this.$router.push(`/`);
    },
  },
};
</script>
