<template>
    <div class="footer">
        <div class="footerleft">
            <div class="top">
                <p>聯絡我們</p>
            </div>
            <div class="mil">
                <p>.</p>
            </div>
            <div class="under">
                <P>電話: 0916331375</P>
                <p>地址: 高雄市仁武區文教街26號</p>
                <p>E-mail: a09163313753@gmai.com</p>
            </div>
        </div>
        <div class="middle">
            <div class="middledf">
                <p>Copyright © Pinpin 2022 | 僅個人作品，無商業用途</p>
                <img class="img" src="../assets/flogo.svg" alt="">
            </div>
        </div>
        <div class="footerright">
            <div class="rightflex">
                <button class="bts" type="button">後台管理登入</button>
                <p>© Computer  components website<br>by Ging-Wen，Huang</p>
                <div class="community">
                    <a href="#"><img src="../assets/twitter.svg" alt=""></a>
                    <a href="#"><img src="../assets/message.svg" alt=""></a>
                    <a href="#"><img src="../assets/share.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer{
    background: #252323;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .footerleft{
        margin-left: 3rem;
        margin-top: 2rem;
        .top{
            width: 40%;
            border-bottom:1px #F4CECE solid;
            p{
                font-size: 2rem;
                color: #F4CECE;
                word-wrap:break-word;
            }
        };
        .mil{
            width: 40%;
            margin-top: 0.2rem;
            border-top: 1px #F4CECE solid
        };
        .under{
            p{
                margin-top: 2rem;
                color: #F4CECE;
                font-size: 1.5rem;
                word-wrap:break-word;
                
            }
        }
    };
    .middle{
        margin-right: 3rem;
        .middledf{
            margin-top: 2rem;
            p{
                text-align: center;
                border: 1px white solid;
                padding: 2rem;
                padding-left: 4rem;
                padding-right: 4rem;
                color: #F4CECE;
            }
            img{
                margin-left: 6rem;
            }
        }
    }
    .footerright{
        margin-top: 2rem;
        .rightflex{
            .bts{
                margin-left: 4.45rem;
                font-size: 1.5rem;
                color: #F4CECE;
                background: #252323;
                border: 1px white solid;
                padding: 0.5rem;
            }
            p{
                text-align: center;
                margin-top: 2rem;
                color: #F4CECE;
            };
            .community{
                margin-right: 2rem;
                margin-top: 2rem;
                a{
                    margin-left: 2rem;
                }
            }
        }
    }
}
</style>