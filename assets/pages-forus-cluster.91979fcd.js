import{v as t,x as e,y as s,o as i,c as l,w as a,i as r,j as o,d as u,r as n,F as c,a as m,p as d,b as h,t as f,e as p}from"./index-aa1ee2fe.js";import{T as g}from"./thumbImage.37c6a704.js";import{B as I}from"./BottomBar.b674798c.js";import{B as w}from"./BottomDirectory.f12d10fb.js";import{a as y}from"./analysis.34462940.js";import{F as _}from"./ForusImage.bcd17301.js";import{_ as x}from"./icon-arrow-right.e60f867b.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";import"./thumbImage.cb07f598.js";import"./login.ab98dc66.js";const b=j({name:"cluster",components:{ThumbImage:g,BottomBar:I,BottomDirectory:w,ForusImage:_},data:()=>({clusterList:[],clusterInfo:{},list:[],clusterId:""}),async onLoad(e){this.clusterId=e.id,await this.init();let s=await t();this.clusterList=s,console.log(s)},methods:{async init(){let t=await e(this.clusterId);this.clusterInfo=t,this.list=t.albumList||[],y("查看",this.clusterInfo.name)},toAlbum(t){let e=t.id,i="navigateTo";s().filter((t=>"pages/forus/cluster"===t.route)).length>=2&&(i="redirectTo"),console.log(i),uni[i]({url:`/pages/forus/album?id=${e}`})},changeCluster(t){let e=t.id;this.clusterId=e,this.init()}},onShareAppMessage(){return{title:this.clusterInfo.name,path:`/pages/forus/cluster?id=${this.clusterId}`}}},[["render",function(t,e,s,g,I,w){const y=r,_=p,j=d("ForusImage"),b=d("BottomDirectory"),v=d("BottomBar");return i(),l(y,{class:"container"},{default:a((()=>[o("    <view>{{clusterInfo.name}}</view>"),1==I.clusterInfo.showLabel?(i(),l(y,{key:0,class:"list"},{default:a((()=>[(i(!0),u(c,null,n(I.list,((t,e)=>(i(),l(y,{onClick:e=>w.toAlbum(t),key:e,class:"list-item"},{default:a((()=>[m(y,{class:"item-title d-flex justify-between item-center"},{default:a((()=>[m(y,null,{default:a((()=>[h(f(t.name),1)])),_:2},1024),m(_,{src:x,style:{width:"27rpx",height:"27rpx"}})])),_:2},1024),m(y,{style:{position:"relative",width:"670rpx"}},{default:a((()=>[o("          height: 470rpx"),m(j,{src:t.cover,"auto-fix":"",width:"670"},null,8,["src"])])),_:2},1024),o(" <view>{{item.name}}</view> ")])),_:2},1032,["onClick"])))),128))])),_:1})):(i(),l(y,{key:1,class:"two-column"},{default:a((()=>[(i(!0),u(c,null,n(I.list,((t,e)=>(i(),l(y,{onClick:e=>w.toAlbum(t),key:e,class:"list-item"},{default:a((()=>[m(y,{class:"item-title d-flex justify-between item-center"},{default:a((()=>[m(y,null,{default:a((()=>[h(f(t.name),1)])),_:2},1024),m(_,{src:x,style:{width:"27rpx",height:"27rpx"}})])),_:2},1024),m(y,{style:{position:"relative",width:"320rpx",height:"460rpx"}},{default:a((()=>[o("          height: 470rpx"),m(j,{src:t.cover,width:"320",rate:3/4},null,8,["src"])])),_:2},1024),m(y)])),_:2},1032,["onClick"])))),128))])),_:1})),m(b,{list:I.clusterList,onChange:w.changeCluster,clusterId:I.clusterId},null,8,["list","onChange","clusterId"]),m(v)])),_:1})}],["__scopeId","data-v-0d20958e"]]);export{b as default};
