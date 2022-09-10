<template>
  <div class="personals">
    <div class="personal" v-for="a in user" :key="a.id">
      <div class="names">
        <p>收件人:{{ a.user.name }}</p>
      </div>
      <div class="phone">
        <p>聯絡電話:{{ a.user.tel }}</p>
      </div>
      <div class="email">
        <p>E-mail:{{ a.user.email }}</p>
      </div>
      <div class="pay">
        <p>付款方式:{{ a.user.payway }}</p>
      </div>
      <div class="address">
        <p>地址:{{ a.user.address }}</p>
      </div>
      <div class="address">
        <p>訂單編號:{{ a.id }}</p>
      </div>
      <div class="buy" v-if="a.is_paid == false">
        <p>
          付款狀態:
          <span style="color: #ff0000">未付款</span>
        </p>
      </div>
      <div class="buy" v-else>
        <p>
          付款狀態:
          <span>已付款</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
      use: {},
      orderId: "",
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.gg();
  },
  methods: {
    gg() {
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          this.user.push(e.data.order);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.personals {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .personal {
    .names {
      margin-top: 0.5rem;
      p {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
      }
    }
    .phone {
      margin-top: 0.5rem;
      p {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
    .email {
      margin-top: 0.5rem;
      p {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
    .pay {
      margin-top: 0.5rem;
      p {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
    .address {
      margin-top: 0.5rem;
      p {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
    .buy {
      margin-top: 0.5rem;
      p {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .personals {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .personal {
      text-align: left;
      .names {
        margin-top: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 0.8rem;
        }
      }
      .phone {
        margin-top: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
      .email {
        margin-top: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
      .pay {
        margin-top: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
      .address {
        margin-top: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
      .buy {
        margin-top: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
