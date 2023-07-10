import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { d as defineNuxtComponent } from "./component-496ff4fa.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "unhead";
import "./asyncData-ddf0e9e2.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "@unhead/shared";
import "defu";
const contact_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      activeSection: 1,
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      country: "",
      customerNote: ""
    };
  },
  methods: {
    submitForm() {
      let check;
      if (this.customerName == "" || !this.customerEmail || !this.customerNote || !this.$refs.fileUpload.files) {
        check = false;
      } else {
        check = true;
      }
      if (check == false) {
        return;
      }
      ({
        to: "ventourteam@gmail.com",
        attachments: [
          {
            name: this.$refs.fileUpload.files[0].name,
            data: this.$refs.fileUpload.files[0]
          }
        ]
      });
      this.sendEmail().then(() => {
        alert("Look for your email provider and continue there! Unfortunately, you have to attach the file you have uploaded (" + this.$refs.fileUpload.files[0].name + ") again for privacy reasons");
        this.resetForm();
      }).catch((error) => {
        console.error("Error sending email:", error);
        alert("An error occurred while opening the email provider. Please try again.");
      });
    },
    sendEmail(activeSection) {
      let check;
      if (this.customerName == "" || !this.customerEmail || !this.customerNote || !this.$refs.fileUpload.files) {
        check = false;
      } else {
        check = true;
      }
      if (check == false) {
        alert("Please fill in all mandatory fields.");
        return;
      }
      const recipient = "ventourteam@gmail.com";
      let subject;
      let body;
      console.log("I am a " + activeSection, typeof activeSection);
      if (activeSection === 1) {
        subject = "Request from " + this.customerName;
        body = "Good morning,\nI'm " + this.customerName + " and I would like to send a request to make my company be part of Ventour Capital. \nTalking about my company, I would like to say a couple of words. First of all, its register office is in " + this.country + ". \n" + this.customerNote + "\nCan you please contact me at this email: " + this.customerEmail + "or " + this.customerPhone + "\n Thank you for your attention, \nBest Regards \n" + this.customerName;
      } else {
        subject = "Application for Frontend developer - by " + this.customerName;
        body = "Good morning,\nI'm " + this.customerName + " and I would like to apply for the job offer I found on your website. \nTalking about me, I would like to say a couple of words. First of all I live in " + this.country + ". \n" + this.customerNote + "\nCan you please contact me at this email: " + this.customerEmail + "\n Thank you for your attention, \nBest Regards \n" + this.customerName;
      }
      const mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = mailtoLink;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Sending email:");
          resolve();
        }, 2e3);
      });
    },
    resetForm() {
      this.customerName = "";
      this.customerEmail = "";
      this.customerPhone = "";
      this.country = "";
      this.customerNote = "";
      this.$refs.fileUpload.value = "";
    }
  }
}, "$upAkW7AZLX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Contact VenTour - Get in touch with VenTour for inquiries, company registrations, and job applications. Learn how to apply for open positions or register your company with VenTour to explore investment opportunities."></head><main id="contact"><section class="co-section"><div class="co-container"><div class="header-center"><h2> Join VenTour!</h2></div></div></section><div class="button-container-co" style="${ssrRenderStyle({ "position": "relative", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: _ctx.activeSection === 1 }, "section-button-co"])}"><br> New Company </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 2 }, "section-button-co"])}"><br> Open Positions </button></div>`);
  if (_ctx.activeSection === 1) {
    _push(`<div class="description-container-co"><h1>Do you have a company in the field of: </h1><div class="job-boards-company-grid">`);
    _push(ssrRenderComponent(_component_router_link, { to: "/companies/Areas/healthcare" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="HealthcareLogo" src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&amp;t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Healthcare </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
        } else {
          return [
            createVNode("div", { class: "job-boards-company-item" }, [
              createVNode("img", {
                class: "job-boards-company-logo",
                alt: "HealthcareLogo",
                src: "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821",
                width: "240",
                height: "160"
              }),
              createVNode("h2", { class: "job-boards-company-name" }, " Healthcare "),
              createVNode("div", { class: "job-boards-company-link" })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_router_link, { to: "/companies/Areas/technology" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Technology logo" src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&amp;t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Technology </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
        } else {
          return [
            createVNode("div", { class: "job-boards-company-item" }, [
              createVNode("img", {
                class: "job-boards-company-logo",
                alt: "Technology logo",
                src: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796",
                width: "240",
                height: "160"
              }),
              createVNode("h2", { class: "job-boards-company-name" }, " Technology "),
              createVNode("div", { class: "job-boards-company-link" })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="job-boards-company-grid">`);
    _push(ssrRenderComponent(_component_router_link, { to: "/companies/Areas/consumer" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Consumer logo" src="https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&amp;t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Consumer goods </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
        } else {
          return [
            createVNode("div", { class: "job-boards-company-item" }, [
              createVNode("img", {
                class: "job-boards-company-logo",
                alt: "Consumer logo",
                src: "https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7",
                width: "240",
                height: "160"
              }),
              createVNode("h2", { class: "job-boards-company-name" }, " Consumer goods "),
              createVNode("div", { class: "job-boards-company-link" })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_router_link, { to: "/companies/Areas/sustainability" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Sustainability logo" src="https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&amp;t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Sustainability </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
        } else {
          return [
            createVNode("div", { class: "job-boards-company-item" }, [
              createVNode("img", {
                class: "job-boards-company-logo",
                alt: "Sustainability logo",
                src: "https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795",
                width: "240",
                height: "160"
              }),
              createVNode("h2", { class: "job-boards-company-name" }, " Sustainability "),
              createVNode("div", { class: "job-boards-company-link" })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><form><div class="space"><h1>Join us</h1><div class="contact-us"><label class="labeljoin" for="customerName">NAME<em>*</em></label><input id="customerName"${ssrRenderAttr("value", _ctx.customerName)} required type="text"><label class="labeljoin" for="customerEmail">EMAIL <em>*</em></label><input id="customerEmail"${ssrRenderAttr("value", _ctx.customerEmail)} required type="email"><label class="labeljoin" for="customerPhone">PHONE</label><input id="customerPhone"${ssrRenderAttr("value", _ctx.customerPhone)} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel"><label class="labeljoin" for="country">COUNTRY<em>*</em></label><div class="mt-2"><select id="country" autocomplete="country-name" class="block" style="${ssrRenderStyle({ "height": "36px" })}"><option>Albania</option><option>China</option><option>France</option><option>Japan</option><option>Italy</option><option>Switzerland</option><option>Spain</option><option>Other</option></select></div><label class="labeljoin" for="customerNote">ABOUT <em>*</em><span class="spanNew">    Write about your company (i.e. name and goal)</span></label><textarea id="customerNote" required rows="4">${ssrInterpolate(_ctx.customerNote)}</textarea><label for="file-upload" class="labeljoin"> Company Profile or Business Proposal <em>*</em><span class="spanNew">    Upload file</span><input id="file-upload" type="file" class="sr-only"></label><button id="customerOrder" href="#">SUBMIT</button></div></div></form></div>`);
  } else if (_ctx.activeSection === 2) {
    _push(`<div class="description-container-co"><h1>Do you have knowledge in Frontend Technologies: </h1><div class="job-boards-company-grid"><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"><a href="https://vuejs.org/" target="_blank"><h2 class="job-boards-company-name"> Vue.js </h2></a><div class="job-boards-company-link"></div></div><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="HTML logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"><a href="https://www.w3schools.com/html/" target="_blank"><h2 class="job-boards-company-name"> HTML </h2></a><div class="job-boards-company-link"></div></div></div><div class="job-boards-company-grid"><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="CSS logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"><a href="https://www.w3schools.com/css/" target="_blank"><h2 class="job-boards-company-name"> CSS </h2></a><div class="job-boards-company-link"></div></div><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Javascript logo" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"><a href="https://www.w3schools.com/js/default.asp" target="_blank"><h2 class="job-boards-company-name"> JavaScript </h2></a><div class="job-boards-company-link"></div></div></div><form><div class="space"><h1> Join us </h1><div class="contact-us"><label class="labeljoin" for="customerName">NAME<em>*</em></label><input id="customerName" name="customerName" required="" type="text"${ssrRenderAttr("value", _ctx.customerName)}><label class="labeljoin" for="customerEmail">EMAIL <em>*</em></label><input id="customerEmail"${ssrRenderAttr("value", _ctx.customerEmail)} name="customerEmail" required="" type="email"><label class="labeljoin" for="customerPhone">PHONE</label><input id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel"><label class="labeljoin" for="country">COUNTRY<em>*</em></label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="block" style="${ssrRenderStyle({ "height": "36px" })}"><option>Albania</option><option>China</option><option>France</option><option>Japan</option><option>Italy</option><option>Switzerland</option><option>Spain</option><option>Other</option></select></div><label class="labeljoin" for=" customerNote">ABOUT <em>*</em><span class="spanNew">    Write about you (goals,expectations) </span></label><textarea id="customerNote" name="customerNote" required="" rows="4">${ssrInterpolate(_ctx.customerNote)}</textarea><label for="file-upload" class="labeljoin"> CV <em>*</em><span class="spanNew">    Upload file</span><input id="file-upload" type="file" class="sr-only"></label><button id="customerOrder" href="#">SUBMIT</button></div></div></form></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-663602a6.js.map
