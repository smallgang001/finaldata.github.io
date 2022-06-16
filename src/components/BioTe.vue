<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="navbg">
    <div>
      <nav class="navbars">
        <div class="navleft">
          <router-link class="as nav-link" to="/"
            ><img src="../assets/logo1.png" alt=""
          /></router-link>
        </div>
        <div class="navright">
          <ul>
            <li><router-link class="nav-link" to="/">首頁</router-link></li>
            <li>
              <router-link class="nav-link" to="/about">所有商品</router-link>
            </li>
            <div class="sa">
              <li>
                <router-link class="as nav-link" to="/ShopCart"
                  ><img src="../assets/cart.svg" alt=""
                /></router-link>
              </li>
              <router-link class="as nav-link" to="/ShopCart"
                  ><p>購物車</p></router-link>
            </div>
            <div class="sa">
              <li>
                <router-link class="as nav-link" to="/RePair"
                  ><img src="../assets/repair.svg" alt=""
                /></router-link>
              </li>
              <router-link class="as nav-link" to="/RePair"
                  ><p>報修</p></router-link>
            </div>
            <li>
              <a
                v-if="loginstr == true"
                class="nav-link"
                href="#"
                @click.prevent="dan"
                >登出</a
              >
              <a v-else class="nav-link" href="#" @click.prevent="dan">登入</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

  <!-- <div class="navbg">
        <div>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="homeleft">
      <router-link class="as nav-link" to="/"><img src="../assets/logo1.png" width="40" alt=""></router-link>
      </div>
    <div class="homeright">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">所有商品</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ShopCart"><img src="../assets/cart.svg" alt=""> 購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/RePair"><img src="../assets/repair.svg" alt=""> 報修</router-link>
        </li>
        <li class="nav-item">
          <a v-if="loginstr == true"  class="nav-link" href="#"  @click.prevent="dan">登出</a>
          <a v-else class="nav-link" href="#"  @click.prevent="dan">登入</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
    </div>
    </div> -->
</template>

<script>
export default {
  inject: ["EmiTter"],
  data() {
    return {
      Load: false,
      loginstr: true,
    };
  },
  created() {},
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

<style scoped lang="scss">
// .navbg{
//   background: rgba(0, 0, 0, 0);
//     .container-fluid{
//     position: fixed;
//     top:0;
//     display: flex;
//     justify-content: space-between;

//     .homeright{
//       .collapse{
//         .navbar-nav{
//           .nav-item{
//             .nav-link{
//               color: black;
//             }
//           }
//         }
//       }
//     }
//   }
// }

.navbg {
  width: 100%;
  background: rgba(0, 0, 0, 0);
  .navbars {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .navleft{
      .as{
        img{
          width: 100%;
        }
      }
    }
    .navright {
      margin-right: 1rem;
      ul {
        display: flex;
        li {
          
          color: white;
          margin-left: 1.5rem;
          a{
            width: 100%;
          }
        }
        li *:hover{
          color: orangered;
        }
        .sa {
          .as *:hover{
            color: orangered;
          }
          display: flex;
          p {
            color: white;
          }
          
        }
      }
    }
  }
}
</style>