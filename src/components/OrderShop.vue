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
          <tr v-for="a in user" :key="a.id">
            <td class="td1">
              <img class="img1" :src="a.product.ims" alt="" />
            </td>
            <td class="td2">
              <p>{{ a.product.title }}</p>
            </td>
            <td class="td3">
              <div class="num">
                <p>{{ a.qty }}</p>
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
      <p>總計${{ alltotal }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderid: "",
      user: [],
      alltotal: 0,
    };
  },
  created() {
    this.orderid = this.$route.params.orderId;
    this.getcart();
  },
  methods: {
    getcart() {
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderid}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          this.user = Object.values(e.data.order.products);

          for (let i = 0; i < this.user.length; i++) {
            this.alltotal += Math.round(this.user[i].final_total);
          }
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
              vertical-align: middle;
              text-align: center;
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
    width: 95%;
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
                max-width: 120px;
                font-size: 0.8rem;
              }
            }
            .td3 {
              vertical-align: middle;
              text-align: center;
              .num {
                vertical-align: middle;
                text-align: center;
              }
            }
            .td4 {
              vertical-align: middle;
              text-align: center;
              font-size: 0.8rem;
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
        padding-right: 1rem;
        font-size: 0.8rem;
        color: #ffffff;
      }
    }
  }
}
</style>
