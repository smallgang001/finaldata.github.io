<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="aaas">
    產品列表
    <button
      @click="xx"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      新增商品
    </button>
    <TanTuo ref="a" @getda="xxgg"></TanTuo>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col-1">分類</th>
        <th scope="col-7">商品</th>
        <th scope="col-1">原價</th>
        <th scope="col-1">售價</th>
        <th scope="col-1">是否啟用</th>
        <th scope="col-1">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="a in products" :key="a.id">
        <th scope="row">{{ a.category }}</th>
        <td>{{ a.title }}</td>
        <td>{{ a.origin_price }}</td>
        <td>{{ a.price }}</td>
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
  <FanYa :ppp="page" :newpage="onpage" :oldpage="unpage" @aa="aSSS" @as="aSSS" @ac="aSSS"></FanYa>
</template>
<style lang="scss">
table {
  width: 100%;
  thead {
    width: 100%;
    th {
      width: 18.5%;
    }
  }
}
.aaas {
  display: flex;
  justify-content: space-between;
  .leftbtn {  
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    font-size: 1.5rem;
  }
}
.abs {
  color: rgb(31, 112, 206);
}
.bbb {
  color: black;
}
</style>
<script>
import TanTuo from "../components/TanTuo.vue";
import FanYa from "../components/FanYa.vue";
export default {
  props: ["pa"],
  data() {
    return {
      page: "",
      products: [],
      bb: {},
      Load: false,
      onpage: "",
      unpage:"",
      
    };
  },
  components: {
    TanTuo,
    FanYa,
  },
  created() {
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
      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${x}`;
      this.axios.get(ApIloojim).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.products = e.data.products;
          this.page = e.data.pagination.total_pages;
          this.onpage = e.data.pagination.current_page;
          this.unpage = e.data.pagination.current_page;
        }
      });
    },
    benge(b) {
      this.$refs.a.as();
      this.$refs.a.tt = b;
    },
    xx() {
      this.$refs.a.as();
      this.$refs.a.tt = {};
    },
    xxgg() {
      this.aSSS();
    },
    del(a) {
      this.$refs.a.tt = a;
      console.log(this.$refs.a.tt.id);
      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.$refs.a.tt.id}`;
      this.$http.delete(ApIloojim, { data: this.tt }).then((e) => {
        console.log(e);
      });
      this.aSSS();
      this.xxgg();
    },
  },
};
</script>