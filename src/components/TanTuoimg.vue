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
          <div class="right">
            <p>請輸入圖片網址</p>
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="請輸入圖片網址"
              v-model="tt.ims"
            />
            <div>
              <label for="formFileLg" class="form-label">或，上傳圖片</label>
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
                ref="fileimgs"
                @change="fileimg"
              />
            </div>
            <button
              @click="bs"
              class="padd btn btn-primary form-control form-control-lg"
              type="button"
            >
              上傳圖片
            </button>
            <img :src="tt.ims" alt="" class="as" />
          </div>
          <div class="left">
            <div class="two">
              <div class="ssd">
                <div class="ssddf">
                  <div class="ssdfan">
                    <p>分類</p>
                    <select class="fanlea1" v-model="tt.category">
                      <option value="" hidden>請選擇商品分類</option>
                      <option value="輪播圖">輪播圖</option>
                      <!-- <input
                    v-model="tt.category"
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="輸入分類"
                  /> -->
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
                      v-if="tt.category == '輪播圖'"
                    >
                      <option
                        class="form-control form-control-lg"
                        value=""
                        hidden
                      >
                        請選擇
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="顯示卡"
                      >
                        顯示卡
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="記憶體"
                      >
                        記憶體
                      </option>
                      <option class="form-control form-control-lg" value="CPU">
                        CPU
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="主機板"
                      >
                        主機板
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="sa">
              <input
                v-model="tt.is_enabled"
                class="sav"
                type="checkbox"
                :value="tt"
              />
              <p>是否啟用</p>
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
            新增圖片
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
        category: "",
        leabia: "",
        title: "",
        unit: "",
        origin_price: "",
        price: "",
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
      this.tt.title = "1";
      this.tt.unit = "1";
      this.tt.origin_price = 1;
      this.tt.price = 1;

      if (this.tt.id == undefined) {
        const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
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
        const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tt.id}`;
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
    fileimg() {
      const fileimgs = this.$refs.fileimgs.files[0];
      const nf = new FormData();
      nf.append("file-to-upload", fileimgs);
      const ApIloojim = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(ApIloojim, nf).then((e) => {
        this.tt.ims = e.data.imageUrl;
      });
    },
  },
  mounted() {
    this.aa = new Modal(this.$refs.aa);
  },
};
</script>
