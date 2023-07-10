import{_ as O}from"./Cardsection.bea4ffe0.js";import{u as M,h as I,i as D,d as f,c as n,a as e,e as r,w as d,t as a,j as t,b as m,D as P,k as w,o as i,A as b,m as _,F as A,r as $,l as V}from"./entry.98917c87.js";import{d as T}from"./component.e042bd43.js";import{u as E}from"./fetch.9bd16c7b.js";import{_ as U}from"./left-arrows.41c132e1.js";import{_ as F,a as W}from"./linkedin.42f59505.js";import"./asyncData.41f8b81e.js";const z=""+new URL("email.10aa3ad7.png",import.meta.url).href;const j=e("head",null,[e("meta",{name:"description",content:"Details of the person working in the area - Explore his or her profile at VenTour, including their area of investment, CV, awards achieved, and where he/she is supervisory role."})],-1),K={id:"back"},H={class:"info-group"},X={class:"arrow"},Z=e("img",{src:U,alt:"Arrow"},null,-1),q={class:"name"},G={id:"data-container"},J={class:"role"},Q={class:"team"},Y=e("hr",null,null,-1),x=e("div",{class:"social-icons"},[e("img",{src:F,alt:"Facebook"}),e("img",{src:W,alt:"LinkedIn"}),e("img",{src:z,alt:"Email"})],-1),ee={key:0},te={class:"row-section"},se={class:"column-b"},oe=["src"],ie={class:"column2"},ne={class:"button-container",style:{position:"relative",top:"0","z-index":"1"}},ae=e("br",null,null,-1),le=e("br",null,null,-1),ce=e("br",null,null,-1),re={class:"description-container1"},de={key:0},_e={key:1},ue={class:"award-list"},me=e("br",null,null,-1),pe={key:0},ve=e("br",null,null,-1),he={key:1},be=e("br",null,null,-1),fe={key:2},ke={key:2},ge={key:1},we={class:"column"},ye={class:"column"},Se=["src"],Ce={class:"column2"},Ie={class:"description-containera2"},Ae={class:"button-container2",style:{position:"relative",top:"0","z-index":"1"}},$e=e("br",null,null,-1),Ve=e("br",null,null,-1),Ee=e("br",null,null,-1),Me={key:0,class:"description-container2"},Ne={key:1,class:"description-container2"},Re=e("br",null,null,-1),Be={key:0},Le=e("br",null,null,-1),Oe={key:1},De=e("br",null,null,-1),Pe={key:2},Te={key:2,class:"description-container2"},Ue=e("hr",null,null,-1),Fe={key:0},We=e("div",{class:"row-section"},[e("div",{class:"text-center"},[e("p",null,"COMPANIES IN SUPERVISION:")])],-1),ze={key:0},je={class:"row-section2"},Ke={key:1},He={class:"column2Card"},Xe=T({data(){return{activeSection:1,isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},async asyncData(){let p,u;const h=M();return{companies:([p,u]=P(()=>$fetch(w().public.serverURL+"/companies"+h.params.id)),p=await p,u(),p)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",p=>{p.target.closest(".search")||(this.isSearchExpanded=!1)})}},"$ZLTXWWi2cH"),et=Object.assign(Xe,{__name:"[id]",async setup(p){let u,h;const k=M().params.id,{data:s}=([u,h]=I(()=>E(w().public.serverURL+"/people/"+k,"$ySsDfdwNKg")),u=await u,h(),u),{data:R}=([u,h]=I(()=>E(w().public.serverURL+"/companies","$9aEKl9pgtl")),u=await u,h(),u),g=D(()=>{const o=[];for(let l of R.value)console.log(k+l.companyId),l.companyId==k&&(console.log(l),o.push(l));return o});return(o,l)=>{const B=f("router-link"),v=f("p2"),y=f("desktop"),L=f("p3"),S=f("mobile"),C=O;return i(),n("div",null,[j,e("main",K,[e("div",H,[e("div",X,[r(B,{to:"/people"},{default:d(()=>[Z]),_:1})]),e("h1",q,a(t(s).name),1),e("div",G,[e("p",J,a(t(s).role),1),e("p",Q,a(t(s).team),1)]),Y,x,o.isMobile?(i(),n("div",ge,[r(S,null,{default:d(()=>[e("div",we,[e("div",ye,[e("img",{id:"main-img2",src:t(s).image,alt:"Person Image"},null,8,Se)]),e("div",Ce,[e("div",Ie,[e("div",Ae,[e("button",{class:b(["section-button",{active:o.activeSection===1}]),onClick:l[3]||(l[3]=c=>o.activeSection=1)},[$e,_(" BIO ")],2),e("button",{class:b(["section-button",{active:o.activeSection===2}]),onClick:l[4]||(l[4]=c=>o.activeSection=2)},[Ve,_(" AWARDS ")],2),e("button",{class:b(["section-button",{active:o.activeSection===3}]),onClick:l[5]||(l[5]=c=>o.activeSection=3)},[Ee,_(" CV ")],2)]),o.activeSection===1?(i(),n("div",Me,[r(v,{class:"description2"},{default:d(()=>[_(a(t(s).description),1)]),_:1}),r(v,{class:"description2"},{default:d(()=>[_(a(t(s).description2),1)]),_:1})])):o.activeSection===2?(i(),n("div",Ne,[r(L,{class:"description2"},{default:d(()=>[e("ul",null,[e("li",null,a(t(s).award1),1),Re,t(s).award2!=""?(i(),n("li",Be,a(t(s).award2),1)):m("",!0),Le,t(s).award3!=""?(i(),n("li",Oe,a(t(s).award3),1)):m("",!0),De,t(s).award4!=""?(i(),n("li",Pe,a(t(s).award4),1)):m("",!0)])]),_:1})])):o.activeSection===3?(i(),n("div",Te,[r(v,{class:"description2"},{default:d(()=>[_(a(t(s).cv),1)]),_:1})])):m("",!0)])])])]),_:1})])):(i(),n("div",ee,[r(y,null,{default:d(()=>[e("div",te,[e("div",se,[e("img",{id:"main-img2",src:t(s).image,alt:"Person Image"},null,8,oe)]),e("div",ie,[e("div",ne,[e("button",{class:b(["section-button",{active:o.activeSection===1}]),onClick:l[0]||(l[0]=c=>o.activeSection=1)},[ae,_(" BIO ")],2),e("button",{class:b(["section-button",{active:o.activeSection===2}]),onClick:l[1]||(l[1]=c=>o.activeSection=2)},[le,_(" AWARDS ")],2),e("button",{class:b(["section-button",{active:o.activeSection===3}]),onClick:l[2]||(l[2]=c=>o.activeSection=3)},[ce,_(" CV ")],2)]),e("div",re,[o.activeSection===1?(i(),n("div",de,[r(v,{class:"description"},{default:d(()=>[_(a(t(s).description),1)]),_:1}),r(v,{class:"description"},{default:d(()=>[_(a(t(s).description2),1)]),_:1})])):o.activeSection===2?(i(),n("div",_e,[r(v,{class:"description"},{default:d(()=>[_(" At VenTour Capital, we believe in celebrating the outstanding contributions and achievements of our exceptional team members. Our dedicated professionals continually strive for excellence and consistently go above and beyond to achieve remarkable results. In acknowledgment of unwavering commitment, "+a(t(s).name)+" received the following awards: ",1),e("ul",ue,[e("li",null,a(t(s).award1),1),me,t(s).award2!=""?(i(),n("li",pe,a(t(s).award2),1)):m("",!0),ve,t(s).award3!=""?(i(),n("li",he,a(t(s).award3),1)):m("",!0),be,t(s).award4!=""?(i(),n("li",fe,a(t(s).award4),1)):m("",!0)])]),_:1})])):o.activeSection===3?(i(),n("div",ke,[r(v,{class:"description"},{default:d(()=>[_(a(t(s).cv),1)]),_:1})])):m("",!0)])])])]),_:1})])),Ue]),t(g).length>0?(i(),n("div",Fe,[We,o.isMobile?(i(),n("div",Ke,[r(S,null,{default:d(()=>[e("div",He,[(i(!0),n(A,null,$(t(g),c=>(i(),V(C,{subtitle:c.ceo,area:c.areas,image:c.image,link:"/companies/"+c.id},null,8,["subtitle","area","image","link"]))),256))])]),_:1})])):(i(),n("div",ze,[r(y,null,{default:d(()=>[e("div",je,[(i(!0),n(A,null,$(t(g),c=>(i(),V(C,{subtitle:c.ceo,area:c.areas,image:c.image,link:"/companies/"+c.id},null,8,["subtitle","area","image","link"]))),256))])]),_:1})]))])):m("",!0)])])}}});export{et as default};
