import{l as x,_ as m,r as p,o as h,h as u,a as e,b as t,w as a,d as l,m as k,p as b,y,W as w,z as S,s as T,x as $,q as f,X as E}from"./entry.9d6d160c.js";import{_ as I,a as C}from"./linkedin.8cec5e6b.js";const g=""+new URL("logo-witho-bck-slog.eb8eae90.png",import.meta.url).href,P=""+new URL("magnifying-glass.e31601fb.png",import.meta.url).href;const L=x(""),V={data(){return{isSearchExpanded:!1,searchText:""}},methods:{toggleSearch(s){s.stopPropagation(),this.isSearchExpanded?this.isSearchExpanded=!1:(this.isSearchExpanded=!0,this.$nextTick(()=>this.$refs.searchInput.focus()))},search(){const s=[],o=[{text:"Page 1",link:"/page1"},{text:"Page 2",link:"/page2"},{text:"Page 3",link:"/page3"}],c=L.value.toLowerCase();console.log("Searching for: ",this.searchText);for(const i of o)i.text.toLowerCase().includes(c)&&s.push(i);return s}},mounted(){document.addEventListener("click",s=>{s.target.closest(".search")||(this.isSearchExpanded=!1)})}},v=s=>(T("data-v-693448bb"),s=s(),$(),s),F={class:"header-container"},N=v(()=>e("img",{class:"logo",src:g},null,-1)),U={class:"dropdown"},z={class:"dropdown-toggle"},A={class:"dropdown-menu"},H={class:"sub-menu"},B={class:"search"},M=v(()=>e("img",{src:P,alt:"search-icon",style:{color:"#2479a3"}},null,-1)),R=[M];function D(s,o,c,i,d,_){const n=p("router-link");return h(),u("div",F,[e("header",null,[e("h4",null,[t(n,{to:"/"},{default:a(()=>[N]),_:1})]),e("nav",null,[e("span",null,[e("p",null,[t(n,{to:"/History",class:"nav-link"},{default:a(()=>[l("About Us")]),_:1})])]),t(n,{to:"/people",class:"nav-link"},{default:a(()=>[l("Our Team")]),_:1}),e("div",U,[e("div",z,[t(n,{to:"/companies",class:"nav-link"},{default:a(()=>[l("Investments")]),_:1})]),e("div",A,[e("p",null,[t(n,{to:"/companies",class:"nav-link"},{default:a(()=>[l("Areas")]),_:1})]),e("div",H,[e("p",null,[t(n,{to:"/technology",class:"nav-link"},{default:a(()=>[l("Technology")]),_:1})]),e("p",null,[t(n,{to:"/healthcare",class:"nav-link"},{default:a(()=>[l("Healthcare")]),_:1})]),e("p",null,[t(n,{to:"/consumer",class:"nav-link"},{default:a(()=>[l("Consumer Goods")]),_:1})]),e("p",null,[t(n,{to:"/sustainability",class:"nav-link"},{default:a(()=>[l("Sustainability")]),_:1})])])])]),t(n,{to:"/contact",class:"nav-link"},{default:a(()=>[l("Get In Touch")]),_:1}),e("div",B,[d.isSearchExpanded?k((h(),u("input",{key:0,type:"text",class:y({"search-expanded":d.isSearchExpanded}),placeholder:"Search","onUpdate:modelValue":o[0]||(o[0]=r=>d.searchText=r),onKeyup:o[1]||(o[1]=w((...r)=>_.search&&_.search(...r),["enter"])),ref:"searchInput"},null,34)),[[b,d.searchText]]):S("",!0),e("button",{onClick:o[2]||(o[2]=(...r)=>_.toggleSearch&&_.toggleSearch(...r))},R)])])])])}const G=m(V,[["render",D],["__scopeId","data-v-693448bb"]]),K=""+new URL("instagram.58fcf7c1.png",import.meta.url).href;const W={},q={class:"footer-dark"},O={class:"container-f"},X={class:"rowf"},j=f('<div class="col-md-3 col-sm-6 item text-right"><h3>Services</h3><ul><li><a href="#">Web design</a></li><li><a href="#">Development</a></li><li><a href="#">Terms &amp; Policy</a></li></ul></div><div class="col-md-3 col-sm-6 item text-middle"><h3>Contacts</h3><ul><li><a href="https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz" target="_blank">Address: Politecnico di Milano</a></li><li><a href="tel:+393123456789">Phone: +39 312 345 6789</a></li><li><a href="mailto:ventourteam@gmail.com" target="_blank">Email: ventourteam@gmail.com</a></li></ul></div>',2),J={class:"logof"},Q=e("img",{class:"logof",src:g},null,-1),Y=f('<div class="col-md-3 col-sm-6 item"><div class="social-iconsf"><a href="#"><img src="'+I+'" alt="Facebook"></a><a href="#"><img src="'+C+'" alt="LinkedIn"></a><a href="#"><img src="'+K+'" alt="Instagram"></a><div class="copy-right">© 2020 VenTour. All rights reserved.</div></div></div>',1);function Z(s,o){const c=p("router-link");return h(),u("div",q,[e("footer",null,[e("div",O,[e("div",X,[j,e("div",J,[t(c,{to:"/"},{default:a(()=>[Q]),_:1})])]),Y])])])}const ee=m(W,[["render",Z]]);const se={},te={class:"page"};function ae(s,o){const c=G,i=ee;return h(),u("div",te,[t(c),E(s.$slots,"default"),t(i)])}const le=m(se,[["render",ae]]);export{le as default};
