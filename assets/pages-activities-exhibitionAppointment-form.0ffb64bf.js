import{a7 as e,V as l,ag as a,o as t,c as s,w as o,i as u,a as n,b as d,t as i,d as r,r as c,F as f,j as m,H as p,D as x,z as b,aj as v,I as h,af as g}from"./index-aa1ee2fe.js";import{e as _,p as y}from"./exhibitionAppointment.cb27fb86.js";import{d as k}from"./dayjs.min.31dfacfd.js";import{a as w,u as N}from"./index.603a3602.js";import{p as V}from"./login.ab98dc66.js";import{a as C}from"./setting.c0f5f2be.js";const P={__name:"form",setup(P){const j=e({withPeopleNum:0,phone:"",lastName:"",firstName:"",gender:"",code:""});async function R(){if(!function(){let e=j.value,l="";e.timeRange?e.code?e.phone?e.firstName&&e.lastName||(l="请填写姓名"):l="请授权手机号":l="请输入预约码":l="请选择时间";if(l)return x({title:l,icon:"none"}),!1;return!0}())return;let e={...j.value,customer:l.value.id},a=(await y(e)).id;x({icon:"success",title:"预约成功"}),b({url:`/pages/activities/exhibitionAppointment/result?id=${a}`})}w(l.subscribe((e=>{e.wxPhone&&(j.value.phone=e.wxPhone)})));const M=e(!1);function D(){M.value=!0}const U=e([]),Y=e({}),z=e({});a((()=>{!async function(){let e=await _(),l=e.dateOption;A=e.peopleLimit,U.value=l.map((e=>({...e,date:k(e.date).format("MM月DD日"),dateValue:k(e.date).valueOf()})))}()}));let A=9;function I(){j.value.timeRange=z.value.timeRange,M.value=!1}function O(e){"plus"==e?j.value.withPeopleNum=Math.min(j.value.withPeopleNum+1,A):"minus"==e&&(j.value.withPeopleNum=Math.max(j.value.withPeopleNum-1,0))}const E=N(C);async function F(e){if(!e.detail||!e.detail.code)return void x({title:"请授权手机号",icon:"error"});let a=(await v({url:"https://auth.ruaaaa.com/phone",params:{code:e.detail.code,appid:E.value}})).phone_info.phoneNumber;j.value.phone=a,l.next({...l.value,wxPhone:a}),V(l.value,{wxPhone:a})}return(e,l)=>{const a=u,x=h,b=g;return t(),s(a,{class:"text-center"},{default:o((()=>[n(a,{class:"h-12"}),n(a,{class:"mx-auto inline-block bg-black px-2 py-1 text-center text-xl font-bold text-white"},{default:o((()=>[d(" 人生四格预约 ")])),_:1}),n(a,{class:"mt-8 px-6 text-left width-full"},{default:o((()=>[Y.value.date?(t(),s(a,{key:1,class:"border-b border-solid pb-1",onClick:D},{default:o((()=>[d(i(Y.value.date)+" "+i(z.value.timeRange),1)])),_:1})):(t(),s(a,{key:0,class:"border-b border-solid pb-1 text-gray-500",onClick:D},{default:o((()=>[d("请选择日期和时间*")])),_:1})),M.value?(t(),s(a,{key:2,class:"fixed top-0 left-0 z-10 flex h-screen w-screen items-end"},{default:o((()=>[n(a,{onClick:l[0]||(l[0]=e=>M.value=!1),class:"absolute top-0 right-0 bottom-0 left-0 bg-blacks80"}),n(a,{class:"relative z-10 w-full bg-white"},{default:o((()=>[n(a,{class:"grid grid-cols-4 gap-y-4 px-6 py-6 text-center"},{default:o((()=>[(t(!0),r(f,null,c(U.value,(e=>(t(),s(a,{class:p([{"text-blue-800":Y.value.date==e.date},""]),onClick:l=>{return a=e,Y.value=a,z.value={},j.value.timeRange="",void(j.value.day=k(a.dateValue).format("YYYY-MM-DD"));var a},key:e.date},{default:o((()=>[d(i(e.date),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),n(a,{class:"mt-4 grid grid-cols-4 gap-y-4 border-y border-solid border-gray-300 px-6 py-6 text-center"},{default:o((()=>[Y.value.date?(t(!0),r(f,{key:1},c(Y.value.time,(e=>(t(),s(a,{key:e,class:p([{"text-blue-800":z.value.timeRange==e.timeRange,"text-gray-500":e.disable,"line-through\t":e.disable},"text-nowrap"]),onClick:l=>{var a;(a=e).disable||(z.value=a,j.value.timeRange=a.timeRange)}},{default:o((()=>[d(i(e.timeRange),1)])),_:2},1032,["class","onClick"])))),128)):(t(),s(a,{key:0},{default:o((()=>[d("请选择日期")])),_:1}))])),_:1}),n(a,{onClick:I,class:"mt-4 text-center underline underline-offset-4"},{default:o((()=>[d("确认")])),_:1}),n(a,{style:{height:"env(safe-area-inset-bottom)"},class:""})])),_:1})])),_:1})):m("v-if",!0)])),_:1}),n(a,{class:"mx-6 mt-6 border-b border-solid pb-1 text-left"},{default:o((()=>[n(x,{modelValue:j.value.code,"onUpdate:modelValue":l[1]||(l[1]=e=>j.value.code=e),type:"text",placeholder:"预约码"},null,8,["modelValue"])])),_:1}),n(a,{class:"mt-6 flex justify-between px-6"},{default:o((()=>[n(a,{class:"flex-1 text-left"},{default:o((()=>[d("同行拍摄人数")])),_:1}),n(a,{class:"flex item-center"},{default:o((()=>[n(a,{class:"px-4",onClick:l[2]||(l[2]=e=>O("minus"))},{default:o((()=>[d("-")])),_:1}),n(a,{class:"mx-2 w-8 bg-gray-100 text-center"},{default:o((()=>[d(i(j.value.withPeopleNum),1)])),_:1}),n(a,{class:"px-4",onClick:l[3]||(l[3]=e=>O("plus"))},{default:o((()=>[d("+")])),_:1})])),_:1})])),_:1}),n(a,{class:"mx-auto mt-20 inline-block bg-black px-2 py-1 text-center text-xl font-bold text-white"},{default:o((()=>[d(" 预约信息")])),_:1}),n(a,{class:"px-6 text-left"},{default:o((()=>[n(a,{class:"mt-8 flex border-b border-solid"},{default:o((()=>[n(x,{class:"flex-1",modelValue:j.value.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>j.value.phone=e),placeholder:"手机号码*",type:"text"},null,8,["modelValue"]),j.value.phone?m("v-if",!0):(t(),s(b,{key:0,"open-type":"getPhoneNumber",onGetphonenumber:F,class:"text-sm underline underline-offset-2"},{default:o((()=>[d("微信手机号验证")])),_:1}))])),_:1}),n(a,{class:"mt-6 flex gap-4"},{default:o((()=>[n(a,{class:"flex-1 border-b border-solid"},{default:o((()=>[n(x,{modelValue:j.value.firstName,"onUpdate:modelValue":l[5]||(l[5]=e=>j.value.firstName=e),type:"text",placeholder:"姓*"},null,8,["modelValue"])])),_:1}),n(a,{class:"flex-1 border-b border-solid"},{default:o((()=>[n(x,{modelValue:j.value.lastName,"onUpdate:modelValue":l[6]||(l[6]=e=>j.value.lastName=e),type:"text",placeholder:"名*"},null,8,["modelValue"])])),_:1})])),_:1}),n(a,{class:"mt-8 flex"},{default:o((()=>[n(a,{onClick:l[7]||(l[7]=e=>j.value.gender=2),class:"flex item-center"},{default:o((()=>[n(a,{class:p([{"bg-black":2==j.value.gender},"h-4 w-4 border border-solid"])},null,8,["class"]),n(a,{class:"ml-2"},{default:o((()=>[d("女")])),_:1})])),_:1}),n(a,{onClick:l[8]||(l[8]=e=>j.value.gender=1),class:"ml-8 flex item-center"},{default:o((()=>[n(a,{class:p([{"bg-black":1==j.value.gender},"h-4 w-4 border border-solid"])},null,8,["class"]),n(a,{class:"ml-2"},{default:o((()=>[d("男")])),_:1})])),_:1})])),_:1})])),_:1}),n(a,{class:"mt-12 text-center underline underline-offset-4",onClick:R},{default:o((()=>[d(" 预约 ")])),_:1}),n(a,{class:"mt-4 pl-6 text-left text-xs text-gray-400"},{default:o((()=>[n(a,null,{default:o((()=>[d("* 此页面预约为人生四格拍摄档期,并非门店拍摄预约。")])),_:1}),n(a,null,{default:o((()=>[d("* 如需试纱档期请联系客服预约。")])),_:1})])),_:1})])),_:1})}}};export{P as default};
