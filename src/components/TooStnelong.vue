<template>
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" ref=orin>
  <div :style="`background:${aab.style}`" class="toast-header">
    <img src="" class="rounded me-2" alt="">
    <strong class="me-auto ss">{{aab.title}}</strong>
    <small>1</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div  class="toast-body" v-if="aab.content">
    {{aab.content}}
  </div>
</div>
</template>

<script>
import xon from "bootstrap/js/dist/toast";
export default {
 props:['aab'],
 mounted() {
     const orin = this.$refs.orin
     const eworins = new xon(orin,{
       delay: 3000,
     })
     eworins.show();
 },
}
</script> 

<style lang="scss">
  .ss{
    font-weight: 200;
    color: rgb(0, 0, 0);
  }
</style>