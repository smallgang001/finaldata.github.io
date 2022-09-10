<template>
  <div class="shopbody">
    <div class="shoptop">
      <Shopone></Shopone>
    </div>
    <div class="shopunder">
      <div class="undertop">
        <h1>確認訂單</h1>
        <Shopdata></Shopdata>
      </div>
      <div class="underbtn">
        <h1>訂購人資料:</h1>
        <div class="line"></div>
        <PersonalData></PersonalData>
        <div class="gobuy">
          <div class="btnleft">
            <button type="button">
              <img src="../assets/chevron-left.svg" alt="" />
              <p>回上一頁</p>
            </button>
          </div>
          <div class="btnright">
            <router-link to="/ShopView/ShopStep3"
              ><button @click="buysure" class="b2" type="button">
                <p>建立訂單</p>
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopone from "../components/ShoppingOne.vue";
import Shopdata from "../components/ShopData.vue";
import PersonalData from "../components/PersonalData.vue";
export default {
  data() {
    return {
      user: {},

      manu: "",
    };
  },
  components: {
    Shopone,
    Shopdata,
    PersonalData,
  },
  inject: ["EmiTter"],
  mounted() {
    // this.EmiTter.on("datacont", (e) => {
    //   this.user = e;
    // });
    // this.EmiTter.emit("bbb");
    // this.EmiTter.emit("inform", this.user);
  },
  methods: {
    buysure() {
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.axios
        .post(Apiallpage, {
          data: {
            user: {
              name: this.user.user,
              email: this.user.email,
              tel: this.user.phone,
              address: this.user.address,
            },
            message: this.user.message,
          },
        })
        .then((e) => {
          if (e.data.success) {
            this.manu = e;
            this.EmiTter.emit("aa", this.manu);
          }
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
          button {
            width: 100%;
            height: 100%;
            color: #ffffff;
            background: #0f5f38;
            border: 1px #0f5f38 solid;
            padding: 0.5rem;
            padding-right: 1rem;
            padding-left: 1rem;
            p {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
