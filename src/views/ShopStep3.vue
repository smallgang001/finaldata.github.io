<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="shopbody">
    <div class="shoptop">
      <Shopone></Shopone>
    </div>
    <div class="shopunder">
      <div class="undertop">
        <h1>已建立訂單</h1>
        <OrderShop ref="prod"></OrderShop>
      </div>
      <div class="underbtn">
        <h1>訂購人資料:</h1>
        <div class="line"></div>
        <PersonalData></PersonalData>
        <div class="gobuy">
          <div class="btnleft">
            <button @click="go1" type="button">
              <img src="../assets/chevron-left.svg" alt="" />
              <p>取消購買</p>
            </button>
          </div>
          <div class="btnright">
            <button @click="buysure" class="shape-ex3" type="button">
              <p>確認購買</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopone from "../components/ShoppingOne.vue";
import OrderShop from "../components/OrderShop.vue";
import PersonalData from "../components/PersonalData.vue";
export default {
  data() {
    return {
      user: {},
      aa: "",
      orderid: "",
      login: {
        username: "s16113161@stu.edu.tw",
        password: "aytjjos123",
      },
      Load: false,
    };
  },
  components: {
    Shopone,
    OrderShop,
    PersonalData,
  },
  created() {
    this.orderid = this.$route.params.orderId;
  },
  mounted() {},
  methods: {
    buysure() {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderid}`;
      this.axios.post(Apiallpage).then((e) => {
        if (e.data.success) {
          const ApIloojim = `${process.env.VUE_APP_API}admin/signin`;
          this.axios.post(ApIloojim, this.login).then((e) => {
            if (e.data.success) {
              const token = document.cookie.replace(
                /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
              );
              this.$http.defaults.headers.common["Authorization"] = token;
              const HuoApIloojim = `${process.env.VUE_APP_API}api/user/check`;
              this.$http.post(HuoApIloojim).then((x) => {
                x;
                const ApIloojims = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.$refs.prod.user[0].product_id}`;
                this.$http
                  .put(ApIloojims, {
                    data: {
                      id: this.$refs.prod.user[0].product_id,
                      title: this.$refs.prod.user[0].product.title,
                      category: this.$refs.prod.user[0].product.category,
                      unit: String(
                        this.$refs.prod.user[0].product.unit -
                          String(this.$refs.prod.user[0].qty)
                      ),

                      origin_price:
                        this.$refs.prod.user[0].product.origin_price,
                      price: this.$refs.prod.user[0].product.price,
                    },
                  })
                  .then((e) => {
                    e;
                    const ApIloojimout = `${process.env.VUE_APP_API}logout`;
                    this.axios.post(ApIloojimout, this.login).then(() => {
                      this.Load = false;
                      this.$router.push({
                        path: `/ShopView/ShopStep4/${this.orderid}`,
                      });
                    });
                  });
              });
            }
          });
        }
      });
    },
    go1() {
      this.$router.push({
        path: `/`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.shopbody {
  background: #171414;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5rem;
  margin-bottom: 2rem;
  .shopunder {
    background: white;
    width: 77%;
    margin: 0 auto;
    margin-top: 7rem;
    h1 {
      text-align: center;
      font-size: 1.6rem;
      color: #0f5f38;
      font-weight: bold;
    }
    .undertop {
      padding-top: 5rem;
    }
    .underbtn {
      padding-top: 9rem;
      width: 90%;
      margin: 0 auto;
      h1 {
        text-align: center;
        font-size: 1.6rem;
        font-weight: bold;
        color: #0f5f38;
        padding-bottom: 1.5rem;
      }
      .line {
        margin: 0 auto;
        width: 65%;
        border-top: 3px #0f5f38 solid;
        padding-bottom: 1.5rem;
      }
      .gobuy {
        margin-top: 1.7rem;
        display: flex;
        justify-content: center;
        padding-bottom: 5rem;
        .btnleft {
          button {
            margin-right: 1.2rem;
            display: flex;
            align-items: center;
            background: #ffffff;
            color: #0f5f38;
            border: 1px #ffffff solid;
            font-weight: bold;
            padding: 0.5rem;
            padding-right: 1rem;
            padding-left: 1rem;
            p {
              font-size: 1.2rem;
            }
          }
        }
        .btnright {
          .shape-ex3 {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
            margin-left: 1rem;
            background: #0f5f38;
            color: #ffffff;
            border: 1px #0f5f38 solid;
            cursor: pointer;
            line-height: 40px;
            color: rgb(255, 255, 255);
            background-color: #0f5f38;
            border: 1px solid #000;
            position: relative;
            transition: all 0.3s linear;
            p {
              font-size: 1.1rem;
              font-weight: bold;
            }
          }
          .shape-ex3 > p {
            position: relative;
            z-index: 1;
          }
          .shape-ex3::before {
            content: "";
            width: 0%;
            height: 100%;
            display: block;
            background-color: #ffffff;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s ease;
          }
          .shape-ex3:hover {
            color: #0f5f38;
          }
          .shape-ex3:hover::before {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and(max-width: 720px) {
  .shopbody {
    background: #171414;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5rem;
    margin-bottom: 2rem;
    .shopunder {
      background: white;
      width: 100%;
      margin: 0 auto;
      margin-top: 7rem;
      h1 {
        text-align: center;
        font-size: 1.6rem;
        color: #0f5f38;
        font-weight: bold;
      }
      .undertop {
        padding-top: 5rem;
      }
      .underbtn {
        padding-top: 4rem;
        width: 90%;
        margin: 0 auto;
        h1 {
          text-align: center;
          font-size: 1.6rem;
          font-weight: bold;
          color: #0f5f38;
          padding-bottom: 1.5rem;
        }
        .line {
          margin: 0 auto;
          width: 65%;
          border-top: 3px #0f5f38 solid;
          padding-bottom: 1.5rem;
        }
        .gobuy {
          margin-top: 1.7rem;
          display: flex;
          justify-content: center;
          padding-bottom: 5rem;
          .btnleft {
            button {
              margin-right: 1.2rem;
              display: flex;
              align-items: center;
              background: #ffffff;
              color: #0f5f38;
              border: 1px #ffffff solid;
              font-weight: bold;
              padding: 0.5rem;
              padding-right: 1rem;
              padding-left: 1rem;
              p {
                font-size: 1.2rem;
              }
            }
          }
          .btnright {
            .shape-ex3 {
              padding-left: 1.2rem;
              padding-right: 1.2rem;
              margin-left: 1rem;
              background: #0f5f38;
              color: #ffffff;
              border: 1px #0f5f38 solid;
              cursor: pointer;
              line-height: 40px;
              color: rgb(255, 255, 255);
              background-color: #0f5f38;
              border: 1px solid #000;
              position: relative;
              transition: all 0.3s linear;
              p {
                font-size: 1.1rem;
                font-weight: bold;
              }
            }
            .shape-ex3 > p {
              position: relative;
              z-index: 1;
            }
            .shape-ex3::before {
              content: "";
              width: 0%;
              height: 100%;
              display: block;
              background-color: #ffffff;
              position: absolute;
              top: 0;
              left: 0;
              transition: all 0.3s ease;
            }
            .shape-ex3:hover {
              color: #0f5f38;
            }
            .shape-ex3:hover::before {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
