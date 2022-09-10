<template>
  <LoadIng :active="Load"></LoadIng>
  <nav class="navbar bg-dark navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="index.html">One Basket</a>
    <button
      class="navbar-toggler ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggleExternalContent2"
      aria-
      controls="navbarToggleExternalContent2"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarToggleExternalContent2">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Download</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="aboutshop">
    <div class="shopimg">
      <img src="../assets/shop.png" alt="" />
    </div>
    <div class="shopcontant">
      <div class="contantleft">
        <div class="ttop">
          <div class="top">
            <h1>商品清單</h1>
            <div class="bdiv">
              <button type="button">全部商品</button>
            </div>
            <div class="bdiv">
              <button @click="aSSS((x = 1))" type="button">顯示卡</button>
            </div>
            <br />
            <div class="bdiv">
              <button @click="graphics((x = 1))" type="button">顯示卡</button>
            </div>
            <br />
            <div class="bdiv">
              <button @click="memory((x = 1))" type="button">記憶體</button>
            </div>
            <br />
            <div class="bdiv">
              <button @click="motherboard((x = 1))" type="button">
                主機板
              </button>
            </div>
            <br />
            <div class="bdiv">
              <button @click="cpu((x = 1))" type="button">CPU</button>
            </div>
          </div>
        </div>
        <div class="btn">
          <img src="../assets/shop1.png" alt="" />
        </div>
      </div>
      <div class="contantright">
        <LoadIng :active="Load"></LoadIng>
        <div class="productcontant">
          <div class="product" v-for="a in newproducts" :key="a.id">
            <div class="productleft">
              <div class="pltop">
                <img :src="a.ims" type="text" style="margin: auto" />
              </div>
              <div class="plbtn">
                <button
                  type="button"
                  v-for="b in a.ima"
                  :key="b"
                  style="margin: auto"
                  @click="a.ims = b"
                >
                  <img :src="b" alt="" />
                </button>
              </div>
            </div>
            <div class="productright">
              <div class="prbody">
                <div class="prtop">
                  <h1>
                    {{ a.title }}
                  </h1>
                  <p>{{ a.description }}</p>
                </div>
                <div class="prmul">
                  <div class="mulleft">
                    <p style="color: #646161">原價 {{ a.origin_price }}</p>
                    <p style="color: #ea0000">優惠價 {{ a.price }}</p>
                  </div>
                  <div class="mulright">
                    <p class="p1">取貨方式： 門市取貨 | 宅配</p>
                    <p class="p2">付款方式： | 刷卡 | Pi 錢包 |</p>
                    <p class="p3">ATM轉帳 | 信用卡分期</p>
                  </div>
                </div>
                <div class="prbtn">
                  <div class="btnt">
                    <p>
                      <img
                        src="../assets/check.svg"
                        alt=""
                      />保障你的交易安全：我們只會在買家確認收到商品後，
                      才會跟您收款！
                    </p>
                    <p>
                      <img
                        src="../assets/waaa.svg"
                        alt=""
                      />也請買家注意鑑賞期呦!
                    </p>
                  </div>
                  <div class="btnm">
                    <p>輸入數量:</p>
                    <button
                      @click="reduce(a)"
                      type="button"
                      class="reduce"
                      :disabled="a.num == 1"
                    >
                      -
                    </button>
                    <input
                      class="num"
                      type="number"
                      @input="textnum(a)"
                      v-model="a.num"
                      onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                    />
                    <button
                      @click="Increase(a)"
                      type="button"
                      class="Increase"
                      :disabled="a.num == a.unit"
                    >
                      +
                    </button>
                  </div>
                  <div class="btnb">
                    <button type="button" class="remaining">
                      剩餘:{{ a.unit }}
                    </button>
                    <button
                      @click="ShoppingCart(a)"
                      type="button"
                      class="cart"
                      :disabled="a.unit == 0"
                    >
                      <img src="../assets/redcart.svg" alt="" />
                      <p>加入購物車</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagebtn">
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
</template>

<style scoped lang="scss">
.aboutshop {
  width: 100%;
  margin-bottom: 3rem;
  .shopimg {
    width: 100%;
    margin-bottom: 8rem;
    img {
      width: 100%;
    }
  }
  .shopcontant {
    width: 100%;
    background: #171414;
    display: flex;
    flex-wrap: wrap;
    .contantleft {
      width: 20%;
      margin-left: 2rem;
      .ttop {
        width: 65%;
        margin-left: 4rem;
        margin-top: 5rem;
        padding-top: 2rem;
        margin-bottom: 2rem;
        border-right: 4px #d35712 solid;
        margin-right: 9rem;
        height: 40vh;
        min-width: 100px;
        .top {
          h1 {
            color: #ffffff;
            font-size: 1.6rem;
            border-left: 0.4rem #d35712 solid;
            margin-bottom: 2.8rem;
          }
          .bdiv {
            width: 100%;
            border-bottom: 0.15rem #d35712 solid;
            button {
              margin-bottom: 0.4rem;
              font-size: 1.5rem;
              background: #171414;
              color: #ffffff;
              border: #171414;
            }
          }
        }
      }
      .btn {
        margin-left: 1rem;
        width: 80%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        img {
          width: 110%;
          min-width: 120px;
        }
      }
    }
    .contantright {
      width: 75%;
      padding: 2rem;
      .productcontant {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .product {
          box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.952) inset;
          border-radius: 1.9%;
          margin-top: 3.5rem;
          margin-left: 1rem;
          width: 46%;
          background: #ffffff;
          display: flex;
          flex-wrap: wrap;
          min-width: 350px;
          .productleft {
            padding: 0.3rem;
            width: 50%;
            .pltop {
              width: 100%;
              border-right: 0.05rem #fbf1ec solid;
              img {
                padding-top: 0.5rem;
                height: 27vh;
                width: 100%;
                object-fit: cover;
              }
            }
            .plbtn {
              display: flex;
              margin-top: 2rem;
              button {
                width: 33%;
                border: 00.1rem #f1f1f1 solid;
                img {
                  height: 10vh;
                  width: 100%;
                  border: 0.1rem #f1f1f1 solid;
                  object-fit: cover;
                }
              }
            }
          }
          .productright {
            width: 50%;
            .prtop {
              margin-bottom: 1rem;
              h1 {
                margin-top: 1.2rem;
                margin-bottom: 0.8rem;
                font-size: 1.2rem;
                margin-left: 0.4rem;
              }
              p {
                margin-left: 0.5rem;
                font-size: 1rem;
                text-align-last: left;
                color: #797272;
              }
            }
            .prmul {
              background: #f3d9ca42;
              margin-top: 2rem;
              margin-left: 0.6rem;
              margin-right: 0.6rem;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              margin-bottom: 1.2rem;
              border-radius: 5%;
              .mulleft {
                p {
                  padding-top: 1.2rem;
                  padding-bottom: 1.2rem;
                  font-size: 0.25rem;
                }
              }
              .mulright {
                .p1 {
                  margin-top: 1.2rem;
                  margin-bottom: 2rem;
                }
                .p2 {
                  margin-bottom: 0.8rem;
                }
                p {
                  font-size: 12px;
                }
              }
            }
            .prbtn {
              width: 100%;
              .btnt {
                margin-top: 1.2rem;
                p {
                  font-size: 0.5rem;
                  margin-bottom: 0.3rem;
                  font-weight: bold;
                }
              }
              .btnm {
                display: flex;
                justify-content: center;
                margin-top: 2.4rem;
                margin-right: 6rem;
                font-size: 0.2rem;
                p {
                  font-size: 0.5rem;
                  padding-top: 0.4rem;
                  font-weight: bold;
                }
                .reduce {
                  background: #ffffff;
                  border: 0.1rem #bb8484 solid;
                }
                .num {
                  width: 12%;
                  background: #ffffff;
                  border: 0.1rem #bb8484 solid;
                }
                .num::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                .Increase {
                  background: #ffffff;
                  border: 0.1rem #bb8484 solid;
                }
              }
              .btnb {
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;
                .remaining {
                  margin-left: 3.2rem;
                  padding-left: 1.2rem;
                  padding-right: 1.2rem;
                  background: #e58225;
                  color: #ffffff;
                  border: #ff8e26;
                  font-size: 1.2rem;
                }

                .cart {
                  margin-right: 1.2rem;
                  display: flex;
                  background: #ffffff;
                  color: #ff0000;
                  border: 1px #ff0000 solid;
                  align-items: center;
                  font-size: 0.1rem;
                  img {
                    padding-top: 0.35rem;
                    width: 35%;
                  }
                  p {
                    font-size: 0.2rem;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .pagebtn {
    margin-top: 2rem;
    .btnby {
      display: flex;
      justify-content: center;
      button {
        background: white;
        font-size: 2rem;
      }
    }
  }
}
</style>

<script>
import FanYa from "../components/FanYa.vue";
export default {
  components: {
    FanYa,
  },
  props: ["pa"],
  data() {
    return {
      page: "",
      newpage: [],
      products: [],
      newproducts: [],
      pages: [],
      Load: false,
      onpage: "",
      xxx: "",
      unpage: "",
      newnum: 0,
      sho: [],
      disab: false,
    };
  },
  created() {
    this.aSSS();
  },
  methods: {
    aSSS(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          console.log(e.data, 5555);
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category != "輪播圖";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
        }
      });
    },
    graphics(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "顯示卡";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
        }
      });
    },
    motherboard(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "主機板";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
        }
      });
    },
    memory(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          console.log(e.data, 5555);
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "記憶體";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
        }
      });
    },
    cpu(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "CPU";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
        }
      });
    },
    textnum(a) {
      if (a.num > a.unit) a.num = a.unit;
      if (a.num < 1) a.num = 1;
    },
    Increase(a) {
      a.num += 1;
      if (a.num > a.unit) a.num = a.unit;
      if (a.num < 1) a.num = 1;
    },
    reduce(a) {
      a.num -= 1;
      if (a.num > a.unit) a.num = a.unit;
      if (a.num < 1) a.num = 1;
    },

    ShoppingCart(a) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios
        .post(Apiallpage, {
          data: { product_id: a.id, qty: a.num },
        })
        .then((e) => {
          this.Load = false;
          console.log(a, "a");
          console.log(e, "e");
          if (e.data.success) {
            if (a.unit < 0) {
              e.data.data.qty = Number(a.unit);
              console.log(e.data);
              alert("已超過物品總數量,購物車將以最大數量取代");
            }
          }
        });
    },
  },
};
</script>
