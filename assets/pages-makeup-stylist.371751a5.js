import{J as a,n as s,o as t,c as e,w as i,i as l,a as o,d as m,r,F as n,p as u,b as c,t as d}from"./index-de1f54a6.js";import{T as p}from"./thumbImage.2414861f.js";import{B as f}from"./BottomBar.70384014.js";import{a as _}from"./analysis.46c131e3.js";import{F as g}from"./ForusImage.89a07a1b.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.cacba92b.js";import"./login.3c1092db.js";const y=h({name:"stylist",data:()=>({list:[]}),components:{ThumbImage:p,BottomBar:f,ForusImage:g},async onLoad(){await this.init(),_("查看","makeup 首页")},onShareAppMessage:()=>(_("分享","makeup 首页"),{title:"FORUS MAKEUP"}),methods:{async init(){this.list=await a()},toDetail(a){s({url:`/pages/makeup/stylistDetail?id=${a}`})}}},[["render",function(a,s,p,f,_,g){const h=l,y=u("ForusImage"),j=u("BottomBar");return t(),e(h,{class:"container"},{default:i((()=>[o(h,{class:"list two-column"},{default:i((()=>[(t(!0),m(n,null,r(_.list,(a=>(t(),e(h,{class:"list-item",key:a.id},{default:i((()=>[o(h,{class:"list-item-title"},{default:i((()=>[o(h,null,{default:i((()=>[c(d(a.name),1)])),_:2},1024),o(h,null,{default:i((()=>[c("MAKEUP")])),_:1})])),_:2},1024),(t(!0),m(n,null,r(a.stylist,(a=>(t(),e(h,{class:"stylist-cover",onClick:s=>g.toDetail(a.id)},{default:i((()=>[o(y,{src:a.cover,width:"320",rate:3/4},null,8,["src"])])),_:2},1032,["onClick"])))),256))])),_:2},1024)))),128))])),_:1}),o(j)])),_:1})}],["__scopeId","data-v-3aed742b"]]);export{y as default};
