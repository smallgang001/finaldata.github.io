<template>
  <div class="finalbody">
    <div class="finaltop">
      <Shopone></Shopone>
    </div>
    <div class="finalbtn">
      <div class="finallogo">
        <img src="../assets/check-circle1.svg" alt="" />
        <p>購買完成</p>
      </div>
      <div class="finalcontant1">
        <div class="contant1left">
          <div class="width80">
            <div class="thank">
              <p class="p1">❧</p>
              <p class="lines">非常感謝您的購買</p>
              <p class="p1">❧</p>
            </div>
            <img src="../assets/thanks.png" alt="" />
          </div>
        </div>
        <div class="contant1right">
          <h1>訂單資料</h1>
          <div class="line"></div>
          <PersonalData ref="perdata"></PersonalData>
        </div>
      </div>
      <div class="finalcontant2">
        <div class="contant2left">
          <div class="recommend"><p>精選商品!</p></div>
          <div class="commend">
            <router-link to="/about"
              ><img src="../assets/shopc1.png" alt=""
            /></router-link>
            <router-link to="/about"
              ><img src="../assets/31.jpg" alt=""
            /></router-link>
            <router-link to="/about"
              ><img src="../assets/51.jpg" alt=""
            /></router-link>
          </div>
        </div>
        <div class="contant2right">
          <div class="gobuy">
            <div class="btnleft">
              <button @click="sc" type="button">
                <img src="../assets/chevron-left.svg" alt="" />
                <p>繼續逛逛</p>
              </button>
            </div>
            <div class="btnright">
              <router-link to="/"
                ><button @click="surebuy" class="shape-ex3" type="button">
                  <p>購買完成</p>
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopone from "../components/ShoppingOne.vue";
import PersonalData from "../components/PersonalData.vue";
export default {
  data() {
    return {
      user: {},
      aa: "",
    };
  },
  components: {
    Shopone,
    PersonalData,
  },
  methods: {
    sc() {
      this.$router.push({
        path: `/about`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.finalbody {
  width: 90%;
  margin: 0 auto;
  background: #171414;
  padding-bottom: 5rem;
  margin-bottom: 2rem;
  .finaltop {
    margin-bottom: 5rem;
  }
  .finalbtn {
    width: 80%;
    margin: 0 auto;
    background: #ffffff;
    min-width: 350px;
    .finallogo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;
      padding-bottom: 5rem;
      img {
        width: 4%;
      }
      p {
        font-size: 2.2rem;
        color: #0f5f38;
        font-weight: bold;
      }
    }
    .finalcontant1 {
      display: flex;
      flex-wrap: wrap;
      .contant1left {
        width: 60%;
        .width80 {
          width: 70%;
          margin: 0 auto;
          .thank {
            width: 100%;
            display: flex;
            min-width: 310px;
            .lines {
              width: 70%;
              margin: 0 auto;
              display: inline;
              position: relative;
              white-space: nowrap;
              text-align: center;
              font-size: 1.6rem;
              color: #0f5f38;
              &::before {
                display: flex;
                content: "";
                position: absolute;
                left: -3rem;
                width: 9rem;
                border-top: 0.18rem #054e15 solid;
                top: 50%;
                transform: translateY(-50%);
              }
              &::after {
                display: flex;
                content: "";
                position: absolute;
                right: -3rem;
                width: 9rem;
                border-top: 0.18rem #054e15 solid;
                top: 50%;
                transform: translateY(-50%);
              }
            }
            .p1 {
              font-size: 1.6rem;
              text-align: center;
              color: #0f5f38;
            }
          }
          img {
            padding-top: 2rem;
            width: 95%;
            margin: 0 auto;
            min-width: 300px;
          }
        }
      }
      .contant1right {
        min-width: 300px;
        width: 40%;
        margin-top: 3rem;
        h1 {
          width: 80%;
          margin: 0 auto;
          font-size: 1.2rem;
          font-weight: bold;
          border-left: 4px #054e15 solid;
          padding-left: 0.5rem;
          color: #0f5f38;
          margin-bottom: 1.4rem;
        }
        .line {
          width: 90%;
          margin: 0 auto;
          border-top: 2px #0f5f38 solid;
        }
      }
    }
    .finalcontant2 {
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      margin: 0 auto;
      .contant2left {
        width: 60%;
        min-width: 300px;
        .recommend {
          margin-top: 2rem;
          margin-bottom: 2rem;
          p {
            font-size: 1.2rem;
            font-weight: bold;
            border-left: 4px #054e15 solid;
            padding-left: 0.5rem;
            color: #0f5f38;
          }
        }
        .commend {
          width: 100%;
          img {
            width: 20%;
            border: 0.01rem #dfdfdf solid;
          }
        }
      }
      .contant2right {
        width: 40%;
        .gobuy {
          margin-top: 5.7rem;
          display: flex;
          justify-content: center;
          padding-bottom: 5rem;
          .btnleft {
            button {
              margin-right: 1.2rem;
              display: flex;
              align-items: center;
              background: #ffffff;
              color: #0f5f38;
              border: 1px #ffffff solid;
              font-weight: bold;
              padding: 0.5rem;
              padding-right: 1rem;
              padding-left: 1rem;
              p {
                font-size: 1.2rem;
              }
            }
          }
          .btnright {
            .shape-ex3 {
              padding-left: 1.2rem;
              padding-right: 1.2rem;
              margin-left: 1rem;
              background: #0f5f38;
              color: #ffffff;
              border: 1px #0f5f38 solid;
              cursor: pointer;
              line-height: 40px;
              color: rgb(255, 255, 255);
              background-color: #0f5f38;
              border: 1px solid #000;
              position: relative;
              transition: all 0.3s linear;
              p {
                font-size: 1.1rem;
                font-weight: bold;
              }
            }
            .shape-ex3 > p {
              position: relative;
              z-index: 1;
            }
            .shape-ex3::before {
              content: "";
              width: 0%;
              height: 100%;
              display: block;
              background-color: #ffffff;
              position: absolute;
              top: 0;
              left: 0;
              transition: all 0.3s ease;
            }
            .shape-ex3:hover {
              color: #0f5f38;
            }
            .shape-ex3:hover::before {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .finalbody {
    width: 90%;
    margin: 0 auto;
    background: #171414;
    padding-bottom: 5rem;
    margin-bottom: 2rem;
    .finaltop {
      margin-bottom: 5rem;
    }
    .finalbtn {
      width: 80%;
      margin: 0 auto;
      background: #ffffff;
      min-width: 350px;
      .finallogo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
        padding-bottom: 5rem;
        img {
          width: 4%;
        }
        p {
          font-size: 2.2rem;
          color: #0f5f38;
          font-weight: bold;
        }
      }
      .finalcontant1 {
        display: flex;
        flex-wrap: wrap;
        .contant1left {
          width: 60%;
          .width80 {
            width: 70%;
            margin: 0 auto;
            .thank {
              width: 100%;
              display: flex;
              min-width: 310px;
              .lines {
                width: 70%;
                margin: 0 auto;
                display: inline;
                position: relative;
                white-space: nowrap;
                text-align: center;
                font-size: 1.6rem;
                color: #0f5f38;
                &::before {
                  display: flex;
                  content: "";
                  position: absolute;
                  left: 0rem;
                  width: 0rem;
                  border-top: 0.18rem #054e15 solid;
                  top: 0%;
                  transform: translateY(-50%);
                }
                &::after {
                  display: flex;
                  content: "";
                  position: absolute;
                  right: 0;
                  width: 0rem;
                  border-top: 0.18rem #054e15 solid;
                  top: 00%;
                  transform: translateY(-50%);
                }
              }
              .p1 {
                font-size: 1.6rem;
                text-align: center;
                color: #0f5f38;
              }
            }
            img {
              padding-top: 2rem;
              width: 95%;
              margin: 0 auto;
              min-width: 300px;
            }
          }
        }
        .contant1right {
          text-align: center;
          min-width: 320px;
          width: 40%;
          margin-top: 3rem;
          h1 {
            width: 80%;
            margin: 0 auto;
            font-size: 2rem;
            font-weight: bold;
            border-left: 0px #054e15 solid;
            padding-left: 0.5rem;
            color: #0f5f38;
            margin-bottom: 1rem;
          }
          .line {
            width: 43%;
            margin: 0 auto;
            border-top: 4px #0f5f38 solid;
          }
          .personals {
            margin-top: 2rem;
            text-align: left;
            margin-left: 2rem;
          }
        }
      }
      .finalcontant2 {
        display: flex;
        width: 100%;
        margin: 0 auto;
        .contant2left {
          width: 100%;
          .recommend {
            margin-top: 2rem;
            margin-bottom: 2rem;
            p {
              text-align: center;
              font-size: 1.2rem;
              font-weight: bold;
              border-left: 0px #054e15 solid;
              color: #0f5f38;
              margin-right: 2rem;
            }
          }
          .commend {
            width: 100%;
            text-align: center;
            img {
              width: 25%;
              border: 0.01rem #dfdfdf solid;
            }
          }
        }
        .contant2right {
          width: 100%;
          .gobuy {
            margin-top: 5.7rem;
            display: flex;
            justify-content: center;
            padding-bottom: 5rem;
            .btnleft {
              button {
                margin-right: 1.2rem;
                display: flex;
                align-items: center;
                background: #ffffff;
                color: #0f5f38;
                border: 1px #ffffff solid;
                font-weight: bold;
                padding: 0.5rem;
                padding-right: 1rem;
                padding-left: 1rem;
                p {
                  font-size: 1.2rem;
                }
              }
            }
            .btnright {
              .shape-ex3 {
                padding-left: 1.2rem;
                padding-right: 1.2rem;
                margin-left: 1rem;
                background: #0f5f38;
                color: #ffffff;
                border: 1px #0f5f38 solid;
                cursor: pointer;
                line-height: 40px;
                color: rgb(255, 255, 255);
                background-color: #0f5f38;
                border: 1px solid #000;
                position: relative;
                transition: all 0.3s linear;
                p {
                  font-size: 1.1rem;
                  font-weight: bold;
                }
              }
              .shape-ex3 > p {
                position: relative;
                z-index: 1;
              }
              .shape-ex3::before {
                content: "";
                width: 0%;
                height: 100%;
                display: block;
                background-color: #ffffff;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 0.3s ease;
              }
              .shape-ex3:hover {
                color: #0f5f38;
              }
              .shape-ex3:hover::before {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
