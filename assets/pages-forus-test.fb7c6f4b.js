import{y as t,x as s,n as e,o as a,c as o,w as r,i,j as l,a as m,d as u,r as n,F as c,p as d,b as f,t as p,e as h}from"./index-aa1ee2fe.js";import{T as g}from"./thumbImage.37c6a704.js";import{B as _}from"./BottomBar.b674798c.js";import{B}from"./BottomDirectory.f12d10fb.js";import{_ as I}from"./icon-arrow-right.e60f867b.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.cb07f598.js";const w=b({name:"cluster",components:{ThumbImage:g,BottomBar:_,BottomDirectory:B},data:()=>({clusterInfo:{},list:[],clusterId:"",shouldRedirect:!1}),onLoad(s){this.clusterId=s.id||11,this.init(),t().find((t=>"pages/forus/cluster"===t.route))&&(this.shouldRedirect=!0)},onShareAppMessage(){},methods:{async init(){let t=await s(this.clusterId);this.clusterInfo=t,this.list=t.albumList||[],console.log(t)},toAlbum(t){e({url:"/pages/forus/cluster?id=14"})}}},[["render",function(t,s,e,g,_,B){const b=i,w=h,j=d("ThumbImage"),x=d("BottomBar");return a(),o(b,{class:"container"},{default:r((()=>[l("    <view>{{clusterInfo.name}}</view>"),m(b,{class:"list"},{default:r((()=>[(a(!0),u(c,null,n(_.list,((t,s)=>(a(),o(b,{onClick:s=>B.toAlbum(t),key:s,class:"list-item"},{default:r((()=>[m(b,{class:"item-title d-flex justify-between item-center"},{default:r((()=>[m(b,null,{default:r((()=>[f(p(t.name),1)])),_:2},1024),m(w,{src:I,style:{width:"27rpx",height:"27rpx"}})])),_:2},1024),m(b,{style:{position:"relative",width:"670rpx",height:"470rpx"}},{default:r((()=>[m(j,{src:t.cover},null,8,["src"])])),_:2},1024),l(" <view>{{item.name}}</view> ")])),_:2},1032,["onClick"])))),128))])),_:1}),m(x)])),_:1})}],["__scopeId","data-v-5b451e0f"]]);export{w as default};
