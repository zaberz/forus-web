import{M as a,n as t,o as s,c as e,w as o,i as r,a as i,b as l,d as n,r as m,F as d,p as u}from"./index-de1f54a6.js";import{T as p}from"./thumbImage.2414861f.js";import{B as c}from"./BottomBar.70384014.js";import{a as f}from"./analysis.46c131e3.js";import{F as g}from"./ForusImage.89a07a1b.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.cacba92b.js";import"./login.3c1092db.js";const _=h({name:"category",components:{ThumbImage:p,BottomBar:c,ForusImage:g},onLoad(a){this.init(),f("访问","婚纱品牌列表")},data:()=>({list:[]}),onShareAppMessage:()=>(f("分享","婚纱品牌列表"),{title:"FORUS 婚纱"}),methods:{async init(){let t;t=await a(),this.list=t[0]},toBrandDetail(a){t({url:`/pages/wedding/detail?id=${a}`})}}},[["render",function(a,t,p,c,f,g){const h=r,_=u("ForusImage");return s(),e(h,{class:"container"},{default:o((()=>[i(h,{class:"main"},{default:o((()=>[i(h,{class:"header"},{default:o((()=>[i(h,null,{default:o((()=>[l("全球100+婚纱礼服品牌")])),_:1}),i(h,null,{default:o((()=>[l("BRIDE")])),_:1})])),_:1}),i(h,{class:"content"},{default:o((()=>[(s(!0),n(d,null,m(f.list,(a=>(s(),e(h,{style:{width:"330rpx",height:"440rpx","margin-top":"30rpx"},onClick:t=>g.toBrandDetail(a.id)},{default:o((()=>[i(_,{src:a.cover,width:"330",rate:3/4},null,8,["src"])])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-290e4bc5"]]);export{_ as default};
