<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="productcontant">
    <div class="product" v-for="a in newproducts" :key="a.id">
      <div class="productleft">
        <div class="pltop">
          <img src="../assets/shopc1.png " alt="" />
        </div>
        <div class="plbtn">
          <img src="../assets/shopc1.png " alt="" />
          <img src="../assets/shopc1.png " alt="" />
          <img src="../assets/shopc1.png " alt="" />
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
                <img src="../assets/waaa.svg" alt="" />也請買家注意鑑賞期呦!
              </p>
            </div>
            <div class="btnm">
              <p>輸入數量:</p>
              <button type="button" class="reduce">-</button>
              <input class="num" type="number" />
              <button type="button" class="Increase">+</button>
            </div>
            <div class="btnb">
              <button type="button" class="remaining">剩餘:{{ a.unit }}</button>

              <button type="button" class="cart">
                <img src="../assets/redcart.svg" alt="" />
                <p>加入購物車</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pa"],
  data() {
    return {
      page: "",
      newpage: [],
      products: [],
      newproducts: [],
      pages: [],
      bb: {},
      ims: [],
      xxx: "",
      Load: false,
      onpage: "",
      unpage: "",
      url: "",
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
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.productcontant {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .product {
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.952) inset;
    border-radius: 1.9%;
    margin-top: 3.5rem;
    margin-left: 1rem;
    width: 48%;
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
          height: 37vh;
          width: 100%;
        }
      }
      .plbtn {
        display: flex;
        img {
          width: 33.3%;
          border: 0.1rem #f1f1f1 solid;
        }
      }
    }
    .productright {
      width: 50%;
      .prtop {
        margin-bottom: 2rem;
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
        margin-top: 5rem;
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
            width: 8%;
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
</style>
