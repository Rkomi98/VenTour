import{_ as E}from"./nuxt-link.bf607be2.js";import{o,f as _,b as s,w as t,d as l,t as L,p as C,j as F,h,m as B,a as e,F as g,r as k,c as b,l as x,A as w,T,q as y,J as O,_ as f,y as z,z as V,K as H}from"./entry.6b2e3779.js";import{u as N}from"./fetch.1667aa35.js";import{_ as S,a as $}from"./linkedin.238bf184.js";import"./asyncData.ac563a31.js";const U={__name:"AreaHeader",props:["name","link"],setup(n){return(c,r)=>{const d=E;return o(),_("p",null,[s(d,{to:n.link,class:"nav-link"},{default:t(()=>[l(L(n.name),1)]),_:1},8,["to"])])}}},A=""+new URL("logo-witho-bck-slog.eb8eae90.png",import.meta.url).href;const m=n=>(z("data-v-b53bc76f"),n=n(),V(),n),D={key:0},R={class:"header-container"},j=m(()=>e("img",{class:"logo",src:A,alt:"VenTour Logo"},null,-1)),W={class:"dropdown"},q={class:"dropdown-toggle"},G={class:"dropdown-menu"},X={class:"sub-menu"},J={key:1},K={class:"navbar"},Q={class:"navbar-item"},Y=m(()=>e("img",{src:A,width:"50",height:"50",alt:"VenTour Logo"},null,-1)),Z={id:"sidemenu",class:"sidemenu"},ee=m(()=>e("span",{class:"top"},null,-1)),se=m(()=>e("span",{class:"mid"},null,-1)),te=m(()=>e("span",{class:"bottom"},null,-1)),ne=[ee,se,te],ae={class:"sidemenu__nav"},le={class:"sidemenu__wrapper"},oe={class:"sidemenu__list"},ie={class:"dropdown"},ce={class:"dropdown-toggle"},re={id:"sidemenu",class:"sidemenu2"},de=m(()=>e("span",{class:"vert"},null,-1)),_e=m(()=>e("span",{class:"horiz"},null,-1)),ue=[de,_e],me={class:"sidemenu__nav2"},pe={class:"sidemenu__wrapper"},he={class:"sidemenu__list2"},ve=C(""),fe={data(){return{isMobile:!1,navOpen:!1,navOpen2:!1,isSearchExpanded:!1,searchText:""}},methods:{toggleSearch(n){n.stopPropagation(),this.isSearchExpanded?this.isSearchExpanded=!1:(this.isSearchExpanded=!0,this.$nextTick(()=>this.$refs.searchInput.focus()))},search(){const n=[],c=[{text:"Page 1",link:"/page1"},{text:"Page 2",link:"/page2"},{text:"Page 3",link:"/page3"}],r=ve.value.toLowerCase();console.log("Searching for: ",this.searchText);for(const d of c)d.text.toLowerCase().includes(r)&&n.push(d);return n},detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},closeNavbar(){this.navOpen=!1,this.navOpen2=!1}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",n=>{n.target.closest(".search")||(this.isSearchExpanded=!1)}),this.$router.beforeEach((n,c,r)=>{this.navOpen=!1,this.navOpen2=!1,r()})}},ge=Object.assign(fe,{__name:"TheHeader",async setup(n){let c,r;const{data:d}=([c,r]=F(()=>N(B().public.serverURL+"/areas","$ebWqjtA5wu")),c=await c,r(),c);return(i,p)=>{const a=h("router-link"),v=U,P=h("desktop"),I=h("mobile");return o(),_("div",null,[i.isMobile?(o(),_("div",J,[s(I,null,{default:t(()=>[e("div",K,[e("header",null,[e("a",Q,[s(a,{to:"/"},{default:t(()=>[Y]),_:1})]),e("div",Z,[e("button",{class:w(["sidemenu__btn",{active:i.navOpen}]),onClick:p[0]||(p[0]=u=>i.navOpen=!i.navOpen)},ne,2),s(T,{name:"translateX"},{default:t(()=>[y(e("nav",ae,[e("div",le,[e("ul",oe,[e("span",null,[e("p",null,[s(a,{to:"/aboutus",class:"nav-link"},{default:t(()=>[l("About Us")]),_:1})])]),e("p",null,[s(a,{to:"/people",class:"nav-link"},{default:t(()=>[l("Our Team")]),_:1})]),e("div",ie,[e("div",ce,[e("p",null,[s(a,{to:"/companies",class:"nav-link"},{default:t(()=>[l("Investments")]),_:1})]),e("div",re,[e("button",{class:w(["sidemenu__btn",{active:i.navOpen2}]),onClick:p[1]||(p[1]=u=>i.navOpen2=!i.navOpen2)},ue,2),s(T,{name:"translateX"},{default:t(()=>[y(e("nav",me,[e("div",pe,[e("ul",he,[(o(!0),_(g,null,k(x(d),u=>(o(),b(v,{name:u.name,link:"/areas/"+u.id},null,8,["name","link"]))),256))])])],512),[[O,i.navOpen2]])]),_:1})])])]),e("p",null,[s(a,{to:"/topinvestments",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Top Investments")]),_:1})]),e("p",null,[s(a,{to:"/contact",class:"nav-link"},{default:t(()=>[l("Get In Touch")]),_:1})])])])],512),[[O,i.navOpen]])]),_:1})])])])]),_:1})])):(o(),_("div",D,[s(P,null,{default:t(()=>[e("div",R,[e("header",null,[e("h4",null,[s(a,{to:"/"},{default:t(()=>[j]),_:1})]),e("nav",null,[e("span",null,[e("p",null,[s(a,{to:"/aboutus",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("About Us")]),_:1})])]),s(a,{to:"/people",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Our Team")]),_:1}),e("div",W,[e("div",q,[s(a,{to:"/companies",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Investments")]),_:1})]),e("div",G,[e("p",null,[s(a,{to:"/companies",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Areas")]),_:1})]),e("div",X,[(o(!0),_(g,null,k(x(d),u=>(o(),b(v,{name:u.name,link:"/areas/"+u.id},null,8,["name","link"]))),256))])])]),s(a,{to:"/topinvestments",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Top Investments")]),_:1}),s(a,{to:"/contact",class:"nav-link","exact-active-class":"active-link"},{default:t(()=>[l("Get In Touch")]),_:1})])])])]),_:1})]))])}}}),ke=f(ge,[["__scopeId","data-v-b53bc76f"]]),M=""+new URL("instagram.58fcf7c1.png",import.meta.url).href;const be={data(){return{isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile()}},xe={key:0},we=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f"},[e("div",{class:"rowf"},[e("div",{class:"col-md-3 col-sm-6 item text-right"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])])]),e("div",{class:"col-md-3 col-sm-6 item text-middle"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])])]),e("div",{class:"col-md-3 col-sm-6 item"},[e("div",{class:"social-iconsf"},[e("a",{href:"#"},[e("img",{src:S,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:$,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:M,alt:"Instagram"})]),e("div",{class:"copy-right"},"© 2020 VenTour. All rights reserved.")])])])])],-1),Te={key:1},ye=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f2"},[e("div",{class:"rowf2"},[e("div",{class:"Services"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])]),e("div",{class:"Space"},[e("p")])]),e("div",{class:"Services"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])]),e("div",{class:"Services"},[e("div",{class:"social-iconsf2"},[e("a",{href:"#"},[e("img",{src:S,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:$,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:M,alt:"Instagram"})])]),e("div",{class:"copy-right2"},[e("p",null,[l("© 2020 VenTour "),e("br"),l(" All rights reserved. ")])])])])])])],-1);function Oe(n,c,r,d,i,p){const a=h("desktop"),v=h("mobile");return o(),_("div",null,[i.isMobile?(o(),_("div",Te,[s(v,null,{default:t(()=>[ye]),_:1})])):(o(),_("div",xe,[s(a,null,{default:t(()=>[we]),_:1})]))])}const Se=f(be,[["render",Oe]]);const $e={},Ae={class:"page"};function Me(n,c){const r=ke,d=Se;return o(),_("div",Ae,[s(r),H(n.$slots,"default"),s(d)])}const Fe=f($e,[["render",Me]]);export{Fe as default};
