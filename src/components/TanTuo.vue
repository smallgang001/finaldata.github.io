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
            <p>新增標題</p>
            <input
              v-model="tt.title"
              class="form-control form-control-lg"
              type="text"
              placeholder="新增標題名稱"
            />
            <div class="two">
              <div class="ssd">
                <div class="ssddf">
                  <div class="ssdfan">
                    <p>分類</p>
                    <select class="fanlea1" v-model="tt.category">
                      <option value="" hidden>請選擇商品分類</option>
                      <option value="顯示卡">顯示卡</option>
                      <option value="記憶體">記憶體</option>
                      <option value="主機板">主機板</option>
                      <option value="CPU">CPU</option>
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
                      v-if="tt.category == '顯示卡'"
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
                        value="GTX16系列"
                      >
                        GTX16系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="RTX20系列"
                      >
                        RTX20系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="RTX30系列"
                      >
                        RTX30系列
                      </option>
                    </select>
                    <select
                      class="fanlea2"
                      v-model="tt.leabia"
                      v-if="tt.category == '記憶體'"
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
                        value="DDR3系列"
                      >
                        DDR3系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="DDR4系列"
                      >
                        DDR4系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="DDR5系列"
                      >
                        DDR5系列
                      </option>
                    </select>
                    <select
                      class="fanlea2"
                      v-model="tt.leabia"
                      v-if="tt.category == '主機板'"
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
                        value="ROG系列"
                      >
                        ROG系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="TUF系列"
                      >
                        TUF系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="PRIME系列"
                      >
                        PRIME系列
                      </option>
                    </select>
                    <select
                      class="fanlea2"
                      v-model="tt.leabia"
                      v-if="tt.category == 'CPU'"
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
                        value="i5系列"
                      >
                        i5系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="i6系列"
                      >
                        i6系列
                      </option>
                      <option
                        class="form-control form-control-lg"
                        value="i7系列"
                      >
                        i7系列
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="ssds">
                <p>單位</p>
                <input
                  v-model="tt.unit"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="輸入單位"
                />
              </div>
            </div>
            <div class="two">
              <div class="ssd">
                <p>原價</p>
                <input
                  v-model="tt.origin_price"
                  class="form-control form-control-lg"
                  type="number"
                  placeholder="輸入原價"
                />
              </div>
              <div class="ssds">
                <p>售價</p>
                <input
                  v-model="tt.price"
                  class="form-control form-control-lg"
                  type="number"
                  placeholder="輸入售價"
                />
              </div>
            </div>
            <p>商品描述</p>
            <input
              v-model="tt.description"
              class="form-control form-control-lg"
              type="text"
              placeholder="請輸入商品der敘述"
            />
            <p>說明內容</p>
            <input
              v-model="tt.content"
              class="form-control form-control-lg"
              type="text"
              placeholder="請輸入內容"
            />
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
            新增商品
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
            width: 50%;
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
          margin-top: 0.5rem;
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
      tt: { category: "", leabia: "" },
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
        this.tt.ima.push(this.tt.ims);
      });
    },
    bs() {
      this.tt.ima.push(this.tt.ims);
    },
  },
  mounted() {
    this.aa = new Modal(this.$refs.aa);
  },
};
</script>
