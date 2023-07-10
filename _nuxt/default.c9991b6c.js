import{m as A,_ as h,r as p,o as r,f as d,b as s,w as n,a as e,d as l,n as v,Y as f,p as g,Z as b,x as M,y as P,$ as I}from"./entry.9c14e974.js";import{_ as k,a as x}from"./linkedin.5a0f7f8c.js";const w=""+new URL("logo-witho-bck-slog.eb8eae90.png",import.meta.url).href;const $=A(""),E={data(){return{isMobile:!1,navOpen:!1,navOpen2:!1,isSearchExpanded:!1,searchText:""}},methods:{toggleSearch(a){a.stopPropagation(),this.isSearchExpanded?this.isSearchExpanded=!1:(this.isSearchExpanded=!0,this.$nextTick(()=>this.$refs.searchInput.focus()))},search(){const a=[],i=[{text:"Page 1",link:"/page1"},{text:"Page 2",link:"/page2"},{text:"Page 3",link:"/page3"}],c=$.value.toLowerCase();console.log("Searching for: ",this.searchText);for(const u of i)u.text.toLowerCase().includes(c)&&a.push(u);return a},detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},closeNavbar(){this.navOpen=!1,this.navOpen2=!1}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",a=>{a.target.closest(".search")||(this.isSearchExpanded=!1)}),this.$router.beforeEach((a,i,c)=>{this.navOpen=!1,this.navOpen2=!1,c()})}},_=a=>(M("data-v-678ba7f1"),a=a(),P(),a),C={key:0},F={class:"header-container"},B=_(()=>e("img",{class:"logo",src:w},null,-1)),L={class:"dropdown"},z={class:"dropdown-toggle"},H={class:"dropdown-menu"},V={class:"sub-menu"},G={key:1},N={class:"navbar"},U={class:"navbar-item"},D=_(()=>e("img",{src:w,width:"50",height:"50"},null,-1)),R={id:"sidemenu",class:"sidemenu"},W=_(()=>e("span",{class:"top"},null,-1)),X=_(()=>e("span",{class:"mid"},null,-1)),Y=_(()=>e("span",{class:"bottom"},null,-1)),Z=[W,X,Y],j={class:"sidemenu__nav"},q={class:"sidemenu__wrapper"},J={class:"sidemenu__list"},K={class:"dropdown"},Q={class:"dropdown-toggle"},ee={id:"sidemenu",class:"sidemenu2"},se=_(()=>e("span",{class:"vert"},null,-1)),ne=_(()=>e("span",{class:"horiz"},null,-1)),te=[se,ne],le={class:"sidemenu__nav2"},ae={class:"sidemenu__wrapper"},oe={class:"sidemenu__list2"};function ie(a,i,c,u,o,S){const t=p("router-link"),m=p("desktop"),T=p("mobile");return r(),d("div",null,[o.isMobile?(r(),d("div",G,[s(T,null,{default:n(()=>[e("div",N,[e("header",null,[e("a",U,[s(t,{to:"/"},{default:n(()=>[D]),_:1})]),e("div",R,[e("button",{class:v(["sidemenu__btn",{active:o.navOpen}]),onClick:i[0]||(i[0]=O=>o.navOpen=!o.navOpen)},Z,2),s(f,{name:"translateX"},{default:n(()=>[g(e("nav",j,[e("div",q,[e("ul",J,[e("span",null,[e("p",null,[s(t,{to:"/History",class:"nav-link"},{default:n(()=>[l("About Us")]),_:1})])]),e("p",null,[s(t,{to:"/people",class:"nav-link"},{default:n(()=>[l("Our Team")]),_:1})]),e("div",K,[e("div",Q,[e("p",null,[s(t,{to:"/companies",class:"nav-link"},{default:n(()=>[l("Investments")]),_:1})]),e("div",ee,[e("button",{class:v(["sidemenu__btn",{active:o.navOpen2}]),onClick:i[1]||(i[1]=O=>o.navOpen2=!o.navOpen2)},te,2),s(f,{name:"translateX"},{default:n(()=>[g(e("nav",le,[e("div",ae,[e("ul",oe,[e("p",null,[s(t,{to:"/companies/Areas/technology",class:"nav-link"},{default:n(()=>[l("Technology")]),_:1})]),e("p",null,[s(t,{to:"/companies/Areas/healthcare",class:"nav-link"},{default:n(()=>[l("Healthcare")]),_:1})]),e("p",null,[s(t,{to:"/companies/Areas/consumer",class:"nav-link"},{default:n(()=>[l("Consumer Goods")]),_:1})]),e("p",null,[s(t,{to:"/companies/Areas/sustainability",class:"nav-link"},{default:n(()=>[l("Sustainability")]),_:1})])])])],512),[[b,o.navOpen2]])]),_:1})])])]),e("p",null,[s(t,{to:"/contact",class:"nav-link"},{default:n(()=>[l("Get In Touch")]),_:1})])])])],512),[[b,o.navOpen]])]),_:1})])])])]),_:1})])):(r(),d("div",C,[s(m,null,{default:n(()=>[e("div",F,[e("header",null,[e("h4",null,[s(t,{to:"/"},{default:n(()=>[B]),_:1})]),e("nav",null,[e("span",null,[e("p",null,[s(t,{to:"/History",class:"nav-link"},{default:n(()=>[l("About Us")]),_:1})])]),s(t,{to:"/people",class:"nav-link"},{default:n(()=>[l("Our Team")]),_:1}),e("div",L,[e("div",z,[s(t,{to:"/companies",class:"nav-link"},{default:n(()=>[l("Investments")]),_:1})]),e("div",H,[e("p",null,[s(t,{to:"/companies",class:"nav-link"},{default:n(()=>[l("Areas")]),_:1})]),e("div",V,[e("p",null,[s(t,{to:"/companies/Areas/technology",class:"nav-link"},{default:n(()=>[l("Technology")]),_:1})]),e("p",null,[s(t,{to:"/companies/Areas/healthcare",class:"nav-link"},{default:n(()=>[l("Healthcare")]),_:1})]),e("p",null,[s(t,{to:"/companies/Areas/consumer",class:"nav-link"},{default:n(()=>[l("Consumer Goods")]),_:1})]),e("p",null,[s(t,{to:"/companies/Areas/sustainability",class:"nav-link"},{default:n(()=>[l("Sustainability")]),_:1})])])])]),s(t,{to:"/contact",class:"nav-link"},{default:n(()=>[l("Get In Touch")]),_:1})])])])]),_:1})]))])}const ce=h(E,[["render",ie],["__scopeId","data-v-678ba7f1"]]),y=""+new URL("instagram.58fcf7c1.png",import.meta.url).href;const re={data(){return{isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile()}},de={key:0},_e=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f"},[e("div",{class:"rowf"},[e("div",{class:"col-md-3 col-sm-6 item text-right"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])])]),e("div",{class:"col-md-3 col-sm-6 item text-middle"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])])]),e("div",{class:"col-md-3 col-sm-6 item"},[e("div",{class:"social-iconsf"},[e("a",{href:"#"},[e("img",{src:k,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:x,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:y,alt:"Instagram"})]),e("div",{class:"copy-right"},"© 2020 VenTour. All rights reserved.")])])])])],-1),ue={key:1},pe=e("div",{class:"footer-dark"},[e("footer",null,[e("div",{class:"container-f2"},[e("div",{class:"rowf2"},[e("div",{class:"Services"},[e("h3",null,"Services"),e("ul",null,[e("li",null,[e("a",{href:"#"},"Web design")]),e("li",null,[e("a",{href:"#"},"Development")]),e("li",null,[e("a",{href:"#"},"Terms & Policy")])]),e("div",{class:"Space"},[e("p")])]),e("div",{class:"Services"},[e("h3",null,"Contacts"),e("ul",null,[e("li",null,[e("a",{href:"https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",target:"_blank"},"Address: Politecnico di Milano")]),e("li",null,[e("a",{href:"tel:+393123456789"},"Phone: +39 312 345 6789")]),e("li",null,[e("a",{href:"mailto:ventourteam@gmail.com",target:"_blank"},"Email: ventourteam@gmail.com")])])]),e("div",{class:"Services"},[e("div",{class:"social-iconsf2"},[e("a",{href:"#"},[e("img",{src:k,alt:"Facebook"})]),e("a",{href:"#"},[e("img",{src:x,alt:"LinkedIn"})]),e("a",{href:"#"},[e("img",{src:y,alt:"Instagram"})])]),e("div",{class:"copy-right2"},[e("p",null,[l("© 2020 VenTour "),e("br"),l(" All rights reserved. ")])])])])])])],-1);function me(a,i,c,u,o,S){const t=p("desktop"),m=p("mobile");return r(),d("div",null,[o.isMobile?(r(),d("div",ue,[s(m,null,{default:n(()=>[pe]),_:1})])):(r(),d("div",de,[s(t,null,{default:n(()=>[_e]),_:1})]))])}const he=h(re,[["render",me]]);const ve={},fe={class:"page"};function ge(a,i){const c=ce,u=he;return r(),d("div",fe,[s(c),I(a.$slots,"default"),s(u)])}const xe=h(ve,[["render",ge]]);export{xe as default};