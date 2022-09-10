<template>
  <div class="repairbody">
    <div class="retop">
      <Repairimg></Repairimg>
    </div>
    <div class="aa"><div class="online"></div></div>
    <div class="recontant">
      <div class="contant">
        <div class="contanttop">
          <RePairdatasure></RePairdatasure>
        </div>
        <div class="contantml">
          <div style="color: #ffffff" class="hh">
            <p>送修時間: {{ gindo.orderdata }}</p>
            <p>送修進度: {{ gindo.ordergindo }}</p>
          </div>
        </div>
        <div class="contantunder">
          <button class="grow_ellipse" type="button" @click="home">
            回首頁
          </button>
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
    .contant {
      .contanttop {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      .contantml {
        display: flex;
        justify-content: center;
        .hh {
          margin-bottom: 15rem;
          margin-right: 16rem;
          p {
            font-size: 2rem;
          }
        }
      }
      .contantunder {
        display: flex;
        justify-content: center;
        padding-bottom: 7rem;

        button {
          padding: 0.5rem;
          padding-right: 2.2rem;
          padding-left: 2.2rem;
          font-size: 2rem;
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
        button.grow_ellipse::after {
          border-radius: 50%;
          left: -50%;
          right: -50%;
          top: -150%;
          bottom: -150%;
          line-height: 8.34em;
          transform: scale(0, 0);
        }
        button.grow_ellipse:hover::after {
          transform: scale(1, 1);
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
      .contant {
        .contanttop {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        .contantml {
          display: flex;
          justify-content: center;
          .hh {
            margin-bottom: 5rem;
            margin-right: 0rem;
            p {
              font-size: 0.8rem;
              letter-spacing: 0.2rem;
              line-height: 40px;
            }
          }
        }
        .contantunder {
          display: flex;
          justify-content: center;
          padding-bottom: 3rem;

          button {
            padding: 0.5rem;
            padding-right: 2.2rem;
            padding-left: 2.2rem;
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
          button.grow_ellipse::after {
            border-radius: 50%;
            left: -50%;
            right: -50%;
            top: -150%;
            bottom: -150%;
            line-height: 8.34em;
            transform: scale(0, 0);
          }
          button.grow_ellipse:hover::after {
            transform: scale(1, 1);
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
      gindo: "",
    };
  },
  components: {
    Repairimg,
    RePairdatasure,
  },
  created() {
    this.a();
  },
  methods: {
    a() {
      this.orderId = this.$route.params.orderId;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          this.gindo = e.data.order.user;
        }
      });
    },
    home() {
      this.$router.push("/");
    },
  },
};
</script>
