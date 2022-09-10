<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="whites" style="background: rgb(255, 255, 255)">
    <div class="aaas">
      產品列表
      <button
        @click="xx"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        新增輪播圖
      </button>
      <TanTuoimg ref="a" @getda="xxgg"></TanTuoimg>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col-1">分類</th>
          <th scope="col-2">類別</th>
          <th scope="col-7">圖片</th>
          <th scope="col-1">是否啟用</th>
          <th scope="col-1">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in newproducts" :key="a.id">
          <th scope="row">{{ a.category }}</th>
          <td>{{ a.leabia }}</td>
          <td>
            <img :src="a.ims" alt="" style="max-width: 120px" class="as" />
          </td>
          <td v-if="a.is_enabled == 1" class="abs">是</td>
          <td v-else-if="a.is_enabled != 1">不是</td>
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
import TanTuoimg from "../components/TanTuoimg.vue";
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
    TanTuoimg,
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
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "輪播圖";
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
    benge(b) {
      this.$refs.a.as();
      this.$refs.a.tt = b;
    },
    xx() {
      this.$refs.a.as();
      this.$refs.a.tt = { category: "", leabia: "" };
    },
    xxgg() {
      this.aSSS(this.xxx);
    },
    del(a) {
      this.$refs.a.tt = a;

      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.$refs.a.tt.id}`;
      this.$http.delete(ApIloojim, { data: this.tt }).then((e) => {
        e;
      });
      this.aSSS();
      this.xxgg();
    },
  },
};
</script>
