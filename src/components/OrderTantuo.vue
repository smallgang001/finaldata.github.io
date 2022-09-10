<template>
  <div
    class="max modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="aa"
  >
    <div class="maxss modal-dialog">
      <div class="maxs modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增商品項目</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="left">
            <div class="naone">
              <div class="na">
                <p>購買人電話:</p>
                <input
                  v-model="ts.tel"
                  class="form-control form-control-lg"
                  type="text"
                />
              </div>
              <div class="na">
                <p>Email:</p>
                <input
                  v-model="ts.email"
                  class="form-control form-control-lg"
                  type="number"
                />
              </div>
              <div class="na">
                <p>地址</p>

                <input
                  v-model="ts.address"
                  class="form-control form-control-lg"
                  type="text"
                />
              </div>
            </div>
            <div class="natwo">
              <div class="na">
                <p>購買金額</p>
                <p>{{ tt.total }}</p>
              </div>
              <div class="na">
                <p>購買日期(數字填寫)</p>
                {{ ts.buydata }}
              </div>
              <div class="na">
                <p>保固日期日(數字填寫)</p>
                {{ ts.ndata }}
                {{}}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="newshop" type="button" class="btn btn-primary">
            修改訂單
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.maxss {
  margin-left: 20rem;
  .maxs {
    width: 65vw;
    .modal-body {
      display: flex;
      .right {
        width: 100%;
        .padd {
          margin-top: 2rem;
        }
        .as {
          width: 80%;
        }
      }
      .left {
        width: 100%;
        margin-left: 5rem;
        .naone {
          display: flex;
          width: 100%;
          .na {
            width: 100%;
            height: 130%;
          }
        }
        .natwo {
          display: flex;
        }
        .two {
          width: 100%;
          display: flex;
          .ssd {
            width: 100%;
            .ssddf {
              display: flex;
              width: 100%;
              .ssdfan {
                width: 50%;
                .fanlea1 {
                  width: 100%;
                  height: 130%;
                }
              }
              .ssdlea {
                width: 50%;
                .fanlea2 {
                  width: 100%;
                  height: 130%;
                }
              }
            }
          }
          .ssds {
            width: 50%;
            margin-left: 1.5rem;
          }
        }
        .sa {
          display: flex;
          align-items: center;
          margin-top: 3.5rem;
          .sav {
            margin-right: 0.5rem;
          }
          p {
            color: green;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  data() {
    return {
      aa: {},
      tt: {
        create_at: 0,
        id: "",
        is_paid: true,
        message: "",
        num: 1,
        paid_date: 1661803447,
        products: {},
        total: "",
        user: {
          tel: 0,
        },
      },
      ts: {},

      loading: false,
    };
  },
  inject: ["EmiTter"],
  created() {},
  methods: {
    as() {
      this.aa.show();
    },
    ad() {
      this.aa.hide();
    },
    newshop() {
      this.aa.hide();
      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tt.id}`;
      this.$http.put(ApIloojim, { data: this.tt }).then((e) => {
        this.tt = {};
        this.ts = {};
        this.$emit("getda");
        if (e.data.success) {
          this.EmiTter.emit("mess", {
            style: "rgb(6, 173, 202)",
            title: "更新成功",
            content: "已成功更新商品",
          });
        } else if (!e.data.success) {
          this.EmiTter.emit("mess", {
            style: "rgb(228, 15, 210)",
            title: "更新失敗",
            content: e.data.message.join("、"),
          });
        }
      });
      this.aa.hide();
    },
  },
  mounted() {
    this.aa = new Modal(this.$refs.aa);
  },
};
</script>
