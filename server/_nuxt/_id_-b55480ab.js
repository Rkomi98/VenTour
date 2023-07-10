import { a as __nuxt_component_0, u as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, computed, resolveComponent, unref, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./Cardsection-ae6017f8.js";
import { d as defineNuxtComponent } from "./component-496ff4fa.js";
import { u as useFetch } from "./fetch-ee284798.js";
import "destr";
import "devalue";
import "klona";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
import { _ as _imports_1 } from "./right-arrows-1e290cdd.js";
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
const CarouselCompany_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "CarouselCompany",
  __ssrInlineRender: true,
  props: ["image", "subtitle", "link", "area"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row-c" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: __props.link }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="image-container-section"${_scopeId}><img class="img"${ssrRenderAttr("src", __props.image)}${_scopeId}><p${_scopeId}><span class="subtitle2"${_scopeId}>CEO: ${ssrInterpolate(__props.subtitle)}</span></p><p${_scopeId}><span class="subtitle2"${_scopeId}>Area: ${ssrInterpolate(__props.area)}</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "image-container-section" }, [
                createVNode("img", {
                  class: "img",
                  src: __props.image
                }, null, 8, ["src"]),
                createVNode("p", null, [
                  createVNode("span", { class: "subtitle2" }, "CEO: " + toDisplayString(__props.subtitle), 1)
                ]),
                createVNode("p", null, [
                  createVNode("span", { class: "subtitle2" }, "Area: " + toDisplayString(__props.area), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselCompany.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _id__vue_vue_type_style_index_0_lang = "";
const __default__ = /* @__PURE__ */ defineNuxtComponent({
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
    },
    scrollLeft() {
      const carousel = this.$refs.carousel;
      carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const carousel = this.$refs.carousel;
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.isMobile = this.detectMobile();
  }
}, "$LpZQ2Apvba");
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: companies } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies", "$8eiaZJzUXi")), __temp = await __temp, __restore(), __temp);
    const { data: area } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas/" + id, "$kmFqoKRNGf")), __temp = await __temp, __restore(), __temp);
    const filtered = computed(() => {
      const arrTot = [];
      console.log(area.value.name);
      for (let company of companies.value) {
        if (company.ceo != void 0) {
          if (company.areas == area.value.name) {
            arrTot.push(company);
          }
        }
      }
      console.log("My life is here:", arrTot);
      return arrTot;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_desktop = resolveComponent("desktop");
      const _component_mobile = resolveComponent("mobile");
      const _component_CarouselCompany = __nuxt_component_1;
      const _component_Cardsection = __nuxt_component_0$1;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Explore the area of investment of VenTour. Learn about the focus, potential investments, and success stories within this area of expertise, including the company involved."></head><main id="back"><div class="info-group"><div class="arrow"><div class="arrow-left">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(area).id === 1 ? "/companies" : "/areas/" + (unref(area).id - 1),
        class: "nav-link2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="area-arrow"${ssrRenderAttr("src", _imports_0)} alt="Left Arrow"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "area-arrow",
                src: _imports_0,
                alt: "Left Arrow"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="name">${ssrInterpolate(unref(area).name)}</h1><div class="arrow-right">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(area).id === 4 ? "/companies" : "/areas/" + (unref(area).id + 1),
        class: "nav-link2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="area-arrow"${ssrRenderAttr("src", _imports_1)} alt="right Arrow"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "area-arrow",
                src: _imports_1,
                alt: "right Arrow"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><hr>`);
      if (!_ctx.isMobile) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row-section"${_scopeId}><div class="column-c"${_scopeId}><img id="main-img-area"${ssrRenderAttr("src", unref(area).image)} alt="Area Image"${_scopeId}></div><div class="column2-c"${_scopeId}><div class="description-container"${_scopeId}><p class="description"${_scopeId}>${ssrInterpolate(unref(area).description)}</p><p class="description2"${_scopeId}>${ssrInterpolate(unref(area).description2)}</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "row-section" }, [
                  createVNode("div", { class: "column-c" }, [
                    createVNode("img", {
                      id: "main-img-area",
                      src: unref(area).image,
                      alt: "Area Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "column2-c" }, [
                    createVNode("div", { class: "description-container" }, [
                      createVNode("p", { class: "description" }, toDisplayString(unref(area).description), 1),
                      createVNode("p", { class: "description2" }, toDisplayString(unref(area).description2), 1)
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
              _push2(`<div class="column-section"${_scopeId}><div class="column-c"${_scopeId}><img id="main-img3"${ssrRenderAttr("src", unref(area).image)} alt="Area Image"${_scopeId}></div><div class="column2-c"${_scopeId}><div class="description-container2"${_scopeId}><p class="description"${_scopeId}>${ssrInterpolate(unref(area).description)}</p><p class="description2"${_scopeId}>${ssrInterpolate(unref(area).description2)}</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "column-section" }, [
                  createVNode("div", { class: "column-c" }, [
                    createVNode("img", {
                      id: "main-img3",
                      src: unref(area).image,
                      alt: "Area Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "column2-c" }, [
                    createVNode("div", { class: "description-container2" }, [
                      createVNode("p", { class: "description" }, toDisplayString(unref(area).description), 1),
                      createVNode("p", { class: "description2" }, toDisplayString(unref(area).description2), 1)
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
      _push(`<hr></div>`);
      if (unref(filtered).length > 0) {
        _push(`<div><div class="row-section"><div class="text-center"><p>COMPANIES IN THIS AREA:</p></div></div>`);
        if (!_ctx.isMobile) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_desktop, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="row-section3"${_scopeId}><div class="carousel-area"${_scopeId}><div class="slides"${_scopeId}><!--[-->`);
                ssrRenderList(unref(filtered), (company) => {
                  _push2(ssrRenderComponent(_component_CarouselCompany, {
                    subtitle: company.ceo,
                    area: company.areas,
                    image: company.image,
                    link: "/companies/" + company.id
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div><div class="nav-buttons"${_scopeId}><div class="nav-button-wrapper"${_scopeId}><button class="nav-button left"${_scopeId}>‹</button></div><div class="nav-button-wrapper"${_scopeId}><button class="nav-button right"${_scopeId}>›</button></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "row-section3" }, [
                    createVNode("div", {
                      class: "carousel-area",
                      ref: "carousel"
                    }, [
                      createVNode("div", { class: "slides" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(filtered), (company) => {
                          return openBlock(), createBlock(_component_CarouselCompany, {
                            subtitle: company.ceo,
                            area: company.areas,
                            image: company.image,
                            link: "/companies/" + company.id
                          }, null, 8, ["subtitle", "area", "image", "link"]);
                        }), 256))
                      ])
                    ], 512),
                    createVNode("div", { class: "nav-buttons" }, [
                      createVNode("div", { class: "nav-button-wrapper" }, [
                        createVNode("button", {
                          class: "nav-button left",
                          onClick: _ctx.scrollLeft
                        }, "‹", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "nav-button-wrapper" }, [
                        createVNode("button", {
                          class: "nav-button right",
                          onClick: _ctx.scrollRight
                        }, "›", 8, ["onClick"])
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
                _push2(`<div class="column2Card"${_scopeId}><!--[-->`);
                ssrRenderList(unref(filtered), (company) => {
                  _push2(ssrRenderComponent(_component_Cardsection, {
                    subtitle: company.ceo,
                    area: company.areas,
                    image: company.image,
                    link: "/companies/" + company.id
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "column2Card" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filtered), (company) => {
                      return openBlock(), createBlock(_component_Cardsection, {
                        subtitle: company.ceo,
                        area: company.areas,
                        image: company.image,
                        link: "/companies/" + company.id
                      }, null, 8, ["subtitle", "area", "image", "link"]);
                    }), 256))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col3topAreas">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/companies",
        class: "nav-link-end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="card13Areastop"${_scopeId}><div class="go-cornertop"${_scopeId}></div><h3${_scopeId}>CHECK ALL AREAS</h3></a>`);
          } else {
            return [
              createVNode("a", { class: "card13Areastop" }, [
                createVNode("div", { class: "go-cornertop" }),
                createVNode("h3", null, "CHECK ALL AREAS")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-b55480ab.js.map
