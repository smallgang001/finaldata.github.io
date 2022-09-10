<template>
  <div class="repairbody">
    <div class="retop">
      <Repairimg></Repairimg>
    </div>
    <div class="aa"><div class="online"></div></div>
    <div class="recontant">
      <div class="contant">
        <div class="contanttop"></div>
        <div class="contantml"></div>
        <div class="contantunder"></div>
      </div>
    </div>
    <div class="bb"><div class="underline"></div></div>
  </div>
</template>
<style lang="scss" scoped>
.repairbody {
  width: 100%;
  .aa {
    margin-bottom: 2rem;
    margin-left: 11rem;
    .online {
      overflow: hidden;
      width: 90%;
      border-bottom: 4px white solid;
    }
  }
  .recontant {
    .contant {
      .datatime {
        display: flex;
        .p1 {
          color: white;
        }
        .p2 {
          color: red($color: #000000);
        }
      }
    }
  }
  .bb {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    margin-left: 11rem;
    .underline {
      overflow: hidden;
      width: 90%;
      border-bottom: 4px white solid;
    }
  }
}
</style>

<script>
import Repairimg from "../components/RePairimg.vue";
export default {
  components: {
    Repairimg,
  },
};
</script>
