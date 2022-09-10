<template>
  <div class="footer">
    <div class="mar90">
      <div class="footerleft">
        <div class="top">
          <p>聯絡我們</p>
        </div>
        <div class="mil">
          <p>.</p>
        </div>
        <div class="under">
          <P>電話: 0916331375</P>
          <p>地址: 高雄市仁武區文教街26號</p>
          <p>E-mail: a09163313753@gmai.com</p>
        </div>
      </div>
      <div class="middle">
        <div class="middledf">
          <p>Copyright © Pinpin 2022 | 僅個人作品，無商業用途</p>
          <img class="img" width="30%" src="../assets/pngwing.svg" alt="" />
        </div>
      </div>
      <div class="footerright">
        <div class="rightflex">
          <button class="bts" @click.prevent="dan" type="button">
            後台管理登入
          </button>
          <p class="p1">
            © Computer components website<br />by Ging-Wen，Huang
          </p>
          <div class="community">
            <a href="https://twitter.com/a09163313753"
              ><img src="../assets/twitter1.svg" alt=""
            /></a>
            <a href="https://github.com/smallgang001/finaldata.github.io"
              ><img src="../assets/github1.svg" alt=""
            /></a>
            <a href="https://www.instagram.com/lookmyeyes666/"
              ><img src="../assets/instagram2.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["EmiTter"],
  data() {
    return {
      Load: false,
      loginstr: true,
      top: false,
      url: "",
    };
  },
  methods: {
    dan() {
      this.Load = true;
      const ApIloojim = `${process.env.VUE_APP_API}logout`;
      this.axios.post(ApIloojim, this.login).then(() => {
        this.loginstr = false;
        this.Load = false;
        this.$router.push("/DunLoo");
        this.EmiTter.emit("mess", {
          style: "rgb(255, 73, 73)",
          title: "已登出",
          content: "已登出帳戶",
        });
      });
    },
  },
};
</script>

<style lang="scss">
.footer {
  background: #000000;
  .mar90 {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .footerleft {
      margin-top: 2rem;
      .top {
        width: 40%;
        border-bottom: 1px #ffffff solid;
        p {
          font-size: 2rem;
          color: #ffffff;
          word-wrap: break-word;
        }
      }
      .mil {
        width: 40%;
        margin-top: 0.2rem;
        border-top: 1px #ffffff solid;
      }
      .under {
        p {
          margin-top: 2rem;
          color: #ffffff;
          font-size: 1.5rem;
          word-wrap: break-word;
        }
      }
    }
    .middle {
      .middledf {
        margin-top: 2rem;
        text-align: center;
        p {
          text-align: center;
          border: 1px white solid;
          padding: 2rem;
          padding-left: 4rem;
          padding-right: 4rem;
          color: #ffffff;
        }
        img {
          margin-top: 2rem;
        }
      }
    }
    .footerright {
      margin-top: 2rem;
      .rightflex {
        text-align: right;
        .bts {
          margin-right: 2.5rem;
          font-size: 1.5rem;
          color: #ffffff;
          background: #252323;
          border: 1px white solid;
          padding: 0.5rem;
          margin-bottom: 3rem;
        }
        p {
          text-align: left;
          margin-top: 2rem;
          color: #ffffff;
          font-size: 1.3rem;
        }
        .community {
          margin-right: 2rem;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          a {
            margin-left: 2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .footer {
    .mar90 {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .footerleft {
        text-align: center;
        margin-top: 0rem;
        .top {
          margin: 0 auto;
          width: 40%;
          border-bottom: 1px #ffffff solid;
          p {
            font-size: 2rem;
            color: #ffffff;
            word-wrap: break-word;
          }
        }
        .mil {
          margin: 0 auto;
          width: 40%;
          margin-top: 0.2rem;
          border-top: 1px #ffffff solid;
        }
        .under {
          p {
            margin-top: 2rem;
            color: #ffffff;
            font-size: 1.5rem;
            word-wrap: break-word;
          }
        }
      }
      .middle {
        .middledf {
          margin-top: 2rem;
          .top {
            text-align: center;
          }
          p {
            text-align: center;
            border: 1px white solid;
            padding: 1rem;
            padding-left: 4rem;
            padding-right: 4rem;
            color: #ffffff;
          }
          img {
            margin-top: 2rem;
          }
        }
      }
      .footerright {
        margin-top: 2rem;
        .rightflex {
          text-align: right;
          .bts {
            margin: 0 auto;
            margin-right: 3rem;
            font-size: 1.5rem;
            color: #ffffff;
            background: #252323;
            border: 1px white solid;
            margin-bottom: 1rem;
          }

          p {
            text-align: center;
            margin-top: 2rem;
            color: #ffffff;
            font-size: 1.3rem;
          }
          .p1 {
            padding-left: 2rem;
          }
          .community {
            margin-left: 2rem;
            margin-right: 2rem;
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            a {
              margin-left: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
