<template>
<div class="toast-container position-absolute top-0 end-0 p-3">
    <TooSss v-for="(aab ,b) in cuncee" :key="b" :aab="aab"></TooSss>
</div>
</template>

<script>
import TooSss from'../components/TooStnelong.vue'
export default {
    data() {
        return {
            cuncee:[],
        }
    },
    components:{
        TooSss,
    },
    inject:['EmiTter'],
    mounted() {
        this.EmiTter.on('mess', e=>{
            const {style  , title , content} = e;
            this.cuncee.push({style , title , content})
        })
    },
}
</script>