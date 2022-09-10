<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="navbg">
    <div>
      <nav class="navbars">
        <div class="navleft">
          <router-link class="as nav-link" to="/"
            ><img src="../assets/pngwing.svg" alt=""
          /></router-link>
        </div>
        <div class="navright">
          <ul>
            <li v-if="this.$route.path == '/'">
              <router-link class="nav-link colortoggle" to="/"
                >首頁</router-link
              >
            </li>
            <li v-else>
              <router-link class="nav-link" @click="ab(1)" to="/"
                >首頁</router-link
              >
            </li>
            <li v-if="this.$route.path == '/about'">
              <router-link class="nav-link colortoggle" to="/about"
                >所有商品</router-link
              >
            </li>
            <li v-else>
              <router-link class="nav-link" @click="ab(2)" to="/about"
                ><p>所有商品</p></router-link
              >
            </li>
            <li v-if="this.$route.path == '/ShopCart'">
              <router-link class="nav-link colortoggle" to="/ShopCart"
                >購物車</router-link
              >
            </li>
            <li v-else>
              <router-link class="nav-link" @click="ab(3)" to="/ShopCart"
                ><p>購物車</p></router-link
              >
            </li>
            <li v-if="this.$route.path == '/RePair'">
              <router-link class="nav-link colortoggle" to="/RePair"
                >報修</router-link
              >
            </li>
            <li v-else>
              <router-link class="nav-link" @click="ab(4)" to="/RePair"
                ><p>報修</p></router-link
              >
            </li>
          </ul>
        </div>
        <div class="menus">
          <ul>
            <li @click="as">
              <router-link class="nav-link" to="/" @click="home"
                >首頁</router-link
              >
            </li>
            <li @click="as">
              <router-link class="nav-link" to="/about"
                ><p>所有商品</p></router-link
              >
            </li>
            <li @click="as">
              <router-link class="nav-link" to="/ShopCart"
                ><p>購物車</p></router-link
              >
            </li>

            <li @click="as">
              <router-link class="nav-link" to="/RePair"
                ><p>報修</p></router-link
              >
            </li>
          </ul>
          <img @click="as" src="../assets/justif.svg" alt="" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Load: false,
      loginstr: true,
      top: false,
      url: "",
    };
  },
  mounted() {},

  methods: {
    as() {
      const a = document.querySelector(".menus");
      a.classList.toggle("color");
    },
    ab(a) {
      const b = document.querySelectorAll(".nav-link");
      b[a].classList.toggle("colortoggle");
    },
  },
};
</script>

<style scoped lang="scss">
.navbg {
  background: rgba(0, 0, 0, 0.452);
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
  .navbars {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .navleft {
      border: none;
      .as {
        img {
          width: 30%;
        }
      }
    }
    .navright {
      display: flex;
      justify-content: center;
      ul {
        display: flex;
        align-items: center;
        li {
          color: white;
          margin-left: 1.5rem;
          a {
            width: 100%;
          }
        }
        li *:focus {
          color: orangered;
          border-bottom: 4px solid orangered;
        }
        .sa {
          align-items: center;

          display: flex;
          p {
            color: white;
          }
        }
        .sa *:focus {
          color: orangered;
          border-bottom: 4px solid orangered;
        }
      }
    }
    .colortoggle {
      color: orangered;
      border-bottom: 4px solid orangered;
    }
    .menus {
      display: none;
    }
  }
}
@media screen and (max-width: 720px) {
  .navbg {
    background: rgba(0, 0, 0, 0.452);
    z-index: 2;
    width: 100%;
    position: fixed;
    top: 0;
    .navbars {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      .navleft {
        padding: 0rem;
        .as {
          img {
            width: 30%;
            margin: 0 auto;
          }
        }
      }
      .navright {
        display: none;
      }
      @keyframes aaa {
        0% {
          right: -50px;
          top: -220px;
        }
        50% {
          right: -10px;
          top: -220px;
        }
        100% {
          right: 00px;
          top: 0px;
        }
      }

      .menus {
        display: block;
        justify-content: space-between;
        padding: 1rem;
        img {
          width: 60%;
        }
        ul {
          display: none;
        }
      }
      .color {
        right: 0px;
        top: 0px;
        animation-name: aaa;
        animation-duration: 3s;
        position: absolute;
        background: rgba(0, 0, 0, 0.452);
        width: 40%;
        img {
          width: 30%;
          display: block;
          margin: 0 auto;
        }
        ul {
          display: block;
          li {
            text-align: center;
            color: white;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
}
</style>
