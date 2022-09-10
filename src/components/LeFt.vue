<template>
  <div class="lefts">
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
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  created() {
    this.url = this.$route.path;
  },
  updated() {
    this.url = this.$route.path;
  },
  methods: {
    carousel() {
      this.url = this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.lefts {
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
</style>
