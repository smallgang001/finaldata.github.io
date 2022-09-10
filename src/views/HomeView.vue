<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img style="" src="../assets/1234.jpg" />
        <div class="avs">
          <div class="pp">
            <h5>超越極限</h5>
            <p>
              技嘉GeForce RTX™ 30系列顯示卡
              <br />享終極遊戲體驗
            </p>
          </div>
          <div class="cen">
            <router-link to="/about">
              <button
                class="glow-on-hover"
                style="border: 1px #ed6c24 solid"
                type="button"
              >
                前去購買
              </button></router-link
            >
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img style="" src="../assets/m1.jpg" />
        <div class="avs">
          <div class="pp">
            <h5 style="color: #dd3434">智能超頻</h5>
            <p>
              ROG STRIX Z390 電競系列主機板
              <br /><span>制霸電競 由我主宰</span>
            </p>
          </div>
          <div class="cen">
            <router-link to="/about">
              <button
                class="glow-on-hover"
                style="border: 1px #dd3434 solid"
                type="button"
              >
                前去購買
              </button></router-link
            >
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img style="" src="../assets/3.jpg" class="d-block w-100" />
        <div class="avs">
          <div class="pp">
            <h5 style="color: rgb(57, 255, 113)">炫光同步</h5>
            <p>
              Kingston FURY Beast DDR5 RGB
              <br />嶄新亮相，炫彩燈效全面升級
            </p>
          </div>
          <div class="cen">
            <router-link to="/about"
              ><button
                type="button"
                class="glow-on-hover"
                style="
                  background: rgb(57, 255, 113, 0.6);
                  border: 1px rgb(112, 241, 144, 0.5) solid;
                "
              >
                前去購買
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="car carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="homecont">
    <home></home>
  </div>
</template>

<script>
import carousel from "bootstrap/js/dist/carousel";
import home from "../components/HomeContent.vue";
export default {
  data() {
    return {};
  },
  components: {
    home,
  },
  mounted() {},
  updated() {
    const carousels = new carousel({
      interval: 2000,
      wrap: false,
    });
    carousels;
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.carousel {
  width: 100%;
  margin: 0 auto;
  background: #000;
  height: 100vh;
  margin-bottom: 15rem;
  .carousel-inner {
    width: 100%;
    position: relative;
    .carousel-item {
      width: 100%;
      img {
        height: 100vh;
        width: 100%;
        min-width: 378px;
      }
      .avs {
        min-width: 200px;
        width: 37%;
        position: absolute;
        left: 30%;
        top: 50%;
        background: rgba(0, 0, 0, 0.404);
        border-radius: 20px 20px 20px 20px;
        .pp {
          width: 80%;
          margin: 0 auto;
          h5 {
            padding-top: 5rem;
            text-align: left;
            width: 100%;
            font-size: 2rem;
            color: #ed6c24;
            margin-bottom: 1.5rem;
            word-wrap: break-word;
          }
          p {
            text-align: left;
            width: 100%;
            color: #ffffff;
            margin-bottom: 2.5rem;
            font-size: 2rem;
          }
        }

        .cen {
          text-align: center;
          padding-bottom: 7rem;
          .glow-on-hover {
            width: 220px;
            height: 50px;
            border: none;
            outline: none;
            color: #fff;
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
          }

          .glow-on-hover:before {
            content: "";
            background: linear-gradient(
              45deg,
              #ff0000,
              #ff7300,
              #fffb00,
              #48ff00,
              #00ffd5,
              #002bff,
              #7a00ff,
              #ff00c8,
              #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
          }

          .glow-on-hover:active {
            color: #000;
          }

          .glow-on-hover:active:after {
            background: transparent;
          }

          .glow-on-hover:hover:before {
            opacity: 1;
          }

          .glow-on-hover:after {
            z-index: -1;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(0, 0, 0);
            left: 0;
            top: 0;
            border-radius: 10px;
          }

          @keyframes glowing {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 400% 0;
            }
            100% {
              background-position: 0 0;
            }
          }
        }
      }
    }
  }
}
.homecont {
  background: #000;
  margin-top: 0.2rem;
  width: 100%;
  .grapcard {
    width: 100%;
    .grapcardimg {
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .carousel {
    width: 100%;
    height: 30vh;
    .carousel-indicators {
      display: none;
    }
    .carousel-inner {
      height: 60vh;
      width: 100%;
      position: relative;
      .carousel-item {
        width: 100%;
        img {
          height: 60vh;
          width: 100%;
          display: block;
        }
        .avs {
          min-width: 200px;
          width: 37%;
          position: absolute;
          left: 25%;
          top: 30%;
          background: rgba(0, 0, 0, 0.404);
          border-radius: 20px 20px 20px 20px;
          .pp {
            width: 80%;
            margin: 0 auto;
            h5 {
              padding-top: 2rem;
              text-align: left;
              width: 100%;
              font-size: 1.2rem;
              color: #ed6c24;
              margin-bottom: 1.5rem;
              word-wrap: break-word;
            }
            p {
              text-align: left;
              width: 100%;
              color: #ffffff;
              margin-bottom: 2.5rem;
              font-size: 1rem;
            }
          }

          .cen {
            text-align: center;
            padding-bottom: 3rem;
            .glow-on-hover {
              width: 120px;
              height: 50px;
              border: none;
              outline: none;
              color: #fff;
              background: #111;
              cursor: pointer;
              position: relative;
              z-index: 0;
              border-radius: 10px;
            }

            .glow-on-hover:before {
              content: "";
              background: linear-gradient(
                45deg,
                #ff0000,
                #ff7300,
                #fffb00,
                #48ff00,
                #00ffd5,
                #002bff,
                #7a00ff,
                #ff00c8,
                #ff0000
              );
              position: absolute;
              top: -2px;
              left: -2px;
              background-size: 400%;
              z-index: -1;
              filter: blur(5px);
              width: calc(100% + 4px);
              height: calc(100% + 4px);
              animation: glowing 20s linear infinite;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
              border-radius: 10px;
            }

            .glow-on-hover:active {
              color: #000;
            }

            .glow-on-hover:active:after {
              background: transparent;
            }

            .glow-on-hover:hover:before {
              opacity: 1;
            }

            .glow-on-hover:after {
              z-index: -1;
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              background: rgb(0, 0, 0);
              left: 0;
              top: 0;
              border-radius: 10px;
            }

            @keyframes glowing {
              0% {
                background-position: 0 0;
              }
              50% {
                background-position: 400% 0;
              }
              100% {
                background-position: 0 0;
              }
            }
          }
        }
      }
    }
    .carousel-control-prev {
      height: 60vh;
    }
    .carousel-control-next {
      height: 60vh;
    }
  }
}
</style>
