<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="Shopbody">
    <div class="top">
      <Shopone></Shopone>
    </div>
    <div class="under">
      <div class="underwhite">
        <div class="whiteleft">
          <div class="leftw">
            <h1>訂單資訊:</h1>
            <div class="names">
              <div class="namep">
                <p style="color: #ff0000">*</p>
                <span>收件人:</span>
              </div>
              <input
                :class="
                  nameclass == false
                    ? 'form-control'
                    : 'form-control is-invalid'
                "
                v-model="userdata.name"
                type="text"
                placeholder="請輸入姓名"
              />
            </div>

            <div class="emailphone">
              <div class="phone">
                <div>
                  <div class="phonep">
                    <p style="color: #ff0000">*</p>
                    <span>連絡電話:</span>
                  </div>
                  <input
                    placeholder="請輸入電話"
                    :class="
                      phonecolor == false
                        ? 'form-control'
                        : 'form-control is-invalid'
                    "
                    v-model="userdata.phone"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="email">
              <div class="emailp">
                <p style="color: #ff0000">*</p>
                <span>E-mail:</span>
              </div>
              <input
                :class="
                  emailtrue == true ? 'form-control' : 'form-control is-invalid'
                "
                v-model="userdata.email"
                type="email"
                placeholder="請輸入Email"
              />
            </div>
            <div class="address">
              <div class="addressp">
                <p style="color: #ff0000">*</p>
                <span>地址:</span>
              </div>
              <input
                :class="
                  addressclass == true
                    ? 'form-control'
                    : 'form-control is-invalid'
                "
                v-model="userdata.address"
                type="text"
                placeholder="請輸入地址"
              />
            </div>
            <div class="pay">
              <div class="payp">
                <p style="color: #ff0000">*</p>
                <span>付款方式:</span>
              </div>
              <select
                v-model="userdata.payWay"
                :class="
                  payclass == true ? 'form-control' : 'form-control is-invalid'
                "
              >
                <option>請選擇付款方式</option>
                <option class="form-control form-control-lg" value="applepay">
                  applepay
                </option>
                <option class="form-control form-control-lg" value="goolepay">
                  goolepay
                </option>
                <option class="form-control form-control-lg" value="信用卡">
                  信用卡
                </option>
                <option class="form-control form-control-lg" value="ATM轉帳">
                  ATM轉帳
                </option>
              </select>
            </div>
            <div class="message">
              <p>留言:</p>
              <textarea
                v-model="userdata.message"
                class="textarea"
                name=""
                id=""
                cols="39"
                rows="20"
                maxlength="50"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="whiteright">
          <div class="righttop">
            <Shopdata ref="cart"> </Shopdata>
          </div>
          <div class="rightbtn">
            <h1>優惠券: 輸入codetext99享49折</h1>
            <div class="self">
              <input
                type="text"
                v-model="coupons"
                placeholder="輸入優惠券折扣"
              />
              <button @click="coupon(coupons)" type="button">套用</button>
            </div>
            <div class="gobuy">
              <div class="btnleft">
                <button @click="ao" type="button">
                  <img src="../assets/chevron-left.svg" alt="" />
                  <p>回上一頁</p>
                </button>
              </div>
              <div class="btnright">
                <button class="b2 shape-ex3" type="button" @click="step3">
                  <p>建立訂單</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopone from "../components/ShoppingOne.vue";
import Shopdata from "../components/ShopData.vue";
export default {
  data() {
    return {
      userdata: {
        name: "",
        phone: "",
        email: "",
        address: "",
        payWay: "請選擇付款方式",
        message: "",
        nphone: "",
        nemail: "",
        ndata: "",
        ngindo: "",
        nmessage: "",
        buydata: "",
        orderdata: "",
        ordertime: "",
        ordergindo: "",
      },
      buyuserdata: {},
      presets: false,
      id: "",
      url: "",
      coupons: "",

      phonecolor: false,
      emailtrue: true,
      nameclass: false,
      addressclass: true,
      payclass: true,
      Load: false,
    };
  },
  components: {
    Shopone,
    Shopdata,
  },
  created() {},
  watch: {
    userdata: {
      handler() {
        const names = /^\S+\S$/;
        if (!names.test(this.userdata.name)) {
          this.nameclass = true;
        } else {
          this.nameclass = false;
        }
        if (this.userdata.name == "") {
          this.nameclass = false;
        }
        const phone = /^(09)\S{8}$/;
        if (!phone.test(this.userdata.phone)) {
          this.phonecolor = true;
        } else {
          this.phonecolor = false;
        }
        if (this.userdata.phone == "") {
          this.phonecolor = false;
        }
        const email = /^\S+[@]{1}\S+[.]{1}[c]{1}[o]{1}[m]{1}$/;
        if (!email.test(this.userdata.email)) {
          this.emailtrue = false;
        } else {
          this.emailtrue = true;
        }
        if (this.userdata.email == "") {
          this.emailtrue = true;
        }
        const addresss = /^\S+\S$/;
        if (!addresss.test(this.userdata.address)) {
          this.addressclass = false;
        } else {
          this.addressclass = true;
        }
        if (this.userdata.address == "") {
          this.addressclass = true;
        }
        if (this.userdata.payWay == "請選擇付款方式") {
          this.payclass = false;
        } else {
          this.payclass = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    step3() {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          if (
            e.data.data.carts == "" ||
            this.userdata.user == "" ||
            this.userdata.phone == "" ||
            this.userdata.email == "" ||
            this.userdata.address == "" ||
            this.phonecolor == true ||
            this.emailtrue == false ||
            this.userdata.payWay == "請選擇付款方式"
          ) {
            this.presets = true;
            alert("請確認訂單內容");
          } else {
            this.presets = false;
            for (let i = 0; i < e.data.data.carts.length; i++) {
              e.data.data.carts[i].product.unit =
                Number(e.data.data.carts[i].product.unit) -
                e.data.data.carts[i].qty;
            }
            const date = new Date();
            const year = date.getFullYear();
            const moon = date.getMonth() + 1;
            const day = date.getDate();
            year, "-", moon, "-", day;
            date.setDate(date.getDate());
            this.userdata.buydata = date.toISOString().split("T")[0];
            const data365 = new Date();
            const years = date.getFullYear();
            const moons = date.getMonth() + 1;
            const days = date.getDate();
            years, moons, days;
            data365.setDate(date.getDate() + 365);
            this.userdata.ndata = data365.toISOString().split("T")[0];
            this.buyuserdata = Object.assign(
              {},
              this.userdata,
              e.data.data.carts
            );

            const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
            this.axios
              .post(Apiallpage, {
                data: {
                  user: {
                    name: this.buyuserdata.name,
                    email: this.buyuserdata.email,
                    tel: this.buyuserdata.phone,
                    address: this.buyuserdata.address,
                    payway: this.buyuserdata.payWay,
                    nphone: "",
                    nemail: "",
                    nmessage: "",
                    ndata: this.buyuserdata.ndata,
                    ngindo: "",
                    buydata: this.buyuserdata.buydata,
                    orderdata: "",
                    ordertime: "",
                    ordergindo: "",
                  },
                  message: this.buyuserdata.message,
                },
              })
              .then((e) => {
                this.Load = false;
                if (e.data.success) {
                  e.data.total = this.$refs.cart.alltatle;
                  this.id = e.data.orderId;
                  this.$router.push({
                    path: `/ShopView/ShopStep3/${this.id}`,
                  });
                }
              });
          }
        }
      });
    },
    coupon(x) {
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.axios.post(Apiallpage, { data: { code: x } }).then((e) => {
        if (e.data.success) {
          this.$refs.cart.alltatle = Math.round(e.data.data.final_total);
        }
      });
    },
    ao() {
      this.$router.push({
        path: `/ShopCart`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Shopbody {
  margin: 0 auto;
  width: 90%;
  margin-bottom: 2rem;
  .under {
    padding-top: 5rem;
    background: #171414;
    padding-bottom: 5rem;
    .underwhite {
      background: #ffffff;
      width: 76%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .whiteleft {
        width: 35%;
        min-width: 200px;
        .leftw {
          width: 80%;
          margin: auto;
          margin-top: 2rem;
          h1 {
            font-size: 1.6rem;
            font-weight: bold;
          }
          .names {
            margin-top: 1.1rem;
            .namep {
              display: flex;
              margin-bottom: 1rem;
            }
            input {
              margin-bottom: 1rem;
              min-width: 190px;
            }
          }
          .emailphone {
            .phone {
              margin-bottom: 1rem;
              .phonep {
                margin-bottom: 1rem;
                display: flex;
              }
              input {
                min-width: 190px;
              }
            }
          }
          .email {
            .emailp {
              margin-bottom: 1rem;
              display: flex;
            }
            input {
              min-width: 190px;
            }
          }
          .address {
            .addressp {
              margin-bottom: 1rem;
              display: flex;
            }
            input {
              min-width: 190px;
              margin-bottom: 1rem;
            }
          }
          .pay {
            margin-bottom: 1rem;
            .payp {
              margin-bottom: 1rem;
              display: flex;
            }
            .select {
              width: 50%;
              min-width: 158px;
            }
          }
          .message {
            margin-bottom: 1rem;
            p {
              margin-bottom: 1rem;
            }
            .textarea {
              width: 100%;
              min-width: 200px;
            }
          }
        }
      }
      .whiteright {
        width: 65%;
        .rightbtn {
          margin-top: 17rem;
          width: 90%;
          text-align: right;
          h1 {
            text-align: right;
          }
          .self {
            margin-top: 2rem;
            input {
              width: 29%;
            }
            button {
              margin-left: 1.2rem;
              color: #0f5f38;
              background: #ffffff;
              border: 1px #0f5f38 solid;
            }
          }
          .gobuy {
            margin-top: 1.4rem;
            display: flex;
            justify-content: end;
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
@media screen and (max-width: 720px) {
  .Shopbody {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 2rem;
    .under {
      padding-top: 5rem;
      background: #171414;
      padding-bottom: 5rem;
      .underwhite {
        background: #ffffff;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .whiteleft {
          width: 100%;
          min-width: 200px;
          .leftw {
            width: 80%;
            margin: auto;
            margin-top: 2rem;
            h1 {
              font-size: 1.6rem;
              font-weight: bold;
            }
            .names {
              margin-top: 1.1rem;
              .namep {
                display: flex;
                margin-bottom: 1rem;
              }
              input {
                margin-bottom: 1rem;
                min-width: 190px;
              }
            }
            .emailphone {
              .phone {
                margin-bottom: 1rem;
                .phonep {
                  margin-bottom: 1rem;
                  display: flex;
                }
                input {
                  min-width: 190px;
                }
              }
            }
            .email {
              .emailp {
                margin-bottom: 1rem;
                display: flex;
              }
              input {
                min-width: 190px;
              }
            }
            .address {
              .addressp {
                margin-bottom: 1rem;
                display: flex;
              }
              input {
                min-width: 190px;
                margin-bottom: 1rem;
              }
            }
            .pay {
              margin-bottom: 1rem;
              .payp {
                margin-bottom: 1rem;
                display: flex;
              }
              .select {
                width: 50%;
                min-width: 158px;
              }
            }
            .message {
              margin-bottom: 1rem;
              p {
                margin-bottom: 1rem;
              }
              .textarea {
                width: 100%;
                min-width: 200px;
              }
            }
          }
        }
        .whiteright {
          width: 100%;
          .rightbtn {
            margin-top: 9rem;
            width: 95%;
            text-align: right;
            h1 {
              text-align: right;
            }
            .self {
              margin-top: 1rem;
              input {
                width: 29%;
              }
              button {
                margin-left: 1.2rem;
                color: #0f5f38;
                background: #ffffff;
                border: 1px #0f5f38 solid;
              }
            }
            .gobuy {
              margin-bottom: 1rem;
              margin-top: 1.4rem;
              display: flex;
              justify-content: end;
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
}
</style>
