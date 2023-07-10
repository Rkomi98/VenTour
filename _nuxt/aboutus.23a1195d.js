import{_ as w}from"./left-arrows.be162e27.js";import{_ as y}from"./right-arrows.081b2610.js";import{_ as p,o as n,c as o,a as e,n as b,F as m,r as _,t as h,b as x,d as k,e as u,w as T,f as v}from"./entry.c4b45cc0.js";const W={data(){return{cards:[{image:"https://images.unsplash.com/photo-1652109629663-1fbc7b2ff7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",title:"VenTour: A Century of Pioneering Investments",text:"Everything started in 1907 and none of us knew that be would witness the birth of VenTour, a trailblazing venture capital company that has shaped industries and empowered entrepreneurs for over a hundred years."},{image:"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",title:"Forging a Legacy: VenTour's Early Years of Innovation",text:"The relentless determination and tireless efforts marked VenTour's formative years, as visionary founders and dedicated teams worked tirelessly to lay the foundation for a venture capital empire. It took us years and years of hardworking hours and study to rise up till here."},{image:"https://media.wnyc.org/i/800/0/c/85/1/47244u.jpg",title:"Sealing the Future: VenTour's Inaugural Contract",text:"Now we look back in 1920, at the historic moment of the pioneers of VenTour gather to sign their first groundbreaking contract, igniting a new era of investment and setting the stage for unprecedented growth."},{image:"https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",title:"Fueling Ambition: VenTour's Journey Driven by Passion",text:"The driving force behind VenTour's remarkable journey is our unwavering passion for innovation and bold investments, which  propels us to new heights in the ever-evolving landscape of venture capital."},{image:"https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",title:"The Power of Collaboration: VenTour's Collective Vision",text:"Through years we have experienced  the energy and collective wisdom of VenTour's dedicated team as they gather for a transformative meeting, strategizing and shaping the future of investments with their diverse expertise and shared commitment."},{image:"https://media.istockphoto.com/id/530686057/photo/portrait-of-young-man-holding-trophy-standing-in-conference-room-smiling-to-applauding-audience.jpg?b=1&s=170667a&w=0&k=20&c=of1xAxrNRRRN6p1V7cRhBiTW0O-lIEQxhCDOGwJu0L4=",title:"Excellence Recognized:Best Company of the Year",text:'Witness a moment of well-deserved celebration as a proud member of VenTour holds the prestigious award for "Best Company of the Year 2023", a testament to their relentless pursuit of excellence in the realm of venture capital.'}],innerStyles:{},step:"",transitioning:!1,currentCardIndex:0}},mounted(){this.setStep(),this.resetTranslate()},methods:{sendEmail(){const s="ventourteam@gmail.com",t="General information [Insert Topic]",d="Hello, I have some questions about [continue].";window.location.href=`mailto:${s}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(d)}`},handleMouseScroll(s){const t=s.deltaX;t>0?this.next():t<0&&this.prev()},setStep(){this.$refs.inner.scrollWidth,this.cards.length,this.step="0%"},next(){this.transitioning||(this.transitioning=!0,this.moveLeft(),this.afterTransition(()=>{const s=this.cards.shift();this.cards.push(s),this.resetTranslate(),this.transitioning=!1}),this.currentCardIndex=this.currentCardIndex%this.cards.length,this.cards[this.currentCardIndex].showText=!0)},prev(){this.transitioning||(this.transitioning=!0,this.moveRight(),this.afterTransition(()=>{const s=this.cards.pop();this.cards.unshift(s),this.resetTranslate(),this.transitioning=!1}),this.currentCardIndex=(this.currentCardIndex+this.cards.length)%this.cards.length,this.cards[this.currentCardIndex].showText=!0)},moveLeft(){this.innerStyles={transform:`translateX(-${this.step})
                    translateX(-${this.step})`}},moveRight(){this.innerStyles={transform:`translateX(${this.step})
                    translateX(-${this.step})`}},afterTransition(s){const t=()=>{s(),this.$refs.inner.removeEventListener("transitionend",t)};this.$refs.inner.addEventListener("transitionend",t)},resetTranslate(){this.innerStyles={transition:"none",transform:`translateX(-${this.step})`}}}},C={class:"carousel"},R={class:"card-content"},E=["src"],O={class:"text-container2"},I={key:0,class:"card-info"},S={class:"card-title"},V={class:"card-text"},H={class:"arrow-c"},M={class:"left-arrow-container"},$={class:"right-arrow-container"};function B(s,t,d,g,r,a){return n(),o("main",null,[e("div",{id:"carousel-container",onWheel:t[2]||(t[2]=(...i)=>a.handleMouseScroll&&a.handleMouseScroll(...i))},[e("div",C,[e("div",{class:"inner",ref:"inner",style:b(r.innerStyles)},[(n(!0),o(m,null,_(r.cards,(i,c)=>(n(),o("div",{class:"card",key:c},[e("div",R,[e("img",{class:"img",src:i.image},null,8,E),e("div",O,[c===r.currentCardIndex?(n(),o("div",I,[e("h2",S,h(i.title),1),e("p",V,h(i.text),1)])):x("",!0)]),e("div",H,[e("div",M,[e("img",{class:"left-arrow",onClick:t[0]||(t[0]=(...l)=>a.prev&&a.prev(...l)),src:w})]),e("div",$,[e("img",{class:"right-arrow",onClick:t[1]||(t[1]=(...l)=>a.next&&a.next(...l)),src:y})])])])]))),128))],4)])],32)])}const f=p(W,[["render",B]]),j=""+new URL("market-analysis.a6e41eeb.png",import.meta.url).href,A=""+new URL("teamexp.d45df80e.png",import.meta.url).href,U=""+new URL("customer-need.25983fad.png",import.meta.url).href;const D={name:"History",components:{Carousel:f}},G=v('<section class="background-section"><div class="co-container"><div class="header-center"><h2> About VenTour</h2></div></div><div class="row-a"><div class="container-a"><div class="col-a"><a class="card1" href="#header1"><h3>OUR HISTORY</h3><p class="small-a">Excellence over a decade in VenTour. From 15 million Euros of capital invested in 1910 to 500 million Euros in 2020. We grow together with our investors! </p><div class="go-corner" href="#header1"><div class="go-arrow"> → </div></div></a></div><div class="col-a"><a class="card1" href="#header2"><h3>OUR APPROACH</h3><p class="small-a">Evaluated from numerous experts as the best approach in helping the investors accomplish their ambitions for success. We help you to believe in YOU!</p><div class="go-corner" href="#header2"><div class="go-arrow"> → </div></div></a></div><div class="col-a"><a class="card1" href="#header3"><h3>WHAT DO WE OFFER</h3><p class="small-a">We offer constant support, full guidance and numerous resources. We give information and assistance to new investors interested in joining us.</p><div class="go-corner" href="#header3"><div class="go-arrow"> → </div></div></a></div></div></div></section>',1),N={id:"back-c"},F=e("div",{id:"header1"},[e("h1",null,"OUR BRIEF HISTORY"),e("p",null,"Our history brings inovation. With a rich legacy spanning decades, we have been at the forefront of driving transformative change and empowering startups to shape the future.With a rich heritage spanning over two decades, our venture company has been at the forefront of fueling innovation, supporting promising startups, and fostering groundbreaking ideas that have revolutionized industries worldwide.")],-1),L=v('<div id="header2"><h1>OUR INVESTMENT APPROACH</h1><p>We are focused on four key factors that help us identify promising startups or better say... We make EVERYTHING promising!Our investment approach is driven by a meticulous evaluation of market dynamics, team expertise, product viability, and customer needs, ensuring a comprehensive assessment of startup potential. By combining strategic insights, rigorous analysis, and an unwavering belief in the power of innovation, we strive to transform every venture we back into a resounding success story that shapes the future of industries.</p></div><div class="row1-container"><div class="box box-down cyan"><h2>Growing Markets</h2><img class="ikona" src="'+j+'"><p>We look for startups that are addressing large and growing markets with significant untapped potential. We assess the size of the market, the competitive landscape, and the potential for disruption.</p></div><div class="box red"><h2>Team Experience</h2><img class="ikona" src="'+A+'"><p>We believe that the founding team is critical to the success of any startup. We evaulate the team&#39;s experience, skills, and track record to ensure that they have the expertise and leadership necessary to execute on their vision. </p></div><div class="box box-down blue"><h2>Startup Products</h2><img class="ikona" src="https://assets.codepen.io/2301174/icon-calculator.svg"><p>We evaluate the startup&#39;s product or technology to ensure that it has a strong competitive advantage and addresses a real customer need. We assess the potential for scalability and the potential for further innovation and development.</p></div></div><div class="row2-container"><div class="box orange"><h2>Customer Needs</h2><img class="ikona" src="'+U+'"><p>We focus on analyzing the alignment with market demand and customer needs. We assess the clarity and feasibility of the company&#39;s objectives, ensuring that they are relevant and time-bound. We evaluate the strategic plans, including actions and milestones outlined to achieve the specific objectives. </p></div></div><div id="header3"><h1>WHAT WE OFFER TO COMPANIES</h1><p>Once we have identified a promising startup, we work closely with the founding team to provide support, guidance, and resources to help them achieve their goals. Our team&#39;s extensive network and industry connections give our portfolio companies a competitive advantage in their respective markets.Our goal is to provide all companies with the resources they need to succeed, no matter what challenges they may face.</p></div><div class="card-o-row"><div class="card-o"><img src="https://media.istockphoto.com/id/494940062/photo/financial-concept-business-and-money.jpg?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=XPiQNsS1zIOyNLFDeffchh6T03A_mkR2IkBP06J9iyw=" alt=""><div class="card-content-o"><h2> SUPPORT </h2><p> We believe that investing in a startup is more than just providing funding. We take a hands-on approach, working closely with our companies to provide the support they need to succeed. We are always available to provide support and answer questions. </p><a class="button-o" href="mailto:ventourteam@gmail.com"> Contact for info. or questions <span class="material-symbols-outlined"></span></a></div></div><div class="card-o"><img src="https://media.istockphoto.com/id/950986640/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=RvubsRQ8G-ZHiD0VyahnuZWKoQ-88HMnGQMBFSnOBjU=" alt=""><div class="card-content-o"><h2> GUIDANCE </h2><p> We work with out founding team to help companies develop their strategy and execute on their vision. We have a deep understanding of the challenges that startups face, and we draw on this knowledge to provide targeted guidance to our porfolio companies. </p><a class="button-o" href="mailto:ventourteam@gmail.com"> Contact for info. or questions <span class="material-symbols-outlined"></span></a></div></div><div class="card-o"><img src="https://media.istockphoto.com/id/1468415656/photo/interest-rate-and-dividend-concept-businessman-with-percentage-symbol-and-up-arrow-interest.jpg?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=TeLXGpi5W-S04Lq0pSFluYu-xb7TpLa3isCcUiMOJb4=" alt=""><div class="card-content-o"><h2> RESOURCES </h2><p> We provide our portfolio companies with a wide range of resources. We provide them with access to a variety of services, such as marketing and branding support, legal and accounting services, and HR and recruiting support. </p><a class="button-o" href="mailto:ventourteam@gmail.com"> Contact for info. or questions <span class="material-symbols-outlined"></span></a></div></div></div>',5),P={class:"col3"},Y=e("a",{class:"card13"},[e("h3",null,"MEET OUR TEAM"),e("div",{class:"go-corner"},[e("div",{class:"go-arrow"}," → ")])],-1);function q(s,t,d,g,r,a){const i=f,c=k("router-link");return n(),o(m,null,[G,e("section",N,[F,u(i),L,e("div",P,[u(c,{to:"/people",class:"nav-link-end"},{default:T(()=>[Y]),_:1})])])],64)}const Q=p(D,[["render",q]]);export{Q as default};