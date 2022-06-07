<template >
<TooSt></TooSt>
  <router-view/>
</template>

<script>

import TooSt from '../components/TooSt.vue'
export default {
    components:{
        TooSt
    },
    inject:['EmiTter'],
  data(){

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

  },
  methods: {
  },
}
</script>