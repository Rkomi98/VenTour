import{E as h,u as d,G as l,H as m,I as x,J as p,K as v}from"./entry.c4b45cc0.js";import{u as A}from"./asyncData.639d5b66.js";const y="__nuxt_component";async function C(f,u){const t=p(),c=d(),n=v(),{fetchKey:s,_fetchKeyBase:r}=n.proxy.$options,i=(typeof s=="function"?s(()=>""):s)||[r,c.fullPath,c.matched.findIndex(a=>Object.values(a.components||{}).includes(n.type))].join(":"),{data:e,error:o}=await A(`options:asyncdata:${i}`,()=>t.runWithContext(()=>u(t)));if(o.value)throw l(o.value);e.value&&typeof e.value=="object"&&Object.assign(await f,m(x(e.value)))}const g=function(...u){const[t,c]=u,{setup:n}=t;return!n&&!t.asyncData&&!t.head?{[y]:!0,...t}:{[y]:!0,_fetchKeyBase:c,...t,setup(s,r){const i=p(),e=n?Promise.resolve(i.runWithContext(()=>n(s,r))).then(a=>a||{}):{},o=[];if(t.asyncData&&o.push(C(e,t.asyncData)),t.head){const a=p();h(typeof t.head=="function"?()=>t.head(a):t.head)}return Promise.resolve(e).then(()=>Promise.all(o)).then(()=>e).finally(()=>{o.length=0})}}};export{g as d};
