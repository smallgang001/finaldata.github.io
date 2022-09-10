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
                <p>請輸入名稱</p>
                <input
                  v-model="tt.title"
                  class="form-control form-control-lg"
                  type="text"
                />
              </div>
              <div class="na">
                <p>折扣幾元(數字填寫)</p>
                <input
                  v-model="tt.percent"
                  class="form-control form-control-lg"
                  type="number"
                  min="1"
                  oninput="if(value<1)value=1"
                />
              </div>
            </div>
            <div class="natwo">
              <div class="na">
                <input
                  v-model="tt.is_enabled"
                  class="sav"
                  type="checkbox"
                  :value="tt"
                />
                <p>是否啟用</p>
              </div>
              <div class="na">
                <p>啟用數量</p>
                <input
                  v-model="tt.is_enabled"
                  class="form-control form-control-lg"
                  type="number"
                />
              </div>
              <div class="na">
                <p>截止日期(數字填寫)</p>
                <input
                  v-model="tt.due_date"
                  class="form-control form-control-lg"
                  type="number"
                />
              </div>
              <div class="na">
                <p>請輸入代碼</p>
                <input
                  v-model="tt.code"
                  class="form-control form-control-lg"
                  type="text"
                />
              </div>
            </div>
            <div class="two">
              <div class="ssd">
                <div class="ssddf">
                  <div class="ssdfan">
                    <p>分類</p>
                    <select class="fanlea1" v-model="tt.category">
                      <option value="" hidden>請選擇商品分類</option>
                      <option value="優惠券">優惠券</option>
                    </select>
                  </div>
                  <div class="ssdlea">
                    <p>類別</p>
                    <select
                      class="fanlea2"
                      v-model="tt.leabia"
                      v-if="tt.category == ''"
                      disabled
                    >
                      <option
                        class="form-control form-control-lg"
                        value=""
                        hidden
                      >
                        請選擇
                      </option>
                    </select>
                    <select
                      class="fanlea2"
                      v-model="tt.leabia"
                      v-if="tt.category == '優惠券'"
                    >
                      <option
                        class="form-control form-control-lg"
                        value=""
                        hidden
                      >
                        請選擇
                      </option>
                      <option class="form-control form-control-lg" value="代碼">
                        代碼
                      </option>
                    </select>
                  </div>
                </div>
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
            新增優惠券
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
        title: "",
        is_enabled: 1,
        percent: "",
        due_date: "",
        code: "",
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
      if (this.tt.id == undefined) {
        const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(ApIloojim, { data: this.tt }).then((e) => {
          this.tt = {};
          this.$emit("getda");
          if (e.data.success) {
            this.EmiTter.emit("mess", {
              style: "rgb(6, 173, 202)",
              title: "商品添加成功",
              content: "以增加商品",
            });
          } else if (!e.data.success) {
            this.EmiTter.emit("mess", {
              style: "rgb(228, 15, 210)",
              title: "商品添加失敗",
              content: e.data.message.join("、"),
            });
          }
        });
        this.aa.hide();
      } else {
        const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tt.id}`;
        this.$http.put(ApIloojim, { data: this.tt }).then((e) => {
          this.tt = {};
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
      }
    },
  },
  mounted() {
    this.aa = new Modal(this.$refs.aa);
  },
};
</script>
