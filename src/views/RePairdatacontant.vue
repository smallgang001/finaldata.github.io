<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="repairbody">
    <div class="retop">
      <Repairimg></Repairimg>
    </div>
    <div class="aa"><div class="online"></div></div>
    <div class="recontant">
      <div class="contant">
        <div class="p1">
          <p style="color: #ffffff">
            保固到期日:
            <span style="color: #fe2424"
              >您的保固日期:{{ textnums.ndata }}</span
            >
          </p>
        </div>
        >
        <div class="p2">
          <p style="color: #ffffff">請輸入電話:</p>
          <input
            placeholder="請輸入電話"
            :class="
              phonecolor == false ? 'form-control' : 'form-control is-invalid'
            "
            v-model="Notice.phone"
            oninput="value=value.replace(/[^0-9.]/g,'')"
            type="text"
          />
        </div>
        <div class="p3">
          <p style="color: #ffffff">請輸入信箱:</p>
          <input
            :class="
              emailtrue == true ? 'form-control' : 'form-control is-invalid'
            "
            v-model="Notice.email"
            type="email"
            placeholder="請輸入Email"
          />
        </div>
        <div class="p4">
          <p style="color: #ffffff">請輸入問題:</p>
          <textarea
            v-model="Notice.message"
            cols="30"
            rows="25"
            placeholder="請輸入問題(30字內)"
            maxlength="30"
          ></textarea>
        </div>
        <button @click="order(Notice)" class="grow_ellipse" type="button">
          回報送出
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.repairbody {
  width: 100%;
  .aa {
    margin-bottom: 2rem;
    margin-left: 11rem;
    .online {
      overflow: hidden;
      width: 90%;
      border-bottom: 4px white solid;
    }
  }
  .recontant {
    width: 100%;
    background: #3a3a3a;
    .contant {
      width: 100%;
      text-align: center;
      .p1 {
        width: 90%;
        padding-top: 3.5rem;
        padding-bottom: 2rem;
        font-size: 2rem;
        p {
        }
      }
      .p2 {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;

        p {
          font-size: 2rem;
        }
        input {
          width: 30%;
          min-width: 220px;
        }
      }
      .p3 {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;

        p {
          font-size: 2rem;
        }
        input {
          width: 30%;
          min-width: 220px;
        }
      }
      .p4 {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 3rem;
        p {
          font-size: 2rem;
        }
        textarea {
          width: 30%;
          min-width: 220px;
        }
      }
      button {
        margin-bottom: 5rem;
        margin-left: 9rem;
        padding: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        background: #595656;
        color: #ffffff;
        font-size: 1.8rem;
        border: #595656 solid;
        border: 1px solid #595656;
        position: relative;
        z-index: 1;
        overflow: hidden;
      }
      button:hover {
        color: #595656;
      }
      button::after {
        content: "";
        background: #ecf0f1;
        position: absolute;
        z-index: -1;
        padding: 0.85em 0.75em;
        display: block;
      }
      button[class^="grow"]::after {
        transition: all 0.3s ease;
      }
      button[class^="grow"]:hover::after {
        transition: all 0.3s ease-out;
      }
      button.grow_box::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transform: scale(0, 0);
      }
      button.grow_box:hover::after {
        transform: scale(1, 1);
      }
      button.grow_ellipse::after {
        border-radius: 50%;
        left: -50%;
        right: -50%;
        top: -150%;
        bottom: -150%;
        line-height: 8.34em;
        transform: scale(0, 0);
      }
      button.grow_ellipse:hover::after {
        transform: scale(1, 1);
      }
    }
  }
  .bb {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    margin-left: 11rem;
    .underline {
      overflow: hidden;
      width: 90%;
      border-bottom: 4px white solid;
    }
  }
}
@media screen and(max-width: 720px) {
  .repairbody {
    width: 100%;
    .aa {
      margin-bottom: 2rem;
      margin-left: 2rem;
      .online {
        overflow: hidden;
        width: 90%;
        border-bottom: 4px white solid;
      }
    }
    .recontant {
      width: 100%;
      background: #3a3a3a;
      .contant {
        width: 100%;
        text-align: center;
        margin-bottom: 5rem;
        .p1 {
          width: 100%;
          padding-top: 5.5rem;
          padding-bottom: 2rem;
          font-size: 0.8rem;
          letter-spacing: 0.2rem;
          p {
          }
        }
        .p2 {
          align-items: center;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          p {
            margin-left: 1rem;
            font-size: 0.8rem;
            letter-spacing: 0.2rem;
          }
          input {
            width: 60%;
          }
        }
        .p3 {
          align-items: center;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;

          p {
            margin-left: 1rem;
            font-size: 0.8rem;
            letter-spacing: 0.2rem;
          }
          input {
            width: 60%;
          }
        }
        .p4 {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding-bottom: 3rem;
          p {
            letter-spacing: 0.2rem;
            font-size: 0.8rem;
            margin-left: 1rem;
          }
          textarea {
            width: 60%;
            height: 30vh;
          }
        }
        button {
          margin-bottom: 5rem;
          margin-left: 5rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2rem;
          background: #595656;
          color: #ffffff;
          font-size: 1.8rem;
          border: #595656 solid;
          border: 1px solid #595656;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        button:hover {
          color: #595656;
        }
        button::after {
          content: "";
          background: #ecf0f1;
          position: absolute;
          z-index: -1;
          padding: 0.85em 0.75em;
          display: block;
        }
        button[class^="grow"]::after {
          transition: all 0.3s ease;
        }
        button[class^="grow"]:hover::after {
          transition: all 0.3s ease-out;
        }
        button.grow_box::after {
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          transform: scale(0, 0);
        }
        button.grow_box:hover::after {
          transform: scale(1, 1);
        }
        button.grow_ellipse::after {
          border-radius: 50%;
          left: -50%;
          right: -50%;
          top: -150%;
          bottom: -150%;
          line-height: 8.34em;
          transform: scale(0, 0);
        }
        button.grow_ellipse:hover::after {
          transform: scale(1, 1);
        }
      }
    }
    .bb {
      margin-top: 1.5rem;
      margin-bottom: 3rem;
      margin-left: 11rem;
      .underline {
        overflow: hidden;
        width: 90%;
        border-bottom: 4px white solid;
      }
    }
  }
}
</style>

<script>
import Repairimg from "../components/RePairimg.vue";
export default {
  data() {
    return {
      Notice: {
        name: "",
        phone: "",
        email: "",
        address: "",
        orderdata: "",
        gindo: "審核中",
      },
      Load: false,
      orderId: "",

      login: {
        username: "s16113161@stu.edu.tw",
        password: "aytjjos123",
      },
      textnum: {},
      textnums: {},
      yen: true,

      phonecolor: false,
      emailtrue: true,
    };
  },
  components: {
    Repairimg,
  },
  inject: ["EmiTter"],
  watch: {
    Notice: {
      handler() {
        const phone = /^(09)\S{8}$/;
        if (!phone.test(this.Notice.phone)) {
          this.phonecolor = true;
        } else {
          this.phonecolor = false;
        }
        if (this.Notice.phone == "") {
          this.phonecolor = false;
        }
        const email = /^\S+[@]{1}\S+[.]{1}[c]{1}[o]{1}[m]{1}$/;
        if (!email.test(this.Notice.email)) {
          this.emailtrue = false;
        } else {
          this.emailtrue = true;
        }
        if (this.Notice.email == "") {
          this.emailtrue = true;
        }
      },
      deep: true,
    },
  },
  created() {
    this.gg();
  },
  methods: {
    gg() {
      this.orderId = this.$route.params.orderId;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          this.textnum = e.data.order;
          this.textnums = e.data.order.user;
        }
      });
    },
    order(y) {
      this.Load = true;
      if (
        y.phone == "" ||
        y.email == "" ||
        y.message == "" ||
        this.phonecolor == true ||
        this.emailtrue == false
      ) {
        alert("請輸入詳細資料");
        this.Load = false;
      } else {
        const ApIloojim = `${process.env.VUE_APP_API}admin/signin`;
        this.axios.post(ApIloojim, this.login).then((e) => {
          if (e.data.success) {
            const token = document.cookie.replace(
              /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            );
            this.$http.defaults.headers.common["Authorization"] = token;
            const HuoApIloojim = `${process.env.VUE_APP_API}api/user/check`;
            this.$http.post(HuoApIloojim).then((x) => {
              x;
              const date = new Date();
              const year = date.getFullYear();
              const moon = date.getMonth() + 1;
              const day = date.getDate();
              year, "-", moon, "-", day;
              date.setDate(date.getDate());
              y.orderdata = date.toISOString().split("T")[0];
              this.textnum.user.nphone = y.phone;
              this.textnum.user.nmessage = y.message;
              this.textnum.user.nemail = y.email;
              this.textnum.user.ordergindo = y.gindo;
              this.textnum.user.orderdata = y.orderdata;
              const ApIloojims = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.orderId}`;
              this.$http.put(ApIloojims, { data: this.textnum }).then((e) => {
                e;
                const ApIloojimout = `${process.env.VUE_APP_API}logout`;
                this.axios.post(ApIloojimout, this.login).then(() => {
                  this.Load = false;
                  this.$router.push(`/RePairdata/RePairsure/${this.orderId}`);
                });
              });
            });
          }
        });
      }
    },
  },
};
</script>
