<template>
<LoadIng :active="Load"></LoadIng>
    <div>
        <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="nav-link" to="/">Vue</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Vue的首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Vue的about</router-link>
        </li>
        <li class="nav-item">
          <a v-if="loginstr == true"  class="nav-link" href="#"  @click.prevent="dan">登出</a>
          <a v-else class="nav-link" href="#"  @click.prevent="dan">登入</a>
        </li>
        <li>
          <router-link class="nav-link" to="/DunLoohuo/DunLooNeLong">產品介面</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
</template>

<script>
export default {
  inject:['EmiTter'],
  data() {
    return {
      Load: false,
      loginstr: true,
    }
  },
  created() {
  },
     methods: {
       dan(){
            this.Load = true;
            const ApIloojim =  `${process.env.VUE_APP_API}logout`
            this.axios.post(ApIloojim , this.login)
            .then(()=>{
              this.loginstr = false
              this.Load = false;
                this.$router.push('/DunLoo');
                this.EmiTter.emit("mess", {
                style: "rgb(255, 73, 73)",
                title: "已登出",
                content: "已登出帳戶",
              });
          });
       },
    },
}
</script>