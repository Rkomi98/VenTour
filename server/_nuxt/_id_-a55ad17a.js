import { _ as __nuxt_component_0 } from "./Cardsection-d6d901b9.js";
import { u as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { d as defineNuxtComponent } from "./component-8d456d6b.js";
import { withAsyncContext, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-42162552.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
import { _ as _imports_0$1, a as _imports_1 } from "./linkedin-11d60358.js";
import "./nuxt-link-956616fe.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "ohash";
const _imports_3 = "" + __buildAssetsURL("email.10aa3ad7.png");
const _id__vue_vue_type_style_index_0_lang = "";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: person } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people/" + id, "$ZLTXWWi2cH")), __temp = await __temp, __restore(), __temp);
    const { data: companies } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies", "$ySsDfdwNKg")), __temp = await __temp, __restore(), __temp);
    const areas = ref("");
    const filtered = computed(() => {
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
      const _component_p2 = resolveComponent("p2");
      const _component_p3 = resolveComponent("p3");
      const _component_Cardsection = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "back" }, _attrs))}><div class="info-group"><div class="arrow">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/people" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: _imports_0 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="name">${ssrInterpolate(unref(person).name)}</h1><div id="data-container"><p class="role">${ssrInterpolate(unref(person).role)}</p><p class="team">${ssrInterpolate(unref(person).team)}</p></div><hr><div class="social-icons"><img${ssrRenderAttr("src", _imports_0$1)} alt="Facebook"><img${ssrRenderAttr("src", _imports_1)} alt="LinkedIn"><img${ssrRenderAttr("src", _imports_3)} alt="Email"></div><div class="row-section"><div class="column"><img id="main-img"${ssrRenderAttr("src", unref(person).image)}></div><div class="column2"><div class="description-containera"><div class="button-container" style="${ssrRenderStyle({ "position": "relative", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: _ctx.activeSection === 1 }, "section-button"])}"><br> BIO </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 2 }, "section-button"])}"><br> AWARDS </button></div>`);
      if (_ctx.activeSection === 1) {
        _push(`<div class="description-container">`);
        _push(ssrRenderComponent(_component_p2, { class: "description" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(person).description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(person).description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_p2, { class: "description" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(person).description2)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(person).description2), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (_ctx.activeSection === 2) {
        _push(`<div class="description-container">`);
        _push(ssrRenderComponent(_component_p3, { class: "description" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul${_scopeId}><li${_scopeId}>${ssrInterpolate(unref(person).award1)}</li><br${_scopeId}>`);
              if (unref(person).award2 != "") {
                _push2(`<li${_scopeId}>${ssrInterpolate(unref(person).award2)}</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<br${_scopeId}>`);
              if (unref(person).award3 != "") {
                _push2(`<li${_scopeId}>${ssrInterpolate(unref(person).award3)}</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<br${_scopeId}>`);
              if (unref(person).award4 != "") {
                _push2(`<li${_scopeId}>${ssrInterpolate(unref(person).award4)}</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</ul>`);
            } else {
              return [
                createVNode("ul", null, [
                  createVNode("li", null, toDisplayString(unref(person).award1), 1),
                  createVNode("br"),
                  unref(person).award2 != "" ? (openBlock(), createBlock("li", { key: 0 }, toDisplayString(unref(person).award2), 1)) : createCommentVNode("", true),
                  createVNode("br"),
                  unref(person).award3 != "" ? (openBlock(), createBlock("li", { key: 1 }, toDisplayString(unref(person).award3), 1)) : createCommentVNode("", true),
                  createVNode("br"),
                  unref(person).award4 != "" ? (openBlock(), createBlock("li", { key: 2 }, toDisplayString(unref(person).award4), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><hr></div>`);
      if (unref(filtered).length > 0) {
        _push(`<div><div class="row-section"><div class="text-center"><p>COMPANIES IN SUPERVISION:</p></div></div><div class="row-section2"><!--[-->`);
        ssrRenderList(unref(filtered), (company) => {
          _push(ssrRenderComponent(_component_Cardsection, {
            subtitle: company.ceo,
            area: company.areas,
            image: company.image,
            link: "/companies/" + company.id
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-a55ad17a.js.map
