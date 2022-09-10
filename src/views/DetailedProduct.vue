<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="shopdata">
    <div class="shopbody">
      <div class="shopcontant">
        <div class="shopcontantleft">
          <div class="whiteleft"></div>
          <div class="leftimg"><img :src="product.ims" alt="" /></div>
        </div>
        <div class="shopcontantright">
          <div class="rightimgs">
            <div class="imgs">
              <button
                type="button"
                v-for="b in productims"
                :key="b"
                style="margin: auto"
                @click="product.ims = b"
              >
                <img :src="b" alt="" />
              </button>
            </div>
          </div>
          <div class="rightcontant">
            <div class="contanttext">
              <div class="contanttitle">
                <p>{{ product.title }}</p>
              </div>
              <div class="contantgear">
                <p>{{ product.description }}</p>
              </div>
            </div>
            <div class="contantbtn">
              <div class="btnleft">
                <div class="numbtn">
                  <button type="button">剩餘數量:{{ product.unit }}</button>
                </div>
                <div class="buybtn box-3">
                  <button class="cart shape-ex3" type="button">
                    <img src="../assets/cartwhite.svg" alt="" />
                    <p>加入購物車</p>
                  </button>
                </div>
              </div>
              <div class="rightwhite"></div>
            </div>
          </div>
          <div class="white"></div>
        </div>
      </div>
      <div class="shopfoo">
        <div class="fooleft">
          <div class="leftcont">
            <h1>商品詳細內容</h1>
            <p>{{ product.content }}</p>
          </div>
          <div class="leftcategory">
            <h1>商品相關規格</h1>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="fooright">
          <div class="topb"></div>
          <div class="topbb">
            <div class="productcontant">
              <div class="title"><h1>請務必詳細注意購物須知</h1></div>
              <div class="productcontantbtn">
                <p>產品介紹</p>
              </div>
              <div class="pp">
                <p>商品均現貨1-2天出貨若遇缺貨約5-7天寄送！</p>
                <p>凡下標未取貨者一律黑名單！嚴重者將走法律程序！</p>
                <p>
                  購物流程 選購欲購買的商品 > 加入購物車 > 登入會員 >
                  選擇結帳方式 > 出貨通知 > 收到商品
                </p>
                <p>首次購買的朋友，記得有優惠券可以用哦!</p>
              </div>
            </div>
            <div class="productsafe">
              <p>
                <img
                  src="../assets/check.svg"
                  alt=""
                />保障你的交易安全：我們只會在買家確認收到商品後，
                才會跟您收款！
              </p>
              <p>
                <img src="../assets/waaa.svg" alt="" />也請買家注意鑑賞期呦!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      productims: [],
      Load: false,
    };
  },
  created() {
    this.getshop();
  },
  methods: {
    getshop() {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.orderId}`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        this.product = e.data.product;
        this.productims = e.data.product.ima;
      });
    },
    ShoppingCart(a) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios
        .post(Apiallpage, {
          data: { product_id: a.id, qty: a.num },
        })
        .then((e) => {
          this.Load = false;
          if (e.data.success) {
            if (a.unit < 0) {
              e.data.data.qty = Number(a.unit);
              alert("已超過物品總數量,購物車將以最大數量取代");
            }
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.shopdata {
  width: 100%;
  .shopbody {
    margin: 0 auto;
    width: 65.5%;
    background: #000;
    margin-bottom: 5rem;
    .shopcontant {
      margin: 0 auto;
      margin-top: 11rem;
      margin-bottom: 6rem;
      padding-top: 3rem;
      width: 100%;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      .shopcontantleft {
        width: 50%;
        display: flex;
        .whiteleft {
          width: 30%;
          background: linear-gradient(45deg, black 85px, #fff 0);
        }
        .leftimg {
          width: 70%;
          img {
            width: 80%;
          }
        }
      }
      .shopcontantright {
        display: flex;
        width: 50%;
        .rightimgs {
          width: 25%;
          .imgs {
            button {
              width: 100%;
              margin-bottom: 1rem;
              background: none;
              border: none;
              img {
                width: 100%;
              }
            }
          }
        }
        .rightcontant {
          margin-left: 2rem;
          width: 55%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .contanttext {
            width: 100%;
            .contanttitle {
              width: 100%;
              text-align: left;
              line-height: 25px;
              font-size: 1.3rem;
              font-weight: bold;
            }
            .contantgear {
              width: 100%;
              margin-top: 2rem;
              text-align: left;
              letter-spacing: 0.2rem;
            }
          }
          .contantbtn {
            display: flex;
            margin-top: 2rem;
            .btnleft {
              display: flex;
              width: 90%;
              .numbtn {
                button {
                  padding: 0.8rem;
                  background: #033015;
                  color: white;
                  border: none;
                  p {
                    color: #ffffff;
                    font-size: 1rem;
                    font-weight: bold;
                  }
                }
              }
              .buybtn {
                margin-left: 1rem;
                padding-bottom: 2rem;
                .cart {
                  display: flex;
                  background: #0f5f38;
                  color: #ffffff;
                  align-items: center;
                  font-size: 0.1rem;
                  border: none;
                }
                .shape-ex3 {
                  padding-top: 0.5rem;
                  padding-bottom: 0.5rem;
                  background: #0f5f38;
                  color: #ffffff;
                  border: 1px #0f5f38 solid;
                  cursor: pointer;
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
            .rightwhite {
              width: 10%;
            }
          }
        }
        .white {
          width: 25%;
          background: linear-gradient(-45deg, black 85px, white 0);
        }
      }
    }
    .shopfoo {
      padding-bottom: 5rem;
      width: 100%;
      background: linear-gradient(rgb(0, 0, 0), rgb(255, 255, 255));
      padding-top: 15rem;
      display: flex;
      .fooleft {
        display: flex;
        flex-direction: column;
        width: 75%;
        .leftcont {
          width: 85%;
          margin-left: 2rem;
          h1 {
            font-size: 2rem;
            letter-spacing: 00.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
          }
        }
        .leftcategory {
          margin-top: 10rem;
          margin-left: 2rem;
          width: 85%;
          h1 {
            font-size: 2rem;
            letter-spacing: 00.5rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }
          p {
            font-size: 1.2rem;
            letter-spacing: 0.3rem;
          }
        }
      }
      .fooright {
        margin-right: 2rem;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .topbb {
          .productcontant {
            .title {
              h1 {
                font-size: 1.2rem;
                text-align: center;
                margin-bottom: 1.2rem;
              }
            }
            .productcontantbtn {
              margin-bottom: 1.2rem;
              padding: 0.2rem;
              border-bottom: 0.05rem solid rgba(22, 22, 22, 0.61);
              border-top: 0.05rem solid rgba(22, 22, 22, 0.61);
              p {
                color: rgba(22, 22, 22, 0.61);
                font-size: 0.2rem;
                text-align: center;
              }
            }
            .pp {
              padding-bottom: 3rem;
              p {
              }
            }
          }
          .productsafe {
            p {
              padding-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
@media screen and(max-width: 720px) {
  .shopdata {
    width: 100%;
    .shopbody {
      margin: 0 auto;
      width: 85%;
      background: rgb(255, 255, 255);
      margin-bottom: 5rem;
      .shopcontant {
        margin: 0 auto;
        margin-top: 7rem;
        margin-bottom: 6rem;
        padding-top: 3rem;
        width: 100%;
        background: #fff;
        display: block;
        .shopcontantleft {
          width: 100%;
          display: flex;
          .whiteleft {
            width: 0%;
            background: linear-gradient(0deg, black 0px, white 0);
          }
          .leftimg {
            margin: 0 auto;
            width: 60%;
            img {
              width: 100%;
            }
          }
        }
        .shopcontantright {
          display: block;
          width: 100%;
          .rightimgs {
            width: 100%;
            .imgs {
              margin-top: 1rem;
              display: flex;
              button {
                width: 100%;
                margin-bottom: 1rem;
                background: none;
                border: none;
                img {
                  width: 60%;
                }
              }
            }
          }
          .rightcontant {
            margin-left: 0rem;
            margin-top: 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .contanttext {
              width: 100%;
              .contanttitle {
                width: 100%;
                text-align: center;
                line-height: 20px;
                font-size: 1.1rem;
                font-weight: bold;
              }
              .contantgear {
                width: 100%;
                margin-top: 2rem;
                text-align: center;
                letter-spacing: 0.2rem;
              }
            }
            .contantbtn {
              display: flex;
              margin-top: 2rem;
              .btnleft {
                display: flex;
                justify-content: center;
                width: 100%;
                .numbtn {
                  button {
                    padding: 0.8rem;
                    background: #033015;
                    color: white;
                    border: none;
                    p {
                      color: #ffffff;
                      font-size: 1rem;
                      font-weight: bold;
                    }
                  }
                }
                .buybtn {
                  margin-left: 1rem;
                  padding-bottom: 2rem;
                  .cart {
                    display: flex;
                    background: #0f5f38;
                    color: #ffffff;
                    align-items: center;
                    font-size: 0.1rem;
                    border: none;
                  }
                  .shape-ex3 {
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    background: #0f5f38;
                    color: #ffffff;
                    border: 1px #0f5f38 solid;
                    cursor: pointer;
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
              .rightwhite {
                width: 0%;
              }
            }
          }
          .white {
            width: 30%;
            background: linear-gradient(0deg, black 0px, white 0);
          }
        }
      }
      .shopfoo {
        padding-bottom: 5rem;
        width: 100%;
        background: #fff;
        padding-top: 1.8rem;
        display: flex;
        flex-direction: column;
        .fooleft {
          display: flex;
          flex-direction: column;
          width: 100%;
          .leftcont {
            width: 90%;
            margin: 0 auto;
            h1 {
              text-align: center;
            }
            p {
              font-size: 1.2rem;
              letter-spacing: 0.2rem;
            }
          }
          .leftcategory {
            width: 90%;
            margin: 0 auto;
            margin-top: 5rem;
            h1 {
              text-align: center;
            }
            p {
              font-size: 1.2rem;
              letter-spacing: 0.3rem;
            }
          }
        }
        .fooright {
          margin-right: 0rem;
          margin: 0 auto;
          margin-top: 5rem;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .topbb {
            .productcontant {
              .title {
                h1 {
                  font-size: 1.2rem;
                  text-align: center;
                  margin-bottom: 1.2rem;
                }
              }
              .productcontantbtn {
                margin-bottom: 1.2rem;
                padding: 0.2rem;
                border-bottom: 0.05rem solid rgba(22, 22, 22, 0.61);
                border-top: 0.05rem solid rgba(22, 22, 22, 0.61);
                p {
                  color: rgba(22, 22, 22, 0.61);
                  font-size: 0.2rem;
                  text-align: center;
                }
              }
              .pp {
                padding-bottom: 3rem;
                p {
                }
              }
            }
            .productsafe {
              p {
                padding-bottom: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
