<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active px-3 my-auto">
      <img src="../assets/big.png" class="" alt="">
      <div class="avs">
        <h5>Cytergamers</h5>
        <p>立刻組起!<br>與你的隊友組建最棒的電競團隊</p>
        <div class="cen">
          <button type="button">前去購買</button>
        </div>
      </div>
    </div>
        <div class="carousel-item active">
      <img src="../assets/big.png" class="" alt="">
      <div class="avs">
        <h5>Cytergamers</h5>
        <p>立刻組起!<br>與你的隊友組建最棒的電競團隊</p>
        <div class="cen">
          <button type="button">前去購買</button>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="homecont">
  <home></home>
</div>
</template>

<script>
import carousel from "bootstrap/js/dist/carousel";
import home from '../components/HomeContent.vue';
export default {
  components:{
    home,
  },
  updated(){
    const carousels = new carousel({
      interval: 2000,
      wrap: false
    })
    console.log(carousels) 
  }
}
</script>
<style scoped lang="scss">
.carousel{
  background: #000;
  width: 100%;

  .carousel-inner{
    width: 100%;
    .carousel-item{
      width: 100%;
      position: relative;
      img{
        width: 100%;
      }
      .avs{
        min-width: 200px;
        width: 30%;
        position: absolute;
        left: 30%;
        top: 50%;
        background: rgba(0, 0, 0, 0.404);
        border-radius: 20px 20px 20px 20px;
        h5{
          text-align: center;
          width: 100%;
          font-size: 2rem;
          color: #ED6C24;
          margin-bottom: 1.5rem;
          word-wrap:break-word
        };
        p{
          text-align: center;
          width: 100%;
          color: #ffffff;
          margin-bottom: 2.5rem;
          font-size: 1rem;
          
        };
        .cen{
          text-align: center;
          button{
          padding: 1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          background: #ed6a2485;
          color: #ffffff;
          border: 1px #ED6C24 solid;
          border-radius: 15px 15px 15px 15px;
        };
        }
      }
    }
  }
}
.homecont{
  background: #000;
  margin-top: 0.2rem;
  width: 100%;
  .grapcard{
    width: 100%;
    .grapcardimg{
      position: relative;
      width: 100%;
      img{
        width: 100%;
      };
    }
  }
}
</style>