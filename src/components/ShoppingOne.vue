<template>
  <div class="shopprocess">
    <div class="processtop">
      <div class="process">
        <div class="process1">
          <div class="radiosimg">
            <img src="../assets/process1.svg" alt="" />
          </div>
          <p v-if="this.$route.path == '/ShopCart'" style="color: #239021">
            step 1. 確認訂單
          </p>
          <p v-else style="color: #fff">step 1. 確認訂單</p>
        </div>
        <div class="process1">
          <div class="radiosimg">
            <img src="../assets/checklist.png" alt="" />
          </div>
          <p
            v-if="this.$route.path == '/ShopView/ShopStep2'"
            style="color: #239021"
          >
            step 2. 建立訂單
          </p>
          <p v-else style="color: #fff">step 2. 建立訂單</p>
        </div>
        <div class="process1">
          <div class="radiosimg">
            <img src="../assets/clipboard.png" alt="" />
          </div>
          <p
            v-if="this.$route.path == `/ShopView/ShopStep3/${url}`"
            style="color: #239021"
          >
            step 3. 付款
          </p>
          <p v-else style="color: #fff">step 3. 付款</p>
        </div>
        <div class="process1">
          <div class="radiosimg">
            <img src="../assets/aa.png" alt="" />
          </div>
          <p
            v-if="this.$route.path == `/ShopView/ShopStep4/${url}`"
            style="color: #239021"
          >
            step 4. 完成訂單
          </p>
          <p v-else style="color: #fff">step 4. 完成訂單</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  created() {
    this.url = this.$route.params.orderId;
  },
};
</script>
<style lang="scss" scoped>
.shopprocess {
  margin-top: 6rem;
  background: #171414;
  .processtop {
    display: flex;
    justify-content: center;
    .process {
      margin-top: 8rem;
      display: flex;
      width: 80%;
      .process1:first-child {
        .radiosimg {
          &::before {
            border-top: none;
          }
        }
      }
      .process1:last-child {
        .radiosimg {
          &::after {
            border-top: none;
          }
        }
      }
      .process1 {
        text-align: center;
        overflow: hidden;
        width: 25%;
        .radiosimg {
          margin: 0 auto;
          width: 120px;
          height: 120px;
          display: flex;
          padding: 2rem;
          background: #ffffff;
          border-radius: 50%;
          margin-bottom: 3rem;
          position: relative;
          white-space: nowrap;
          &::before {
            display: flex;
            content: "";
            position: absolute;
            right: 10rem;
            width: 10rem;
            border-top: 0.78rem #ffffff solid;
            top: 50%;
            transform: translateY(-50%);
          }
          &::after {
            display: flex;
            content: "";
            position: absolute;
            right: -13rem;
            width: 10rem;
            border-top: 0.78rem #ffffff solid;
            top: 50%;
            transform: translateY(-50%);
          }
          img {
          }
        }
        p {
          font-size: 2.5rem;
          color: #fff;
        }
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .shopprocess {
    margin-top: 6rem;
    background: #171414;
    .processtop {
      display: flex;
      justify-content: center;
      .process {
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        width: 100%;

        .process1 {
          text-align: center;
          overflow: hidden;
          width: 100%;
          .radiosimg {
            margin: 0 auto;
            width: 120px;
            height: 120px;
            display: flex;
            padding: 2rem;
            background: #ffffff;
            border-radius: 50%;
            margin-bottom: 3rem;
            position: relative;
            white-space: nowrap;
            &::before {
              display: flex;
              content: "";
              position: absolute;
              right: 10rem;
              width: 10rem;
              border-top: 0rem #ffffff solid;
              top: 50%;
              transform: translateY(-50%);
            }
            &::after {
              display: flex;
              content: "";
              position: absolute;
              right: -13rem;
              width: 10rem;
              border-top: 0rem #ffffff solid;
              top: 50%;
              transform: translateY(-50%);
            }
            img {
            }
          }
          p {
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
}
</style>
