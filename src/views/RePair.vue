<template>
  <div class="repairbody">
    <div class="retop">
      <Repairimg></Repairimg>
    </div>
    <div class="aa"><div class="online"></div></div>
    <div class="recontant">
      <div class="contant">
        <div class="contantml">
          <div class="contanttop">
            <h1>注意事項:</h1>
            <p>產品送修注意事項</p>
          </div>
          <div class="p1">
            <p>1.維修保固範圍/標準/收費/檢測返修時間概依原廠規範。</p>
          </div>
          <div class="p2">
            <p>
              2.因應原廠維修規範，請務必妥善保留您的購買憑證(如發票)，在部分商品故障狀態下，原廠將要求消費者提供購買憑證始能進行後續檢修作業。
            </p>
          </div>
          <div class="p3">
            <p>
              3.送修門市僅受理產品送修並進行外觀檢視／註記，不作故障判斷，實際檢測、維修及報價等事宜，概由原廠授權維修中心處理；<br />
              另若經檢測，送修產品除客戶報修之部份故障外，尚有其他非保固範圍（如：人損、受潮或非自然因素造成）之故障，導致無法進行維修等功能性問題，<br />
              需一併付費、維修方能處理。
            </p>
          </div>
          <div class="p4">
            <p>
              4.維修中心之維修服務
              ，因商品維修過程可能遺失或毀損，維修中心就送修產品內產品之遺失或毀損不負任何賠償或回復責任。
            </p>
          </div>
          <div class="p5">
            <p style="color: #ffffff">5.</p>
            <p style="color: #ff6100">
              送修產品上倘有裝飾配件（如全機膠膜等），維修中心無法保證於檢測或維修過程確保其完整性，倘裝飾配件於檢測或維修過程發生毀損時，維修中心不負任何賠償責任。
            </p>
          </div>
          <div class="p6">
            <p style="color: #ffffff">6.</p>
            <p style="color: #ff6100">
              送修產品所取下之零組件或模組等，其所有權歸維修中心所有<span
                style="color: #ffffff"
                >；以更換良品單機之維修方式時，原機所有權歸原廠所有。</span
              >
            </p>
          </div>
          <div class="p7">
            <p style="color: #ffffff">7.</p>
            <p style="color: #ff6100">
              依原廠標準維修流程，所更換之模組或單機不保證為新品，但為功能正常之良品。
            </p>
          </div>
          <div class="p8" style="color: #ffffff">
            <p>
              8.產品保固範圍不包含產品本身瑕疵以外任何因素所造成之故障，包括但不限於：
            </p>
            <div class="p8children">
              <p>(1)因天災、地變等不可抗力因素造成產品功能減損、損壞或故障。</p>
              <p>
                (2)不當使用（包含但不限於產品暴露於非原廠建議適當防護等級之環境中、人損、受潮等）、未依原廠就產品規格之操作建議或使用說明、<br />
                自行拆修／改裝／安裝非原廠認可之軟體／設備／零組件等，導致產品功能減損、損壞或故障。
              </p>
              <p>
                (3)產品之原廠型號、序號條碼（即IMEI）、保固貼紙如有脫落、毀損或變更等，導致無法辨識者。
              </p>
              <p>(4)產品外觀及消耗性材料</p>
              <p>(5)其他不可歸責於維修中心之事由致無法維修者。</p>
              <p>(6)其餘未載事項，概依各產品原廠官方網站為準。</p>
            </div>
          </div>
          <div class="p9" style="color: #ffffff">
            <p>
              9.倘送修產品非維修中心授權保固維修產品時，皆視為保固範圍外之付費維修件，惟不保證該產品送修後，是否會影響該產品原可享有之保固權益，<br />維修中心於完成維修後將提供該產品付費維修項目3個月之保固服務。
            </p>
          </div>
          <div class="p10">
            <p style="color: #ffffff">10.</p>
            <p style="color: #ff6100">
              客戶於收到維修中心以電話或簡訊通知取回送修產品，請務必於通知取件日起30日內，持報修單（客戶收執聯）至繳清全部維修費用（該維修件為付費維修件時）<br />
              及取回送修產品或更換良品單機；客戶逾期未取回送修產品，視為客戶拋棄所有權及相關權利，維修中心就送修產品可任意處置，客戶不得向維修中心為任何主張或請求。
            </p>
          </div>
        </div>
      </div>
      <div class="contantunder">
        <div class="number">
          <div class="numinput">
            <p>報修編號:</p>
            <input v-model="orderid" type="text" placeholder="請輸入訂單編號" />
          </div>
          <div class="numbtn">
            <button
              @click="aa(orderid)"
              class="grow_ellipse"
              type="button"
              :disabled="nulla"
            >
              前往查詢
            </button>
          </div>
        </div>
        <div class="progressbar">
          <div class="progressinput">
            <p>訂單編號:</p>
            <input
              v-model="orderids"
              type="text"
              placeholder="請輸入訂單編號"
            />
          </div>
          <div class="progressbtn">
            <button type="button" class="grow_ellipse" @click="datas(orderids)">
              察看進度
            </button>
          </div>
        </div>
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
      display: flex;
      justify-content: center;
      .contantml {
        width: 39%;
        .contanttop {
          h1 {
            margin-top: 3rem;
            font-size: 2rem;
            color: white;
          }
          p {
            margin-top: 3rem;
            margin-bottom: 3rem;
            color: #168c37;
            font-size: 1.8rem;
          }
        }
        .p1 {
          color: white;
        }
        .p2 {
          color: white;
        }
        .p3 {
          color: white;
        }
        .p4 {
          color: white;
        }
        .p5 {
          display: flex;
        }
        .p6 {
          display: flex;
        }
        .p7 {
          display: flex;
        }
        .p8 {
          .p8children {
            margin-left: 1rem;
          }
        }
      }
    }
    .contantunder {
      width: 100%;
      margin-top: 3rem;
      .number {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .numinput {
          width: 50%;
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          p {
            min-width: 100px;
            font-size: 1.4rem;
            color: white;
          }
          input {
            width: 85%;
            padding: 0.4rem;
          }
        }
        .numbtn {
          button {
            padding: 1rem;
            padding-right: 1.4rem;
            padding-left: 1.4rem;
            font-size: 1rem;
            background: #ff8a00;
            color: #fff;
            border: 1px solid #ff8a00;
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          button:hover {
            color: #ff8a00;
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
      .progressbar {
        margin-top: 1.5rem;
        padding-bottom: 9rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .progressinput {
          width: 50%;
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          p {
            min-width: 100px;
            font-size: 1.4rem;
            color: white;
          }
          input {
            width: 85%;
            padding: 0.4rem;
          }
        }
        .progressbtn {
          button {
            padding: 1rem;
            padding-right: 1.4rem;
            padding-left: 1.4rem;
            font-size: 1rem;
            background: #fff;
            border: 1px solid #ff8a00;
            color: #ff8a00;
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          button:hover {
            color: #ffffff;
          }
          button::after {
            content: "";
            background: #ff8a00;
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
        display: flex;
        justify-content: center;
        .contantml {
          width: 85%;
          .contanttop {
            h1 {
              text-align: center;
              margin-top: 5rem;
              font-size: 1.8rem;
              color: white;
            }
            p {
              text-align: center;
              margin-top: 3rem;
              margin-bottom: 3rem;
              color: #168c37;
              font-size: 1.2rem;
            }
          }
          .p1 {
            color: white;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p2 {
            color: white;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p3 {
            color: white;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p4 {
            color: white;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p5 {
            display: flex;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p6 {
            display: flex;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p7 {
            display: flex;
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
          }
          .p8 {
            .p8children {
              font-size: 0.5rem;
              letter-spacing: 0.2rem;
              line-height: 15px;
              margin-left: 1rem;
            }
          }
          .p9 {
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
            margin-left: 1rem;
          }
          .p10 {
            font-size: 0.5rem;
            letter-spacing: 0.2rem;
            line-height: 15px;
            margin-left: 1rem;
          }
        }
      }
      .contantunder {
        width: 100%;
        margin-top: 3rem;
        .number {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 1rem;
          .numinput {
            width: 90%;
            display: flex;
            align-items: center;

            font-size: 1.2rem;
            p {
              min-width: 100px;
              font-size: 1.4rem;
              color: white;
            }
            input {
              width: 85%;
              padding: 0.4rem;
            }
          }
          .numbtn {
            margin-top: 1.5rem;
            text-align: center;
            button {
              padding: 1rem;
              padding-right: 2.9rem;
              padding-left: 2.9rem;
              font-size: 1rem;
              background: #ff8a00;
              color: #fff;
              border: 1px solid #ff8a00;
              position: relative;
              z-index: 1;
              overflow: hidden;
            }
            button:hover {
              color: #ff8a00;
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
        .progressbar {
          margin-top: 1.5rem;
          padding-bottom: 3rem;
          margin-bottom: 4rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-left: 1rem;
          .progressinput {
            width: 90%;
            display: flex;
            align-items: center;

            font-size: 1.2rem;
            p {
              min-width: 100px;
              font-size: 1.4rem;
              color: white;
            }
            input {
              width: 85%;
              padding: 0.4rem;
            }
          }
          .progressbtn {
            text-align: center;
            margin-top: 1.5rem;
            button {
              padding: 1rem;
              padding-right: 2.9rem;
              padding-left: 2.9rem;
              font-size: 1rem;
              background: #fff;
              border: 1px solid #ff8a00;
              color: #ff8a00;
              margin: 1rem;
              position: relative;
              z-index: 1;
              overflow: hidden;
            }
            button:hover {
              color: #ffffff;
            }
            button::after {
              content: "";
              background: #ff8a00;
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
      orderid: "",
      orderids: "",
      nulla: false,
    };
  },
  inject: ["EmiTter"],
  components: {
    Repairimg,
  },
  created() {},
  methods: {
    aa(x) {
      console.log(x);
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${x}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          console.log(e, 9);
          if (e.data.order == null) {
            alert("查無訂單");
          } else {
            if (e.data.order.user.ordergindo != "") {
              alert("此訂單已回報，請前往查詢訂單狀態");
            } else {
              this.$router.push(`/RePairdata/RePairdatacontant/${x}`);
            }
          }
        }
      });
    },
    datas(x) {
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${x}`;
      this.axios.get(Apiallpage).then((e) => {
        if (e.data.success) {
          if (e.data.order == null) {
            alert("查無訂單");
          } else {
            console.log(e.data.order, 6633);
            if (e.data.order.user.ordergindo == "") {
              alert("此訂單尚未回報，請前往回報問題");
            } else {
              this.$router.push(`/RePairdata/FinalSure/${x}`);
            }
          }
        }
      });
    },
  },
};
</script>
