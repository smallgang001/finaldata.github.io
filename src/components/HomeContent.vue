<template>
    <div class="contant">
        <div class="grapcard">
            <div class="img">
                <div class="imgh1"><h1>顯示卡</h1></div>
                <p>NVIDIA Reflex <br>提供終極競爭優勢。<br>最低延遲。最佳反應速度。</p>
                <div class="aa"><a  href="#">前去購買 ></a></div>
            </div>
            <div class="grapcardcontant">
                <div class="grapleft">
                    <h2>GEFORCE RTX 30 系列</h2>
                    <p>GeForce RTX™ 30 系列 GPU 帶給玩家和創作者終極效能。<br>由 NVIDIA 第二代 RTX Ampere 架構支援，採用全新的 RT 核心、<br>Tensor 核心以及串流多處理器，打造最逼真的光線追蹤繪圖技術<br>和先進人工智慧功能。</p>
                </div>
                <div class="grapright">
                    <h2>顯示卡人氣精選</h2>
                    <div class="rightp">
                        <p>NVIDIA GeForce RTX 3090</p>
                        <p>AMD Radeon RX 6500 XT</p>
                        <p>GEFORCE RTX 3080 TI</p>
                        <p>AMD Radeon RX 6600</p>
                        <p>GEFORCE RTX 3060 TI</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="memory">
            <div class="mimg">
                <div class="mimgh1">
                    <h1>記憶體</h1>
                </div>
                <p>全新散熱片設計及更多樣化的 RGB 炫彩燈效<br>可使用 Kingston FURY CTRL 或主機板製造商軟體，<br>自訂各種流暢酷炫的 RGB 燈效1，<br>讓遊戲玩家隨心打造個人風格。</p>
                <div class="memorya"><a href="#">前去購買 ></a></div>
            </div>
            <div class="memorycontant">
                <div class="memoryh1">
                    <h1>Kingston FURY Beast DDR5 RGB 記憶體高達 6000MT/s*</h1>
                </div>
                <h1>高達 6000MT/s*</h1>
                <p>Kingston FURY™ Beast DDR5 RGB1 讓您在新一代遊戲平台上憑藉頂尖技術恣意超頻！<br>憑藉翻倍的 Bank 和突發長度，DDR5 記憶體在速度上有卓越的提升。</p>
                <p>可透過 Kingston FURY CTRL 軟體和專利 Infrared Sync Technology™ 控制的 RGB 客製化炫彩燈效，<br>加上全新的散熱片設計，讓您無論在遊戲內還是現實世界中，都能獨一無二、與眾不同。</p>
            </div>
        </div>
        <div class="motherboard">
            <div class="motherboardimg">
                <div class="motherboardh1">
                    <h1>主機板</h1>
                </div>
                <div class="motherboarda"><a href="#">前去購買 ></a></div>
            </div>
            <div class="motherboardcontant">
                <h1>無與倫比的效能</h1>
                <div class="motherboradp">
                    <p>電腦技術發展一日千里，技嘉憑藉優異的研發能力緊跟最新趨勢，<br>為消費者提供先進的功能和最新的技術。技嘉 Z690 系列主機板搭載先進的電源供應解決方案<br>、最新的儲存標準和出色的連接性，確保玩家的電競主機效能不打折。</p>
                    <p>主機板搭載許多實用且操作簡易的軟體，可以幫助玩家更輕鬆掌控主機板的所有功能，<br>並提供具有出色美感的可自定義照明效果，讓玩家輕鬆展現獨特的個人風格。</p>
                </div>
            </div>
        </div>
        <div class="cpu">
                <div class="cpuimg">
                    <div class="cpuh1">
                        <h1>CPU</h1>
                    </div>
                <div class="cpua"><a href="#">前去購買 ></a></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contant{
        width: 100%;
        .grapcard{
            .img{
                background-image: url('../assets/grapcard.png');
                .imgh1{
                    width: 310px;
                    padding-top: 4rem;
                    padding-left: 2rem;
                    h1{
                    border-right: 0.8rem #2CF8DF solid;
                    font-size: 5rem;
                    color: #2CF8DF;
                    font-weight: bold
                };
                }
                p{
                    padding-top: 3.5rem;
                    padding-left: 2rem;
                    padding-bottom: 10rem;
                    color: #ffffff;
                    font-size: 1.5rem;
                    font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                };
                .aa{           
                    padding-left: 7rem;
                    padding-bottom: 1.5rem;
                    a{
                        font-size: 2rem;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        text-decoration:none;
                        color: #2CF8DF
                    }
                }
            };
            .grapcardcontant{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .grapleft{
                    h2{
                        padding-left: 2rem;
                        padding-top: 2.5rem;
                        padding-bottom: 3rem;
                        color: #50EA5F;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        font-size: 3rem
                    };
                    p{
                        padding-left: 2rem;
                        color: #ffffff;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        font-size: 1.4rem
                    }
                }
                .grapright{
                    margin-right: 3rem;
                    h2{
                        padding-top: 5rem;
                        padding-bottom: 1rem;
                        color: #50EA5F;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        font-size: 3rem
                    };
                    .rightp{
                        margin-bottom: 5.5rem;
                        p{
                        text-align: right;
                        padding-top: 1rem;
                        color: #FF8E26;
                        font-size: 1.5rem

                    }
                    }
                }
            }
        };
        .memory{
            .mimg{
                background-image: url('../assets/memory.png');
                .mimgh1{
                    width: 310px;
                    padding-left: 2rem;
                    padding-top: 4rem;
                    h1{
                    border-right: 0.8rem #E7A970 solid;
                    font-size: 5rem;
                    color: #E7A970;
                    font-weight: bold
                    };
                }
                p{
                    padding-top: 3.5rem;
                    padding-left: 2rem;
                    padding-bottom: 10rem;
                    color: #ffffff;
                    font-size: 1.5rem;
                    font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                };
                .memorya{           
                    padding-left: 7rem;
                    padding-bottom: 1.5rem;
                    a{
                        font-size: 2rem;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        text-decoration:none;
                        color: #E7A970
                    }
                }
            }
            .memorycontant{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: 6rem;
                overflow: hidden;
                .memoryh1{
                    margin-top: 1.7rem;
                    h1{
                        width: 100%;
                        color: #F8A5A5;
                        position: relative;
                        font-size: 1.8rem;
                        &::before{
                            position: absolute;
                            left: 105%;
                            content:'';
                            width: 50%;
                            border-top: 0.05rem #F8A5A5 solid;
                            display: flex;
                            top: 50%
                        };
                        &::after{
                            position: absolute;
                            right:105%;
                            content:'';
                            width: 50%;
                            border-top: 0.05rem #F8A5A5 solid;
                            top:50%
                        }
                    }
                }
                h1{
                    color: #F8A5A5;
                    font-size: 1.8rem;
                    padding-top: 1rem;
                };
                p{
                    font-size: 1.3rem;
                    color: #ffffff;
                    padding-top: 2.3rem;
                }
            }
        }
        .motherboard{
            .motherboardimg{
                background-image: url('../assets/motherboard.png');
                .motherboardh1{
                    width: 310px;
                    padding-left: 2rem;
                    padding-top: 4rem;
                    padding-bottom: 27rem;
                    h1{
                    border-right: 0.8rem #E17D7D solid;
                    font-size: 5rem;
                    color: #E17D7D;
                    font-weight: bold
                    };
                };
                .motherboarda{
                    padding-bottom: 3rem;
                    padding-left: 7rem;
                    a{
                        margin-left: 7rem;
                        font-size: 2rem;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        text-decoration:none;
                        color: #E17D7D;
                    }
                }
            }
            .motherboardcontant{
                margin-top: 2.5rem;
                margin-left: 6.5rem;
                margin-bottom: 3.5rem;
                h1{
                    font-size: 4rem;
                    color: #E17D7D
                };
                .motherboradp{
                    
                    p{
                        font-size: 1.7rem;
                        margin-top: 2rem;
                        color: #ffffff
                    }
                }
            };
        };
        .cpu{
            transform:rotate(-5deg);
            .cpuimg{
                background-image: url('../assets/cpu.png');
                .cpuh1{
                    width: 310px;
                    padding-left: 2rem;
                    padding-top: 4rem;
                    h1{
                    width: 60%;
                    border-bottom: 0.6rem #FF9EEA solid;
                    font-size: 5rem;
                    color: #FF9EEA;
                    font-weight: bold
                    };
                };
                .cpua{
                    padding-bottom: 39rem;
                    margin: 5rem;
                    a{
                        font-size: 2rem;
                        font-family: "微軟正黑體",Arial, Helvetica, sans-serif;
                        text-decoration:none;
                        color: #FF9EEA;
                    }
                };
            };
        };
    };
</style>