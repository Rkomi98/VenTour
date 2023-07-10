import{_ as N}from"./nuxt-link.b61b7c1d.js";import{o as n,c as b,w as r,a as s,t as o,u as E,h as v,i as L,r as p,f as l,b as u,j as t,F as O,k as V,l as f,d as k}from"./entry.9c14e974.js";import{d as $}from"./component.ebcd672c.js";import{u as g}from"./fetch.24d47c6d.js";import{_ as A}from"./left-arrows.eef6cd8d.js";import"./asyncData.4018717f.js";const R={class:"hover-content2"},F={class:"subtitle"},P={__name:"Supervisor",props:["link","name"],setup(c){return(i,a)=>{const m=N;return n(),b(m,{class:"link",to:c.link},{default:r(()=>[s("div",R,[s("p",null,[s("span",F,"Supervisor: "+o(c.name),1)])])]),_:1},8,["to"])}}};const U={id:"back"},j={class:"info-group"},I={class:"arrow"},K=s("img",{src:A},null,-1),D={class:"name"},H={id:"data-container-c"},Q={class:"areas"},T={class:"ceo"},q={class:"supervisor"},z=s("hr",null,null,-1),G={key:0},J={class:"row-section"},W={class:"column-c"},X=["src"],Y={class:"column2-c"},Z={class:"description-container"},ss={class:"description"},es={class:"description2"},ts={href:"{{ company.link }}",target:"_blank"},os={key:1},is={class:"column-section"},ns={class:"column-c"},cs=["src"],as={class:"column2-c"},_s={class:"description-container2"},ls={class:"description"},rs={class:"description2"},ds={class:"official-link"},ps={href:"{{ company.link }}",target:"_blank"},us=s("hr",null,null,-1),ms=$({data(){return{activeSection:1,isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",c=>{c.target.closest(".search")||(this.isSearchExpanded=!1)})}}),ys=Object.assign(ms,{__name:"[id]",async setup(c){let i,a;const y=E().params.id,{data:x}=([i,a]=v(()=>g(f().public.serverURL+"/people/","$K88e4Sd4Bu")),i=await i,a(),i),{data:e}=([i,a]=v(()=>g(f().public.serverURL+"/companies/"+y,"$9amxuUKQvO")),i=await i,a(),i),w=L(()=>{const _=[];for(let d of x.value)d.id===e.value.companyId&&(console.log("Hello world"),_.push(d));return console.log(_),_});return(_,d)=>{const S=p("router-link"),B=P,M=p("desktop"),C=p("mobile");return n(),l("main",U,[s("div",j,[s("div",I,[u(S,{to:"/companies"},{default:r(()=>[K]),_:1})]),s("h1",D,o(t(e).name),1),s("div",H,[s("p",Q,"Area of investment: "+o(t(e).areas),1),s("p",T,"CEO: "+o(t(e).ceo),1),s("div",q,[(n(!0),l(O,null,V(t(w),h=>(n(),b(B,{name:h.name,link:"/people/"+h.id},null,8,["name","link"]))),256))])]),z,_.isMobile?(n(),l("div",os,[u(C,null,{default:r(()=>[s("div",is,[s("div",ns,[s("img",{id:"main-img3",src:t(e).image},null,8,cs)]),s("div",as,[s("div",_s,[s("p",ls,o(t(e).description),1),s("p",rs,o(t(e).description2),1),s("p",ds,[k("Visit their official website: "),s("a",ps,o(t(e).link),1)])])])])]),_:1})])):(n(),l("div",G,[u(M,null,{default:r(()=>[s("div",J,[s("div",W,[s("img",{id:"main-img",src:t(e).image},null,8,X)]),s("div",Y,[s("div",Z,[s("p",ss,o(t(e).description),1),s("p",es,o(t(e).description2),1),s("p",null,[k("Visit their official website: "),s("a",ts,o(t(e).link),1)])])])])]),_:1})])),us])])}}});export{ys as default};