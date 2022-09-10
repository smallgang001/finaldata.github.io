<template>
  <TooSt></TooSt>
  <router-view />
</template>

<script>
import TooSt from "../components/TooSt.vue";
export default {
  components: {
    TooSt,
  },
  inject: ["EmiTter"],
  data() {},
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    const HuoApIloojim = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(HuoApIloojim).then((e) => {
      // this.EmiTter.on("ggb", (e) => {
      //   console.log(e, 66666);
      // });
      // this.EmiTter.emit("aas");
      if (!e.data.success) {
        this.$router.push("/DunLoo");
      }
    });
  },
  methods: {},
};
</script>
