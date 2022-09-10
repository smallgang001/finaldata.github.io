<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="sdata">
    <div class="datah1"><h1>訂單資訊</h1></div>
    <div class="datacontant">
      <table>
        <thead>
          <th class="th1">產品圖片</th>
          <th class="th2">產品名稱</th>
          <th class="th3">數量</th>
          <th class="th4">金額</th>
        </thead>
        <tbody>
          <tr v-for="a in getcarts" :key="a.id">
            <td class="td1">
              <img class="img1" :src="a.product.ims" alt="" />
              <img
                @click="delcart(a)"
                class="img2"
                src="../assets/x.svg"
                alt=""
              />
            </td>
            <td class="td2">
              <p>{{ a.product.title }}</p>
            </td>
            <td class="td3">
              <div class="num">
                <button @click="reduce(a)" type="button" :disabled="a.qty == 1">
                  -
                </button>
                <input
                  @input="textnum(a)"
                  class="nums"
                  type="number"
                  v-model="a.qty"
                  onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                />

                <button
                  @click="Increase(a)"
                  type="button"
                  :disabled="a.qty == a.product.unit"
                >
                  +
                </button>
              </div>
            </td>
            <td class="td4">
              <p>${{ a.product.price }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="dataallmoney">
      <p>總計$ {{ alltatle }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getcarts: [],
      alltatl: 0,
      alltatle: 0,
      Load: false,
      aas: {},
      onnum: 0,
      sss: [],
    };
  },
  mounted() {
    this.getcart();
  },
  methods: {
    getcart() {
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          this.getcarts = e.data.data.carts;
          e.data.data.carts = this.getcarts;
          for (let i = 0; i < this.getcarts.length; i++) {
            if (this.getcarts[i].qty > this.getcarts[i].product.unit) {
              this.getcarts[i].qty = Number(this.getcarts[i].product.unit);
            }
            this.getcarts[i].final_total =
              this.getcarts[i].qty * this.getcarts[i].product.price;
            this.alltatle += this.getcarts[i].final_total;
          }
        }
      });
    },
    textnum(a) {
      if (a.qty > a.product.unit) {
        a.qty = Number(a.product.unit);
      }
      this.alltatle = 0;
      for (let i = 0; i < this.getcarts.length; i++) {
        this.alltatle += this.getcarts[i].qty * this.getcarts[i].product.price;
      }
    },
    Increase(x) {
      x.qty += 1;
      this.$emit("qty", x.qty);
      if (x.qty > x.product.unit) {
        x.qty = Number(x.product.unit);
      }
      this.alltatle = 0;
      for (let i = 0; i < this.getcarts.length; i++) {
        this.alltatle += this.getcarts[i].qty * this.getcarts[i].product.price;
      }
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${x.id}`;
      this.axios
        .put(Apiallpage, { data: { product_id: x.id, qty: x.qty } })
        .then((e) => {
          if (e.data.success) {
            e;
          }
        });
    },
    reduce(x) {
      x.qty -= 1;
      if (x.qty > x.product.unit) {
        x.qty = Number(x.product.unit);
      }
      this.alltatle = 0;
      for (let i = 0; i < this.getcarts.length; i++) {
        this.alltatle += this.getcarts[i].qty * this.getcarts[i].product.price;
      }
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${x.id}`;
      this.axios
        .put(Apiallpage, { data: { product_id: x.id, qty: x.qty } })
        .then((e) => {
          if (e.data.success) {
            e;
          }
        });
    },
    delcart(a) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${a.id}`;
      this.axios.delete(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.alltatle = 0;
          this.getcart();
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sdata {
  width: 90%;
  margin: 0 auto;
  .datah1 {
    margin-top: 2rem;
    background: #0f5f38;
    min-width: 238px;
    h1 {
      font-weight: bold;
      padding: 1rem;
      font-size: 1.2rem;
      color: #ffffff;
    }
  }
  .datacontant {
    table {
      margin-top: 1rem;
      thead {
        .th1 {
          width: 20%;
        }
        .th2 {
          width: 60%;
        }
        .th3 {
          text-align: center;
          width: 10%;
        }
        .th4 {
          text-align: center;
          width: 10%;
        }
      }
      tbody {
        tr {
          .td1 {
            display: flex;
            .img1 {
              width: 55%;
              min-width: 50px;
            }
            .img2 {
              padding-bottom: 5rem;
              max-width: 35px;
              min-width: 15px;
              cursor: pointer;
            }
          }
          .td2 {
            vertical-align: middle;
            p {
              max-width: 250px;
            }
          }
          .td3 {
            vertical-align: middle;
            text-align: center;
            .num {
              width: 70%;
              display: flex;
              margin: 0 auto;
              min-width: 60px;
              button {
                width: 30%;
                background: #ffffff;
                border: 0.1rem #000000 solid;
              }
              .nums {
                width: 35%;
              }
            }
            .num::-webkit-outer-spin-button,
            ::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }
          .td4 {
            vertical-align: middle;
            text-align: center;
          }
        }
      }
    }
  }
  .dataallmoney {
    margin-top: 2rem;
    background: #0f5f38;
    min-width: 238px;
    p {
      text-align: right;
      padding: 0.35rem;
      padding-right: 2rem;
      font-size: 1.2rem;
      color: #ffffff;
    }
  }
}
@media screen and(max-width: 720px) {
  .sdata {
    width: 90%;
    margin: 0 auto;
    .datah1 {
      margin-top: 2rem;
      background: #0f5f38;
      min-width: 238px;
      h1 {
        font-weight: bold;
        padding: 1rem;
        font-size: 1.2rem;
        color: #ffffff;
      }
    }
    .datacontant {
      table {
        margin-top: 1rem;
        thead {
          .th1 {
            width: 20%;
          }
          .th2 {
            width: 60%;
          }
          .th3 {
            text-align: center;
            width: 10%;
          }
          .th4 {
            text-align: center;
            width: 10%;
          }
        }
        tbody {
          tr {
            .td1 {
              display: flex;
              .img1 {
                width: 55%;
                min-width: 50px;
                img {
                  max-width: 105px;
                  max-height: 105px;
                }
              }
              .img2 {
                padding-bottom: 5rem;
                max-width: 35px;
                min-width: 15px;
                cursor: pointer;
              }
            }
            .td2 {
              vertical-align: middle;
              p {
                font-size: 0.8rem;
                max-width: 100px;
              }
            }
            .td3 {
              vertical-align: middle;
              text-align: center;
              .num {
                width: 50%;
                display: flex;
                margin: 0 auto;
                min-width: 60px;
                button {
                  width: 30%;
                  background: #ffffff;
                  border: 0.1rem #000000 solid;
                }
                .nums {
                  width: 25%;
                }
              }
              .num::-webkit-outer-spin-button,
              ::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
            .td4 {
              font-size: 0.8rem;
              vertical-align: middle;
              text-align: center;
            }
          }
        }
      }
    }
    .dataallmoney {
      margin-top: 2rem;
      background: #0f5f38;
      min-width: 238px;
      p {
        text-align: right;
        padding: 0.35rem;
        padding-right: 2rem;
        font-size: 0.8rem;
        color: #ffffff;
      }
    }
  }
}
</style>
