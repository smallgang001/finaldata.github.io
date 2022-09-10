<template>
  <div class="contant" style="color: #ffffff">
    <div class="condf">
      <div class="top">
        <h1>資料如下:</h1>
      </div>
      <div class="mul">
        <p>您的訂單編號為: {{ aa.id }}</p>
        <p>您的保固到期日: {{ contant.ndata }}</p>
        <P>連絡電話: {{ contant.nphone }}</P>
        <p>聯絡信箱: {{ contant.nemail }}</p>
        <p>問題敘述: {{ contant.nmessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contant: {},
      aa: {},
    };
  },

  mounted() {
    this.a();
  },
  methods: {
    a() {
      this.orderId = this.$route.params.orderId;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          this.aa = e.data.order;
          this.contant = e.data.order.user;
        }
      });
    },
    search() {
      this.$router.push(`/RePairdata/FinalSure/${this.orderId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.contant {
  width: 100%;
  display: flex;
  justify-content: center;
  .condf {
    .top {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    .mul {
      margin-left: 2.2rem;
      font-size: 2rem;
      p {
        margin-bottom: 1rem;
      }
    }
  }
}
@media screen and(max-width:720px) {
  .contant {
    width: 100%;
    display: flex;
    justify-content: center;
    .condf {
      .top {
        text-align: center;
        font-size: 2rem;
        letter-spacing: 0.5rem;
        margin-bottom: 2rem;
      }
      .mul {
        margin-left: 2.2rem;
        p {
          margin-bottom: 1rem;
          font-size: 00.8rem;
          letter-spacing: 0.2rem;
        }
      }
    }
  }
}
</style>
