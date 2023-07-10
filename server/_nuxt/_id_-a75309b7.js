import { a as __nuxt_component_0$1, u as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { withCtx, createVNode, toDisplayString, useSSRContext, mergeProps, withAsyncContext, computed, resolveComponent, unref, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { d as defineNuxtComponent } from "./component-496ff4fa.js";
import { u as useFetch } from "./fetch-ee284798.js";
import "destr";
import "devalue";
import "klona";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "./asyncData-ddf0e9e2.js";
import "ohash";
const AreaIdPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "AreaIdPage",
  __ssrInlineRender: true,
  props: ["link", "name"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Area cards used to show area of investments"></head>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: __props.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover-content2"${_scopeId}><p${_scopeId}><span class="subtitle"${_scopeId}>Area of investment: ${ssrInterpolate(__props.name)}</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "hover-content2" }, [
                createVNode("p", null, [
                  createVNode("span", { class: "subtitle" }, "Area of investment: " + toDisplayString(__props.name), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AreaIdPage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const Supervisor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Supervisor",
  __ssrInlineRender: true,
  props: ["link", "name"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
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
const __nuxt_component_1 = _sfc_main$1;
const _id__vue_vue_type_style_index_0_lang = "";
const __default__ = /* @__PURE__ */ defineNuxtComponent({
  head() {
    return {
      meta: [
        {
          name: "description",
          content: "Learn about the company, discover detailed information about it, including a brief description, the associated area of investment, the supervisor at VenTour, and the official website of the company."
        }
      ]
    };
  },
  data() {
    return {
      activeSection: 1,
      isMobile: false
    };
  },
  methods: {
    detectMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  },
  mounted() {
    this.isMobile = this.detectMobile();
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search")) {
        this.isSearchExpanded = false;
      }
    });
  }
}, "$K88e4Sd4Bu");
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: people } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people/", "$9amxuUKQvO")), __temp = await __temp, __restore(), __temp);
    const { data: company } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies/" + id, "$A9fin2OhFP")), __temp = await __temp, __restore(), __temp);
    const { data: Allareas } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas", "$S3XkB9BxAY")), __temp = await __temp, __restore(), __temp);
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
    const AreaCompany = computed(() => {
      const NameArea = [];
      for (let area of Allareas.value) {
        console.log("My best area isss", area.id);
        console.log("My best area isss", company.value.areasId);
        if (area.id === company.value.areasId) {
          NameArea.push(area);
        }
      }
      return NameArea;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_AreaIdPage = __nuxt_component_0;
      const _component_Supervisor = __nuxt_component_1;
      const _component_desktop = resolveComponent("desktop");
      const _component_mobile = resolveComponent("mobile");
      _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Learn about the company, discover detailed information about it, including a brief description, the associated area of investment, the supervisor at VenTour, and the official website of the company."></head><main id="back"><div class="info-group"><div class="arrow">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/companies" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Left Arrow"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Left Arrow"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="name">${ssrInterpolate(unref(company).name)}</h1><div id="data-container-c"><p class="areas"><!--[-->`);
      ssrRenderList(unref(AreaCompany), (area) => {
        _push(ssrRenderComponent(_component_AreaIdPage, {
          name: area.name,
          link: "/areas/" + area.id
        }, null, _parent));
      });
      _push(`<!--]--></p><p class="ceo">CEO: ${ssrInterpolate(unref(company).ceo)}</p><div class="supervisor"><!--[-->`);
      ssrRenderList(unref(supervisorname), (person) => {
        _push(ssrRenderComponent(_component_Supervisor, {
          name: person.name,
          link: "/people/" + person.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div><hr>`);
      if (!_ctx.isMobile) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row-section"${_scopeId}><div class="column-c"${_scopeId}><img id="main-img"${ssrRenderAttr("src", unref(company).image)} alt="Company Image"${_scopeId}></div><div class="column2-c"${_scopeId}><div class="description-container"${_scopeId}><p class="description"${_scopeId}>${ssrInterpolate(unref(company).description)}</p><p class="description2"${_scopeId}>${ssrInterpolate(unref(company).description2)}</p><p${_scopeId}>Visit their official website: <a href="{{ company.link }}" target="_blank"${_scopeId}>${ssrInterpolate(unref(company).link)}</a></p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "row-section" }, [
                  createVNode("div", { class: "column-c" }, [
                    createVNode("img", {
                      id: "main-img",
                      src: unref(company).image,
                      alt: "Company Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "column2-c" }, [
                    createVNode("div", { class: "description-container" }, [
                      createVNode("p", { class: "description" }, toDisplayString(unref(company).description), 1),
                      createVNode("p", { class: "description2" }, toDisplayString(unref(company).description2), 1),
                      createVNode("p", null, [
                        createTextVNode("Visit their official website: "),
                        createVNode("a", {
                          href: "{{ company.link }}",
                          target: "_blank"
                        }, toDisplayString(unref(company).link), 1)
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_mobile, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="column-section"${_scopeId}><div class="column-c"${_scopeId}><img id="main-img3"${ssrRenderAttr("src", unref(company).image)} alt="Company Image"${_scopeId}></div><div class="column2-c"${_scopeId}><div class="description-container2"${_scopeId}><p class="description"${_scopeId}>${ssrInterpolate(unref(company).description)}</p><p class="description2"${_scopeId}>${ssrInterpolate(unref(company).description2)}</p><p class="official-link"${_scopeId}>Visit their official website: <a href="{{ company.link }}" target="_blank"${_scopeId}>${ssrInterpolate(unref(company).link)}</a></p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "column-section" }, [
                  createVNode("div", { class: "column-c" }, [
                    createVNode("img", {
                      id: "main-img3",
                      src: unref(company).image,
                      alt: "Company Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "column2-c" }, [
                    createVNode("div", { class: "description-container2" }, [
                      createVNode("p", { class: "description" }, toDisplayString(unref(company).description), 1),
                      createVNode("p", { class: "description2" }, toDisplayString(unref(company).description2), 1),
                      createVNode("p", { class: "official-link" }, [
                        createTextVNode("Visit their official website: "),
                        createVNode("a", {
                          href: "{{ company.link }}",
                          target: "_blank"
                        }, toDisplayString(unref(company).link), 1)
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<hr></div></main></div>`);
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
//# sourceMappingURL=_id_-a75309b7.js.map
