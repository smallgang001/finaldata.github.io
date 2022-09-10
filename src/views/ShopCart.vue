<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="shop">
    <div class="shoptop">
      <Shopone></Shopone>
    </div>
    <div class="shopunder">
      <Shopdata ref="cart"></Shopdata>
    </div>
    <div class="shopunbtn">
      <div class="mar">
        <div class="btnleft">
          <button @click="about" type="button">
            <img src="../assets/chevron-left.svg" alt="" />
            <p>回上一頁</p>
          </button>
        </div>
        <div class="btnright">
          <button @click="delcarts" class="b1 shape-ex2" type="button">
            <p>刪除全部訂單</p>
          </button>
          <button
            @qty="step2"
            @click="step2"
            class="b2 shape-ex3"
            type="button"
            :disabled="presets"
          >
            <p>填寫訂單</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopone from "../components/ShoppingOne.vue";
import Shopdata from "../components/ShopData.vue";
export default {
  data() {
    return {
      Load: false,
      presets: false,
      newshopnum: [],
    };
  },
  components: {
    Shopone,
    Shopdata,
  },

  created() {},
  methods: {
    surebuy() {
      this.$router.push("");
    },
    delcarts() {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.axios.delete(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.$refs.cart.getcart();
          this.$refs.cart.alltatle = 0;
        }
      });
    },
    step2() {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          if (e.data.data.carts == "") {
            this.presets = true;
          } else {
            this.$router.push("/ShopView/ShopStep2");
          }
        }
      });
    },
    about() {
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  background: #171414;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5rem;
  margin-bottom: 2rem;
  .shoptop {
    margin-bottom: 5rem;
  }
  .shopunder {
    display: flex;
    justify-content: center;
    width: 75%;
    margin: 0 auto;
    background: #ffffff;
  }
  .shopunbtn {
    padding-top: 10rem;
    background: #ffffff;
    width: 75%;
    margin: 0 auto;
    padding-bottom: 5rem;
    .mar {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .btnleft {
        button {
          display: flex;
          align-items: center;
          border: 1px #ffffff solid;
          color: #0f5f38;
          font-weight: bold;
          background: white;
          p {
            color: #0f5f38;
            font-size: 1.4rem;
          }
        }
      }
      .btnright {
        display: flex;
        .shape-ex2 {
          padding-right: 1.2rem;
          padding-left: 1.2rem;
          margin-right: 1rem;
          cursor: pointer;
          line-height: 40px;
          color: #0f5f38;
          background-color: transparent;
          border: 1px solid #0f5f38;
          position: relative;
          transition: all 0.3s linear;
          p {
            font-weight: bold;
            font-size: 1.1rem;
          }
        }
        .shape-ex2 > p {
          position: relative;
          z-index: 1;
        }
        .shape-ex2::before {
          content: "";
          width: 0%;
          height: 100%;
          display: block;
          background-color: #0f5f38;
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s ease;
        }
        .shape-ex2:hover {
          color: #fff;
        }
        .shape-ex2:hover::before {
          width: 100%;
        }
        .shape-ex3 {
          padding-left: 2.2rem;
          padding-right: 2.2rem;
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
@media screen and (max-width: 720px) {
  .shop {
    background: #171414;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 5rem;
    margin-bottom: 2rem;
    .shoptop {
      margin-bottom: 5rem;
    }
    .shopunder {
      display: flex;
      justify-content: center;
      width: 90%;
      margin: 0 auto;
      background: #ffffff;
    }
    .shopunbtn {
      padding-top: 10rem;
      background: #ffffff;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 5rem;
      .mar {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .btnleft {
          button {
            display: flex;
            align-items: center;
            border: 1px #ffffff solid;
            color: #0f5f38;
            font-weight: bold;
            background: white;
            p {
              color: #0f5f38;
              font-size: 1.4rem;
            }
          }
        }
        .btnright {
          margin-top: 2rem;
          width: 100%;
          display: flex;
          .shape-ex2 {
            width: 50%;
            margin-right: 1rem;
            cursor: pointer;
            line-height: 25px;
            color: #0f5f38;
            background-color: transparent;
            border: 1px solid #0f5f38;
            position: relative;
            transition: all 0.3s linear;
            p {
              font-weight: bold;
              font-size: 12px;
            }
          }
          .shape-ex2 > p {
            position: relative;
            z-index: 1;
          }
          .shape-ex2::before {
            content: "";
            width: 0%;
            height: 100%;
            display: block;
            background-color: #0f5f38;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s ease;
          }
          .shape-ex2:hover {
            color: #fff;
          }
          .shape-ex2:hover::before {
            width: 100%;
          }
          .shape-ex3 {
            width: 50%;
            margin-left: 1rem;
            background: #0f5f38;
            color: #ffffff;
            border: 1px #0f5f38 solid;
            cursor: pointer;
            line-height: 25px;
            color: rgb(255, 255, 255);
            background-color: #0f5f38;
            border: 1px solid #000;
            position: relative;
            transition: all 0.3s linear;
            p {
              padding-top: 1rem;
              padding-bottom: 1rem;
              font-size: 12px;
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
</style>
