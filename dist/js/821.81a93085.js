"use strict";(self["webpackChunkfinaldatas"]=self["webpackChunkfinaldatas"]||[]).push([[821],{5398:function(s,a,t){t.d(a,{Z:function(){return D}});var l=t(3396),e=t(7139);const i=s=>((0,l.dD)("data-v-4f92ef48"),s=s(),(0,l.Cn)(),s),c={class:"personals"},d={class:"names"},r={class:"phone"},o={class:"email"},n={class:"pay"},p={class:"address"},u={class:"address"},v={key:0,class:"buy"},_=i((()=>(0,l._)("p",null,[(0,l.Uk)(" 付款狀態: "),(0,l._)("span",{style:{color:"#ff0000"}},"未付款")],-1))),g=[_],f={key:1,class:"buy"},h=i((()=>(0,l._)("p",null,[(0,l.Uk)(" 付款狀態: "),(0,l._)("span",null,"已付款")],-1))),m=[h];function w(s,a,t,i,_,h){return(0,l.wg)(),(0,l.iD)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.user,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"personal",key:s.id},[(0,l._)("div",d,[(0,l._)("p",null,"收件人:"+(0,e.zw)(s.user.name),1)]),(0,l._)("div",r,[(0,l._)("p",null,"聯絡電話:"+(0,e.zw)(s.user.tel),1)]),(0,l._)("div",o,[(0,l._)("p",null,"E-mail:"+(0,e.zw)(s.user.email),1)]),(0,l._)("div",n,[(0,l._)("p",null,"付款方式:"+(0,e.zw)(s.user.payway),1)]),(0,l._)("div",p,[(0,l._)("p",null,"地址:"+(0,e.zw)(s.user.address),1)]),(0,l._)("div",u,[(0,l._)("p",null,"訂單編號:"+(0,e.zw)(s.id),1)]),0==s.is_paid?((0,l.wg)(),(0,l.iD)("div",v,g)):((0,l.wg)(),(0,l.iD)("div",f,m))])))),128))])}var y={data(){return{user:[],use:{},orderId:""}},created(){this.orderId=this.$route.params.orderId,this.gg()},methods:{gg(){const s=`https://vue3-course-api.hexschool.io/api/smallgun/order/${this.orderId}`;this.axios.get(s).then((s=>{s.data.success&&this.user.push(s.data.order)}))}}},b=t(89);const k=(0,b.Z)(y,[["render",w],["__scopeId","data-v-4f92ef48"]]);var D=k},4486:function(s,a,t){t.d(a,{Z:function(){return V}});var l=t(3396),e=t.p+"img/process1.447e8798.svg",i=t.p+"img/checklist.7d7bcd57.png",c=t.p+"img/clipboard.c5c1b0cf.png",d=t.p+"img/aa.7f44a45c.png";const r=s=>((0,l.dD)("data-v-01d499f2"),s=s(),(0,l.Cn)(),s),o={class:"shopprocess"},n={class:"processtop"},p={class:"process"},u={class:"process1"},v=r((()=>(0,l._)("div",{class:"radiosimg"},[(0,l._)("img",{src:e,alt:""})],-1))),_={key:0,style:{color:"#239021"}},g={key:1,style:{color:"#fff"}},f={class:"process1"},h=r((()=>(0,l._)("div",{class:"radiosimg"},[(0,l._)("img",{src:i,alt:""})],-1))),m={key:0,style:{color:"#239021"}},w={key:1,style:{color:"#fff"}},y={class:"process1"},b=r((()=>(0,l._)("div",{class:"radiosimg"},[(0,l._)("img",{src:c,alt:""})],-1))),k={key:0,style:{color:"#239021"}},D={key:1,style:{color:"#fff"}},S={class:"process1"},$=r((()=>(0,l._)("div",{class:"radiosimg"},[(0,l._)("img",{src:d,alt:""})],-1))),C={key:0,style:{color:"#239021"}},I={key:1,style:{color:"#fff"}};function Z(s,a,t,e,i,c){return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",n,[(0,l._)("div",p,[(0,l._)("div",u,[v,"/ShopCart"==this.$route.path?((0,l.wg)(),(0,l.iD)("p",_," step 1. 確認訂單 ")):((0,l.wg)(),(0,l.iD)("p",g,"step 1. 確認訂單"))]),(0,l._)("div",f,[h,"/ShopView/ShopStep2"==this.$route.path?((0,l.wg)(),(0,l.iD)("p",m," step 2. 建立訂單 ")):((0,l.wg)(),(0,l.iD)("p",w,"step 2. 建立訂單"))]),(0,l._)("div",y,[b,this.$route.path==`/ShopView/ShopStep3/${i.url}`?((0,l.wg)(),(0,l.iD)("p",k," step 3. 付款 ")):((0,l.wg)(),(0,l.iD)("p",D,"step 3. 付款"))]),(0,l._)("div",S,[$,this.$route.path==`/ShopView/ShopStep4/${i.url}`?((0,l.wg)(),(0,l.iD)("p",C," step 4. 完成訂單 ")):((0,l.wg)(),(0,l.iD)("p",I,"step 4. 完成訂單"))])])])])}var z={data(){return{url:""}},created(){this.url=this.$route.params.orderId}},W=t(89);const x=(0,W.Z)(z,[["render",Z],["__scopeId","data-v-01d499f2"]]);var V=x},54:function(s,a,t){t.r(a),t.d(a,{default:function(){return B}});var l=t(3396),e=t.p+"img/check-circle1.a5a92db4.svg",i=t.p+"img/thanks.c4661988.png",c=t.p+"img/shopc1.f07a7f2f.png",d=t.p+"img/31.99b127d5.jpg",r=t.p+"img/51.71bc5cba.jpg",o=t(5742);const n=s=>((0,l.dD)("data-v-14a325ad"),s=s(),(0,l.Cn)(),s),p={class:"finalbody"},u={class:"finaltop"},v={class:"finalbtn"},_=n((()=>(0,l._)("div",{class:"finallogo"},[(0,l._)("img",{src:e,alt:""}),(0,l._)("p",null,"購買完成")],-1))),g={class:"finalcontant1"},f=(0,l.uE)('<div class="contant1left" data-v-14a325ad><div class="width80" data-v-14a325ad><div class="thank" data-v-14a325ad><p class="p1" data-v-14a325ad>❧</p><p class="lines" data-v-14a325ad>非常感謝您的購買</p><p class="p1" data-v-14a325ad>❧</p></div><img src="'+i+'" alt="" data-v-14a325ad></div></div>',1),h={class:"contant1right"},m=n((()=>(0,l._)("h1",null,"訂單資料",-1))),w=n((()=>(0,l._)("div",{class:"line"},null,-1))),y={class:"finalcontant2"},b={class:"contant2left"},k=n((()=>(0,l._)("div",{class:"recommend"},[(0,l._)("p",null,"精選商品!")],-1))),D={class:"commend"},S=n((()=>(0,l._)("img",{src:c,alt:""},null,-1))),$=n((()=>(0,l._)("img",{src:d,alt:""},null,-1))),C=n((()=>(0,l._)("img",{src:r,alt:""},null,-1))),I={class:"contant2right"},Z={class:"gobuy"},z={class:"btnleft"},W=n((()=>(0,l._)("img",{src:o,alt:""},null,-1))),x=n((()=>(0,l._)("p",null,"繼續逛逛",-1))),V=[W,x],j={class:"btnright"},E=n((()=>(0,l._)("p",null,"購買完成",-1))),P=[E];function U(s,a,t,e,i,c){const d=(0,l.up)("Shopone"),r=(0,l.up)("PersonalData"),o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",u,[(0,l.Wm)(d)]),(0,l._)("div",v,[_,(0,l._)("div",g,[f,(0,l._)("div",h,[m,w,(0,l.Wm)(r,{ref:"perdata"},null,512)])]),(0,l._)("div",y,[(0,l._)("div",b,[k,(0,l._)("div",D,[(0,l.Wm)(o,{to:"/about"},{default:(0,l.w5)((()=>[S])),_:1}),(0,l.Wm)(o,{to:"/about"},{default:(0,l.w5)((()=>[$])),_:1}),(0,l.Wm)(o,{to:"/about"},{default:(0,l.w5)((()=>[C])),_:1})])]),(0,l._)("div",I,[(0,l._)("div",Z,[(0,l._)("div",z,[(0,l._)("button",{onClick:a[0]||(a[0]=(...s)=>c.sc&&c.sc(...s)),type:"button"},V)]),(0,l._)("div",j,[(0,l.Wm)(o,{to:"/"},{default:(0,l.w5)((()=>[(0,l._)("button",{onClick:a[1]||(a[1]=(...a)=>s.surebuy&&s.surebuy(...a)),class:"shape-ex3",type:"button"},P)])),_:1})])])])])])])}var H=t(4486),K=t(5398),Y={data(){return{user:{},aa:""}},components:{Shopone:H.Z,PersonalData:K.Z},methods:{sc(){this.$router.push({path:"/about"})}}},q=t(89);const A=(0,q.Z)(Y,[["render",U],["__scopeId","data-v-14a325ad"]]);var B=A},5742:function(s,a,t){s.exports=t.p+"img/chevron-left.55bda5dc.svg"}}]);
//# sourceMappingURL=821.81a93085.js.map