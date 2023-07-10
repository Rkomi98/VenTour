import{o,c as _,e as s,w as t,m as l,t as E,g as C,_ as f,p as F,h as L,k as B,d as h,a as e,F as g,r as k,j as b,l as x,A as w,T,q as y,L as $,y as z,z as H,M as N}from"./entry.c4b45cc0.js";import{u as U}from"./fetch.6d0643c8.js";import{_ as O,a as S}from"./linkedin.40bd0b53.js";import"./asyncData.639d5b66.js";const V={__name:"AreaHeader",props:["name","link"],setup(n){return(c,r)=>{const d=C;return o(),_("p",null,[s(d,{to:n.link,class:"nav-link"},{default:t(()=>[l(E(n.name),1)]),_:1},8,["to"])])}}},D=V,M=""+new URL("logo-witho-bck-slog.eb8eae90.png",import.meta.url).href;const m=n=>(z("data-v-3c53e1bd"),n=n(),H(),n),R={key:0},j={class:"header-container"},W=m(()=>e("img",{class:"logo",src:M},null,-1)),q={class:"dropdown"},G={class:"dropdown-toggle"},X={class:"dropdown-menu"},J={class:"sub-menu"},K={key:1},Q={class:"navbar"},Y={class:"navbar-item"},Z=m(()=>e("img",{src:M,width:"50",height:"50"},null,-1)),ee={id:"sidemenu",class:"sidemenu"},se=m(()=>e("span",{class:"top"},null,-1)),te=m(()=>e("span",{class:"mid"},null,-1)),ne=m(()=>e("span",{class:"bottom"},null,-1)),ae=[se,te,ne],le={class:"sidemenu__nav"},oe={class:"sidemenu__wrapper"},ie={class:"sidemenu__list"},ce={class:"dropdown"},re={class:"dropdown-toggle"},de={id:"sidemenu",class:"sidemenu2"},_e=m(()=>e("span",{class:"vert"},null,-1)),ue=m(()=>e("span",{class:"horiz"},null,-1)),me=[_e,ue],pe={class:"sidemenu__nav2"},he={class:"sidemenu__wrapper"},ve={class:"sidemenu__list2"},fe=F(""),ge={data(){return{isMobile:!1,navOpen:!1,navOpen2:!1,isSearchExpanded:!1,searchText:""}},methods:{toggleSearch(n){n.stopPropagation(),this.isSearchExpanded?this.isSearchExpanded=!1:(this.isSearchExpanded=!0,this.$nextTick(()=>this.$refs.searchInput.focus()))},search(){const n=[],c=[{text:"Page 1",link:"/page1"},{text:"Page 2",link:"/page2"},{text:"Page 3",link:"/page3"}],r=fe.value.toLowerCase();console.log("Searching for: ",this.searchText);for(const d of c)d.text.toLowerCase().includes(r)&&n.push(d);return n},detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},closeNavbar(){this.navOpen=!1,this.navOpen2=!1}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",n=>{n.target.closest(".search")||(this.isSearchExpanded=!1)}),this.$router.beforeEach((n,c,r)=>{this.navOpen=!1,this.navOpen2=!1,r()})}},ke=Object.assign(ge,{__name:"TheHeader",async setup(n){let c,r;const{data:d}=([c,r]=L(()=>U(B().public.serverURL+"/areas","$ebWqjtA5wu")),c=await c,r(),c);return(i,p)=>{const a=h("router-link"),v=D,P=h("desktop"),I=h("mobile");return o(),_("div",null,[i.isMobile?(o(),_("div",K,[s(I,null,{default:t(()=>[e("div",Q,[e("header",null,[e("a",Y,[s(a,{to:"/"},{default:t(()=>[Z]),_:1})]),e("div",ee,[e("button",{class:w(["sidemenu__btn",{active:i.navOpen}]),onClick:p[0]||(p[0]=u=>i.navOpen=!i.navOpen)},ae,2),s(T,{name:"translateX"},{default:t(()=>[y(e("nav",le,[e("div",oe,[e("ul",ie,[e("span",null,[e("p",null,[s(a,{to:"/aboutus",class:"nav-link"},{default:t(()=>[l("About Us")]),_:1})])]),e("p",null,[s(a,{to:"/people",class:"nav-link"},{default:t(()=>[l("Our Team")]),_:1})]),e("div",ce,[e("div",re,[e("p",null,[s(a,{to:"/companies",class:"nav-link"},{default:t(()=>[l("Investments")]),_:1})]),e("div",de,[e("button",{class:w(["sidemenu__btn",{active:i.navOpen2}]),onClick:p[1]||(p[1]=u=>i.navOpen2=!i.navOpen2)},me,2),s(T,{name:"translateX"},{default:t(()=>[y(e("nav",pe,[e("div",he,[e("ul",ve,[(o(!0),_(g,null,k(b(d),u=>(o(),x(v,{name:u.name,link:"/areas/"+u.id},null,8,["name","link"]))),256))])])],512),[[$,i.navOpen2]])]),_:1})])])]),e("p",null,[s(a,{to:"/topinvestments",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Top Investments")]),_:1})]),e("p",null,[s(a,{to:"/contact",class:"nav-link"},{default:t(()=>[l("Get In Touch")]),_:1})])])])],512),[[$,i.navOpen]])]),_:1})])])])]),_:1})])):(o(),_("div",R,[s(P,null,{default:t(()=>[e("div",j,[e("header",null,[e("h4",null,[s(a,{to:"/"},{default:t(()=>[W]),_:1})]),e("nav",null,[e("span",null,[e("p",null,[s(a,{to:"/aboutus",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("About Us")]),_:1})])]),s(a,{to:"/people",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Our Team")]),_:1}),e("div",q,[e("div",G,[s(a,{to:"/companies",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Investments")]),_:1})]),e("div",X,[e("p",null,[s(a,{to:"/companies",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Areas")]),_:1})]),e("div",J,[(o(!0),_(g,null,k(b(d),u=>(o(),x(v,{name:u.name,link:"/areas/"+u.id},null,8,["name","link"]))),256))])])]),s(a,{to:"/topinvestments",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Top Investments")]),_:1}),s(a,{to:"/contact",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Get In Touch")]),_:1})])])])]),_:1})]))])}}}),be=f(ke,[["__scopeId","data-v-3c53e1bd"]]),A=""+new URL("instagram.58fcf7c1.png",import.meta.url).href;const xe={data(){return{isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile()}},we={key:0},Te=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f"},[e("div",{class:"rowf"},[e("div",{class:"col-md-3 col-sm-6 item text-right"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])])]),e("div",{class:"col-md-3 col-sm-6 item text-middle"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])])]),e("div",{class:"col-md-3 col-sm-6 item"},[e("div",{class:"social-iconsf"},[e("a",{href:"#"},[e("img",{src:O,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:S,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:A,alt:"Instagram"})]),e("div",{class:"copy-right"},"© 2020 VenTour. All rights reserved.")])])])])],-1),ye={key:1},$e=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f2"},[e("div",{class:"rowf2"},[e("div",{class:"Services"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])]),e("div",{class:"Space"},[e("p")])]),e("div",{class:"Services"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])]),e("div",{class:"Services"},[e("div",{class:"social-iconsf2"},[e("a",{href:"#"},[e("img",{src:O,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:S,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:A,alt:"Instagram"})])]),e("div",{class:"copy-right2"},[e("p",null,[l("© 2020 VenTour "),e("br"),l(" All rights reserved. ")])])])])])])],-1);function Oe(n,c,r,d,i,p){const a=h("desktop"),v=h("mobile");return o(),_("div",null,[i.isMobile?(o(),_("div",ye,[s(v,null,{default:t(()=>[$e]),_:1})])):(o(),_("div",we,[s(a,null,{default:t(()=>[Te]),_:1})]))])}const Se=f(xe,[["render",Oe]]);const Me={},Ae={class:"page"};function Pe(n,c){const r=be,d=Se;return o(),_("div",Ae,[s(r),N(n.$slots,"default"),s(d)])}const Le=f(Me,[["render",Pe]]);export{Le as default};
