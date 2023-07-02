import{_ as A}from"./nuxt-link.3cdb1c7a.js";import{o as i,c as m,w as u,a as e,t as n,u as E,j as h,k as b,h as v,f as d,b as f,l as o,F as y,r as x,m as k,d as w}from"./entry.2cc3ad4f.js";import{d as R}from"./component.fbb0856b.js";import{u as g}from"./fetch.6dc292e5.js";import{_ as V}from"./left-arrows.e179e44a.js";import"./asyncData.b3a5588b.js";const F={class:"hover-content2"},U={class:"subtitle"},j={__name:"AreaIdPage",props:["link","name"],setup(a){return(s,c)=>{const p=A;return i(),m(p,{class:"link",to:a.link},{default:u(()=>[e("div",F,[e("p",null,[e("span",U,"Area of investment: "+n(a.name),1)])])]),_:1},8,["to"])}}};const K={class:"hover-content2"},D={class:"subtitle"},H={__name:"Supervisor",props:["link","name"],setup(a){return(s,c)=>{const p=A;return i(),m(p,{class:"link",to:a.link},{default:u(()=>[e("div",K,[e("p",null,[e("span",D,"Supervisor: "+n(a.name),1)])])]),_:1},8,["to"])}}};const Q={id:"back"},T={class:"info-group"},q={class:"arrow"},z=e("img",{src:V},null,-1),G={class:"name"},J={id:"data-container-c"},W={class:"areas"},X={class:"ceo"},Y={class:"supervisor"},Z=e("hr",null,null,-1),ee={key:0},se={class:"row-section"},te={class:"column-c"},oe=["src"],ne={class:"column2-c"},ie={class:"description-container"},ae={class:"description"},ce={class:"description2"},le={href:"{{ company.link }}",target:"_blank"},_e={key:1},re={class:"column-section"},de={class:"column-c"},ue=["src"],pe={class:"column2-c"},me={class:"description-container2"},he={class:"description"},ve={class:"description2"},fe={class:"official-link"},ke={href:"{{ company.link }}",target:"_blank"},ge=e("hr",null,null,-1),be=R({data(){return{activeSection:1,isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",a=>{a.target.closest(".search")||(this.isSearchExpanded=!1)})}}),$e=Object.assign(be,{__name:"[id]",async setup(a){let s,c;const S=E().params.id,{data:M}=([s,c]=h(()=>g(k().public.serverURL+"/people/","$K88e4Sd4Bu")),s=await s,c(),s),{data:t}=([s,c]=h(()=>g(k().public.serverURL+"/companies/"+S,"$9amxuUKQvO")),s=await s,c(),s),{data:$}=([s,c]=h(()=>g(k().public.serverURL+"/areas","$A9fin2OhFP")),s=await s,c(),s),N=b(()=>{const l=[];for(let _ of M.value)_.id===t.value.companyId&&(console.log("Hello world"),l.push(_));return console.log(l),l}),B=b(()=>{const l=[];for(let _ of $.value)console.log("My best area isss",_.id),console.log("My best area isss",t.value.areasId),_.id===t.value.areasId&&l.push(_);return l});return(l,_)=>{const C=v("router-link"),I=j,L=H,P=v("desktop"),O=v("mobile");return i(),d("main",Q,[e("div",T,[e("div",q,[f(C,{to:"/companies"},{default:u(()=>[z]),_:1})]),e("h1",G,n(o(t).name),1),e("div",J,[e("p",W,[(i(!0),d(y,null,x(o(B),r=>(i(),m(I,{name:r.name,link:"/areas/"+r.id},null,8,["name","link"]))),256))]),e("p",X,"CEO: "+n(o(t).ceo),1),e("div",Y,[(i(!0),d(y,null,x(o(N),r=>(i(),m(L,{name:r.name,link:"/people/"+r.id},null,8,["name","link"]))),256))])]),Z,l.isMobile?(i(),d("div",_e,[f(O,null,{default:u(()=>[e("div",re,[e("div",de,[e("img",{id:"main-img3",src:o(t).image},null,8,ue)]),e("div",pe,[e("div",me,[e("p",he,n(o(t).description),1),e("p",ve,n(o(t).description2),1),e("p",fe,[w("Visit their official website: "),e("a",ke,n(o(t).link),1)])])])])]),_:1})])):(i(),d("div",ee,[f(P,null,{default:u(()=>[e("div",se,[e("div",te,[e("img",{id:"main-img",src:o(t).image},null,8,oe)]),e("div",ne,[e("div",ie,[e("p",ae,n(o(t).description),1),e("p",ce,n(o(t).description2),1),e("p",null,[w("Visit their official website: "),e("a",le,n(o(t).link),1)])])])])]),_:1})])),ge])])}}});export{$e as default};