<template>
  <LoadIng :active="Load"></LoadIng>
  <div class="aboutshop">
    <div class="shopimg">
      <img src="../assets/shop.png" alt="" />
    </div>
    <div class="shopcontant">
      <div class="contantleft">
        <div class="ttop">
          <div class="top">
            <div class="toptop">
              <h1>商品清單</h1>
            </div>
            <div class="topbtn">
              <div class="bdiv">
                <button @click="aSSS((x = 1))" type="button">全部商品</button>
              </div>
              <br />
              <div class="bdiv2">
                <button @click="graphics((x = 1))" type="button">顯示卡</button>
              </div>
              <br />
              <div class="bdiv3">
                <button @click="memory((x = 1))" type="button">記憶體</button>
              </div>
              <br />
              <div class="bdiv4">
                <button @click="motherboard((x = 1))" type="button">
                  主機板
                </button>
              </div>
              <br />
              <div class="bdiv5">
                <button @click="cpu((x = 1))" type="button">CPU</button>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <img
            src="https://tshop.r10s.com/37f/d59/3ff7/d587/c054/0ee3/fcce/114fed9f980242ac110005.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="contantright">
        <LoadIng :active="Load"></LoadIng>
        <div class="productall">
          <div class="productshop" v-for="a in newproducts" :key="a.id">
            <div class="productleft">
              <div class="productcontant">
                <div class="producttitle">
                  <h1>{{ a.title }}</h1>
                </div>
                <div class="productcont">
                  <p>規格簡介</p>
                </div>
                <div class="productconts">
                  <p>{{ a.description }}</p>
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
            <div class="productright">
              <div class="righttop">
                <div class="rightimgs">
                  <button
                    type="button"
                    v-for="b in a.ima"
                    :key="b"
                    style="margin: auto"
                    @click="a.ims = b"
                  >
                    <img :src="b" alt="" />
                  </button>
                </div>
                <div class="rightima">
                  <div class="bgimg">
                    <img
                      :src="a.ims"
                      type="text"
                      style="display: block; margin: auto"
                    />
                  </div>
                </div>
              </div>
              <div class="rightcont">
                <div class="rightnum">
                  <div class="num">
                    <p class="p2">付款方式： | 刷卡 | Pi 錢包 |</p>
                    <p class="p3">ATM轉帳 | 信用卡分期</p>
                  </div>
                  <div class="price">
                    <div class="ormoney">
                      <p style="text-decoration: line-through">
                        原價: {{ a.origin_price }}
                      </p>
                    </div>
                    <div class="cunmoney">
                      <p>網路價:{{ a.price }}</p>
                    </div>
                  </div>
                </div>
                <div class="inputnum">
                  <div class="numinput">
                    <p>輸入數量:</p>
                    <button @click="reduce(a)" type="button" class="reduce">
                      -
                    </button>
                    <input
                      @input="textnum(a)"
                      class="num"
                      type="number"
                      v-model="a.num"
                      onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                    />
                    <button @click="Increase(a)" type="button" class="Increase">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div class="rightfoo">
                <div class="numbtn">
                  <button @click="newshopa(a)" type="button">
                    <P>詳細資訊</P>
                  </button>
                </div>
                <div class="cart">
                  <button
                    @click="ShoppingCart(a)"
                    :disabled="a.unit == 0"
                    class="buybtn shape-ex3"
                    type="button"
                  >
                    <img src="../assets/cartwhite.svg" alt="" />
                    <p>加入購物車</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagebtn">
      <FanYa
        :ppp="page"
        :newpage="onpage"
        :oldpage="unpage"
        @aa="aSSS"
        @as="aSSS"
        @ac="aSSS"
      ></FanYa>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aboutshop {
  width: 100%;
  margin-bottom: 3rem;
  .shopimg {
    width: 100%;
    margin-bottom: 5.5rem;
    img {
      width: 100%;
    }
  }
  .shopcontant {
    width: 100%;
    background: #171414;
    display: flex;
    flex-wrap: wrap;
    .contantleft {
      width: 20%;
      margin-left: 2rem;
      margin-top: 2.4rem;
      .ttop {
        margin: 0 auto;
        width: 85%;
        border-right: 2px #d35712 solid;
        .top {
          width: 95%;
          .toptop {
            margin-top: 2.8rem;
            margin-left: 4.25rem;
            h1 {
              color: white;
              font-size: 1.7rem;
              padding-left: 0.1rem;
              border-left: 0.3rem #d35712 solid;
              font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
            }
          }
          .topbtn {
            margin-top: 4rem;
            .bdiv {
              width: 68%;
              margin-left: 3.7rem;
              padding-bottom: 0.3rem;
              border-bottom: 0.15rem #d35712 solid;
              .color1 {
                color: #f18f0e;
              }
              button {
                padding-left: 0.8rem;
                background: none;
                color: #ffffff;
                font-size: 1.5rem;
                border: none;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .bdiv *:focus {
              color: #f18f0e;
            }
            .bdiv2 {
              width: 68%;
              margin-left: 3.7rem;
              padding-bottom: 0.3rem;
              border-bottom: 0.15rem #d35712 solid;
              .color1 {
                color: #f18f0e;
              }
              button {
                padding-left: 0.8rem;
                background: none;
                color: #ffffff;
                font-size: 1.5rem;
                border: none;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .bdiv2 *:focus {
              color: #f18f0e;
            }
            .bdiv3 {
              width: 68%;
              margin-left: 3.7rem;
              padding-bottom: 0.3rem;
              border-bottom: 0.15rem #d35712 solid;
              .color1 {
                color: #f18f0e;
              }
              button {
                padding-left: 0.8rem;
                background: none;
                color: #ffffff;
                font-size: 1.5rem;
                border: none;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .bdiv3 *:focus {
              color: #f18f0e;
            }
            .bdiv4 {
              width: 68%;
              margin-left: 3.7rem;
              padding-bottom: 0.3rem;
              border-bottom: 0.15rem #d35712 solid;
              .color1 {
                color: #f18f0e;
              }
              button {
                padding-left: 0.8rem;
                background: none;
                color: #ffffff;
                font-size: 1.5rem;
                border: none;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .bdiv4 *:focus {
              color: #f18f0e;
            }
            .bdiv5 {
              width: 68%;
              margin-left: 3.7rem;
              padding-bottom: 0.3rem;
              border-bottom: 0.15rem #d35712 solid;
              .color1 {
                color: #f18f0e;
              }
              button {
                padding-left: 0.8rem;
                background: none;
                color: #ffffff;
                font-size: 1.5rem;
                border: none;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .bdiv5 *:focus {
              color: #f18f0e;
            }
          }
        }
      }
      .btn {
        margin-left: 1rem;
        width: 80%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        img {
          width: 120%;
          min-width: 120px;
        }
      }
    }
    .contantright {
      width: 78%;
      padding-top: 3rem;
      padding-left: 3.2rem;
      .productall {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 100%;
        .productshop {
          margin-bottom: 2rem;
          margin-right: 2rem;
          box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.952) inset;
          border-radius: 1.9%;
          background: #ffffff;
          display: flex;
          flex-wrap: wrap;
          padding-top: 2rem;
          padding-left: 2rem;
          padding-right: 2rem;
          width: 46%;
          .productleft {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .productcontant {
              .producttitle {
                width: 95%;
                h1 {
                  font-size: 1rem;
                  line-height: 25px;
                  font-weight: bold;
                }
              }
              .productcont {
                width: 80%;
                p {
                  color: #242424;
                  margin-top: 1rem;
                  font-size: 00.5rem;
                  text-align: center;
                  padding-top: 0.3rem;
                  padding-bottom: 0.3rem;
                  border-bottom: 1px solid #242424;
                  border-top: 1px solid #242424;
                }
              }
              .productconts {
                width: 90%;
                p {
                  color: #4b4b4b;
                  margin-top: 1.5rem;
                  font-size: 0.8rem;
                  letter-spacing: 0.3rem;
                  line-height: 20px;
                }
              }
            }
            .productsafe {
              margin-top: 2rem;
              width: 80%;

              p {
                margin-bottom: 1rem;
                font-size: 0.5rem;
                line-height: 20px;
                img {
                }
              }
            }
          }
          .productright {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .righttop {
              display: flex;
              .rightimgs {
                width: 30%;
                button {
                  background: none;
                  border: none;
                  img {
                    margin-bottom: 1.2rem;
                    border: 1px solid #000000;
                    width: 100%;
                  }
                }
              }
              .rightima {
                position: relative;
                width: 70%;
                .bgimg {
                  width: 100%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  height: 100%;
                  background-repeat: no-repeat;
                  background-attachment: fixed;
                  background-position: center;
                  background-size: cover;
                  z-index: 1;
                  background-image: url("../assets/99.png");
                  img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 2;
                  }
                }
              }
            }
            .rightcont {
              margin-top: 2rem;
              .rightnum {
                display: flex;
                .num {
                  width: 45%;
                  .p2 {
                    font-size: 1px;
                  }
                  .p3 {
                    font-size: 1px;
                  }
                }
                .price {
                  width: 55%;
                  .ormoney {
                    p {
                      color: #4b4b4b;
                      font-size: 0.7rem;
                      text-align: right;
                    }
                  }
                  .cunmoney {
                    margin-top: 1rem;
                    p {
                      font-size: 1.1rem;
                      text-align: right;
                      font-weight: bold;
                    }
                  }
                }
              }
              .inputnum {
                display: flex;
                width: 100%;
                .numinput {
                  margin-top: 1rem;
                  width: 100%;
                  display: flex;
                  justify-content: end;
                  p {
                    font-size: 0.5rem;
                    padding-top: 0.4rem;
                    font-weight: bold;
                  }
                  .reduce {
                    background: #ffffff;
                    border: 0.1rem #033015 solid;
                  }
                  .num {
                    width: 12%;
                    background: #ffffff;
                    border: 0.1rem #033015 solid;
                  }
                  .num::-webkit-outer-spin-button,
                  ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                  .Increase {
                    background: #ffffff;
                    border: 0.1rem #033015 solid;
                  }
                }
              }
            }

            .rightfoo {
              margin-top: 1rem;
              margin-bottom: 2rem;
              display: flex;
              justify-content: end;
              .numbtn {
                margin-right: 1rem;
                button {
                  background: #033015;
                  color: white;
                  border: none;
                  font-size: 00.1rem;
                  padding: 0.95rem;
                  p {
                    color: #ffffff;
                    font-size: 1rem;
                    font-weight: bold;
                  }
                }
              }
              .buybtn {
                display: flex;
                background: #0f5f38;
                color: #ffffff;
                align-items: center;
                font-size: 0.1rem;
                border: none;
              }
              .shape-ex3 {
                padding-top: 0.6rem;
                padding-bottom: 0.6rem;
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
        }
      }
    }
  }
  .pagebtn {
    margin-top: 2rem;
    .btnby {
      display: flex;
      justify-content: center;
      button {
        background: white;
        font-size: 2rem;
      }
    }
  }
}
@media screen and(max-width: 720px) {
  .aboutshop {
    width: 100%;
    margin-bottom: 3rem;
    .shopcontant {
      width: 100%;
      display: flex;
      .contantleft {
        width: 100%;
        margin-left: 0rem;
        margin-top: 2.4rem;
        .ttop {
          margin: 0 auto;
          width: 85%;
          border-right: 0px;
          .top {
            width: 95%;
            .toptop {
              margin-top: 2.8rem;
              margin-left: 4.25rem;
              h1 {
                color: white;
                font-size: 2rem;
                padding-left: 0.1rem;
                border-left: 0.3rem #d35712 solid;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .topbtn {
              margin-top: 4rem;
              .bdiv {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv *:focus {
                color: #f18f0e;
              }
              .bdiv2 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv2 *:focus {
                color: #f18f0e;
              }
              .bdiv3 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv3 *:focus {
                color: #f18f0e;
              }
              .bdiv4 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv4 *:focus {
                color: #f18f0e;
              }
              .bdiv5 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv5 *:focus {
                color: #f18f0e;
              }
            }
          }
        }
        .btn {
          display: none;
        }
      }
      .contantright {
        width: 100%;
        padding-top: 3rem;
        padding-left: 3.2rem;
        .productall {
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 100%;
          .productshop {
            border-radius: 1.9%;
            background: #ffffff;
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: wrap;
            padding-top: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;
            width: 100%;
            .productleft {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .productcontant {
                .producttitle {
                  width: 100%;
                  h1 {
                    font-size: 1rem;
                    line-height: 25px;
                    font-weight: bold;
                  }
                }
                .productcont {
                  width: 100%;
                  p {
                    color: #242424;
                    margin-top: 1rem;
                    font-size: 00.5rem;
                    text-align: center;
                    padding-top: 0.3rem;
                    padding-bottom: 0.3rem;
                    border-bottom: 1px solid #242424;
                    border-top: 1px solid #242424;
                  }
                }
                .productconts {
                  width: 100%;
                  p {
                    color: #4b4b4b;
                    margin-top: 1.5rem;
                    font-size: 0.8rem;
                    letter-spacing: 0.3rem;
                    line-height: 20px;
                  }
                }
              }
              .productsafe {
                margin-top: 2rem;
                width: 100%;

                p {
                  margin-bottom: 1rem;
                  font-size: 0.5rem;
                  line-height: 20px;
                  img {
                  }
                }
              }
            }
            .productright {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .righttop {
                display: flex;
                .rightimgs {
                  width: 30%;
                  button {
                    background: none;
                    border: none;
                    img {
                      margin-bottom: 1.2rem;
                      border: 1px solid #000000;
                      width: 100%;
                    }
                  }
                }
                .rightima {
                  margin-top: 2rem;
                  width: 70%;
                  img {
                    width: 100%;
                  }
                }
              }
              .rightcont {
                .rightnum {
                  display: flex;
                  .num {
                    width: 45%;
                    .p2 {
                      font-size: 1px;
                    }
                    .p3 {
                      font-size: 1px;
                    }
                  }
                  .price {
                    width: 55%;
                    .ormoney {
                      p {
                        color: #4b4b4b;
                        font-size: 0.7rem;
                        text-align: right;
                      }
                    }
                    .cunmoney {
                      margin-top: 1rem;
                      p {
                        font-size: 1.1rem;
                        text-align: right;
                        font-weight: bold;
                      }
                    }
                  }
                }
                .inputnum {
                  display: flex;
                  width: 100%;
                  .numinput {
                    margin-top: 1rem;
                    width: 100%;
                    display: flex;
                    justify-content: end;
                    p {
                      font-size: 0.5rem;
                      padding-top: 0.4rem;
                      font-weight: bold;
                    }
                    .reduce {
                      background: #ffffff;
                      border: 0.1rem #033015 solid;
                    }
                    .num {
                      width: 12%;
                      background: #ffffff;
                      border: 0.1rem #033015 solid;
                    }
                    .num::-webkit-outer-spin-button,
                    ::-webkit-inner-spin-button {
                      -webkit-appearance: none;
                      margin: 0;
                    }
                    .Increase {
                      background: #ffffff;
                      border: 0.1rem #033015 solid;
                    }
                  }
                }
              }

              .rightfoo {
                margin-top: 1rem;
                margin-bottom: 2rem;
                display: flex;
                justify-content: end;
                .numbtn {
                  margin-right: 1rem;
                  button {
                    background: #033015;
                    color: white;
                    border: none;
                    font-size: 00.1rem;
                    padding: 0.95rem;
                    p {
                      color: #ffffff;
                      font-size: 1rem;
                      font-weight: bold;
                    }
                  }
                }
                .buybtn {
                  display: flex;
                  background: #0f5f38;
                  color: #ffffff;
                  align-items: center;
                  font-size: 0.1rem;
                  border: none;
                }
                .shape-ex3 {
                  padding-top: 0.6rem;
                  padding-bottom: 0.6rem;
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
          }
        }
      }
    }
    .pagebtn {
      margin-top: 2rem;
      .btnby {
        display: flex;
        justify-content: center;
        button {
          background: white;
          font-size: 2rem;
        }
      }
    }
  }
}

@media screen and(max-width: 720px) {
  .aboutshop {
    width: 100%;
    margin-bottom: 3rem;
    .shopcontant {
      width: 100%;
      display: flex;
      .contantleft {
        width: 100%;
        margin-left: 0rem;
        margin-top: 2.4rem;
        .ttop {
          margin: 0 auto;
          width: 85%;
          border-right: 0px;
          .top {
            width: 95%;
            .toptop {
              margin-top: 2.8rem;
              margin-left: 4.25rem;
              h1 {
                color: white;
                font-size: 2rem;
                padding-left: 0.1rem;
                border-left: 0.3rem #d35712 solid;
                font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
              }
            }
            .topbtn {
              margin-top: 4rem;
              .bdiv {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv *:focus {
                color: #f18f0e;
              }
              .bdiv2 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv2 *:focus {
                color: #f18f0e;
              }
              .bdiv3 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv3 *:focus {
                color: #f18f0e;
              }
              .bdiv4 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv4 *:focus {
                color: #f18f0e;
              }
              .bdiv5 {
                width: 68%;
                margin-left: 3.7rem;
                padding-bottom: 0.3rem;
                border-bottom: 0.15rem #d35712 solid;
                .color1 {
                  color: #f18f0e;
                }
                button {
                  padding-left: 0.8rem;
                  background: none;
                  color: #ffffff;
                  font-size: 1.5rem;
                  border: none;
                  font-family: "微軟正黑體", Arial, Helvetica, sans-serif;
                }
              }
              .bdiv5 *:focus {
                color: #f18f0e;
              }
            }
          }
        }
        .btn {
          display: none;
        }
      }
      .contantright {
        width: 100%;
        padding-top: 3rem;
        padding-left: 3.2rem;
        .productall {
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 100%;
          .productshop {
            border-radius: 1.9%;
            background: #ffffff;
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: wrap;
            padding-top: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;
            width: 100%;
            .productleft {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .productcontant {
                .producttitle {
                  width: 100%;
                  h1 {
                    font-size: 1rem;
                    line-height: 25px;
                    font-weight: bold;
                  }
                }
                .productcont {
                  width: 100%;
                  p {
                    color: #242424;
                    margin-top: 1rem;
                    font-size: 00.5rem;
                    text-align: center;
                    padding-top: 0.3rem;
                    padding-bottom: 0.3rem;
                    border-bottom: 1px solid #242424;
                    border-top: 1px solid #242424;
                  }
                }
                .productconts {
                  width: 100%;
                  p {
                    color: #4b4b4b;
                    margin-top: 1.5rem;
                    font-size: 0.8rem;
                    letter-spacing: 0.3rem;
                    line-height: 20px;
                  }
                }
              }
              .productsafe {
                margin-top: 2rem;
                width: 100%;

                p {
                  margin-bottom: 1rem;
                  font-size: 0.5rem;
                  line-height: 20px;
                  img {
                  }
                }
              }
            }
            .productright {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .righttop {
                display: flex;
                .rightimgs {
                  width: 30%;
                  button {
                    background: none;
                    border: none;
                    img {
                      margin-bottom: 1.2rem;
                      border: 1px solid #000000;
                      width: 100%;
                    }
                  }
                }
                .rightima {
                  margin-top: 2rem;
                  width: 70%;
                  img {
                    width: 100%;
                  }
                }
              }
              .rightcont {
                .rightnum {
                  display: flex;
                  .num {
                    width: 45%;
                    .p2 {
                      font-size: 1px;
                    }
                    .p3 {
                      font-size: 1px;
                    }
                  }
                  .price {
                    width: 55%;
                    .ormoney {
                      p {
                        color: #4b4b4b;
                        font-size: 0.7rem;
                        text-align: right;
                      }
                    }
                    .cunmoney {
                      margin-top: 1rem;
                      p {
                        font-size: 1.1rem;
                        text-align: right;
                        font-weight: bold;
                      }
                    }
                  }
                }
                .inputnum {
                  display: flex;
                  width: 100%;
                  .numinput {
                    margin-top: 1rem;
                    width: 100%;
                    display: flex;
                    justify-content: end;
                    p {
                      font-size: 0.5rem;
                      padding-top: 0.4rem;
                      font-weight: bold;
                    }
                    .reduce {
                      background: #ffffff;
                      border: 0.1rem #033015 solid;
                    }
                    .num {
                      width: 12%;
                      background: #ffffff;
                      border: 0.1rem #033015 solid;
                    }
                    .num::-webkit-outer-spin-button,
                    ::-webkit-inner-spin-button {
                      -webkit-appearance: none;
                      margin: 0;
                    }
                    .Increase {
                      background: #ffffff;
                      border: 0.1rem #033015 solid;
                    }
                  }
                }
              }

              .rightfoo {
                margin-top: 1rem;
                margin-bottom: 2rem;
                display: flex;
                justify-content: end;
                .numbtn {
                  margin-right: 1rem;
                  button {
                    background: #033015;
                    color: white;
                    border: none;
                    font-size: 00.1rem;
                    padding: 0.95rem;
                    p {
                      color: #ffffff;
                      font-size: 1rem;
                      font-weight: bold;
                    }
                  }
                }
                .buybtn {
                  display: flex;
                  background: #0f5f38;
                  color: #ffffff;
                  align-items: center;
                  font-size: 0.1rem;
                  border: none;
                }
                .shape-ex3 {
                  padding-top: 0.6rem;
                  padding-bottom: 0.6rem;
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
          }
        }
      }
    }
    .pagebtn {
      margin-top: 2rem;
      .btnby {
        display: flex;
        justify-content: center;
        button {
          background: white;
          font-size: 2rem;
        }
      }
    }
  }
}
</style>

<script>
import FanYa from "../components/FanYa.vue";
export default {
  components: {
    FanYa,
  },
  props: ["pa"],
  data() {
    return {
      page: "",
      newpage: [],
      products: [],
      newproducts: [],
      pages: [],
      Load: false,
      onpage: "",
      xxx: "",
      unpage: "",
      newnum: 0,
      sho: [],
      disab: false,

      orderid: "",
    };
  },
  created() {
    this.aSSS();
    this.aimg();
  },
  mounted() {},
  methods: {
    aimg() {},
    aSSS(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category != "輪播圖";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
          const d1 = document.querySelector(".bdiv button");
          d1.classList.add("color1");
          const d2 = document.querySelector(".bdiv2 button");
          d2.classList.remove("color1");
          const d3 = document.querySelector(".bdiv3 button");
          d3.classList.remove("color1");
          const d4 = document.querySelector(".bdiv4 button");
          d4.classList.remove("color1");
          const d5 = document.querySelector(".bdiv5 button");
          d5.classList.remove("color1");
        }
      });
    },
    graphics(x = 1) {
      this.colors = false;

      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "顯示卡";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
          const d1 = document.querySelector(".bdiv button");
          d1.classList.remove("color1");
          const d2 = document.querySelector(".bdiv2 button");
          d2.classList.add("color1");
          const d3 = document.querySelector(".bdiv3 button");
          d3.classList.remove("color1");
          const d4 = document.querySelector(".bdiv4 button");
          d4.classList.remove("color1");
          const d5 = document.querySelector(".bdiv5 button");
          d5.classList.remove("color1");
        }
      });
    },
    motherboard(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "主機板";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
          const d1 = document.querySelector(".bdiv button");
          d1.classList.remove("color1");
          const d2 = document.querySelector(".bdiv2 button");
          d2.classList.remove("color1");
          const d3 = document.querySelector(".bdiv3 button");
          d3.classList.remove("color1");
          const d4 = document.querySelector(".bdiv4 button");
          d4.classList.add("color1");
          const d5 = document.querySelector(".bdiv5 button");
          d5.classList.remove("color1");
        }
      });
    },
    memory(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "記憶體";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
          const d1 = document.querySelector(".bdiv button");
          d1.classList.remove("color1");
          const d2 = document.querySelector(".bdiv2 button");
          d2.classList.remove("color1");
          const d3 = document.querySelector(".bdiv3 button");
          d3.classList.add("color1");
          const d4 = document.querySelector(".bdiv4 button");
          d4.classList.remove("color1");
          const d5 = document.querySelector(".bdiv5 button");
          d5.classList.remove("color1");
        }
      });
    },
    cpu(x = 1) {
      this.Load = true;
      const Apiallpage = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(Apiallpage).then((e) => {
        this.Load = false;
        if (e.data.success) {
          this.pages = Object.values(e.data.products);
          this.products = this.pages.filter((e) => {
            return e.category == "CPU";
          });
          this.newpage = Math.ceil(this.products.length / 4);
          this.page = this.newpage;
          this.unpage = x;
          this.onpage = x;
          this.newproducts = this.products.slice((x - 1) * 4, x * 4);
          this.xxx = x;
          const d1 = document.querySelector(".bdiv button");
          d1.classList.remove("color1");
          const d2 = document.querySelector(".bdiv2 button");
          d2.classList.remove("color1");
          const d3 = document.querySelector(".bdiv3 button");
          d3.classList.remove("color1");
          const d4 = document.querySelector(".bdiv4 button");
          d4.classList.remove("color1");
          const d5 = document.querySelector(".bdiv5 button");
          d5.classList.add("color1");
        }
      });
    },
    textnum(a) {
      if (a.num > a.unit) a.num = a.unit;
      if (a.num < 1) a.num = 1;
    },
    Increase(a) {
      a.num += 1;
      if (a.num > a.unit) a.num = a.unit;
      if (a.num < 1) a.num = 1;
    },
    reduce(a) {
      a.num -= 1;
      if (a.num > a.unit) a.num = a.unit;
      if (a.num < 1) a.num = 1;
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
    newshopa(a) {
      this.$router.push({
        path: `/detail/detailedproduct/${a.id}`,
      });
    },
  },
};
</script>
