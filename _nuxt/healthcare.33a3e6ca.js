import{_ as b}from"./left-arrows.0a7310f8.js";import{_ as y}from"./right-arrows.a4c1da13.js";import{_ as w,r as p,f as c,a as e,b as a,w as s,n as h,d as n,g as k,h as _,o as r}from"./entry.b5418a23.js";const x=""+new URL("health-team.0feb24fa.png",import.meta.url).href;const T={data(){return{activeSection:1}}},S=document.querySelectorAll(".item label");let u,l=0;function v(){u=setTimeout(()=>{let o;document.createEvent?(o=document.createEvent("MouseEvent"),o.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)):o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,clientX:20});const t=`.${testimonialItems[l].className}`;document.querySelector(t).dispatchEvent(o),l++,l>=S.length&&(l=0),v(),document.querySelector(".testimonials").addEventListener("click",()=>{clearTimeout(u)})},2e3)}v();const C={id:"back"},I={class:"info-group"},E={class:"arrow"},q={class:"arrow-left"},z=e("img",{src:b,alt:"Left Arrow"},null,-1),N=e("div",{class:"arrow-right"},[e("img",{src:y,alt:"Right Arrow"})],-1),V=e("h1",{class:"name"},"Healthcare Investments",-1),H=e("hr",null,null,-1),R={class:"row"},F=e("div",{class:"columna"},[e("img",{id:"area-img",src:x})],-1),O={class:"columna2"},P={class:"button-container",style:{position:"sticky",top:"0","z-index":"1"}},A=e("br",null,null,-1),M=e("br",null,null,-1),B={class:"description-containera"},G={key:0},L=e("br",null,null,-1),D={key:1},U=_('<ul class="comp-list"><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.unitedhealthgroup.com/" target="_blank" style="text-decoration:none;">UnitedHealth Group, Inc.</a></li><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.cardinalhealth.com/en.html" target="_blank" style="text-decoration:none;">Cardinal Health, Inc.</a></li><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.cigna.com/" target="_blank" style="text-decoration:none;">The Cigna Group</a></li><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.elevancehealth.com/" target="_blank" style="text-decoration:none;">Elevance Health, Inc. Ltd</a></li><li style="list-style:none;text-decoration:none;"><a href="https://www.pfizer.it/" target="_blank" style="text-decoration:none;font-size:medium;">Pfizer Inc</a></li></ul>',1),Y=e("hr",null,null,-1),W=_('<div class="row"><div class="text-center"><p>HAPPY INVESTORS:</p></div></div><div id="flex-container" class="testimonials"><div id="left-zone"><ul class="list"><li class="item"><input type="radio" id="radio_testimonial1-1" name="basic_carousel" checked="checked"><label class="label_testimonial1-1" for="radio_testimonial1-1">UnitedHealth Group</label><div class="content-test content_testimonial1-1"><span class="picto"></span><p>&quot;As a healthcare professional, I am thrilled to be a part of VenTour&#39;s investment portfolio. Their commitment to improving patient outcomes through innovative technology and services is truly inspiring. I have no doubt that their investments will continue to make a significant impact on the healthcare industry.&quot;</p><p class="testimonialFrom">Richard T. Burke, Founder</p><p class="testimonialState">Minnetonka, MN</p></div></li><li class="item"><input type="radio" id="radio_testimonial1-2" name="basic_carousel"><label class="label_testimonial1-2" for="radio_testimonial1-2">Cigna Group</label><div class="content-test content_testimonial1-2"><span class="picto"></span><p>&quot;VenTour&#39;s expertise and guidance have been instrumental in helping our healthcare startup succeed. Their understanding of the market and willingness to take risks has allowed us to develop groundbreaking solutions that have the potential to transform patient care.&quot;</p><p class="testimonialFrom">Mike Crompton, CEO</p><p class="testimonialState">Round Rock, TX</p><br></div></li><li class="item"><input type="radio" id="radio_testimonial1-3" name="basic_carousel"><label class="label_testimonial1-3" for="radio_testimonial1-3">CardinalHealth</label><div class="content-test content_testimonial1-3"><span class="picto"></span><p>&quot;Working with VenTour has been an incredibly positive experience. Their team is knowledgeable, professional, and committed to supporting companies that are making a real difference in healthcare. I have no doubt that their investments will have a lasting impact on the industry and improve the lives of countless patients.&quot;</p><p class="testimonialFrom">Robert D. Walter, Founder</p><p class="testimonialState">Dublin, OH</p></div></li><li class="item"><input type="radio" id="radio_testimonial1-4" name="basic_carousel"><label class="label_testimonial1-4" for="radio_testimonial1-4">Pfizer</label><div class="content-test content_testimonial1-4"><span class="picto"></span><p>&quot;As an investor, I appreciate VenTour&#39;s approach to healthcare investments. They are focused on supporting companies that are developing innovative solutions to some of the biggest challenges in healthcare. Their commitment to making a positive impact is evident in their portfolio, and I am proud to be a part of it.&quot;</p><p class="testimonialFrom">Charles Erhart, Founder</p><p class="testimonialState">New York, NY</p><br></div></li></ul></div><div id="right-zone"></div></div>',2);function X(o,t,f,j,i,J){const d=p("router-link"),m=p("p2");return r(),c("main",C,[e("div",I,[e("div",E,[e("div",q,[a(d,{to:"/technology"},{default:s(()=>[z]),_:1})]),a(d,{to:"/consumer"},{default:s(()=>[N]),_:1})]),V,H,e("div",R,[F,e("div",O,[e("div",P,[e("button",{class:h(["section-button",{active:i.activeSection===1}]),onClick:t[0]||(t[0]=g=>i.activeSection=1)},[A,n(" DESCRIPTION ")],2),e("button",{class:h(["section-button",{active:i.activeSection===2}]),onClick:t[1]||(t[1]=g=>i.activeSection=2)},[M,n(" PROJECTS ")],2)]),e("div",B,[i.activeSection===1?(r(),c("div",G,[a(m,{class:"description"},{default:s(()=>[n(" Our company has a strong track record of identifying promising healthcare startups and helping them grow and succeed. VenTour invests in a variety of healthcare sectors, including biotechnology, medical devices, and digital health.Investments are targeted at companies that are developing cutting-edge technologies and products that can improve patient outcomes, reduce healthcare costs, and increase access to care. "),L,n(" Our goal is to help every portfolio company to navigate the complex healthcare landscape and bring their innovations to market as quickly and efficiently as possible. ")]),_:1})])):i.activeSection===2?(r(),c("div",D,[a(m,{class:"description"},{default:s(()=>[n(" Current Portfolio of the investment projects in the field of Healthcare: ")]),_:1}),U])):k("",!0)])])]),Y]),W])}const Z=w(T,[["render",X]]);export{Z as default};
