import { _ as __nuxt_component_1 } from "./nuxt-link-956616fe.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, computed, resolveComponent, unref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { u as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { d as defineNuxtComponent } from "./component-8d456d6b.js";
import { u as useFetch } from "./fetch-42162552.js";
import "destr";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
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
const Supervisor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Supervisor",
  __ssrInlineRender: true,
  props: ["link", "name"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "link",
        to: __props.link
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover-content2"${_scopeId}><p${_scopeId}><span class="subtitle"${_scopeId}>Supervisor: ${ssrInterpolate(__props.name)}</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "hover-content2" }, [
                createVNode("p", null, [
                  createVNode("span", { class: "subtitle" }, "Supervisor: " + toDisplayString(__props.name), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Supervisor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _id__vue_vue_type_style_index_0_lang = "";
const __default__ = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      activeSection: 1
    };
  }
  /*async asyncData() {
          //const route = useRoute()
          const companies = await $fetch(useRuntimeConfig().public.serverURL + '/companies')
  
          return {
              companies
          }
      }*/
});
const _sfc_main = Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: people } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people/", "$K88e4Sd4Bu")), __temp = await __temp, __restore(), __temp);
    const { data: company } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies/" + id, "$9amxuUKQvO")), __temp = await __temp, __restore(), __temp);
    const supervisorname = computed(() => {
      const NameSupervisor = [];
      for (let person of people.value) {
        if (person.id === company.value.companyId) {
          console.log("Hello world");
          NameSupervisor.push(person);
        }
      }
      console.log(NameSupervisor);
      return NameSupervisor;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Supervisor = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "back" }, _attrs))}><div class="info-group"><div class="arrow">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/companies" }, {
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
      _push(`</div><h1 class="name">${ssrInterpolate(unref(company).name)}</h1><div id="data-container-c"><p class="areas">Area of investment: ${ssrInterpolate(unref(company).areas)}</p><p class="ceo">CEO: ${ssrInterpolate(unref(company).ceo)}</p><div class="supervisor"><!--[-->`);
      ssrRenderList(unref(supervisorname), (person) => {
        _push(ssrRenderComponent(_component_Supervisor, {
          name: person.name,
          link: "/people/" + person.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div><hr><div class="row-section"><div class="column-c"><img id="main-img"${ssrRenderAttr("src", unref(company).image)}></div><div class="column2-c"><div class="description-container"><p class="description">${ssrInterpolate(unref(company).description)}</p><p class="description2">${ssrInterpolate(unref(company).description2)}</p><p>Visit their official website: <a href="{{ company.link }}" target="_blank">${ssrInterpolate(unref(company).link)}</a></p></div></div></div><hr></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/companies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-976e6c75.js.map
