import{P as t,n as a,o as s,c as i,w as e,i as o,a as r,d as l,r as m,F as n,p as d,j as c}from"./index-61daba2b.js";import{F as p}from"./ForusImage.8b93ac27.js";import{B as u}from"./BottomBar.97697897.js";import{a as g}from"./analysis.431d9709.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.aec78ca1.js";import"./login.6095eadf.js";const h=f({name:"showCategory",data:()=>({list:[]}),components:{ForusImage:p,BottomBar:u},onLoad(){this.init(),g("访问","婚纱秀场")},onShareAppMessage:()=>(g("分享","婚纱秀场"),{title:"FORUS 婚纱秀场"}),methods:{async init(){let a=await t();this.list=a[0]},toDetail(t){a({url:`/pages/wedding/showfielddetail?id=${t}`})}}},[["render",function(t,a,p,u,g,f){const h=d("ForusImage"),w=o,_=d("BottomBar");return s(),i(w,{class:"container"},{default:e((()=>[r(w,{class:"list"},{default:e((()=>[(s(!0),l(n,null,m(g.list,(t=>(s(),i(w,{class:"list-item",key:t.id,onClick:a=>f.toDetail(t.id)},{default:e((()=>[t.titleImage?(s(),i(w,{key:0,class:"item-title",style:{width:"690rpx"}},{default:e((()=>[r(h,{width:"690","auto-fix":"",src:t.titleImage},null,8,["src"]),c('          <view class="">{{item.name}}</view>'),c('          <image src="/static/icon-arrow-right.png" style="width: 27rpx;height: 27rpx"></image>')])),_:2},1024)):c("v-if",!0),r(h,{src:t.cover,"auto-fix":"",width:"670"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1}),r(_)])),_:1})}],["__scopeId","data-v-3fadb16e"]]);export{h as default};
