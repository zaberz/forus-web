import{K as t,o as s,c as a,w as e,i,a as o,e as r,r as l,F as n,p as m,f}from"./index-801d5391.js";import{T as u}from"./thumbImage.4bdb2deb.js";import{B as d}from"./BottomBar.d84a2552.js";import{a as p}from"./analysis.71e0be6c.js";import{F as c}from"./ForusImage.6bcc731a.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.3264ca66.js";import"./login.86d01993.js";const y=h({name:"stylistDetail",components:{ThumbImage:u,BottomBar:d,ForusImage:c},data:()=>({id:"",stylistInfo:{}}),async onLoad(s){this.id=s.id,this.stylistInfo=await t(this.id),p("查看","造型师-"+this.stylistInfo.name)},onShareAppMessage(){return p("分享","造型师-"+this.stylistInfo.name),{title:"FORUS MAKEUP"}},methods:{}},[["render",function(t,u,d,p,c,h){const y=m("ForusImage"),I=i,g=f,x=m("BottomBar");return s(),a(I,{class:"container"},{default:e((()=>[o(I,{class:"flex-1"},{default:e((()=>[o(I,null,{default:e((()=>[o(y,{src:c.stylistInfo.headerImg,"auto-fix":"",width:"750"},null,8,["src"])])),_:1}),o(I,null,{default:e((()=>[o(g,{src:"/static/stylist-divider.jpg",style:{width:"750rpx",height:"75rpx"}})])),_:1}),o(I,{style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},{default:e((()=>[(s(!0),r(n,null,l(c.stylistInfo.imageList,(t=>(s(),a(I,{style:{width:"370rpx","margin-bottom":"15rpx"}},{default:e((()=>[o(y,{src:t,width:"370",rate:3/4},null,8,["src"])])),_:2},1024)))),256))])),_:1}),o(I,null,{default:e((()=>[o(y,{src:c.stylistInfo.footerImg,"auto-fix":"",width:"750"},null,8,["src"])])),_:1})])),_:1}),o(x)])),_:1})}],["__scopeId","data-v-31e118b2"]]);export{y as default};
