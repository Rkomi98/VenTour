import{_ as y}from"./left-arrows.f624117c.js";import{_ as w}from"./right-arrows.e719739f.js";import{_ as g,r as m,h as c,a as e,b as s,w as a,y as p,d as o,z as k,q as _,o as r}from"./entry.9d6d160c.js";const S=""+new URL("sustainability-team.f11c6793.png",import.meta.url).href;const x={data(){return{activeSection:1}}},T=document.querySelectorAll(".item label");let h,l=0;function v(){h=setTimeout(()=>{let n;document.createEvent?(n=document.createEvent("MouseEvent"),n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)):n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,clientX:20});const t=`.${testimonialItems[l].className}`;document.querySelector(t).dispatchEvent(n),l++,l>=T.length&&(l=0),v(),document.querySelector(".testimonials").addEventListener("click",()=>{clearTimeout(h)})},2e3)}v();const E={id:"back"},I={class:"info-group"},C={class:"arrow"},V={class:"arrow-left"},q=e("img",{src:y,alt:"Left Arrow"},null,-1),z=e("div",{class:"arrow-right"},[e("img",{src:w,alt:"Right Arrow"})],-1),A=e("h1",{class:"name"},"Sustainability Investments",-1),N=e("hr",null,null,-1),F={class:"row"},R=e("div",{class:"columna"},[e("img",{id:"area-img",src:S})],-1),B={class:"columna2"},O={class:"button-container",style:{position:"sticky",top:"0","z-index":"1"}},P=e("br",null,null,-1),G=e("br",null,null,-1),L={class:"description-containera"},M={key:0},j=e("br",null,null,-1),J={key:1},X=_('<ul class="comp-list"><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.ge.com/" target="_blank" style="text-decoration:none;">General Electric Co.</a></li><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.iberdrola.it/" target="_blank" style="text-decoration:none;">Iberdrola SA</a></li><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.canadiansolar.com/" target="_blank" style="text-decoration:none;">Canadian Solar, Inc. </a></li><li style="list-style:none;text-decoration:none;font-size:medium;"><a href="https://www.jinkosolar.com/en/" target="_blank" style="text-decoration:none;">JinkoSolar Holding Co., Ltd. </a></li><li style="list-style:none;text-decoration:none;"><a href="https://www.enelx.com/" target="_blank" style="text-decoration:none;font-size:medium;">Enel X</a></li></ul>',1),H=e("hr",null,null,-1),U=_('<div class="row"><div class="text-center"><p>HAPPY INVESTORS:</p></div></div><div id="flex-container" class="testimonials"><div id="left-zone"><ul class="list"><li class="item"><input type="radio" id="radio_testimonial3-1" name="basic_carousel" checked="checked"><label class="label_testimonial3-1" for="radio_testimonial3-1">Canadian Solar</label><div class="content-test content_testimonial3-1"><span class="picto"></span><p>&quot;I have been investing with VenTour for years, and I can say with confidence that they are one of the best in the business when it comes to sustainability. They have a clear vision of the kind of world they want to help create. It&#39;s been a pleasure to be a part of their journey.&quot; </p><p class="testimonialFrom">Shawn Qu, Founder</p><p class="testimonialState">Guelph, Canada</p></div></li><li class="item"><input type="radio" id="radio_testimonial3-2" name="basic_carousel"><label class="label_testimonial3-2" for="radio_testimonial3-2">Enel X</label><div class="content-test content_testimonial3-2"><span class="picto"></span><p>&quot;Working with VenTour has been a fantastic experience. Not only are they dedicated to sustainability, but they are also incredibly knowledgeable about the latest trends and technologies in the field. I feel confident that my investment is not only supporting a good cause, but also in the hands of experts who know how to make it grow.&quot;</p><p class="testimonialFrom">Francesco Venturini, CEO</p><p class="testimonialState">Rome, Italy</p><br></div></li><li class="item"><input type="radio" id="radio_testimonial3-3" name="basic_carousel"><label class="label_testimonial3-3" for="radio_testimonial3-3">Iberdrola SA</label><div class="content-test content_testimonial3-3"><span class="picto"></span><p>&quot;VenTour has truly shown us that investing in sustainability can be both profitable and good for the planet. They have a keen eye for identifying companies that are making a real impact on the environment, and their support has been instrumental in helping these businesses thrive.&quot;</p><p class="testimonialFrom">Juan de Urrutia, Founder</p><p class="testimonialState">Bilbao, Spain</p></div></li><li class="item"><input type="radio" id="radio_testimonial3-4" name="basic_carousel"><label class="label_testimonial3-4" for="radio_testimonial3-4">General Electric Co.</label><div class="content-test content_testimonial3-4"><span class="picto"></span><p>&quot;I am so impressed with VenTour&#39;s commitment to sustainability. Their portfolio of companies includes some of the most innovative and environmentally-conscious businesses I have ever seen. As an investor, I am proud to be associated with a company that is making a real difference in the world.&quot;</p><p class="testimonialFrom">Thomas Alva Edison, Founder</p><p class="testimonialState">Boston, MA</p><br></div></li></ul></div><div id="right-zone"></div></div>',2);function D(n,t,f,Q,i,W){const d=m("router-link"),u=m("p2");return r(),c("main",E,[e("div",I,[e("div",C,[e("div",V,[s(d,{to:"/consumer"},{default:a(()=>[q]),_:1})]),s(d,{to:"/companies"},{default:a(()=>[z]),_:1})]),A,N,e("div",F,[R,e("div",B,[e("div",O,[e("button",{class:p(["section-button",{active:i.activeSection===1}]),onClick:t[0]||(t[0]=b=>i.activeSection=1)},[P,o(" DESCRIPTION ")],2),e("button",{class:p(["section-button",{active:i.activeSection===2}]),onClick:t[1]||(t[1]=b=>i.activeSection=2)},[G,o(" PROJECTS ")],2)]),e("div",L,[i.activeSection===1?(r(),c("div",M,[s(u,{class:"description"},{default:a(()=>[o(" As a venture capital firm committed to sustainability, VenTour seeks to invest in companies that prioritize environmental, social, and governance (ESG) considerations. The firm is particularly interested in supporting innovative solutions that promote the transition to a low-carbon economy, enhance resource efficiency, and reduce waste. "),j,o(" One area of focus for VenTour is renewable energy, including companies developing technologies for solar, wind, and geothermal power. The firm also seeks out opportunities in energy storage and distribution, as well as in the electrification of transportation.VenTour also supports companies focused on improving supply chain transparency and reducing food waste. ")]),_:1})])):i.activeSection===2?(r(),c("div",J,[s(u,{class:"description"},{default:a(()=>[o(" Current Portfolio of the investment projects in the field of Sustainability: ")]),_:1}),X])):k("",!0)])])]),H]),U])}const Z=g(x,[["render",D]]);export{Z as default};
