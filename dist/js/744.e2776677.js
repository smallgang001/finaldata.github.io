"use strict";(self["webpackChunkfinaldatas"]=self["webpackChunkfinaldatas"]||[]).push([[744],{1660:function(a,t,s){s.d(t,{Z:function(){return p}});var d=s(3396),n=s(7139);const c=a=>((0,d.dD)("data-v-c9635976"),a=a(),(0,d.Cn)(),a),r={class:"contant",style:{color:"#ffffff"}},o={class:"condf"},e=c((()=>(0,d._)("div",{class:"top"},[(0,d._)("h1",null,"資料如下:")],-1))),i={class:"mul"};function l(a,t,s,c,l,v){const u=(0,d.up)("P");return(0,d.wg)(),(0,d.iD)("div",r,[(0,d._)("div",o,[e,(0,d._)("div",i,[(0,d._)("p",null,"您的訂單編號為: "+(0,n.zw)(l.aa.id),1),(0,d._)("p",null,"您的保固到期日: "+(0,n.zw)(l.contant.ndata),1),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Uk)("連絡電話: "+(0,n.zw)(l.contant.nphone),1)])),_:1}),(0,d._)("p",null,"聯絡信箱: "+(0,n.zw)(l.contant.nemail),1),(0,d._)("p",null,"問題敘述: "+(0,n.zw)(l.contant.nmessage),1)])])])}var v={data(){return{contant:{},aa:{}}},mounted(){this.a()},methods:{a(){this.orderId=this.$route.params.orderId;const a=`https://vue3-course-api.hexschool.io/api/smallgun/order/${this.orderId}`;this.axios.get(a).then((a=>{a.data.success&&(this.aa=a.data.order,this.contant=a.data.order.user)}))},search(){this.$router.push(`/RePairdata/FinalSure/${this.orderId}`)}}},u=s(89);const h=(0,u.Z)(v,[["render",l],["__scopeId","data-v-c9635976"]]);var p=h},9470:function(a,t,s){s.d(t,{Z:function(){return v}});var d=s(3396);const n={class:"repair"},c=(0,d.uE)('<div class="recon" data-v-7a6bdf60><h1 data-v-7a6bdf60>故障報修</h1><div class="ss" data-v-7a6bdf60></div><div class="pp" data-v-7a6bdf60><p class="p1" data-v-7a6bdf60>✓ 輸入訂單編號</p><p class="p2" data-v-7a6bdf60>✓ 一年內都可報修</p></div></div>',1),r=[c];function o(a,t){return(0,d.wg)(),(0,d.iD)("div",n,r)}var e=s(89);const i={},l=(0,e.Z)(i,[["render",o],["__scopeId","data-v-7a6bdf60"]]);var v=l},744:function(a,t,s){s.r(t),s.d(t,{default:function(){return k}});var d=s(3396);const n=a=>((0,d.dD)("data-v-4b8dc088"),a=a(),(0,d.Cn)(),a),c={class:"repairbody"},r={class:"retop"},o=n((()=>(0,d._)("div",{class:"aa"},[(0,d._)("div",{class:"online"})],-1))),e={class:"recontant"},i={class:"contant"},l=(0,d.uE)('<div class="contantons" data-v-4b8dc088><div class="contanttop" data-v-4b8dc088><div class="ats" data-v-4b8dc088><h1 style="color:#ff0000;" data-v-4b8dc088>注意*</h1></div><div style="color:#ffffff;" class="atscon" data-v-4b8dc088><p data-v-4b8dc088>1.請務必確保商品在維修範疇內</p><p data-v-4b8dc088> 2.請詳細描述商品之問題，如與敘述問題<br data-v-4b8dc088> 不相符，該商品則無法修理 </p></div><div style="color:#1d8133;" class="atsun" data-v-4b8dc088><p data-v-4b8dc088>欲知商品維修進度請回報修首頁查詢</p></div></div></div>',1),v={class:"contantml"},u={class:"under"},h={class:"unbtn"},p={class:"searchs"},f={class:"gohomes"},_=n((()=>(0,d._)("div",{class:"bb"},[(0,d._)("div",{class:"underline"})],-1)));function b(a,t,s,n,b,m){const g=(0,d.up)("Repairimg"),w=(0,d.up)("RePairdatasure");return(0,d.wg)(),(0,d.iD)("div",c,[(0,d._)("div",r,[(0,d.Wm)(g)]),o,(0,d._)("div",e,[(0,d._)("div",i,[l,(0,d._)("div",v,[(0,d.Wm)(w)]),(0,d._)("div",u,[(0,d._)("div",h,[(0,d._)("div",p,[(0,d._)("button",{onClick:t[0]||(t[0]=(...a)=>m.search&&m.search(...a)),class:"grow_search",type:"button"}," 查詢進度 ")]),(0,d._)("div",f,[(0,d._)("button",{onClick:t[1]||(t[1]=(...a)=>m.gohome&&m.gohome(...a)),class:"grow_gohome",type:"button"}," 回首頁 ")])])])])]),_])}var m=s(9470),g=s(1660),w={data(){return{orderId:"",ordercont:{}}},components:{Repairimg:m.Z,RePairdatasure:g.Z},created(){this.a()},inject:["EmiTter"],methods:{a(){this.orderId=this.$route.params.orderId;const a=`https://vue3-course-api.hexschool.io/api/smallgun/order/${this.orderId}`;this.axios.get(a).then((a=>{a.data.success}))},search(){this.$router.push(`/RePairdata/FinalSure/${this.orderId}`)},gohome(){this.$router.push("/")}}},I=s(89);const $=(0,I.Z)(w,[["render",b],["__scopeId","data-v-4b8dc088"]]);var k=$}}]);
//# sourceMappingURL=744.e2776677.js.map