"use strict";(self["webpackChunkfinaldatas"]=self["webpackChunkfinaldatas"]||[]).push([[277],{5259:function(t,a,s){s.d(a,{Z:function(){return $}});var e=s(3396),l=s(7139),o=s(9242),i=s.p+"img/x.4182fe3f.svg";const r=t=>((0,e.dD)("data-v-b2816d56"),t=t(),(0,e.Cn)(),t),d={class:"sdata"},c=r((()=>(0,e._)("div",{class:"datah1"},[(0,e._)("h1",null,"訂單資訊")],-1))),n={class:"datacontant"},u=r((()=>(0,e._)("thead",null,[(0,e._)("th",{class:"th1"},"產品圖片"),(0,e._)("th",{class:"th2"},"產品名稱"),(0,e._)("th",{class:"th3"},"數量"),(0,e._)("th",{class:"th4"},"金額")],-1))),p={class:"td1"},h=["src"],m=["onClick"],g={class:"td2"},_={class:"td3"},y={class:"num"},v=["onClick","disabled"],f=["onInput","onUpdate:modelValue"],b=["onClick","disabled"],w={class:"td4"},S={class:"dataallmoney"};function x(t,a,s,r,x,q){const k=(0,e.up)("LoadIng");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(k,{active:x.Load},null,8,["active"]),(0,e._)("div",d,[c,(0,e._)("div",n,[(0,e._)("table",null,[u,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(x.getcarts,(t=>((0,e.wg)(),(0,e.iD)("tr",{key:t.id},[(0,e._)("td",p,[(0,e._)("img",{class:"img1",src:t.product.ims,alt:""},null,8,h),(0,e._)("img",{onClick:a=>q.delcart(t),class:"img2",src:i,alt:""},null,8,m)]),(0,e._)("td",g,[(0,e._)("p",null,(0,l.zw)(t.product.title),1)]),(0,e._)("td",_,[(0,e._)("div",y,[(0,e._)("button",{onClick:a=>q.reduce(t),type:"button",disabled:1==t.qty}," - ",8,v),(0,e.wy)((0,e._)("input",{onInput:a=>q.textnum(t),class:"nums",type:"number","onUpdate:modelValue":a=>t.qty=a,onkeyup:"value=value.replace(/^(0+)|[^\\d]+/g,'')"},null,40,f),[[o.nr,t.qty]]),(0,e._)("button",{onClick:a=>q.Increase(t),type:"button",disabled:t.qty==t.product.unit}," + ",8,b)])]),(0,e._)("td",w,[(0,e._)("p",null,"$"+(0,l.zw)(t.product.price),1)])])))),128))])])]),(0,e._)("div",S,[(0,e._)("p",null,"總計$ "+(0,l.zw)(x.alltatle),1)])])],64)}var q={data(){return{getcarts:[],alltatl:0,alltatle:0,Load:!1,aas:{},onnum:0,sss:[]}},mounted(){this.getcart()},methods:{getcart(){const t="https://vue3-course-api.hexschool.io/api/smallgun/cart";this.axios.get(t).then((t=>{if(t.data.success){this.getcarts=t.data.data.carts,t.data.data.carts=this.getcarts;for(let t=0;t<this.getcarts.length;t++)this.getcarts[t].qty>this.getcarts[t].product.unit&&(this.getcarts[t].qty=Number(this.getcarts[t].product.unit)),this.getcarts[t].final_total=this.getcarts[t].qty*this.getcarts[t].product.price,this.alltatle+=this.getcarts[t].final_total}}))},textnum(t){t.qty>t.product.unit&&(t.qty=Number(t.product.unit)),this.alltatle=0;for(let a=0;a<this.getcarts.length;a++)this.alltatle+=this.getcarts[a].qty*this.getcarts[a].product.price},Increase(t){t.qty+=1,this.$emit("qty",t.qty),t.qty>t.product.unit&&(t.qty=Number(t.product.unit)),this.alltatle=0;for(let s=0;s<this.getcarts.length;s++)this.alltatle+=this.getcarts[s].qty*this.getcarts[s].product.price;const a=`https://vue3-course-api.hexschool.io/api/smallgun/cart/${t.id}`;this.axios.put(a,{data:{product_id:t.id,qty:t.qty}}).then((t=>{t.data.success}))},reduce(t){t.qty-=1,t.qty>t.product.unit&&(t.qty=Number(t.product.unit)),this.alltatle=0;for(let s=0;s<this.getcarts.length;s++)this.alltatle+=this.getcarts[s].qty*this.getcarts[s].product.price;const a=`https://vue3-course-api.hexschool.io/api/smallgun/cart/${t.id}`;this.axios.put(a,{data:{product_id:t.id,qty:t.qty}}).then((t=>{t.data.success}))},delcart(t){this.Load=!0;const a=`https://vue3-course-api.hexschool.io/api/smallgun/cart/${t.id}`;this.axios.delete(a).then((t=>{this.Load=!1,t.data.success&&(this.alltatle=0,this.getcart())}))}}},k=s(89);const D=(0,k.Z)(q,[["render",x],["__scopeId","data-v-b2816d56"]]);var $=D},242:function(t,a,s){s.d(a,{Z:function(){return W}});var e=s(3396),l=s.p+"img/process1.447e8798.svg",o=s.p+"img/checklist.7d7bcd57.png",i=s.p+"img/clipboard.c5c1b0cf.png",r=s.p+"img/aa.7f44a45c.png";const d=t=>((0,e.dD)("data-v-8c5a92d4"),t=t(),(0,e.Cn)(),t),c={class:"shopprocess"},n={class:"processtop"},u={class:"process"},p={class:"process1"},h=d((()=>(0,e._)("div",{class:"radiosimg"},[(0,e._)("img",{src:l,alt:""})],-1))),m={key:0,style:{color:"#239021"}},g={key:1,style:{color:"#fff"}},_={class:"process1"},y=d((()=>(0,e._)("div",{class:"radiosimg"},[(0,e._)("img",{src:o,alt:""})],-1))),v={key:0,style:{color:"#239021"}},f={key:1,style:{color:"#fff"}},b={class:"process1"},w=d((()=>(0,e._)("div",{class:"radiosimg"},[(0,e._)("img",{src:i,alt:""})],-1))),S={key:0,style:{color:"#239021"}},x={key:1,style:{color:"#fff"}},q={class:"process1"},k=d((()=>(0,e._)("div",{class:"radiosimg"},[(0,e._)("img",{src:r,alt:""})],-1))),D={key:0,style:{color:"#239021"}},$={key:1,style:{color:"#fff"}};function C(t,a,s,l,o,i){return(0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",n,[(0,e._)("div",u,[(0,e._)("div",p,[h,"/ShopCart"==this.$route.path?((0,e.wg)(),(0,e.iD)("p",m," step 1. 確認訂單 ")):((0,e.wg)(),(0,e.iD)("p",g,"step 1. 確認訂單"))]),(0,e._)("div",_,[y,"/ShopView/ShopStep2"==this.$route.path?((0,e.wg)(),(0,e.iD)("p",v," step 2. 建立訂單 ")):((0,e.wg)(),(0,e.iD)("p",f,"step 2. 建立訂單"))]),(0,e._)("div",b,[w,this.$route.path==`/ShopView/ShopStep3/${o.url}`?((0,e.wg)(),(0,e.iD)("p",S," step 3. 付款 ")):((0,e.wg)(),(0,e.iD)("p",x,"step 3. 付款"))]),(0,e._)("div",q,[k,this.$route.path==`/ShopView/ShopStep4/${o.url}`?((0,e.wg)(),(0,e.iD)("p",D," step 4. 完成訂單 ")):((0,e.wg)(),(0,e.iD)("p",$,"step 4. 完成訂單"))])])])])}var I={data(){return{url:""}},created(){this.url=this.$route.params.orderId}},V=s(89);const L=(0,V.Z)(I,[["render",C],["__scopeId","data-v-8c5a92d4"]]);var W=L},8518:function(t,a,s){s.r(a),s.d(a,{default:function(){return X}});var e=s(3396),l=s(7139),o=s(9242),i=s(5742);const r=t=>((0,e.dD)("data-v-b3836758"),t=t(),(0,e.Cn)(),t),d={class:"Shopbody"},c={class:"top"},n={class:"under"},u={class:"underwhite"},p={class:"whiteleft"},h={class:"leftw"},m=r((()=>(0,e._)("h1",null,"訂單資訊:",-1))),g={class:"names"},_=r((()=>(0,e._)("div",{class:"namep"},[(0,e._)("p",{style:{color:"#ff0000"}},"*"),(0,e._)("span",null,"收件人:")],-1))),y={class:"emailphone"},v={class:"phone"},f=r((()=>(0,e._)("div",{class:"phonep"},[(0,e._)("p",{style:{color:"#ff0000"}},"*"),(0,e._)("span",null,"連絡電話:")],-1))),b={class:"email"},w=r((()=>(0,e._)("div",{class:"emailp"},[(0,e._)("p",{style:{color:"#ff0000"}},"*"),(0,e._)("span",null,"E-mail:")],-1))),S={class:"address"},x=r((()=>(0,e._)("div",{class:"addressp"},[(0,e._)("p",{style:{color:"#ff0000"}},"*"),(0,e._)("span",null,"地址:")],-1))),q={class:"pay"},k=r((()=>(0,e._)("div",{class:"payp"},[(0,e._)("p",{style:{color:"#ff0000"}},"*"),(0,e._)("span",null,"付款方式:")],-1))),D=r((()=>(0,e._)("option",null,"請選擇付款方式",-1))),$=r((()=>(0,e._)("option",{class:"form-control form-control-lg",value:"applepay"}," applepay ",-1))),C=r((()=>(0,e._)("option",{class:"form-control form-control-lg",value:"goolepay"}," goolepay ",-1))),I=r((()=>(0,e._)("option",{class:"form-control form-control-lg",value:"信用卡"}," 信用卡 ",-1))),V=r((()=>(0,e._)("option",{class:"form-control form-control-lg",value:"ATM轉帳"}," ATM轉帳 ",-1))),L=[D,$,C,I,V],W={class:"message"},U=r((()=>(0,e._)("p",null,"留言:",-1))),Z={class:"whiteright"},M={class:"righttop"},N={class:"rightbtn"},Y=r((()=>(0,e._)("h1",null,"優惠券: 輸入codetext99享49折",-1))),T={class:"self"},z={class:"gobuy"},H={class:"btnleft"},O=r((()=>(0,e._)("img",{src:i,alt:""},null,-1))),A=r((()=>(0,e._)("p",null,"回上一頁",-1))),E=[O,A],F={class:"btnright"},j=r((()=>(0,e._)("p",null,"建立訂單",-1))),K=[j];function B(t,a,s,i,r,D){const $=(0,e.up)("LoadIng"),C=(0,e.up)("Shopone"),I=(0,e.up)("Shopdata");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)($,{active:r.Load},null,8,["active"]),(0,e._)("div",d,[(0,e._)("div",c,[(0,e.Wm)(C)]),(0,e._)("div",n,[(0,e._)("div",u,[(0,e._)("div",p,[(0,e._)("div",h,[m,(0,e._)("div",g,[_,(0,e.wy)((0,e._)("input",{class:(0,l.C_)(0==r.nameclass?"form-control":"form-control is-invalid"),"onUpdate:modelValue":a[0]||(a[0]=t=>r.userdata.name=t),type:"text",placeholder:"請輸入姓名"},null,2),[[o.nr,r.userdata.name]])]),(0,e._)("div",y,[(0,e._)("div",v,[(0,e._)("div",null,[f,(0,e.wy)((0,e._)("input",{placeholder:"請輸入電話",class:(0,l.C_)(0==r.phonecolor?"form-control":"form-control is-invalid"),"onUpdate:modelValue":a[1]||(a[1]=t=>r.userdata.phone=t),oninput:"value=value.replace(/[^0-9.]/g,'')",type:"text"},null,2),[[o.nr,r.userdata.phone]])])])]),(0,e._)("div",b,[w,(0,e.wy)((0,e._)("input",{class:(0,l.C_)(1==r.emailtrue?"form-control":"form-control is-invalid"),"onUpdate:modelValue":a[2]||(a[2]=t=>r.userdata.email=t),type:"email",placeholder:"請輸入Email"},null,2),[[o.nr,r.userdata.email]])]),(0,e._)("div",S,[x,(0,e.wy)((0,e._)("input",{class:(0,l.C_)(1==r.addressclass?"form-control":"form-control is-invalid"),"onUpdate:modelValue":a[3]||(a[3]=t=>r.userdata.address=t),type:"text",placeholder:"請輸入地址"},null,2),[[o.nr,r.userdata.address]])]),(0,e._)("div",q,[k,(0,e.wy)((0,e._)("select",{"onUpdate:modelValue":a[4]||(a[4]=t=>r.userdata.payWay=t),class:(0,l.C_)(1==r.payclass?"form-control":"form-control is-invalid")},L,2),[[o.bM,r.userdata.payWay]])]),(0,e._)("div",W,[U,(0,e.wy)((0,e._)("textarea",{"onUpdate:modelValue":a[5]||(a[5]=t=>r.userdata.message=t),class:"textarea",name:"",id:"",cols:"39",rows:"20",maxlength:"50"},null,512),[[o.nr,r.userdata.message]])])])]),(0,e._)("div",Z,[(0,e._)("div",M,[(0,e.Wm)(I,{ref:"cart"},null,512)]),(0,e._)("div",N,[Y,(0,e._)("div",T,[(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=t=>r.coupons=t),placeholder:"輸入優惠券折扣"},null,512),[[o.nr,r.coupons]]),(0,e._)("button",{onClick:a[7]||(a[7]=t=>D.coupon(r.coupons)),type:"button"},"套用")]),(0,e._)("div",z,[(0,e._)("div",H,[(0,e._)("button",{onClick:a[8]||(a[8]=(...t)=>D.ao&&D.ao(...t)),type:"button"},E)]),(0,e._)("div",F,[(0,e._)("button",{class:"b2 shape-ex3",type:"button",onClick:a[9]||(a[9]=(...t)=>D.step3&&D.step3(...t))},K)])])])])])])])],64)}var G=s(242),J=s(5259),P={data(){return{userdata:{name:"",phone:"",email:"",address:"",payWay:"請選擇付款方式",message:"",nphone:"",nemail:"",ndata:"",ngindo:"",nmessage:"",buydata:"",orderdata:"",ordertime:"",ordergindo:""},buyuserdata:{},presets:!1,id:"",url:"",coupons:"",phonecolor:!1,emailtrue:!0,nameclass:!1,addressclass:!0,payclass:!0,Load:!1}},components:{Shopone:G.Z,Shopdata:J.Z},created(){},watch:{userdata:{handler(){const t=/^\S+\S$/;t.test(this.userdata.name)?this.nameclass=!1:this.nameclass=!0,""==this.userdata.name&&(this.nameclass=!1);const a=/^(09)\S{8}$/;a.test(this.userdata.phone)?this.phonecolor=!1:this.phonecolor=!0,""==this.userdata.phone&&(this.phonecolor=!1);const s=/^\S+[@]{1}\S+[.]{1}[c]{1}[o]{1}[m]{1}$/;s.test(this.userdata.email)?this.emailtrue=!0:this.emailtrue=!1,""==this.userdata.email&&(this.emailtrue=!0);const e=/^\S+\S$/;e.test(this.userdata.address)?this.addressclass=!0:this.addressclass=!1,""==this.userdata.address&&(this.addressclass=!0),"請選擇付款方式"==this.userdata.payWay?this.payclass=!1:this.payclass=!0},deep:!0}},methods:{step3(){this.Load=!0;const t="https://vue3-course-api.hexschool.io/api/smallgun/cart";this.axios.get(t).then((t=>{if(t.data.success)if(""==t.data.data.carts||""==this.userdata.user||""==this.userdata.phone||""==this.userdata.email||""==this.userdata.address||1==this.phonecolor||0==this.emailtrue||"請選擇付款方式"==this.userdata.payWay)this.presets=!0,alert("請確認訂單內容");else{this.presets=!1;for(let l=0;l<t.data.data.carts.length;l++)t.data.data.carts[l].product.unit=Number(t.data.data.carts[l].product.unit)-t.data.data.carts[l].qty;const a=new Date;a.getFullYear(),a.getMonth(),a.getDate();a.setDate(a.getDate()),this.userdata.buydata=a.toISOString().split("T")[0];const s=new Date;a.getFullYear(),a.getMonth(),a.getDate();s.setDate(a.getDate()+365),this.userdata.ndata=s.toISOString().split("T")[0],this.buyuserdata=Object.assign({},this.userdata,t.data.data.carts);const e="https://vue3-course-api.hexschool.io/api/smallgun/order";this.axios.post(e,{data:{user:{name:this.buyuserdata.name,email:this.buyuserdata.email,tel:this.buyuserdata.phone,address:this.buyuserdata.address,payway:this.buyuserdata.payWay,nphone:"",nemail:"",nmessage:"",ndata:this.buyuserdata.ndata,ngindo:"",buydata:this.buyuserdata.buydata,orderdata:"",ordertime:"",ordergindo:""},message:this.buyuserdata.message}}).then((t=>{this.Load=!1,t.data.success&&(t.data.total=this.$refs.cart.alltatle,this.id=t.data.orderId,this.$router.push({path:`/ShopView/ShopStep3/${this.id}`}))}))}}))},coupon(t){const a="https://vue3-course-api.hexschool.io/api/smallgun/coupon";this.axios.post(a,{data:{code:t}}).then((t=>{t.data.success&&(this.$refs.cart.alltatle=Math.round(t.data.data.final_total))}))},ao(){this.$router.push({path:"/ShopCart"})}}},Q=s(89);const R=(0,Q.Z)(P,[["render",B],["__scopeId","data-v-b3836758"]]);var X=R},5742:function(t,a,s){t.exports=s.p+"img/chevron-left.55bda5dc.svg"}}]);
//# sourceMappingURL=277.643c43dc.js.map