<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="whites">
    <div class="aaas">
      <TanTuo ref="a" @getda="xxgg"></TanTuo>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="th1">報修編號</th>
          <th>報修日期</th>
          <th>報修電話</th>
          <th>報修email</th>
          <th>報修進度</th>
          <th>報修留言</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in newproducts" :key="a.id">
          <th>{{ a.id }}</th>
          <td>{{ a.user.ordertime }}</td>
          <td>{{ a.user.nphone }}</td>
          <td>{{ a.user.nemail }}</td>
          <td>{{ a.user.ordergindo }}</td>
          <td class="abs">{{ a.user.nmessage }}</td>
          <button @click="benge(a)" class="btn btn-secondary bbb" type="button">
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
</template>
<style lang="scss" scoped>
.whites {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  table {
    margin-top: 2rem;
    width: 100%;
    margin: 0 auto;
    height: 70%;
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
    table {
      height: 10%;
    }
  }
  .abs {
    color: rgb(31, 112, 206);
  }
  .bbb {
    color: black;
  }
}
</style>
<script>
import TanTuo from "../components/RePairtantuo.vue";
import FanYa from "../components/FanYa.vue";
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
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?path=${x}`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = e.data.orders;
          this.products = this.pages.filter((e) => {
            return e.user.ordergindo != "";
          });
          this.newpage = Math.ceil(this.products.length / 5);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 5, x * 5);
          this.xxx = x;
        }
      });
    },
    benge(b) {
      this.$refs.a.as();
      this.$refs.a.tt = b;
      this.$refs.a.ts = b.user;
    },
    xxgg() {
      this.aSSS(this.xxx);
    },
    del(a) {
      this.$refs.a.tt = a;

      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.$refs.a.tt.id}`;
      this.$http.delete(ApIloojim, { data: this.tt }).then((e) => {
        e;
      });
      this.aSSS();
      this.xxgg();
    },
  },
};
</script>
