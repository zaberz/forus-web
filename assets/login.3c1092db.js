import{aB as a,aC as t,D as e,aA as s,aD as n,aE as r,V as i,aF as o,aG as c,aH as u}from"./index-de1f54a6.js";const d="https://forus1.ruaaaa.com";function l(s){s.params=s.params||{};let n="";s.url.startsWith("http")||(n=d);let r={url:n+s.url+"?"+a.stringify(s.params),method:s.method,header:s.headers,data:s.data};return new Promise(((a,s)=>{t({...r,success:t=>{t.statusCode>299?(e({title:t.data,icon:"none"}),s(t)):a(t.data)},fail:a=>{console.error(a),s(a)}})}))}let p=null,m=!1,f=null;async function h(){let a=s.getItem(n);if(p||(p=await uni.checkSession().catch((a=>a))),"checkSession:ok"==p.errMsg&&(m=!0),a&&a.id&&m)return a;if(f)return f;let t=(await r()).code,e=uni.getAccountInfoSync();f=l({url:"https://auth.ruaaaa.com/openid",params:{code:t,appid:e.miniProgram.appId}});let u=await f,{openid:d,session_key:h}=u,y=await async function(a){return await o(a)}(d);return y=y?await w(y,{sessionKey:h}):await async function(a){let t=await c(a);return t}({openId:d,sessionKey:h}),i.next(y),s.setItem(n,y,2592e5),y}async function w(a,t){return await u(a.id,t)}export{h as l,w as p,l as r};
