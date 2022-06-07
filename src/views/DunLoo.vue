<template>
  <LoadIng :active="login.Load"></LoadIng>
  <div class="header">
  </div>
  <div class="container">
    <form @submit.prevent="ss">
      <div class="logina">
        <label for="aa" class="p1">登入帳號:</label>
        <input
          id="aa"
          v-model="login.username"
          class="loginuser"
          type="email"
          placeholder="輸入帳號"
        />
      </div>
      <div class="loginb">
        <label class="p2" for="bb">登入密碼:</label>
        <input
          id="bb"
          v-model="login.password"
          class="loginpasswd"
          type="password"
          placeholder="輸入密碼"
        />
      </div>
      <div class="loginc">
        <button class="btn btn-primary">登入</button>
      </div>
    </form>
  </div>
  <div class="footer"></div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
        Load: false,
      },
    };
  },
  inject: ["EmiTter"],
  methods: {
    ss() {
      this.login.Load = true;
      const ApIloojim = `${process.env.VUE_APP_API}admin/signin`;
      this.axios.post(ApIloojim, this.login).then((e) => {
        this.login.Load = false;
        if (e.data.success) {
          const { token, expired } = e.data;
          document.cookie = `hihi=${token}; expires=${new Date(expired)}`;
          this.$router.push("/DunLoohuo/DunLooNeLong");
              this.EmiTter.emit("mess", {
                style: "rgb(6, 173, 202)",
                title: "登入成功",
                content: "以登入",
    });
          
        } else if (!e.data.success) {  
          this.login.username = "";
          this.login.password = "";
          this.EmiTter.emit("mess", {
            style: "rgb(255, 73, 73)",
            title: "登入失敗",
            content: "帳號或密碼錯誤",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
  h1 {
    font-size: 5rem;
    color: aqua;
  }
}
.container {
  width: 100%;
  .logina {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    margin-right: 5rem;
    .p1 {
      color: rgb(65, 8, 119);
      font-size: 1.5rem;
      padding-right: 2rem;
    }
    .loginuser {
      outline-color: rgb(228, 15, 210);
      padding-right: 2.5rem;
    }
  }
  .loginb {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    margin-right: 5rem;
    .p2 {
      color: rgb(65, 8, 119);
      font-size: 1.5rem;
      padding-right: 2rem;
    }
    .loginpasswd {
      outline-color: rgb(228, 15, 210);
      padding-right: 2.5rem;
    }
  }
  .loginc {
    display: flex;
    justify-content: center;
    button {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }
}
</style>