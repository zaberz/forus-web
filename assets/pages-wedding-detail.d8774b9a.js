import{L as a,o as t,c as s,w as e,i as n,a as o,d as i,r,F as l,p as m,j as u}from"./index-61daba2b.js";import{T as d}from"./thumbImage.ea777cfe.js";import{B as f}from"./BottomBar.97697897.js";import{a as c}from"./analysis.431d9709.js";import{F as p}from"./ForusImage.8b93ac27.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.aec78ca1.js";import"./login.6095eadf.js";const g=h({name:"detail",components:{ForusImage:p,ThumbImage:d,BottomBar:f},data:()=>({brandInfo:{}}),async onLoad(a){this.id=a.id,await this.init(),c("访问",`婚纱详情-${this.brandInfo.name}`)},onShareAppMessage(){return c("分享",`婚纱详情-${this.brandInfo.name}`),{title:"FORUS 婚纱"}},methods:{async init(){let t=await a(this.id);this.brandInfo=t}}},[["render",function(a,d,f,c,p,h){const g=m("ForusImage"),I=n,y=m("ThumbImage"),_=m("BottomBar");return t(),s(I,{class:"c",style:{"max-width":"750px",margin:"auto"}},{default:e((()=>[o(I,{class:"content"},{default:e((()=>[o(g,{src:p.brandInfo.headerImg,width:"750","auto-fix":""},null,8,["src"]),(t(!0),i(l,null,r(p.brandInfo.detailConfig,(a=>(t(),s(I,null,{default:e((()=>[o(I,null,{default:e((()=>[o(g,{width:"750",src:a.name,"auto-fix":""},null,8,["src"])])),_:2},1024),u('        v-if="item.images.length === 3 || 1"'),1==a.type||null==a.type?(t(),s(I,{key:0,style:{}},{default:e((()=>[(t(!0),i(l,null,r(a.images,(a=>(t(),s(I,{class:"label-item",key:a},{default:e((()=>[o(y,{src:a},null,8,["src"])])),_:2},1024)))),128))])),_:2},1024)):2==a.type?(t(),s(I,{key:1},{default:e((()=>[(t(!0),i(l,null,r(a.images,(a=>(t(),s(I,{key:a},{default:e((()=>[o(y,{src:a,"auto-fix":""},null,8,["src"])])),_:2},1024)))),128))])),_:2},1024)):u("v-if",!0)])),_:2},1024)))),256))])),_:1}),o(_)])),_:1})}],["__scopeId","data-v-e11308b9"]]);export{g as default};
