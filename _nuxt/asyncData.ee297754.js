import{D as P,m as y,U as D,V as x,W as _,X as b,j as w,I as C}from"./entry.075451e2.js";const O=()=>null;function M(...o){var h;const u=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(u);let[t,l,a={}]=o;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const e=P(),f=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],d=()=>f()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:y(f()??((h=a.default)==null?void 0:h.call(a))??null),pending:y(!d()),error:y(e.payload._errors[t]?D(e.payload._errors[t]):null)});const r={...e._asyncData[t]};r.refresh=r.execute=(s={})=>{if(e._asyncDataPromises[t]){if(s.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(s._initial&&d())return f();r.pending.value=!0;const c=new Promise((n,i)=>{try{n(l(e))}catch(g){i(g)}}).then(n=>{if(c.cancelled)return e._asyncDataPromises[t];let i=n;a.transform&&(i=a.transform(n)),a.pick&&(i=k(i,a.pick)),r.data.value=i,r.error.value=null}).catch(n=>{var i;if(c.cancelled)return e._asyncDataPromises[t];r.error.value=n,r.data.value=w(((i=a.default)==null?void 0:i.call(a))??null)}).finally(()=>{c.cancelled||(r.pending.value=!1,e.payload.data[t]=r.data.value,r.error.value&&(e.payload._errors[t]=D(r.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=c,e._asyncDataPromises[t]};const m=()=>r.refresh({_initial:!0}),v=a.server!==!1&&e.payload.serverRendered;{const s=C();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(x(()=>{n.forEach(i=>{i()}),n.splice(0,n.length)}),_(()=>n.splice(0,n.length)))}v&&e.isHydrating&&d()?r.pending.value=!1:s&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?s._nuxtOnBeforeMountCbs.push(m):a.immediate&&m(),a.watch&&b(a.watch,()=>r.refresh());const c=e.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});s&&_(c)}const p=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(p,r),p}function k(o,u){const t={};for(const l of u)t[l]=o[l];return t}export{M as u};
