import{o as _,c as f,a as e,t as v,e as b,w as g,g as E,_ as N,h as M,p as A,i as x,d as I,m as c,q as d,v as r,j as o,s as m,F as w,r as S,f as V,k as R,l as $,y as C,z as O}from"./entry.044ba798.js";import{u as D}from"./fetch.38960c2d.js";import"./asyncData.2ed96193.js";const B={class:"row"},P={class:"image-container"},F={class:"subtitle"},U=["src"],L={class:"clickable-image-container"},G={class:"hover-content"},j=["src"],z={class:"subtitle"},q={class:"subtitle"},H={class:"subtitle"},K={__name:"Card",props:["image","title","subtitle","link","area"],setup(s){return(l,h)=>{const u=E;return _(),f("div",B,[e("div",P,[e("span",F,[e("img",{class:"img",src:s.image},null,8,U),e("h2",null,v(s.title),1),e("div",L,[b(u,{to:s.link},{default:g(()=>[e("div",G,[e("img",{class:"img",src:s.image},null,8,j),e("h3",null,[e("span",z,v(s.title),1)]),e("p",null,[e("span",q,v(s.subtitle),1)]),e("p",null,[e("span",H,v(s.area),1)])])]),_:1},8,["to"])])])])])}}},J=K;const i=s=>(C("data-v-f3e8cba0"),s=s(),O(),s),Q=V('<section class="container custom-container" data-v-f3e8cba0><div class="co-container" data-v-f3e8cba0><div class="header-center" data-v-f3e8cba0><h2 data-v-f3e8cba0> Meet Our Team</h2></div></div><div class="row-a" data-v-f3e8cba0><div class="container-a" data-v-f3e8cba0><div class="col-a" data-v-f3e8cba0><a class="card1r" href="#header1" data-v-f3e8cba0><h3 data-v-f3e8cba0>MANAGEMENT<br data-v-f3e8cba0>DEPARTMENT</h3><p class="small-a" data-v-f3e8cba0>They develop and implement strategic plans, set organizational goals, and provide leadership to drive the company&#39;s growth and success. </p></a></div><div class="col-a" data-v-f3e8cba0><a class="card1r" href="#header2" data-v-f3e8cba0><h3 data-v-f3e8cba0>INVESTMENT <br data-v-f3e8cba0>DEPARTMENT</h3><p class="small-a" data-v-f3e8cba0>They conduct thorough research, assess risk factors, and make informed investment decisions to optimize the company&#39;s financial performance.</p></a></div><div class="col-a" data-v-f3e8cba0><a class="card1r" href="#header3" data-v-f3e8cba0><h3 data-v-f3e8cba0>OPERATIONS &amp; FINANCE DEPARTMENT</h3><p class="small-a" data-v-f3e8cba0>They monitor cash flow and implement cost-saving measures while maintaining quality standards to support the company&#39;s overall objectives.</p></a></div><div class="col-a" data-v-f3e8cba0><a class="card1r" href="#header3" data-v-f3e8cba0><h3 data-v-f3e8cba0>ADVISORING <br data-v-f3e8cba0>DEPARTMENT</h3><p class="small-a" data-v-f3e8cba0>They offer valuable insights, assess risks, and provide recommendations on key decisions, helping the company navigate on every challenge.</p></a></div></div></div></section>',1),W={id:"team-members-grid"},X={class:"grid-container"},Y={id:"filter-container"},Z={class:"grid-x"},ee=i(()=>e("div",{class:"cell small-12 filter-title"},"Filter By Department:",-1)),ae={class:"dropdown-grid-filter-container"},te={class:"dropdown-grid-filter grid-x align-middle"},se={for:"all-team"},ne=i(()=>e("span",{class:"checkmark"},null,-1)),ie={for:"investment-team"},oe=i(()=>e("span",{class:"checkmark"},null,-1)),le={for:"investor-relations"},ce=i(()=>e("span",{class:"checkmark"},null,-1)),de={for:"finance-operations"},re=i(()=>e("span",{class:"checkmark"},null,-1)),me={for:"finance-operations"},ue=i(()=>e("span",{class:"checkmark"},null,-1)),ve={id:"card-container"},_e={class:"col3f"},he=i(()=>e("a",{class:"card13"},[e("h3",null,"CHECK OUR INVESTMENTS"),e("div",{class:"go-corner"},[e("div",{class:"go-arrow"}," → ")])],-1)),pe={data(){return{isMobile:!1}},methods:{detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},mounted(){this.isMobile=this.detectMobile(),document.addEventListener("click",s=>{s.target.closest(".search")||(this.isSearchExpanded=!1)})}},fe=Object.assign(pe,{__name:"index",async setup(s){let l,h;const{data:u}=([l,h]=M(()=>D(R().public.serverURL+"/people","$86ry0ThwyT")),l=await l,h(),l),a=A(""),T=x(()=>{if(a.value==0||a.value=="")return u.value;const p=[];for(let n of u.value)n.team==a.value&&p.push(n);return p});return(p,n)=>{const k=J,y=I("router-link");return _(),f("main",null,[Q,e("section",W,[e("div",X,[e("div",Y,[e("div",Z,[ee,e("div",ae,[e("div",te,[e("label",se,[c(" ALL "),d(e("input",{type:"radio",id:"all-team",value:"",name:"team-categories","onUpdate:modelValue":n[0]||(n[0]=t=>m(a)?a.value=t:null),checked:""},null,512),[[r,o(a)]]),ne]),e("label",ie,[c(" MANAGEMENT "),d(e("input",{type:"radio",id:"Management-Team",value:"Management Team",name:"team-categories","onUpdate:modelValue":n[1]||(n[1]=t=>m(a)?a.value=t:null)},null,512),[[r,o(a)]]),oe]),e("label",le,[c(" INVESTMENT "),d(e("input",{type:"radio",id:"Investment-Team",value:"Investment Team",name:"team-categories","onUpdate:modelValue":n[2]||(n[2]=t=>m(a)?a.value=t:null)},null,512),[[r,o(a)]]),ce]),e("label",de,[c(" FINANCE "),d(e("input",{type:"radio",id:"finance-operations",value:"Operations and Finance Team",name:"team-categories","onUpdate:modelValue":n[3]||(n[3]=t=>m(a)?a.value=t:null)},null,512),[[r,o(a)]]),re]),e("label",me,[c(" ADVISORING BOARD "),d(e("input",{type:"radio",id:"finance-operations",value:"Advisoring Board Team",name:"team-categories","onUpdate:modelValue":n[4]||(n[4]=t=>m(a)?a.value=t:null)},null,512),[[r,o(a)]]),ue])])])])])]),e("div",ve,[(_(!0),f(w,null,S(o(T),t=>(_(),$(k,{image:t.image,title:t.name,subtitle:t.role,team:t.team,area:t.area,link:"/people/"+t.id},null,8,["image","title","subtitle","team","area","link"]))),256))]),e("div",_e,[b(y,{to:"/companies",class:"nav-link-end"},{default:g(()=>[he]),_:1})])])])}}}),ke=N(fe,[["__scopeId","data-v-f3e8cba0"]]);export{ke as default};
