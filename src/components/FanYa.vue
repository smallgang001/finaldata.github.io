<template>
<nav aria-label="Page navigation example">
  <div class="pagination justify-content-center btn-group groupbody" role="group" aria-label="Toolbar with button groups">
    <div class="page-item disabled btn-group groupheader" role="group">
      <button class="btn btn-outline-warning" type="button" :disabled="oldpage == 1" @click="$emit('ac',oldpage-1)">
        上一頁
      </button>
    </div>
    <div role="group" ref="bbb"  class="inputradio btn-group groupcontainer" v-for="a in page" :key="a" :ppp="a" @click="$emit('aa',a)">
        <button type="button" class="btn btn-outline-info">
        <label class="labelbtn" for="as">
          第{{a}}頁
        </label>
        <input class="inputbtn" style="transform:scale(0)" id="as"  type="radio" :value="a">
        
        </button>
    </div>
    <div role="group" class="page-item btn-group">
      <button class="btn btn-outline-warning" :disabled="newpage == page" type="button" @click="$emit('as',newpage+1)">
        下一頁
      </button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    props:['ppp','newpage','oldpage'],
    data() {
        return {
            page:[],
            aab:[]
            
        }
    },
    updated(){
        this.aa()
    },
    methods: {
        aa(){
            this.page = this.ppp;
        }, 
        aas(){
          console.log(this.$refs.bbb)       }
    },
}
</script>

<style lang="scss">
.groupbody{
  .groupcontainer{
    .labelbtn{
      font-size: 0.9rem;
      padding-left: 1rem;
    }
  }
}
  
</style>