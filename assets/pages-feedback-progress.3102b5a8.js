import{a1 as a,a2 as e,o as s,c as l,w as t,i,a as c,b as d,l as r,t as u,j as n,H as f}from"./index-61daba2b.js";import{d as o}from"./dayjs.min.353fba6a.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";const h=_({name:"progress",data:()=>({taskDetailData:{id:"",remark:"",subTask:[]},orderDetail:{}}),onLoad(a){this.id=a.id,this.getOrderDetail()},methods:{async getOrderDetail(){let e=await a(this.id);Object.keys(e).forEach((a=>{try{e[a]=JSON.parse(e[a])}catch(s){}})),this.orderDetail=e},async getTaskDetail(){let a=await e(this.id);this.taskDetailData=a,a.subTask.forEach((a=>{a.endText=o(a.endDate).format("YYYY-MM-DD")}))}}},[["render",function(a,e,o,_,h,g){const D=i;return s(),l(D,{class:"page-container"},{default:t((()=>[c(D,{class:"title"},{default:t((()=>[d("后期进度")])),_:1}),c(D,{class:"content-container"},{default:t((()=>[r("template",null,[c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("拍摄日期:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.photoDate),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("客户姓名:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.customerName),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("婚期:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.hunqi),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("拍摄内容:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.paisheneirong),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("婚摄影师:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.sheyingshiname),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("化妆师:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.huazhuangshi),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("摄影顾问:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.sheyingguwen),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("后期顾问:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.houqiguwen),1)])),_:1})])),_:1}),c(D,{class:"label short"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("后期时间:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.houqishijian),1)])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("选片时间:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.xuanpianshijian),1)])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("实际出片时间:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.shijichupianshijian),1)])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("第二次精修:")])),_:1}),c(D,{class:"center"},{default:t((()=>[d(u(h.orderDetail.diercijingxiushijian),1)])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("相册排版确认制作:")])),_:1}),h.orderDetail.xiangcepaiban?(s(),l(D,{key:0,class:"center"},{default:t((()=>[d(u(h.orderDetail.xiangcepaiban.text),1)])),_:1})):n("v-if",!0),h.orderDetail.xiangcepaiban?(s(),l(D,{key:1,class:"right"},{default:t((()=>[c(D,{class:f(["status",{active:0==h.orderDetail.xiangcepaiban.done}])},{default:t((()=>[d("未完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:1==h.orderDetail.xiangcepaiban.done}])},{default:t((()=>[d("完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:2==h.orderDetail.xiangcepaiban.done}])},{default:t((()=>[d("无")])),_:1},8,["class"])])),_:1})):n("v-if",!0)])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("相框确认制作:")])),_:1}),h.orderDetail.xiangkuangqurenzhizuo?(s(),l(D,{key:0,class:"center"},{default:t((()=>[d(u(h.orderDetail.xiangkuangqurenzhizuo.text),1)])),_:1})):n("v-if",!0),h.orderDetail.xiangkuangqurenzhizuo?(s(),l(D,{key:1,class:"right"},{default:t((()=>[c(D,{class:f(["status",{active:0==h.orderDetail.xiangkuangqurenzhizuo.done}])},{default:t((()=>[d("未完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:1==h.orderDetail.xiangkuangqurenzhizuo.done}])},{default:t((()=>[d("完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:2==h.orderDetail.xiangkuangqurenzhizuo.done}])},{default:t((()=>[d("无")])),_:1},8,["class"])])),_:1})):n("v-if",!0)])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("电子相册:")])),_:1}),h.orderDetail.dianzixiangce?(s(),l(D,{key:0,class:"center"},{default:t((()=>[d(u(h.orderDetail.dianzixiangce.text),1)])),_:1})):n("v-if",!0),h.orderDetail.dianzixiangce?(s(),l(D,{key:1,class:"right"},{default:t((()=>[c(D,{class:f(["status",{active:0==h.orderDetail.dianzixiangce.done}])},{default:t((()=>[d("未完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:1==h.orderDetail.dianzixiangce.done}])},{default:t((()=>[d("完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:2==h.orderDetail.dianzixiangce.done}])},{default:t((()=>[d("无")])),_:1},8,["class"])])),_:1})):n("v-if",!0)])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("成品规格:")])),_:1}),n('          <view class="center"></view>'),n('          <view class="right">{{orderDetail.chengpinguige}}</view>')])),_:1}),c(D,{style:{display:"flex",width:"100%"}},{default:t((()=>[c(D,{style:{flex:"1"}}),c(D,{style:{"text-align":"left","white-space":"pre-wrap","line-height":"1.8","padding-right":"30rpx"}},{default:t((()=>[d(u(h.orderDetail.chengpinguige),1)])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("相册是否到店:")])),_:1}),c(D,{class:"center"}),c(D,{class:"right"},{default:t((()=>[c(D,{class:f(["status",{active:0==h.orderDetail.xiangceshifoudaodian}])},{default:t((()=>[d("未完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:1==h.orderDetail.xiangceshifoudaodian}])},{default:t((()=>[d("完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:2==h.orderDetail.xiangceshifoudaodian}])},{default:t((()=>[d("无")])),_:1},8,["class"])])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("大小相框是否到店:")])),_:1}),c(D,{class:"center"}),c(D,{class:"right"},{default:t((()=>[c(D,{class:f(["status",{active:0==h.orderDetail.xiangkuangshifoudaodian}])},{default:t((()=>[d("未完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:1==h.orderDetail.xiangkuangshifoudaodian}])},{default:t((()=>[d("完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:2==h.orderDetail.xiangkuangshifoudaodian}])},{default:t((()=>[d("无")])),_:1},8,["class"])])),_:1})])),_:1}),c(D,{class:"label"},{default:t((()=>[c(D,{class:"left"},{default:t((()=>[d("客户取件:")])),_:1}),c(D,{class:"center"}),c(D,{class:"right"},{default:t((()=>[c(D,{class:f(["status",{active:0==h.orderDetail.kehuqujian}])},{default:t((()=>[d("未完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:1==h.orderDetail.kehuqujian}])},{default:t((()=>[d("完成")])),_:1},8,["class"]),c(D,{class:f(["status",{active:2==h.orderDetail.kehuqujian}])},{default:t((()=>[d("无")])),_:1},8,["class"])])),_:1})])),_:1})])])),_:1}),n("v-if",!0),c(D,{class:"placeholder",style:{height:"40rpx"}})])),_:1})}],["__scopeId","data-v-e675a147"]]);export{h as default};
