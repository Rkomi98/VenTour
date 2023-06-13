import{p as A,_ as b,r as m,o as d,f as _,b as s,w as t,a as e,d as a,q as v,n as f,W as k,x,g as y,X as w,Y as S,y as C,z as F,Z as L}from"./entry.89af034b.js";import{_ as T,a as O}from"./linkedin.d2d239ea.js";const M=""+new URL("logo-witho-bck-slog.eb8eae90.png",import.meta.url).href,P=""+new URL("magnifying-glass.e31601fb.png",import.meta.url).href;const V=A(""),z={data(){return{isMobile:!1,navOpen:!1,navOpen2:!1,isSearchExpanded:!1,searchText:""}},methods:{toggleSearch(i){i.stopPropagation(),this.isSearchExpanded?this.isSearchExpanded=!1:(this.isSearchExpanded=!0,this.$nextTick(()=>this.$refs.searchInput.focus()))},search(){const i=[],n=[{text:"Page 1",link:"/page1"},{text:"Page 2",link:"/page2"},{text:"Page 3",link:"/page3"}],h=V.value.toLowerCase();console.log("Searching for: ",this.searchText);for(const p of n)p.text.toLowerCase().includes(h)&&i.push(p);return i},detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},closeNavbar(){this.navOpen=!1,this.navOpen2=!1}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",i=>{i.target.closest(".search")||(this.isSearchExpanded=!1)}),this.$router.beforeEach((i,n,h)=>{this.navOpen=!1,this.navOpen2=!1,h()})}},u=i=>(C("data-v-02d89bc5"),i=i(),F(),i),B={key:0},U={class:"header-container"},H=u(()=>e("img",{class:"logo",src:M},null,-1)),N={class:"dropdown"},G={class:"dropdown-toggle"},D={class:"dropdown-menu"},K={class:"sub-menu"},R={class:"search"},W=u(()=>e("img",{src:P,alt:"search-icon",style:{color:"#2479a3"}},null,-1)),X=[W],q={key:1},Y={class:"navbar"},Z={class:"navbar-item"},j=u(()=>e("img",{src:M,width:"50",height:"50"},null,-1)),J={id:"sidemenu",class:"sidemenu"},Q=u(()=>e("span",{class:"top"},null,-1)),$=u(()=>e("span",{class:"mid"},null,-1)),ee=u(()=>e("span",{class:"bottom"},null,-1)),se=[Q,$,ee],te={class:"sidemenu__nav"},ne={class:"sidemenu__wrapper"},le={class:"sidemenu__list"},oe={class:"dropdown"},ae={class:"dropdown-toggle"},ie={id:"sidemenu",class:"sidemenu2"},ce=u(()=>e("span",{class:"vert"},null,-1)),re=u(()=>e("span",{class:"horiz"},null,-1)),de=[ce,re],_e={class:"sidemenu__nav2"},ue={class:"sidemenu__wrapper"},he={class:"sidemenu__list2"},pe={class:"search"},me=u(()=>e("img",{src:P,alt:"search-icon",style:{color:"#2479a3"}},null,-1)),ve=[me];function fe(i,n,h,p,o,r){const l=m("router-link"),g=m("desktop"),E=m("mobile");return d(),_("div",null,[o.isMobile?(d(),_("div",q,[s(E,null,{default:t(()=>[e("div",Y,[e("header",null,[e("a",Z,[s(l,{to:"/"},{default:t(()=>[j]),_:1})]),e("div",J,[e("button",{class:f(["sidemenu__btn",{active:o.navOpen}]),onClick:n[3]||(n[3]=c=>o.navOpen=!o.navOpen)},se,2),s(w,{name:"translateX"},{default:t(()=>[v(e("nav",te,[e("div",ne,[e("ul",le,[e("span",null,[e("p",null,[s(l,{to:"/History",class:"nav-link"},{default:t(()=>[a("About Us")]),_:1})])]),e("p",null,[s(l,{to:"/people",class:"nav-link"},{default:t(()=>[a("Our Team")]),_:1})]),e("div",oe,[e("div",ae,[e("p",null,[s(l,{to:"/companies",class:"nav-link"},{default:t(()=>[a("Investments")]),_:1})]),e("div",ie,[e("button",{class:f(["sidemenu__btn",{active:o.navOpen2}]),onClick:n[4]||(n[4]=c=>o.navOpen2=!o.navOpen2)},de,2),s(w,{name:"translateX"},{default:t(()=>[v(e("nav",_e,[e("div",ue,[e("ul",he,[e("p",null,[s(l,{to:"/technology",class:"nav-link"},{default:t(()=>[a("Technology")]),_:1})]),e("p",null,[s(l,{to:"/healthcare",class:"nav-link"},{default:t(()=>[a("Healthcare")]),_:1})]),e("p",null,[s(l,{to:"/consumer",class:"nav-link"},{default:t(()=>[a("Consumer Goods")]),_:1})]),e("p",null,[s(l,{to:"/sustainability",class:"nav-link"},{default:t(()=>[a("Sustainability")]),_:1})])])])],512),[[S,o.navOpen2]])]),_:1})])])]),e("p",null,[s(l,{to:"/contact",class:"nav-link"},{default:t(()=>[a("Get In Touch")]),_:1})]),e("div",pe,[o.isSearchExpanded?v((d(),_("input",{key:0,type:"text",class:f({"search-expanded":o.isSearchExpanded}),placeholder:"Search","onUpdate:modelValue":n[5]||(n[5]=c=>o.searchText=c),onKeyup:n[6]||(n[6]=k((...c)=>r.search&&r.search(...c),["enter"])),ref:"searchInput"},null,34)),[[x,o.searchText]]):y("",!0),e("button",{onClick:n[7]||(n[7]=(...c)=>r.toggleSearch&&r.toggleSearch(...c))},ve)])])])],512),[[S,o.navOpen]])]),_:1})])])])]),_:1})])):(d(),_("div",B,[s(g,null,{default:t(()=>[e("div",U,[e("header",null,[e("h4",null,[s(l,{to:"/"},{default:t(()=>[H]),_:1})]),e("nav",null,[e("span",null,[e("p",null,[s(l,{to:"/History",class:"nav-link"},{default:t(()=>[a("About Us")]),_:1})])]),s(l,{to:"/people",class:"nav-link"},{default:t(()=>[a("Our Team")]),_:1}),e("div",N,[e("div",G,[s(l,{to:"/companies",class:"nav-link"},{default:t(()=>[a("Investments")]),_:1})]),e("div",D,[e("p",null,[s(l,{to:"/companies",class:"nav-link"},{default:t(()=>[a("Areas")]),_:1})]),e("div",K,[e("p",null,[s(l,{to:"/companies/Areas/technology",class:"nav-link"},{default:t(()=>[a("Technology")]),_:1})]),e("p",null,[s(l,{to:"/companies/Areas/healthcare",class:"nav-link"},{default:t(()=>[a("Healthcare")]),_:1})]),e("p",null,[s(l,{to:"/companies/Areas/consumer",class:"nav-link"},{default:t(()=>[a("Consumer Goods")]),_:1})]),e("p",null,[s(l,{to:"/companies/Areas/sustainability",class:"nav-link"},{default:t(()=>[a("Sustainability")]),_:1})])])])]),s(l,{to:"/contact",class:"nav-link"},{default:t(()=>[a("Get In Touch")]),_:1}),e("div",R,[o.isSearchExpanded?v((d(),_("input",{key:0,type:"text",class:f({"search-expanded":o.isSearchExpanded}),placeholder:"Search","onUpdate:modelValue":n[0]||(n[0]=c=>o.searchText=c),onKeyup:n[1]||(n[1]=k((...c)=>r.search&&r.search(...c),["enter"])),ref:"searchInput"},null,34)),[[x,o.searchText]]):y("",!0),e("button",{onClick:n[2]||(n[2]=(...c)=>r.toggleSearch&&r.toggleSearch(...c))},X)])])])])]),_:1})]))])}const ge=b(z,[["render",fe],["__scopeId","data-v-02d89bc5"]]),I=""+new URL("instagram.58fcf7c1.png",import.meta.url).href;const be={data(){return{isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile()}},ke={key:0},xe=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f"},[e("div",{class:"rowf"},[e("div",{class:"col-md-3 col-sm-6 item text-right"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])])]),e("div",{class:"col-md-3 col-sm-6 item text-middle"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])])]),e("div",{class:"col-md-3 col-sm-6 item"},[e("div",{class:"social-iconsf"},[e("a",{href:"#"},[e("img",{src:T,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:O,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:I,alt:"Instagram"})]),e("div",{class:"copy-right"},"© 2020 VenTour. All rights reserved.")])])])])],-1),ye={key:1},we=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f2"},[e("div",{class:"rowf2"},[e("div",{class:"Services"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])]),e("div",{class:"Space"},[e("p")])]),e("div",{class:"Services"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])]),e("div",{class:"Services"},[e("div",{class:"social-iconsf2"},[e("a",{href:"#"},[e("img",{src:T,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:O,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:I,alt:"Instagram"})])]),e("div",{class:"copy-right2"},[e("p",null,[a("© 2020 VenTour "),e("br"),a(" All rights reserved. ")])])])])])])],-1);function Se(i,n,h,p,o,r){const l=m("desktop"),g=m("mobile");return d(),_("div",null,[o.isMobile?(d(),_("div",ye,[s(g,null,{default:t(()=>[we]),_:1})])):(d(),_("div",ke,[s(l,null,{default:t(()=>[xe]),_:1})]))])}const Te=b(be,[["render",Se]]);const Oe={},Me={class:"page"};function Pe(i,n){const h=ge,p=Te;return d(),_("div",Me,[s(h),L(i.$slots,"default"),s(p)])}const Ae=b(Oe,[["render",Pe]]);export{Ae as default};