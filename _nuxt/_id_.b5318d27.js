import{_ as V}from"./Cardsection.78210288.js";import{u as B,j as I,p as D,k as P,h as v,f as n,a as e,b as r,w as d,t as a,l as t,g as m,m as g,o,A as h,d as _,F as $,r as M,c as N}from"./entry.2cc3ad4f.js";import{d as U}from"./component.fbb0856b.js";import{u as R}from"./fetch.6dc292e5.js";import{_ as F}from"./left-arrows.e179e44a.js";import{_ as T,a as W}from"./linkedin.d5d26c05.js";import"./nuxt-link.3cdb1c7a.js";import"./asyncData.b3a5588b.js";const z=""+new URL("email.10aa3ad7.png",import.meta.url).href;const j={id:"back"},H={class:"info-group"},K={class:"arrow"},X=e("img",{src:F},null,-1),Z={class:"name"},q={id:"data-container"},G={class:"role"},J={class:"team"},Q=e("hr",null,null,-1),Y=e("div",{class:"social-icons"},[e("img",{src:T,alt:"Facebook"}),e("img",{src:W,alt:"LinkedIn"}),e("img",{src:z,alt:"Email"})],-1),x={key:0},ee={class:"row-section"},te={class:"column-b"},se=["src"],oe={class:"column2"},ie={class:"button-container",style:{position:"relative",top:"0","z-index":"1"}},ne=e("br",null,null,-1),ae=e("br",null,null,-1),le=e("br",null,null,-1),ce={class:"description-container1"},re={key:0},de={key:1},_e={class:"award-list"},ue=e("br",null,null,-1),me={key:0},pe=e("br",null,null,-1),ve={key:1},he=e("br",null,null,-1),be={key:2},fe={key:2},ke={key:1},ge={class:"column"},we={class:"column"},ye=["src"],Se={class:"column2"},Ce={class:"description-containera2"},Ae={class:"button-container2",style:{position:"relative",top:"0","z-index":"1"}},Ie=e("br",null,null,-1),$e=e("br",null,null,-1),Me={key:0,class:"description-container2"},Ne={key:1,class:"description-container2"},Re=e("br",null,null,-1),Be={key:0},Le=e("br",null,null,-1),Oe={key:1},Ee=e("br",null,null,-1),Ve={key:2},De=e("hr",null,null,-1),Pe={key:0},Ue=e("div",{class:"row-section"},[e("div",{class:"text-center"},[e("p",null,"COMPANIES IN SUPERVISION:")])],-1),Fe={key:0},Te={class:"row-section2"},We={key:1},ze={class:"column2Card"},je=U({data(){return{activeSection:1,isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},async asyncData(){const b=B();return{companies:await $fetch(g().public.serverURL+"/companies"+b.params.id)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",b=>{b.target.closest(".search")||(this.isSearchExpanded=!1)})}}),xe=Object.assign(je,{__name:"[id]",async setup(b){let u,f;const w=B().params.id,{data:s}=([u,f]=I(()=>R(g().public.serverURL+"/people/"+w,"$ZLTXWWi2cH")),u=await u,f(),u),{data:L}=([u,f]=I(()=>R(g().public.serverURL+"/companies","$ySsDfdwNKg")),u=await u,f(),u),y=D(""),k=P(()=>{const i=[];for(let l of L.value)(y.value==0||y.value=="")&l.companyId==w&&(console.log(l),i.push(l));return i});return(i,l)=>{const O=v("router-link"),p=v("p2"),S=v("desktop"),E=v("p3"),C=v("mobile"),A=V;return o(),n("main",j,[e("div",H,[e("div",K,[r(O,{to:"/people"},{default:d(()=>[X]),_:1})]),e("h1",Z,a(t(s).name),1),e("div",q,[e("p",G,a(t(s).role),1),e("p",J,a(t(s).team),1)]),Q,Y,i.isMobile?(o(),n("div",ke,[r(C,null,{default:d(()=>[e("div",ge,[e("div",we,[e("img",{id:"main-img2",src:t(s).image},null,8,ye)]),e("div",Se,[e("div",Ce,[e("div",Ae,[e("button",{class:h(["section-button",{active:i.activeSection===1}]),onClick:l[3]||(l[3]=c=>i.activeSection=1)},[Ie,_(" BIO ")],2),e("button",{class:h(["section-button",{active:i.activeSection===2}]),onClick:l[4]||(l[4]=c=>i.activeSection=2)},[$e,_(" AWARDS ")],2)]),i.activeSection===1?(o(),n("div",Me,[r(p,{class:"description2"},{default:d(()=>[_(a(t(s).description),1)]),_:1}),r(p,{class:"description2"},{default:d(()=>[_(a(t(s).description2),1)]),_:1})])):i.activeSection===2?(o(),n("div",Ne,[r(E,{class:"description2"},{default:d(()=>[e("ul",null,[e("li",null,a(t(s).award1),1),Re,t(s).award2!=""?(o(),n("li",Be,a(t(s).award2),1)):m("",!0),Le,t(s).award3!=""?(o(),n("li",Oe,a(t(s).award3),1)):m("",!0),Ee,t(s).award4!=""?(o(),n("li",Ve,a(t(s).award4),1)):m("",!0)])]),_:1})])):m("",!0)])])])]),_:1})])):(o(),n("div",x,[r(S,null,{default:d(()=>[e("div",ee,[e("div",te,[e("img",{id:"main-img2",src:t(s).image},null,8,se)]),e("div",oe,[e("div",ie,[e("button",{class:h(["section-button",{active:i.activeSection===1}]),onClick:l[0]||(l[0]=c=>i.activeSection=1)},[ne,_(" BIO ")],2),e("button",{class:h(["section-button",{active:i.activeSection===2}]),onClick:l[1]||(l[1]=c=>i.activeSection=2)},[ae,_(" AWARDS ")],2),e("button",{class:h(["section-button",{active:i.activeSection===3}]),onClick:l[2]||(l[2]=c=>i.activeSection=3)},[le,_(" CV ")],2)]),e("div",ce,[i.activeSection===1?(o(),n("div",re,[r(p,{class:"description"},{default:d(()=>[_(a(t(s).description),1)]),_:1}),r(p,{class:"description"},{default:d(()=>[_(a(t(s).description2),1)]),_:1})])):i.activeSection===2?(o(),n("div",de,[r(p,{class:"description"},{default:d(()=>[_(" At VenTour Capital, we believe in celebrating the outstanding contributions and achievements of our exceptional team members. Our dedicated professionals continually strive for excellence and consistently go above and beyond to achieve remarkable results. In acknowledgment of unwavering commitment, "+a(t(s).name)+" received the following awards: ",1),e("ul",_e,[e("li",null,a(t(s).award1),1),ue,t(s).award2!=""?(o(),n("li",me,a(t(s).award2),1)):m("",!0),pe,t(s).award3!=""?(o(),n("li",ve,a(t(s).award3),1)):m("",!0),he,t(s).award4!=""?(o(),n("li",be,a(t(s).award4),1)):m("",!0)])]),_:1})])):i.activeSection===3?(o(),n("div",fe,[r(p,{class:"description"},{default:d(()=>[_(a(t(s).cv),1)]),_:1})])):m("",!0)])])])]),_:1})])),De]),t(k).length>0?(o(),n("div",Pe,[Ue,i.isMobile?(o(),n("div",We,[r(C,null,{default:d(()=>[e("div",ze,[(o(!0),n($,null,M(t(k),c=>(o(),N(A,{subtitle:c.ceo,area:c.areas,image:c.image,link:"/companies/"+c.id},null,8,["subtitle","area","image","link"]))),256))])]),_:1})])):(o(),n("div",Fe,[r(S,null,{default:d(()=>[e("div",Te,[(o(!0),n($,null,M(t(k),c=>(o(),N(A,{subtitle:c.ceo,area:c.areas,image:c.image,link:"/companies/"+c.id},null,8,["subtitle","area","image","link"]))),256))])]),_:1})]))])):m("",!0)])}}});export{xe as default};