<template>
  <div>
    <div class="bd">
      <div class="left">
        <router-view name="left"></router-view>
      </div>
      <div class="right">
        <router-view name="right"></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bd {
  display: flex;
  width: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  .left {
    width: 20%;
  }
  .right {
    width: 80%;
  }
}
@media screen and(max-width: 720px) {
  .bd {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
}
</style>
