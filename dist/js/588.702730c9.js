"use strict";(self["webpackChunkfinaldatas"]=self["webpackChunkfinaldatas"]||[]).push([[588],{72:function(s,t,e){e.d(t,{Z:function(){return D}});var r=e(3396),o=e(7139);const a=s=>((0,r.dD)("data-v-1f6cb886"),s=s(),(0,r.Cn)(),s),i={class:"personals"},l={class:"names"},d={class:"phone"},c={class:"email"},u={class:"pay"},p={class:"address"},n={class:"address"},h={key:0,class:"buy"},_=a((()=>(0,r._)("p",null,[(0,r.Uk)(" 付款狀態: "),(0,r._)("span",{style:{color:"#ff0000"}},"未付款")],-1))),g=[_],v={key:1,class:"buy"},f=a((()=>(0,r._)("p",null,[(0,r.Uk)(" 付款狀態: "),(0,r._)("span",null,"已付款")],-1))),m=[f];function y(s,t,e,a,_,f){return(0,r.wg)(),(0,r.iD)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.user,(s=>((0,r.wg)(),(0,r.iD)("div",{class:"personal",key:s.id},[(0,r._)("div",l,[(0,r._)("p",null,"收件人:"+(0,o.zw)(s.user.name),1)]),(0,r._)("div",d,[(0,r._)("p",null,"聯絡電話:"+(0,o.zw)(s.user.tel),1)]),(0,r._)("div",c,[(0,r._)("p",null,"E-mail:"+(0,o.zw)(s.user.email),1)]),(0,r._)("div",u,[(0,r._)("p",null,"付款方式:"+(0,o.zw)(s.user.payway),1)]),(0,r._)("div",p,[(0,r._)("p",null,"地址:"+(0,o.zw)(s.user.address),1)]),(0,r._)("div",n,[(0,r._)("p",null,"訂單編號:"+(0,o.zw)(s.id),1)]),0==s.is_paid?((0,r.wg)(),(0,r.iD)("div",h,g)):((0,r.wg)(),(0,r.iD)("div",v,m))])))),128))])}var w={data(){return{user:[],use:{},orderId:""}},created(){this.orderId=this.$route.params.orderId,this.gg()},methods:{gg(){const s=`https://vue3-course-api.hexschool.io/api/smallgun/order/${this.orderId}`;this.axios.get(s).then((s=>{s.data.success&&this.user.push(s.data.order)}))}}},$=e(89);const b=(0,$.Z)(w,[["render",y],["__scopeId","data-v-1f6cb886"]]);var D=b},4486:function(s,t,e){e.d(t,{Z:function(){return W}});var r=e(3396),o=e.p+"img/process1.447e8798.svg",a=e.p+"img/checklist.7d7bcd57.png",i=e.p+"img/clipboard.c5c1b0cf.png",l=e.p+"img/aa.7f44a45c.png";const d=s=>((0,r.dD)("data-v-01d499f2"),s=s(),(0,r.Cn)(),s),c={class:"shopprocess"},u={class:"processtop"},p={class:"process"},n={class:"process1"},h=d((()=>(0,r._)("div",{class:"radiosimg"},[(0,r._)("img",{src:o,alt:""})],-1))),_={key:0,style:{color:"#239021"}},g={key:1,style:{color:"#fff"}},v={class:"process1"},f=d((()=>(0,r._)("div",{class:"radiosimg"},[(0,r._)("img",{src:a,alt:""})],-1))),m={key:0,style:{color:"#239021"}},y={key:1,style:{color:"#fff"}},w={class:"process1"},$=d((()=>(0,r._)("div",{class:"radiosimg"},[(0,r._)("img",{src:i,alt:""})],-1))),b={key:0,style:{color:"#239021"}},D={key:1,style:{color:"#fff"}},k={class:"process1"},S=d((()=>(0,r._)("div",{class:"radiosimg"},[(0,r._)("img",{src:l,alt:""})],-1))),x={key:0,style:{color:"#239021"}},I={key:1,style:{color:"#fff"}};function z(s,t,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",u,[(0,r._)("div",p,[(0,r._)("div",n,[h,"/ShopCart"==this.$route.path?((0,r.wg)(),(0,r.iD)("p",_," step 1. 確認訂單 ")):((0,r.wg)(),(0,r.iD)("p",g,"step 1. 確認訂單"))]),(0,r._)("div",v,[f,"/ShopView/ShopStep2"==this.$route.path?((0,r.wg)(),(0,r.iD)("p",m," step 2. 建立訂單 ")):((0,r.wg)(),(0,r.iD)("p",y,"step 2. 建立訂單"))]),(0,r._)("div",w,[$,this.$route.path==`/ShopView/ShopStep3/${a.url}`?((0,r.wg)(),(0,r.iD)("p",b," step 3. 付款 ")):((0,r.wg)(),(0,r.iD)("p",D,"step 3. 付款"))]),(0,r._)("div",k,[S,this.$route.path==`/ShopView/ShopStep4/${a.url}`?((0,r.wg)(),(0,r.iD)("p",x," step 4. 完成訂單 ")):((0,r.wg)(),(0,r.iD)("p",I,"step 4. 完成訂單"))])])])])}var C={data(){return{url:""}},created(){this.url=this.$route.params.orderId}},Z=e(89);const L=(0,Z.Z)(C,[["render",z],["__scopeId","data-v-01d499f2"]]);var W=L},3318:function(s,t,e){e.r(t),e.d(t,{default:function(){return B}});var r=e(3396),o=e(5742);const a=s=>((0,r.dD)("data-v-4f101997"),s=s(),(0,r.Cn)(),s),i={class:"shopbody"},l={class:"shoptop"},d={class:"shopunder"},c={class:"undertop"},u=a((()=>(0,r._)("h1",null,"已建立訂單",-1))),p={class:"underbtn"},n=a((()=>(0,r._)("h1",null,"訂購人資料:",-1))),h=a((()=>(0,r._)("div",{class:"line"},null,-1))),_={class:"gobuy"},g={class:"btnleft"},v=a((()=>(0,r._)("img",{src:o,alt:""},null,-1))),f=a((()=>(0,r._)("p",null,"取消購買",-1))),m=[v,f],y={class:"btnright"},w=a((()=>(0,r._)("p",null,"確認購買",-1))),$=[w];function b(s,t,e,o,a,v){const f=(0,r.up)("LoadIng"),w=(0,r.up)("Shopone"),b=(0,r.up)("OrderShop"),D=(0,r.up)("PersonalData");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(f,{active:a.Load},null,8,["active"]),(0,r._)("div",i,[(0,r._)("div",l,[(0,r.Wm)(w)]),(0,r._)("div",d,[(0,r._)("div",c,[u,(0,r.Wm)(b,{ref:"prod"},null,512)]),(0,r._)("div",p,[n,h,(0,r.Wm)(D),(0,r._)("div",_,[(0,r._)("div",g,[(0,r._)("button",{onClick:t[0]||(t[0]=(...s)=>v.go1&&v.go1(...s)),type:"button"},m)]),(0,r._)("div",y,[(0,r._)("button",{onClick:t[1]||(t[1]=(...s)=>v.buysure&&v.buysure(...s)),class:"shape-ex3",type:"button"},$)])])])])])],64)}var D=e(4486),k=e(7139);const S=s=>((0,r.dD)("data-v-29ebfecd"),s=s(),(0,r.Cn)(),s),x={class:"sdata"},I=S((()=>(0,r._)("div",{class:"datah1"},[(0,r._)("h1",null,"訂單資訊")],-1))),z={class:"datacontant"},C=S((()=>(0,r._)("thead",null,[(0,r._)("th",{class:"th1"},"產品圖片"),(0,r._)("th",{class:"th2"},"產品名稱"),(0,r._)("th",{class:"th3"},"數量"),(0,r._)("th",{class:"th4"},"金額")],-1))),Z={class:"td1"},L=["src"],W={class:"td2"},H={class:"td3"},V={class:"num"},Y={class:"td4"},j={class:"dataallmoney"};function O(s,t,e,o,a,i){const l=(0,r.up)("LoadIng");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{active:s.Load},null,8,["active"]),(0,r._)("div",x,[I,(0,r._)("div",z,[(0,r._)("table",null,[C,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.user,(s=>((0,r.wg)(),(0,r.iD)("tr",{key:s.id},[(0,r._)("td",Z,[(0,r._)("img",{class:"img1",src:s.product.ims,alt:""},null,8,L)]),(0,r._)("td",W,[(0,r._)("p",null,(0,k.zw)(s.product.title),1)]),(0,r._)("td",H,[(0,r._)("div",V,[(0,r._)("p",null,(0,k.zw)(s.qty),1)])]),(0,r._)("td",Y,[(0,r._)("p",null,"$"+(0,k.zw)(s.product.price),1)])])))),128))])])]),(0,r._)("div",j,[(0,r._)("p",null,"總計$"+(0,k.zw)(a.alltotal),1)])])],64)}var q={data(){return{orderid:"",user:[],alltotal:0}},created(){this.orderid=this.$route.params.orderId,this.getcart()},methods:{getcart(){const s=`https://vue3-course-api.hexschool.io/api/smallgun/order/${this.orderid}`;this.axios.get(s).then((s=>{if(s.data.success){this.user=Object.values(s.data.order.products);for(let s=0;s<this.user.length;s++)this.alltotal+=Math.round(this.user[s].final_total)}}))}}},K=e(89);const P=(0,K.Z)(q,[["render",O],["__scopeId","data-v-29ebfecd"]]);var U=P,A=e(72),E={data(){return{user:{},aa:"",orderid:"",login:{username:"s16113161@stu.edu.tw",password:"aytjjos123"},Load:!1}},components:{Shopone:D.Z,OrderShop:U,PersonalData:A.Z},created(){this.orderid=this.$route.params.orderId},mounted(){},methods:{buysure(){this.Load=!0;const s=`https://vue3-course-api.hexschool.io/api/smallgun/pay/${this.orderid}`;this.axios.post(s).then((s=>{if(s.data.success){const s="https://vue3-course-api.hexschool.io/admin/signin";this.axios.post(s,this.login).then((s=>{if(s.data.success){const s=document.cookie.replace(/(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common["Authorization"]=s;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t).then((s=>{const t=`https://vue3-course-api.hexschool.io/api/smallgun/admin/product/${this.$refs.prod.user[0].product_id}`;this.$http.put(t,{data:{id:this.$refs.prod.user[0].product_id,title:this.$refs.prod.user[0].product.title,category:this.$refs.prod.user[0].product.category,unit:String(this.$refs.prod.user[0].product.unit-String(this.$refs.prod.user[0].qty)),origin_price:this.$refs.prod.user[0].product.origin_price,price:this.$refs.prod.user[0].product.price}}).then((s=>{const t="https://vue3-course-api.hexschool.io/logout";this.axios.post(t,this.login).then((()=>{this.Load=!1,this.$router.push({path:`/ShopView/ShopStep4/${this.orderid}`})}))}))}))}}))}}))},go1(){this.$router.push({path:"/"})}}};const M=(0,K.Z)(E,[["render",b],["__scopeId","data-v-4f101997"]]);var B=M},5742:function(s,t,e){s.exports=e.p+"img/chevron-left.55bda5dc.svg"}}]);
//# sourceMappingURL=588.702730c9.js.map