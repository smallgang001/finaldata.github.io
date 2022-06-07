<template>
  <TooSt></TooSt>
  <Asdd></Asdd>
  <h1>asdawdasd</h1>
  <router-view/>
</template>
<style lang="scss">
@import "./assets/all";
</style>

<script>
import EmiTter from "../src/methods/mitt.js";
import TooSt from '../src/components/TooSt.vue'
import Asdd from '../src/components/BioTe.vue';
export default {
    provide(){
    return {
      EmiTter
    }
  },
  components:{
      TooSt,
      Asdd
    }
}
</script>