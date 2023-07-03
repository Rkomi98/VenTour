import{_ as A}from"./nuxt-link.74e775e3.js";import{o as i,f as _,b as p,w as u,a as e,t as n,c as b,u as O,j as h,k as g,h as v,l as o,F as y,r as w,m as f,d as x}from"./entry.a01ba64a.js";import{d as E}from"./component.adfea9e6.js";import{u as k}from"./fetch.648568c4.js";import{_ as R}from"./left-arrows.195dab5f.js";import"./asyncData.38776da2.js";const F=e("head",null,[e("meta",{name:"description",content:"Area cards used to show area of investments"})],-1),U={class:"hover-content2"},T={class:"subtitle"},j={__name:"AreaIdPage",props:["link","name"],setup(a){return(t,c)=>{const m=A;return i(),_("div",null,[F,p(m,{class:"link",to:a.link},{default:u(()=>[e("div",U,[e("p",null,[e("span",T,"Area of investment: "+n(a.name),1)])])]),_:1},8,["to"])])}}};const K={class:"hover-content2"},D={class:"subtitle"},H={__name:"Supervisor",props:["link","name"],setup(a){return(t,c)=>{const m=A;return i(),b(m,{class:"link",to:a.link},{default:u(()=>[e("div",K,[e("p",null,[e("span",D,"Supervisor: "+n(a.name),1)])])]),_:1},8,["to"])}}};const Q=e("head",null,[e("meta",{name:"description",content:"Learn about the company, discover detailed information about it, including a brief description, the associated area of investment, the supervisor at VenTour, and the official website of the company."})],-1),q={id:"back"},z={class:"info-group"},G={class:"arrow"},J=e("img",{src:R,alt:"Left Arrow"},null,-1),W={class:"name"},X={id:"data-container-c"},Y={class:"areas"},Z={class:"ceo"},ee={class:"supervisor"},te=e("hr",null,null,-1),se={key:0},oe={class:"row-section"},ne={class:"column-c"},ie=["src"],ae={class:"column2-c"},ce={class:"description-container"},re={class:"description"},le={class:"description2"},_e={href:"{{ company.link }}",target:"_blank"},de={key:1},ue={class:"column-section"},me={class:"column-c"},pe=["src"],he={class:"column2-c"},ve={class:"description-container2"},fe={class:"description"},ke={class:"description2"},be={class:"official-link"},ge={href:"{{ company.link }}",target:"_blank"},ye=e("hr",null,null,-1),we=E({head(){return{meta:[{name:"description",content:"Learn about the company, discover detailed information about it, including a brief description, the associated area of investment, the supervisor at VenTour, and the official website of the company."}]}},data(){return{activeSection:1,isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",a=>{a.target.closest(".search")||(this.isSearchExpanded=!1)})}}),Ie=Object.assign(we,{__name:"[id]",async setup(a){let t,c;const L=O().params.id,{data:S}=([t,c]=h(()=>k(f().public.serverURL+"/people/","$K88e4Sd4Bu")),t=await t,c(),t),{data:s}=([t,c]=h(()=>k(f().public.serverURL+"/companies/"+L,"$9amxuUKQvO")),t=await t,c(),t),{data:$}=([t,c]=h(()=>k(f().public.serverURL+"/areas","$A9fin2OhFP")),t=await t,c(),t),C=g(()=>{const r=[];for(let l of S.value)l.id===s.value.companyId&&(console.log("Hello world"),r.push(l));return console.log(r),r}),I=g(()=>{const r=[];for(let l of $.value)console.log("My best area isss",l.id),console.log("My best area isss",s.value.areasId),l.id===s.value.areasId&&r.push(l);return r});return(r,l)=>{const M=v("router-link"),N=j,B=H,P=v("desktop"),V=v("mobile");return i(),_("div",null,[Q,e("main",q,[e("div",z,[e("div",G,[p(M,{to:"/companies"},{default:u(()=>[J]),_:1})]),e("h1",W,n(o(s).name),1),e("div",X,[e("p",Y,[(i(!0),_(y,null,w(o(I),d=>(i(),b(N,{name:d.name,link:"/areas/"+d.id},null,8,["name","link"]))),256))]),e("p",Z,"CEO: "+n(o(s).ceo),1),e("div",ee,[(i(!0),_(y,null,w(o(C),d=>(i(),b(B,{name:d.name,link:"/people/"+d.id},null,8,["name","link"]))),256))])]),te,r.isMobile?(i(),_("div",de,[p(V,null,{default:u(()=>[e("div",ue,[e("div",me,[e("img",{id:"main-img3",src:o(s).image,alt:"Company Image"},null,8,pe)]),e("div",he,[e("div",ve,[e("p",fe,n(o(s).description),1),e("p",ke,n(o(s).description2),1),e("p",be,[x("Visit their official website: "),e("a",ge,n(o(s).link),1)])])])])]),_:1})])):(i(),_("div",se,[p(P,null,{default:u(()=>[e("div",oe,[e("div",ne,[e("img",{id:"main-img",src:o(s).image,alt:"Company Image"},null,8,ie)]),e("div",ae,[e("div",ce,[e("p",re,n(o(s).description),1),e("p",le,n(o(s).description2),1),e("p",null,[x("Visit their official website: "),e("a",_e,n(o(s).link),1)])])])])]),_:1})])),ye])])])}}});export{Ie as default};
