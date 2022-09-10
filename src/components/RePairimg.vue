<template>
  <div class="repair">
    <div class="recon">
      <h1>故障報修</h1>
      <div class="ss"></div>
      <div class="pp">
        <p class="p1">✓ 輸入訂單編號</p>
        <p class="p2">✓ 一年內都可報修</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.repair {
  width: 100%;
  background-image: url("../assets/repair.png");
  .recon {
    padding-left: 15rem;
    width: 100%;
    overflow: hidden;
    padding-top: 40rem;
    h1 {
      min-width: 350px;
      padding-left: 5rem;
      padding-bottom: 2rem;
      text-align: left;
      width: 100%;
      color: white;
      font-size: 2rem;
    }
    .ss {
      width: 80%;
      border-bottom: 5px white solid;
    }
    .pp {
      width: 100%;
      text-align: center;
      .p1 {
        margin-top: 8rem;
      }
      .p2 {
        margin-top: 2rem;
        margin-bottom: 7rem;
      }
      p {
        min-width: 420px;
        font-size: 1.4rem;
        padding-right: 15rem;
        color: white;
      }
    }
  }
}
@media screen and(max-width: 720px) {
  .repair {
    width: 100%;
    background-image: url("../assets/repair.png");
    margin-bottom: 3rem;
    background-repeat: no-repeat;
    background-size: 100%;
    .recon {
      text-align: center;
      padding-left: 3rem;
      width: 100%;
      overflow: hidden;
      padding-top: 0rem;
      h1 {
        display: none;
        min-width: 50px;
        padding-left: 5rem;
        padding-bottom: 2rem;
        text-align: left;
        width: 100%;
        color: white;
        font-size: 2rem;
      }
      .ss {
        display: none;
        width: 80%;
        border-bottom: 2px white solid;
      }
      .pp {
        width: 100%;
        text-align: center;
        .p1 {
          margin-top: 4rem;
        }
        .p2 {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        p {
          min-width: 420px;
          font-size: 1rem;
          padding-right: 10rem;
          color: white;
        }
      }
    }
  }
}
</style>
