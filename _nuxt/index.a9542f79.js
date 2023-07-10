import{o as d,c as p,a as e,e as L,w as q,t as g,g as E,_ as M,h as A,p as y,i as R,q as $,v as F,j as v,s as S,F as w,r as k,m as x,x as W,k as O,l as I,y as z,z as N}from"./entry.6f3fb3b0.js";import{_ as P}from"./Cardsection.7d7c362a.js";import{u as T}from"./fetch.ec3b2932.js";import"./asyncData.dbe2e255.js";const U={class:"column41"},V={class:"area-icons"},H=["src"],B=["data-target"],j={class:"link-text"},D={class:"learn-more"},J={style:{color:"#033f52"}},K=["for"],G=["id","value","checked"],Q=e("h1",{class:"learn-more",style:{color:"#033f52"}},"SELECT & CHECK COMPANIES",-1),X=e("span",{class:"checkmark"},null,-1),Y={emits:["update:areas"],methods:{isSelectedArea(t){return this.value===t},selectArea(t){this.$emit("update:areas",t)}},mounted(){const t=document.querySelectorAll(".counter"),a=u=>{const n=u.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)},c=()=>{t.forEach((u,n)=>{if(a(u)){const i=+u.dataset.target,r=performance.now(),f=2e3,l=o=>{const b=o-r,_=Math.min(b/f,1),s=Math.floor(_*i);u.textContent=`${s}+`,_<1&&requestAnimationFrame(l)};requestAnimationFrame(l)}else u.textContent="0+"})},h=()=>{c(),window.removeEventListener("scroll",h)};window.addEventListener("scroll",h)}},Z=Object.assign(Y,{__name:"AreaFilter",props:["logo","name","data_target","link","value"],setup(t){return(a,c)=>{const h=E;return d(),p("div",U,[e("div",V,[e("img",{class:"img",src:t.logo,alt:"AreaLogo"},null,8,H)]),e("div",{class:"counter","data-target":t.data_target},null,8,B),e("div",j,[e("a",D,[L(h,{to:t.link},{default:q(()=>[e("h1",J,g(t.name)+" Investments →",1)]),_:1},8,["to"])])]),e("label",{for:t.name},[e("input",{type:"radio",id:t.name,value:t.name,name:"Investments-categories",checked:a.isSelectedArea(t.name),onChange:c[0]||(c[0]=u=>a.selectArea(t.name))},null,40,G),Q,X],8,K)])}}});const m=t=>(z("data-v-504e21a7"),t=t(),N(),t),ee={class:"containeri"},te={class:"col-md-4"},se={class:"image-text-overlay text-middle-left"},oe=m(()=>e("span",{class:"overlay-title"},"Ventour investments",-1)),ae=m(()=>e("br",null,null,-1)),ne=m(()=>e("span",{class:"overlay-subtext"},"We have a track record of identifying and nurtuing some of the most innovative and dynamic startups in the world!",-1)),ie=m(()=>e("br",null,null,-1)),le=m(()=>e("span",{class:"overlay-subsubtext"},[e("em",null,"*"),x(" Click the buttons to view all companies we have invested in, or select an investment area and click the buttons to filter.")],-1)),re={class:"overlay-buttons"},ce={href:"#title2"},ue={class:"row4-a"},de={class:"title"},me={for:"all-team"},he=m(()=>e("h1",{class:"learn-more-2",style:{color:"#033f52"}},"ALL COMPANIES",-1)),pe=m(()=>e("span",{class:"checkmark"},null,-1)),ve={class:"row4"},_e={class:"team-members-grid"},ge={id:"title2"},fe={class:"form-container"},be=m(()=>e("label",{for:"age-filter"},"Filter companies by name ",-1)),ye={class:"row-c"},we={id:"card-container"},ke={class:"row41"},xe={class:"text-block"},Ce={class:"left-text"},Ae={class:"buttons-container"},$e={class:"buttons"},Se=["onClick"],Oe={style:{"align-items":"center",margin:"5%"}},Ie={class:"right-text"},Te={methods:{updateText(t){this.rightColumnText=t}},data(){return{areas:"",leftColumnText:"We are committed to helping our portfolio companies realize their full potential. One of the key ways is by working closely with our companies to develop and execute a successful exit strategy. Our goal is to help our companies achieve a successful exit that maximizes returns for our investors and provides a strong foundation for future growth and opportunities. Take a look at our exit strategies in the buttons below:",rightColumnText:"",buttons:[{id:2,label:"IPO",text:"An Initial Public Offering is a process where a private company goes public and offers shares of stock to the public market. We prepare our companies for an IPO, including helping them build a strong management team, establishing governance and financial controls,and developing a compelling growth strategy. Our deep understanding of the public markets, combined with our network of investment bankers,allows us to guide our companies to achieve the best possible outcome."},{id:3,label:"M & A",text:"Mergers & Acquisitions involves the acquisition of a company by another company often at a premiuim price. We work closely to identify potential acquirers and facilitate the M & A process, including valuation analysis, due diligence and negotiation. Our network of strategic buyers, private equity firms, and other potential acquirers enables us to help our companies to achieve transactions that maximize returns for our investors."},{id:4,label:"Strategic Sale",text:"A strategic sale involves the scale of a company to a strategic buyer, such as a competitor or industry player. We have deep industry expertise and a broad network of strategic buyers, enabling us to help our portfolio companies identify potential acquirers and negotiate a successful sale. Our focus on building strong relationships with key players in the industry allows us to achieve the best possible outcome for our companies."},{id:5,label:"Recapitalization",text:"Recapitalization involves restructuring the capital structure of a company, often through a combination of debt and equity. We work closely to evaluate their capital needs and develop comprehensive recapitalization plan that balances the companys growth objectives with its financial profile. We help the companies achieve a successful recapitalization that provides a strong foundation for future growth and opportunities."}]}}},Le=Object.assign(Te,{__name:"index",async setup(t){let a,c;const{data:h}=([a,c]=A(()=>T(O().public.serverURL+"/companies","$d9mU0JHUxi")),a=await a,c(),a),{data:u}=([a,c]=A(()=>T(O().public.serverURL+"/areas","$y1kSrS6gHq")),a=await a,c(),a),n=y(""),i=y(""),r=y(""),f=R(()=>{const l=[];for(let o of h.value)o.ceo!=null&&(((n.value==0||n.value=="")&(i.value==0||i.value=="")&(r.value==0||r.value=="")||o.name.toLowerCase().includes(n.value.toLowerCase())&(o.areas==i.value||i.value==0||i.value=="")&(o.MostRelevant==r.value||r.value==0||r.value==""))&&l.push(o),console.log(r.value));return l});return(l,o)=>{const b=Z,_=P;return d(),p("main",null,[e("div",ee,[e("div",te,[e("div",se,[e("p",null,[oe,ae,ne,ie,le,e("div",re,[e("a",ce,[e("button",{class:"active",onClick:o[0]||(o[0]=s=>r.value="")}," Show all "),e("button",{onClick:o[1]||(o[1]=s=>r.value=!0)},"Most Relevant Companies")])])])])]),e("div",ue,[e("div",de,[e("label",me,[$(e("input",{type:"radio",id:"all-investments",value:"",name:"Investments-categories","onUpdate:modelValue":o[2]||(o[2]=s=>S(i)?i.value=s:null),checked:""},null,512),[[F,v(i)]]),he,pe])])]),e("div",ve,[(d(!0),p(w,null,k(v(u),s=>(d(),I(b,{logo:s.logo,name:s.name,data_target:s.data_target,link:"/areas/"+s.id,value:v(i),"onUpdate:areas":o[3]||(o[3]=C=>i.value=C)},null,8,["logo","name","data_target","link","value"]))),256))])]),e("section",_e,[e("div",ge,[x("PORTFOLIO SNAPSHOT "),e("div",fe,[be,$(e("input",{id:"age-filter",type:"text",placeholder:"Search Company","onUpdate:modelValue":o[4]||(o[4]=s=>S(n)?n.value=s:null)},null,512),[[W,v(n)]])])]),e("div",ye,[e("div",we,[(d(!0),p(w,null,k(v(f),s=>(d(),I(_,{subtitle:s.ceo,area:s.areas,image:s.image,link:"/companies/"+s.id},null,8,["subtitle","area","image","link"]))),256))])])]),e("div",ke,[e("div",xe,[x(" Our Exit Strategies "),e("p",Ce,g(l.leftColumnText),1)]),e("div",Ae,[e("div",$e,[(d(!0),p(w,null,k(l.buttons,s=>(d(),p("div",{key:s.id},[e("button",{style:{color:"white"},onClick:C=>l.updateText(s.text)},[e("span",null,g(s.label),1)],8,Se)]))),128))]),e("div",Oe,[e("div",Ie,[e("p",null,g(l.rightColumnText),1)])])])])])}}}),Fe=M(Le,[["__scopeId","data-v-504e21a7"]]);export{Fe as default};