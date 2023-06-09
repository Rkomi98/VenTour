import { u as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { d as defineNuxtComponent } from "./component-8d456d6b.js";
import { withAsyncContext, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-42162552.js";
import "destr";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "ohash";
const contact_vue_vue_type_style_index_0_lang = "";
const __default__ = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      activeSection: 1
    };
  },
  async asyncData() {
    const route = useRoute();
    const companies = await $fetch(useRuntimeConfig().public.serverURL + "/companies" + route.params.id);
    return {
      companies
    };
  }
});
const _sfc_main = Object.assign(__default__, {
  __name: "contact",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    [__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people/" + id, "$upAkW7AZLX")), __temp = await __temp, __restore(), __temp;
    const { data: companies } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies", "$X3ZNBmr3WA")), __temp = await __temp, __restore(), __temp);
    const areas = ref("");
    computed(() => {
      const arrTot = [];
      for (let company of companies.value) {
        if ((areas.value == 0 || areas.value == "") & company.companyId == id) {
          console.log(company);
          arrTot.push(company);
        }
      }
      return arrTot;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))}><section class="co-section"><div class="co-container"><div class="header-center"><h2> Join VenTour!</h2></div></div></section><div class="button-container-co" style="${ssrRenderStyle({ "position": "relative", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: _ctx.activeSection === 1 }, "section-button-co"])}"><br> New Company </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 2 }, "section-button-co"])}"><br> Open Positions </button></div>`);
      if (_ctx.activeSection === 1) {
        _push(`<div class="description-container-co"><h1>Do you have a company in the field of: </h1><div class="job-boards-company-grid">`);
        _push(ssrRenderComponent(_component_router_link, { to: "/healthcare" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&amp;t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Healthcare </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "job-boards-company-item" }, [
                  createVNode("img", {
                    class: "job-boards-company-logo",
                    alt: "Personio logo",
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
        _push(ssrRenderComponent(_component_router_link, { to: "/technology" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&amp;t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Technology </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "job-boards-company-item" }, [
                  createVNode("img", {
                    class: "job-boards-company-logo",
                    alt: "Personio logo",
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
        _push(ssrRenderComponent(_component_router_link, { to: "/consumer" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&amp;t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Consumer goods </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "job-boards-company-item" }, [
                  createVNode("img", {
                    class: "job-boards-company-logo",
                    alt: "Personio logo",
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
        _push(ssrRenderComponent(_component_router_link, { to: "/sustainability" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="job-boards-company-item"${_scopeId}><img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&amp;t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795" width="240" height="160"${_scopeId}><h2 class="job-boards-company-name"${_scopeId}> Sustainability </h2><div class="job-boards-company-link"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "job-boards-company-item" }, [
                  createVNode("img", {
                    class: "job-boards-company-logo",
                    alt: "Personio logo",
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
        _push(`</div><form><div class="space"><h1> Join us </h1><div class="contact-us"><label for="customerName">NAME<em>*</em></label><input id="customerName" name="customerName" required="" type="text"><label for="customerEmail">EMAIL <em>*</em></label><input id="customerEmail" name="customerEmail" required="" type="email"><label for="customerPhone">PHONE</label><input id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel"><label for="country">COUNTRY<em>*</em></label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="block" style="${ssrRenderStyle({ "height": "36px" })}"><option>Albania</option><option>China</option><option>France</option><option>Japan</option><option>Italy</option><option>Switzerland</option><option>Spain</option><option>Other</option></select></div><label for=" customerNote">ABOUT <em>*</em><span class="spanNew">    Write about your company (i.e. name and goal) </span></label><textarea id="customerNote" name="customerNote" required="" rows="4"></textarea><label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"> CV <em>*</em><span>    Upload file </span><input id="file-upload" name="file-upload" type="file" class="sr-only"></label><button id="customerOrder">SUBMIT</button></div></div></form></div>`);
      } else if (_ctx.activeSection === 2) {
        _push(`<div class="description-container-co"><h1>Do you have knowledge in Frontend Technologies: </h1><div class="job-boards-company-grid"><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Personio logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"><a href="https://vuejs.org/" target="_blank"><h2 class="job-boards-company-name"> Vue.js </h2></a><div class="job-boards-company-link"></div></div><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Personio logo" src="https://png.pngitem.com/pimgs/s/206-2069813_file-css-and-html-css-logo-svg-hd.png"><a href="https://www.w3schools.com/html/" target="_blank"><h2 class="job-boards-company-name"> HTML </h2></a><div class="job-boards-company-link"></div></div></div><div class="job-boards-company-grid"><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Personio logo" src="https://png.pngitem.com/pimgs/s/206-2069813_file-css-and-html-css-logo-svg-hd.png" height="160"><a href="https://www.w3schools.com/css/" target="_blank"><h2 class="job-boards-company-name"> CSS </h2></a><div class="job-boards-company-link"></div></div><div class="job-boards-company-item"><img class="job-boards-company-logo" alt="Personio logo" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"><a href="https://www.w3schools.com/js/default.asp" target="_blank"><h2 class="job-boards-company-name"> JavaScript </h2></a><div class="job-boards-company-link"></div></div></div><form><div class="space"><h1> Join us </h1><div class="contact-us"><label for="customerName">NAME<em>*</em></label><input id="customerName" name="customerName" required="" type="text"><label for="customerEmail">EMAIL <em>*</em></label><input id="customerEmail" name="customerEmail" required="" type="email"><label for="customerPhone">PHONE</label><input id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel"><label for="country">COUNTRY<em>*</em></label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="block" style="${ssrRenderStyle({ "height": "36px" })}"><option>Albania</option><option>China</option><option>France</option><option>Japan</option><option>Italy</option><option>Switzerland</option><option>Spain</option><option>Other</option></select></div><label for=" customerNote">ABOUT <em>*</em><span>    Write about you (goals,expectations) </span></label><textarea id="customerNote" name="customerNote" required="" rows="4"></textarea><label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"> CV <em>*</em><span>    Upload file </span><input id="file-upload" name="file-upload" type="file" class="sr-only"></label><button id="customerOrder">SUBMIT</button></div></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-f2ceb782.js.map
