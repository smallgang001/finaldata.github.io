<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="backstage">
    <div class="left">
      <div class="leftcon">
        <div class="product">
          <div class="yon" v-if="url == '/DunLoohuo/DunLooNeLong'">
            <p>✔</p>
          </div>
          <router-link to="/DunLoohuo/DunLooNeLong"
            ><button type="button"><p>所有產品</p></button></router-link
          >
        </div>
        <div class="homeview">
          <div class="yon" v-if="url == '/DunLoohuo/PaTh/CarouselImg'">
            <p>✔</p>
          </div>
          <router-link to="/DunLoohuo/PaTh/CarouselImg"
            ><button @click="carousel" type="button">
              <p>輪播圖</p>
            </button></router-link
          >
        </div>
        <div class="coupon">
          <div class="yon" v-if="url == '/DunLoohuo/PaTh/coupon'">
            <p>✔</p>
          </div>
          <router-link to="/DunLoohuo/PaTh/coupon"
            ><button @click="carousel" type="button">
              <p>優惠券</p>
            </button></router-link
          >
        </div>
        <div class="orderNumber">
          <div class="yon" v-if="url == '/DunLoohuo/PaTh/order'">
            <p>✔</p>
          </div>
          <router-link to="/DunLoohuo/PaTh/order"
            ><button @click="carousel" type="button">
              <p>訂單編號</p>
            </button></router-link
          >
        </div>
        <div class="repairNumber">
          <div class="yon" v-if="url == '/DunLoohuo/PaTh/repair'">
            <p>✔</p>
          </div>
          <router-link to="/DunLoohuo/PaTh/repair"
            ><button @click="carousel" type="button">
              <p>報修編號</p>
            </button></router-link
          >
        </div>
      </div>
    </div>
    <div class="white" style="background: rgb(255, 255, 255)">
      <div class="aaas">
        產品列表
        <button
          @click="xx"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          新增商品
        </button>
        <TanTuo ref="a" @getda="xxgg"></TanTuo>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col-1">分類</th>
            <th scope="col-7">商品</th>
            <th scope="col-1">原價</th>
            <th scope="col-1">售價</th>
            <th scope="col-1">是否啟用</th>
            <th scope="col-1">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in newproducts" :key="a.id">
            <th scope="row">{{ a.category }}</th>
            <td>{{ a.title }}</td>
            <td>{{ a.origin_price }}</td>
            <td>{{ a.price }}</td>
            <td v-if="a.is_enabled == 1" class="abs">是</td>
            <td v-else-if="a.is_enabled != 1">不是</td>
            <button
              @click="benge(a)"
              class="btn btn-secondary bbb"
              type="button"
            >
              編輯
            </button>
            <button @click="del(a)" class="btn btn-danger bbb" type="button">
              刪除
            </button>
          </tr>
        </tbody>
      </table>
      <div class="s">
        <FanYa
          :ppp="page"
          :newpage="onpage"
          :oldpage="unpage"
          @aa="aSSS"
          @as="aSSS"
          @ac="aSSS"
        ></FanYa>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.backstage {
  display: flex;
  width: 100%;
  margin: 0 auto;
  .left {
    width: 20%;
    background: rgb(255, 255, 255);
    .leftcon {
      width: 100%;
      margin: 0 auto;
      margin-top: 8rem;

      .product {
        width: 90%;
        margin: 0 auto;
        font-size: 2rem;
        display: flex;
        .yon {
          width: 60px;
          height: 64px;
          background: #37a523;
          margin-right: 0.5rem;
          border-radius: 0% 0% 0% 60%;
          p {
            text-align: center;
            margin-top: 0.6rem;
            color: rgb(243, 243, 243);
          }
        }
        button {
          padding-top: 1rem;
          padding-bottom: 1rem;
          min-width: 194px;
          border-radius: 0% 50px 0% 0%;
          color: rgb(255, 255, 255);
          background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
          border: none;
          margin-bottom: 3.5rem;
          p {
            padding-right: 1.1rem;
          }
        }
      }
      .homeview {
        width: 90%;
        margin: 0 auto;
        font-size: 2rem;
        display: flex;
        .yon {
          width: 60px;
          height: 64px;
          background: #37a523;
          margin-right: 0.5rem;
          border-radius: 0% 0% 0% 60%;
          p {
            text-align: center;
            margin-top: 0.6rem;
            color: rgb(243, 243, 243);
          }
        }
        button {
          padding-top: 1rem;
          padding-bottom: 1rem;
          min-width: 194px;
          border-radius: 0% 50px 0% 0%;
          color: rgb(255, 255, 255);
          background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
          border: none;
          margin-bottom: 3.5rem;
          p {
            padding-right: 1.1rem;
          }
        }
      }
      .coupon {
        width: 90%;
        margin: 0 auto;
        font-size: 2rem;
        display: flex;
        .yon {
          width: 60px;
          height: 64px;
          background: #37a523;
          margin-right: 0.5rem;
          border-radius: 0% 0% 0% 60%;
          p {
            text-align: center;
            margin-top: 0.6rem;
            color: rgb(243, 243, 243);
          }
        }
        button {
          padding-top: 1rem;
          padding-bottom: 1rem;
          min-width: 194px;
          border-radius: 0% 50px 0% 0%;
          color: rgb(255, 255, 255);
          background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
          border: none;
          margin-bottom: 3.5rem;
          p {
            padding-right: 1.1rem;
          }
        }
      }
      .orderNumber {
        width: 90%;
        margin: 0 auto;
        font-size: 2rem;
        display: flex;
        .yon {
          width: 60px;
          height: 64px;
          background: #37a523;
          margin-right: 0.5rem;
          border-radius: 0% 0% 0% 60%;
          p {
            text-align: center;
            margin-top: 0.6rem;
            color: rgb(243, 243, 243);
          }
        }
        button {
          padding-top: 1rem;
          padding-bottom: 1rem;
          min-width: 194px;
          border-radius: 0% 50px 0% 0%;
          color: rgb(255, 255, 255);
          background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
          border: none;
          margin-bottom: 3.5rem;
          p {
            padding-right: 1.1rem;
          }
        }
      }
      .repairNumber {
        width: 90%;
        margin: 0 auto;
        font-size: 2rem;
        display: flex;
        .yon {
          width: 60px;
          height: 64px;
          background: #37a523;
          margin-right: 0.5rem;
          border-radius: 0% 0% 0% 60%;
          p {
            text-align: center;
            margin-top: 0.6rem;
            color: rgb(243, 243, 243);
          }
        }
        button {
          padding-top: 1rem;
          padding-bottom: 1rem;
          min-width: 194px;
          border-radius: 0% 50px 0% 0%;
          color: rgb(255, 255, 255);
          background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
          border: none;
          margin-bottom: 3.5rem;
          p {
            padding-right: 1.1rem;
          }
        }
      }
    }
  }
  .white {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    table {
      height: 70%;
      margin-top: 2rem;
      width: 100%;
      margin: 0 auto;
      thead {
        width: 100%;
        th {
          width: 18.5%;
        }
      }
    }
    .aaas {
      height: 20%;
      padding-top: 7rem;
      display: flex;
      justify-content: space-between;
      .leftbtn {
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        font-size: 1.5rem;
      }
    }
    .s {
      height: 10%;
    }
    .abs {
      color: rgb(31, 112, 206);
    }
    .bbb {
      color: black;
    }
  }
}
@media screen and (max-width: 720px) {
  .backstage {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    .left {
      width: 100%;
      background: rgb(255, 255, 255);
      .leftcon {
        width: 100%;
        margin: 0 auto;
        margin-top: 8rem;
        .product {
          width: 90%;
          margin: 0 auto;
          font-size: 2rem;
          display: flex;
          .yon {
            width: 60px;
            height: 64px;
            background: #37a523;
            margin-right: 0.5rem;
            border-radius: 0% 0% 0% 60%;
            p {
              text-align: center;
              margin-top: 0.6rem;
              color: rgb(243, 243, 243);
            }
          }
          button {
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-width: 194px;
            border-radius: 0% 50px 0% 0%;
            color: rgb(255, 255, 255);
            background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
            border: none;
            margin-bottom: 3.5rem;
            p {
              padding-right: 1.1rem;
            }
          }
        }
        .homeview {
          width: 90%;
          margin: 0 auto;
          font-size: 2rem;
          display: flex;
          .yon {
            width: 60px;
            height: 64px;
            background: #37a523;
            margin-right: 0.5rem;
            border-radius: 0% 0% 0% 60%;
            p {
              text-align: center;
              margin-top: 0.6rem;
              color: rgb(243, 243, 243);
            }
          }
          button {
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-width: 194px;
            border-radius: 0% 50px 0% 0%;
            color: rgb(255, 255, 255);
            background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
            border: none;
            margin-bottom: 3.5rem;
            p {
              padding-right: 1.1rem;
            }
          }
        }
        .coupon {
          width: 90%;
          margin: 0 auto;
          font-size: 2rem;
          display: flex;
          .yon {
            width: 60px;
            height: 64px;
            background: #37a523;
            margin-right: 0.5rem;
            border-radius: 0% 0% 0% 60%;
            p {
              text-align: center;
              margin-top: 0.6rem;
              color: rgb(243, 243, 243);
            }
          }
          button {
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-width: 194px;
            border-radius: 0% 50px 0% 0%;
            color: rgb(255, 255, 255);
            background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
            border: none;
            margin-bottom: 3.5rem;
            p {
              padding-right: 1.1rem;
            }
          }
        }
        .orderNumber {
          width: 90%;
          margin: 0 auto;
          font-size: 2rem;
          display: flex;
          .yon {
            width: 60px;
            height: 64px;
            background: #37a523;
            margin-right: 0.5rem;
            border-radius: 0% 0% 0% 60%;
            p {
              text-align: center;
              margin-top: 0.6rem;
              color: rgb(243, 243, 243);
            }
          }
          button {
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-width: 194px;
            border-radius: 0% 50px 0% 0%;
            color: rgb(255, 255, 255);
            background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
            border: none;
            margin-bottom: 3.5rem;
            p {
              padding-right: 1.1rem;
            }
          }
        }
        .repairNumber {
          width: 90%;
          margin: 0 auto;
          font-size: 2rem;
          display: flex;
          .yon {
            width: 60px;
            height: 64px;
            background: #37a523;
            margin-right: 0.5rem;
            border-radius: 0% 0% 0% 60%;
            p {
              text-align: center;
              margin-top: 0.6rem;
              color: rgb(243, 243, 243);
            }
          }
          button {
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-width: 194px;
            border-radius: 0% 50px 0% 0%;
            color: rgb(255, 255, 255);
            background: linear-gradient(to right, rgb(4, 107, 50), #37a523);
            border: none;
            margin-bottom: 3.5rem;
            p {
              padding-right: 1.1rem;
            }
          }
        }
      }
    }
    .white {
      width: 100%;
      table {
        margin-top: 2rem;
        width: 100%;
        margin: 0 auto;
        thead {
          width: 100%;
          th {
            width: 18.5%;
          }
        }
      }
      .aaas {
        padding-top: 7rem;
        display: flex;
        justify-content: space-between;
        .leftbtn {
          padding-left: 0.8rem;
          padding-right: 0.8rem;
          font-size: 1.5rem;
        }
      }
      .abs {
        color: rgb(31, 112, 206);
      }
      .bbb {
        color: black;
      }
    }
  }
}
</style>
<script>
import TanTuo from "../components/TanTuo.vue";
import FanYa from "../components/FanYa.vue";
export default {
  props: ["pa"],
  data() {
    return {
      page: "",
      newpage: [],
      products: {},
      newproducts: [],
      pages: [],
      bb: {},
      xxx: "",
      Load: false,
      onpage: "",
      unpage: "",
      url: "",
    };
  },
  components: {
    TanTuo,
    FanYa,
  },
  created() {
    this.url = this.$route.path;
    console.log(this.url);
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    const HuoApIloojim = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(HuoApIloojim).then((e) => {
      if (!e.data.success) {
        this.$router.push("/DunLoo");
      }
    });
    this.aSSS();
  },
  methods: {
    aSSS(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category != "輪播圖";
          });
          this.newpage = Math.ceil(this.products.length / 10);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 10, x * 10);
          this.xxx = x;
          console.log(this.newproducts, 66);
        }
      });
    },
    benge(b) {
      this.$refs.a.as();
      console.log(b, 12345);
      this.$refs.a.tt = b;
    },
    xx() {
      this.$refs.a.as();
      this.$refs.a.tt = { category: "", leabia: "", ima: [], num: 1 };
    },
    xxgg() {
      this.aSSS(this.xxx);
    },
    del(a) {
      this.$refs.a.tt = a;
      console.log(this.$refs.a.tt.id);
      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.$refs.a.tt.id}`;
      this.$http.delete(ApIloojim, { data: this.tt }).then((e) => {
        console.log(e);
      });
      this.aSSS();
      this.xxgg();
    },
  },
};
</script>
