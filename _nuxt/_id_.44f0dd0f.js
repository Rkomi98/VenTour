import{_ as L}from"./Cardsection.eda8d89f.js";import{u as N,j as I,k as O,h,f as n,a as e,b as r,w as d,t as a,l as t,g as m,m as w,o as i,A as v,d as _,F as A,r as $,c as V}from"./entry.3dd28b44.js";import{d as P}from"./component.61f53b98.js";import{u as M}from"./fetch.7bc7a7f0.js";import{_ as D}from"./left-arrows.128b85cc.js";import{_ as T,a as U}from"./linkedin.7cc96bc0.js";import"./nuxt-link.b451480e.js";import"./asyncData.fe4fd74b.js";const F=""+new URL("email.10aa3ad7.png",import.meta.url).href;const W=e("head",null,[e("meta",{name:"description",content:"Details of the person working in the area - Explore his or her profile at VenTour, including their area of investment, CV, awards achieved, and where he/she is supervisory role."})],-1),z={id:"back"},j={class:"info-group"},H={class:"arrow"},K=e("img",{src:D,alt:"Arrow"},null,-1),X={class:"name"},Z={id:"data-container"},q={class:"role"},G={class:"team"},J=e("hr",null,null,-1),Q=e("div",{class:"social-icons"},[e("img",{src:T,alt:"Facebook"}),e("img",{src:U,alt:"LinkedIn"}),e("img",{src:F,alt:"Email"})],-1),Y={key:0},x={class:"row-section"},ee={class:"column-b"},te=["src"],se={class:"column2"},oe={class:"button-container",style:{position:"relative",top:"0","z-index":"1"}},ie=e("br",null,null,-1),ne=e("br",null,null,-1),ae=e("br",null,null,-1),le={class:"description-container1"},ce={key:0},re={key:1},de={class:"award-list"},_e=e("br",null,null,-1),ue={key:0},me=e("br",null,null,-1),pe={key:1},ve=e("br",null,null,-1),he={key:2},be={key:2},fe={key:1},ke={class:"column"},ge={class:"column"},we=["src"],ye={class:"column2"},Se={class:"description-containera2"},Ce={class:"button-container2",style:{position:"relative",top:"0","z-index":"1"}},Ie=e("br",null,null,-1),Ae=e("br",null,null,-1),$e=e("br",null,null,-1),Ve={key:0,class:"description-container2"},Me={key:1,class:"description-container2"},Ne=e("br",null,null,-1),Re={key:0},Be=e("br",null,null,-1),Ee={key:1},Le=e("br",null,null,-1),Oe={key:2},Pe={key:2,class:"description-container2"},De=e("hr",null,null,-1),Te={key:0},Ue=e("div",{class:"row-section"},[e("div",{class:"text-center"},[e("p",null,"COMPANIES IN SUPERVISION:")])],-1),Fe={key:0},We={class:"row-section2"},ze={key:1},je={class:"column2Card"},He=P({data(){return{activeSection:1,isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},async asyncData(){const b=N();return{companies:await $fetch(w().public.serverURL+"/companies"+b.params.id)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",b=>{b.target.closest(".search")||(this.isSearchExpanded=!1)})}}),et=Object.assign(He,{__name:"[id]",async setup(b){let u,f;const k=N().params.id,{data:s}=([u,f]=I(()=>M(w().public.serverURL+"/people/"+k,"$ZLTXWWi2cH")),u=await u,f(),u),{data:R}=([u,f]=I(()=>M(w().public.serverURL+"/companies","$ySsDfdwNKg")),u=await u,f(),u),g=O(()=>{const o=[];for(let l of R.value)console.log(k+l.companyId),l.companyId==k&&(console.log(l),o.push(l));return o});return(o,l)=>{const B=h("router-link"),p=h("p2"),y=h("desktop"),E=h("p3"),S=h("mobile"),C=L;return i(),n("div",null,[W,e("main",z,[e("div",j,[e("div",H,[r(B,{to:"/people"},{default:d(()=>[K]),_:1})]),e("h1",X,a(t(s).name),1),e("div",Z,[e("p",q,a(t(s).role),1),e("p",G,a(t(s).team),1)]),J,Q,o.isMobile?(i(),n("div",fe,[r(S,null,{default:d(()=>[e("div",ke,[e("div",ge,[e("img",{id:"main-img2",src:t(s).image,alt:"Person Image"},null,8,we)]),e("div",ye,[e("div",Se,[e("div",Ce,[e("button",{class:v(["section-button",{active:o.activeSection===1}]),onClick:l[3]||(l[3]=c=>o.activeSection=1)},[Ie,_(" BIO ")],2),e("button",{class:v(["section-button",{active:o.activeSection===2}]),onClick:l[4]||(l[4]=c=>o.activeSection=2)},[Ae,_(" AWARDS ")],2),e("button",{class:v(["section-button",{active:o.activeSection===3}]),onClick:l[5]||(l[5]=c=>o.activeSection=3)},[$e,_(" CV ")],2)]),o.activeSection===1?(i(),n("div",Ve,[r(p,{class:"description2"},{default:d(()=>[_(a(t(s).description),1)]),_:1}),r(p,{class:"description2"},{default:d(()=>[_(a(t(s).description2),1)]),_:1})])):o.activeSection===2?(i(),n("div",Me,[r(E,{class:"description2"},{default:d(()=>[e("ul",null,[e("li",null,a(t(s).award1),1),Ne,t(s).award2!=""?(i(),n("li",Re,a(t(s).award2),1)):m("",!0),Be,t(s).award3!=""?(i(),n("li",Ee,a(t(s).award3),1)):m("",!0),Le,t(s).award4!=""?(i(),n("li",Oe,a(t(s).award4),1)):m("",!0)])]),_:1})])):o.activeSection===3?(i(),n("div",Pe,[r(p,{class:"description2"},{default:d(()=>[_(a(t(s).cv),1)]),_:1})])):m("",!0)])])])]),_:1})])):(i(),n("div",Y,[r(y,null,{default:d(()=>[e("div",x,[e("div",ee,[e("img",{id:"main-img2",src:t(s).image,alt:"Person Image"},null,8,te)]),e("div",se,[e("div",oe,[e("button",{class:v(["section-button",{active:o.activeSection===1}]),onClick:l[0]||(l[0]=c=>o.activeSection=1)},[ie,_(" BIO ")],2),e("button",{class:v(["section-button",{active:o.activeSection===2}]),onClick:l[1]||(l[1]=c=>o.activeSection=2)},[ne,_(" AWARDS ")],2),e("button",{class:v(["section-button",{active:o.activeSection===3}]),onClick:l[2]||(l[2]=c=>o.activeSection=3)},[ae,_(" CV ")],2)]),e("div",le,[o.activeSection===1?(i(),n("div",ce,[r(p,{class:"description"},{default:d(()=>[_(a(t(s).description),1)]),_:1}),r(p,{class:"description"},{default:d(()=>[_(a(t(s).description2),1)]),_:1})])):o.activeSection===2?(i(),n("div",re,[r(p,{class:"description"},{default:d(()=>[_(" At VenTour Capital, we believe in celebrating the outstanding contributions and achievements of our exceptional team members. Our dedicated professionals continually strive for excellence and consistently go above and beyond to achieve remarkable results. In acknowledgment of unwavering commitment, "+a(t(s).name)+" received the following awards: ",1),e("ul",de,[e("li",null,a(t(s).award1),1),_e,t(s).award2!=""?(i(),n("li",ue,a(t(s).award2),1)):m("",!0),me,t(s).award3!=""?(i(),n("li",pe,a(t(s).award3),1)):m("",!0),ve,t(s).award4!=""?(i(),n("li",he,a(t(s).award4),1)):m("",!0)])]),_:1})])):o.activeSection===3?(i(),n("div",be,[r(p,{class:"description"},{default:d(()=>[_(a(t(s).cv),1)]),_:1})])):m("",!0)])])])]),_:1})])),De]),t(g).length>0?(i(),n("div",Te,[Ue,o.isMobile?(i(),n("div",ze,[r(S,null,{default:d(()=>[e("div",je,[(i(!0),n(A,null,$(t(g),c=>(i(),V(C,{subtitle:c.ceo,area:c.areas,image:c.image,link:"/companies/"+c.id},null,8,["subtitle","area","image","link"]))),256))])]),_:1})])):(i(),n("div",Fe,[r(y,null,{default:d(()=>[e("div",We,[(i(!0),n(A,null,$(t(g),c=>(i(),V(C,{subtitle:c.ceo,area:c.areas,image:c.image,link:"/companies/"+c.id},null,8,["subtitle","area","image","link"]))),256))])]),_:1})]))])):m("",!0)])])}}});export{et as default};
