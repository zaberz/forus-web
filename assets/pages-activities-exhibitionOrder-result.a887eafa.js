import{V as A,a7 as e,ae as t,ak as a,al as l,o as s,e as r,w as d,i as o,a as i,f as u,t as n,b as c,C as f,h as x,am as h}from"./index-13124b1b.js";import{U as p}from"./uqrcode.bac7be6f.js";import{o as m}from"./uni-app.es.c20465b3.js";import{a as b}from"./index.825059df.js";const q={__name:"result",setup(q){let g;m((async e=>{g=e.id,g?(V(g),T(g)):b(A.subscribe((A=>{A.id&&T(0,A.id).then((A=>{V(A.id)}))})))}));const v=e("");function V(A){let e=new p;e.data=A,e.size=200,e.make(),t().select("#qrcode").fields({node:!0,size:!0}).exec((A=>{console.log(A);const t=A[0].node;t.width=200,t.height=200;const l=t.getContext("2d");e.canvasContext=l,e.drawCanvas().then((()=>{a({canvas:t,success(A){console.log(A),v.value=A.tempFilePath},fail(A){console.log(55,A)}})}))}))}const w=e({});async function T(A,e=0){let t=await l(A,e);return w.value=t,t}function y(){f({urls:[v.value]})}return(A,e)=>{const t=x,a=o,l=h;return s(),r(a,null,{default:d((()=>[i(t,{class:"absolute top-1s2 left-1s2 z-0 -translate-x-1s2 -translate-y-1s2",style:{width:"714rpx",height:"1103rpx"},src:"/assets/bg-24af1d7c.png"}),i(a,{class:"relative z-10 flex h-screen w-screen flex-col justify-between overflow-x-hidden"},{default:d((()=>[i(a,{class:"flex items-center justify-between px-8 pt-8"},{default:d((()=>[i(t,{style:{width:"341rpx",height:"140rpx"},src:"/assets/image1-73c71f86.png"}),i(a,{class:"border border-solid p-2 outline outline-1 outline-offset-2"},{default:d((()=>[i(a,{class:"text-center text-lg font-bold"},{default:d((()=>[u("预约成功")])),_:1}),i(a,{class:"text-sm"},{default:d((()=>[u("请截图保存")])),_:1})])),_:1})])),_:1}),i(a,{class:"mt-24 bg-white text-center inline-block mx-auto"},{default:d((()=>[i(a,null,{default:d((()=>[u(n(w.value.firstName)+n(w.value.lastName),1)])),_:1}),w.value.time?(s(),r(a,{key:0,class:"mt-2"},{default:d((()=>[i(a,null,{default:d((()=>{var A;return[u(n(null==(A=w.value.time)?void 0:A.date),1)]})),_:1}),i(a,null,{default:d((()=>{var A;return[u(n(null==(A=w.value.time)?void 0:A.timeRange),1)]})),_:1})])),_:1})):c("v-if",!0)])),_:1}),i(a,{class:"relative inline-block flex justify-center border border-solid p-1 mx-auto overflow-hidden"},{default:d((()=>[v.value?(s(),r(t,{key:0,onClick:y,src:v.value,style:{width:"160rpx",height:"160rpx"}},null,8,["src"])):c("v-if",!0),i(l,{width:"200",height:"200",id:"qrcode",type:"2d",class:"absolute","canvas-id":"qrcode",style:{width:"200px",height:"200px",top:"2000px",left:"2000px"}})])),_:1}),i(a,null,{default:d((()=>[i(a,{class:"mx-4 flex items-center border-t border-solid text-xs"},{default:d((()=>[i(t,{style:{width:"234rpx",height:"56rpx"},src:"data:image/png;base64,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"}),i(a,{class:"ml-4 flex-1"},{default:d((()=>[i(a,null,{default:d((()=>[u("福州市仓山区金工路2号")])),_:1}),i(a,null,{default:d((()=>[u("海峡创意产业园")])),_:1}),i(a,null,{default:d((()=>[u("红坊6号楼1F")])),_:1})])),_:1}),i(a,null,{default:d((()=>[i(a,null,{default:d((()=>[u("4.13-")])),_:1}),i(a,null,{default:d((()=>[u("4.23")])),_:1})])),_:1})])),_:1}),i(a,{style:{height:"calc(env(safe-area-inset-bottom) + 16px)"}})])),_:1})])),_:1})])),_:1})}}};export{q as default};
