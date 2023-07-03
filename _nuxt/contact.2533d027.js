import{_ as v,h as _,f as u,a as o,A as f,d as a,b as m,w as d,q as n,x as i,B as j,C as y,g as w,i as g,o as p}from"./entry.6b2e3779.js";import{d as k}from"./component.f7107e0d.js";import"./asyncData.ac563a31.js";const N=k({head(){return{meta:[{name:"description",content:"Contact VenTour - Get in touch with VenTour for inquiries, company registrations, and job applications. Learn how to apply for open positions or register your company with VenTour to explore investment opportunities."}]}},data(){return{activeSection:1,customerName:"",customerEmail:"",customerPhone:"",country:"",customerNote:""}},methods:{submitForm(){let e;this.customerName==""||!this.customerEmail||!this.customerNote||!this.$refs.fileUpload.files?e=!1:e=!0,e!=!1&&(this.$refs.fileUpload.files[0].name,this.$refs.fileUpload.files[0],this.sendEmail().then(()=>{alert("Look for your email provider and continue there! Unfortunately, you have to attach the file you have uploaded ("+this.$refs.fileUpload.files[0].name+") again for privacy reasons"),this.resetForm()}).catch(t=>{console.error("Error sending email:",t),alert("An error occurred while opening the email provider. Please try again.")}))},sendEmail(e){let t;if(this.customerName==""||!this.customerEmail||!this.customerNote||!this.$refs.fileUpload.files?t=!1:t=!0,t==!1){alert("Please fill in all mandatory fields.");return}const h="ventourteam@gmail.com";let r,c;console.log("I am a "+e,typeof e),e===1?(r="Request from "+this.customerName,c=`Good morning,
I'm `+this.customerName+` and I would like to send a request to make my company be part of Ventour Capital. 
Talking about my company, I would like to say a couple of words. First of all, its register office is in `+this.country+`. 
`+this.customerNote+`
Can you please contact me at this email: `+this.customerEmail+"or "+this.customerPhone+`
 Thank you for your attention, 
Best Regards 
`+this.customerName):(r="Application for Frontend developer - by "+this.customerName,c=`Good morning,
I'm `+this.customerName+` and I would like to apply for the job offer I found on your website. 
Talking about me, I would like to say a couple of words. First of all I live in `+this.country+`. 
`+this.customerNote+`
Can you please contact me at this email: `+this.customerEmail+`
 Thank you for your attention, 
Best Regards 
`+this.customerName);const b="mailto:"+h+"?subject="+encodeURIComponent(r)+"&body="+encodeURIComponent(c);return window.location.href=b,new Promise((l,s)=>{setTimeout(()=>{console.log("Sending email:"),l()},2e3)})},resetForm(){this.customerName="",this.customerEmail="",this.customerPhone="",this.country="",this.customerNote="",this.$refs.fileUpload.value=""}}}),C={id:"contact"},E=o("section",{class:"co-section"},[o("div",{class:"co-container"},[o("div",{class:"header-center"},[o("h2",null," Join VenTour!")])])],-1),U={class:"button-container-co",style:{position:"relative",top:"0","z-index":"1"}},S=o("br",null,null,-1),T=o("br",null,null,-1),V={key:0,class:"description-container-co"},P=o("h1",null,"Do you have a company in the field of: ",-1),I={class:"job-boards-company-grid"},A=o("div",{class:"job-boards-company-item"},[o("img",{class:"job-boards-company-logo",alt:"HealthcareLogo",src:"https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821",width:"240",height:"160"}),o("h2",{class:"job-boards-company-name"}," Healthcare "),o("div",{class:"job-boards-company-link"})],-1),$=o("div",{class:"job-boards-company-item"},[o("img",{class:"job-boards-company-logo",alt:"Technology logo",src:"https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796",width:"240",height:"160"}),o("h2",{class:"job-boards-company-name"}," Technology "),o("div",{class:"job-boards-company-link"})],-1),F={class:"job-boards-company-grid"},M=o("div",{class:"job-boards-company-item"},[o("img",{class:"job-boards-company-logo",alt:"Consumer logo",src:"https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7",width:"240",height:"160"}),o("h2",{class:"job-boards-company-name"}," Consumer goods "),o("div",{class:"job-boards-company-link"})],-1),B=o("div",{class:"job-boards-company-item"},[o("img",{class:"job-boards-company-logo",alt:"Sustainability logo",src:"https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795",width:"240",height:"160"}),o("h2",{class:"job-boards-company-name"}," Sustainability "),o("div",{class:"job-boards-company-link"})],-1),O={class:"space"},q=o("h1",null,"Join us",-1),L={class:"contact-us"},H=o("label",{class:"labeljoin",for:"customerName"},[a("NAME"),o("em",null,"*")],-1),J=o("label",{class:"labeljoin",for:"customerEmail"},[a("EMAIL "),o("em",null,"*")],-1),R=o("label",{class:"labeljoin",for:"customerPhone"},"PHONE",-1),z=o("label",{class:"labeljoin",for:"country"},[a("COUNTRY"),o("em",null,"*")],-1),D={class:"mt-2"},G=o("option",null,"Albania",-1),W=o("option",null,"China",-1),Y=o("option",null,"France",-1),K=o("option",null,"Japan",-1),Q=o("option",null,"Italy",-1),X=o("option",null,"Switzerland",-1),Z=o("option",null,"Spain",-1),x=o("option",null,"Other",-1),oo=[G,W,Y,K,Q,X,Z,x],eo=o("label",{class:"labeljoin",for:"customerNote"},[a("ABOUT "),o("em",null,"*"),o("span",{class:"spanNew"},"    Write about your company (i.e. name and goal)")],-1),to={for:"file-upload",class:"labeljoin"},so=o("em",null,"*",-1),ao=o("span",{class:"spanNew"},"    Upload file",-1),no={id:"file-upload",type:"file",class:"sr-only",ref:"fileUpload"},io={key:1,class:"description-container-co"},lo=g('<h1>Do you have knowledge in Frontend Technologies: </h1><div class="job-boards-company-grid"><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"><a href="https://vuejs.org/" target="_blank"><h2 class="job-boards-company-name"> Vue.js </h2></a><div class="job-boards-company-link"></div></div><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="HTML logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"><a href="https://www.w3schools.com/html/" target="_blank"><h2 class="job-boards-company-name"> HTML </h2></a><div class="job-boards-company-link"></div></div></div><div class="job-boards-company-grid"><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="CSS logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"><a href="https://www.w3schools.com/css/" target="_blank"><h2 class="job-boards-company-name"> CSS </h2></a><div class="job-boards-company-link"></div></div><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Javascript logo" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"><a href="https://www.w3schools.com/js/default.asp" target="_blank"><h2 class="job-boards-company-name"> JavaScript </h2></a><div class="job-boards-company-link"></div></div></div>',3),ro={class:"space"},co=o("h1",null," Join us ",-1),mo={class:"contact-us"},uo=o("label",{class:"labeljoin",for:"customerName"},[a("NAME"),o("em",null,"*")],-1),po=o("label",{class:"labeljoin",for:"customerEmail"},[a("EMAIL "),o("em",null,"*")],-1),ho=g('<label for="customerPhone">PHONE</label><input id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel"><label class="labeljoin" for="country">COUNTRY<em>*</em></label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="block" style="height:36px;"><option>Albania</option><option>China</option><option>France</option><option>Japan</option><option>Italy</option><option>Switzerland</option><option>Spain</option><option>Other</option></select></div><label class="labeljoin" for=" customerNote">ABOUT <em>*</em><span class="spanNew">    Write about you (goals,expectations) </span></label>',5),bo={for:"file-upload",class:"labeljoin"},fo=o("em",null,"*",-1),yo=o("span",{class:"spanNew"},"    Upload file",-1),go={id:"file-upload",type:"file",class:"sr-only",ref:"fileUpload"};function vo(e,t,h,r,c,b){const l=_("router-link");return p(),u("main",C,[E,o("div",U,[o("button",{class:f(["section-button-co",{active:e.activeSection===1}]),onClick:t[0]||(t[0]=s=>e.activeSection=1)},[S,a(" New Company ")],2),o("button",{class:f(["section-button-co",{active:e.activeSection===2}]),onClick:t[1]||(t[1]=s=>e.activeSection=2)},[T,a(" Open Positions ")],2)]),e.activeSection===1?(p(),u("div",V,[P,o("div",I,[m(l,{to:"/companies/Areas/healthcare"},{default:d(()=>[A]),_:1}),m(l,{to:"/companies/Areas/technology"},{default:d(()=>[$]),_:1})]),o("div",F,[m(l,{to:"/companies/Areas/consumer"},{default:d(()=>[M]),_:1}),m(l,{to:"/companies/Areas/sustainability"},{default:d(()=>[B]),_:1})]),o("form",null,[o("div",O,[q,o("div",L,[H,n(o("input",{id:"customerName","onUpdate:modelValue":t[2]||(t[2]=s=>e.customerName=s),required:"",type:"text"},null,512),[[i,e.customerName]]),J,n(o("input",{id:"customerEmail","onUpdate:modelValue":t[3]||(t[3]=s=>e.customerEmail=s),required:"",type:"email"},null,512),[[i,e.customerEmail]]),R,n(o("input",{id:"customerPhone","onUpdate:modelValue":t[4]||(t[4]=s=>e.customerPhone=s),pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",type:"tel"},null,512),[[i,e.customerPhone]]),z,o("div",D,[n(o("select",{id:"country","onUpdate:modelValue":t[5]||(t[5]=s=>e.country=s),autocomplete:"country-name",class:"block",style:{height:"36px"}},oo,512),[[j,e.country]])]),eo,n(o("textarea",{id:"customerNote","onUpdate:modelValue":t[6]||(t[6]=s=>e.customerNote=s),required:"",rows:"4"},null,512),[[i,e.customerNote]]),o("label",to,[a(" Company Profile or Business Proposal "),so,ao,o("input",no,null,512)]),o("button",{id:"customerOrder",onClick:[t[7]||(t[7]=y((...s)=>e.submitForm&&e.submitForm(...s),["prevent"])),t[8]||(t[8]=s=>e.sendEmail(1))],href:"#"},"SUBMIT")])])])])):e.activeSection===2?(p(),u("div",io,[lo,o("form",null,[o("div",ro,[co,o("div",mo,[uo,n(o("input",{id:"customerName",name:"customerName",required:"",type:"text","onUpdate:modelValue":t[9]||(t[9]=s=>e.customerName=s)},null,512),[[i,e.customerName]]),po,n(o("input",{id:"customerEmail","onUpdate:modelValue":t[10]||(t[10]=s=>e.customerEmail=s),name:"customerEmail",required:"",type:"email"},null,512),[[i,e.customerEmail]]),ho,n(o("textarea",{id:"customerNote",name:"customerNote",required:"",rows:"4","onUpdate:modelValue":t[11]||(t[11]=s=>e.customerNote=s)},null,512),[[i,e.customerNote]]),o("label",bo,[a(" CV "),fo,yo,o("input",go,null,512)]),o("button",{id:"customerOrder",onClick:[t[12]||(t[12]=y((...s)=>e.submitForm&&e.submitForm(...s),["prevent"])),t[13]||(t[13]=s=>e.sendEmail(2))],href:"#"},"SUBMIT")])])])])):w("",!0)])}const ko=v(N,[["render",vo]]);export{ko as default};
