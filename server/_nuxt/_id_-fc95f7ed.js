import { _ as __nuxt_component_0 } from "./Cardsection-ae6017f8.js";
import { executeAsync } from "unctx";
import { u as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { d as defineNuxtComponent } from "./component-496ff4fa.js";
import { withAsyncContext, computed, resolveComponent, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-ee284798.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
import { _ as _imports_0$1, a as _imports_1 } from "./linkedin-11d60358.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "./asyncData-ddf0e9e2.js";
import "ohash";
const _imports_3 = "" + __buildAssetsURL("email.10aa3ad7.png");
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
    }
  },
  async asyncData() {
    let __temp, __restore;
    const route = useRoute();
    const companies = ([__temp, __restore] = executeAsync(() => $fetch(useRuntimeConfig().public.serverURL + "/companies" + route.params.id)), __temp = await __temp, __restore(), __temp);
    return {
      companies
    };
  },
  mounted() {
    this.isMobile = this.detectMobile();
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search")) {
        this.isSearchExpanded = false;
      }
    });
  }
}, "$ZLTXWWi2cH");
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: person } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people/" + id, "$ySsDfdwNKg")), __temp = await __temp, __restore(), __temp);
    const { data: companies } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies", "$9aEKl9pgtl")), __temp = await __temp, __restore(), __temp);
    const filtered = computed(() => {
      const arrTot = [];
      for (let company of companies.value) {
        console.log(id + company.companyId);
        if (company.companyId == id) {
          console.log(company);
          arrTot.push(company);
        }
      }
      return arrTot;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_desktop = resolveComponent("desktop");
      const _component_p2 = resolveComponent("p2");
      const _component_mobile = resolveComponent("mobile");
      const _component_p3 = resolveComponent("p3");
      const _component_Cardsection = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Details of the person working in the area - Explore his or her profile at VenTour, including their area of investment, CV, awards achieved, and where he/she is supervisory role."></head><main id="back"><div class="info-group"><div class="arrow">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/people" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Arrow"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Arrow"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="name">${ssrInterpolate(unref(person).name)}</h1><div id="data-container"><p class="role">${ssrInterpolate(unref(person).role)}</p><p class="team">${ssrInterpolate(unref(person).team)}</p></div><hr><div class="social-icons"><img${ssrRenderAttr("src", _imports_0$1)} alt="Facebook"><img${ssrRenderAttr("src", _imports_1)} alt="LinkedIn"><img${ssrRenderAttr("src", _imports_3)} alt="Email"></div>`);
      if (!_ctx.isMobile) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row-section"${_scopeId}><div class="column-b"${_scopeId}><img id="main-img2"${ssrRenderAttr("src", unref(person).image)} alt="Person Image"${_scopeId}></div><div class="column2"${_scopeId}><div class="button-container" style="${ssrRenderStyle({ "position": "relative", "top": "0", "z-index": "1" })}"${_scopeId}><button class="${ssrRenderClass([{ active: _ctx.activeSection === 1 }, "section-button"])}"${_scopeId}><br${_scopeId}> BIO </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 2 }, "section-button"])}"${_scopeId}><br${_scopeId}> AWARDS </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 3 }, "section-button"])}"${_scopeId}><br${_scopeId}> CV </button></div><div class="description-container1"${_scopeId}>`);
              if (_ctx.activeSection === 1) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_p2, { class: "description" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(person).description)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(person).description), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_p2, { class: "description" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(person).description2)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(person).description2), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (_ctx.activeSection === 2) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_p2, { class: "description" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` At VenTour Capital, we believe in celebrating the outstanding contributions and achievements of our exceptional team members. Our dedicated professionals continually strive for excellence and consistently go above and beyond to achieve remarkable results. In acknowledgment of unwavering commitment, ${ssrInterpolate(unref(person).name)} received the following awards: <ul class="award-list"${_scopeId2}><li${_scopeId2}>${ssrInterpolate(unref(person).award1)}</li><br${_scopeId2}>`);
                      if (unref(person).award2 != "") {
                        _push3(`<li${_scopeId2}>${ssrInterpolate(unref(person).award2)}</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<br${_scopeId2}>`);
                      if (unref(person).award3 != "") {
                        _push3(`<li${_scopeId2}>${ssrInterpolate(unref(person).award3)}</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<br${_scopeId2}>`);
                      if (unref(person).award4 != "") {
                        _push3(`<li${_scopeId2}>${ssrInterpolate(unref(person).award4)}</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</ul>`);
                    } else {
                      return [
                        createTextVNode(" At VenTour Capital, we believe in celebrating the outstanding contributions and achievements of our exceptional team members. Our dedicated professionals continually strive for excellence and consistently go above and beyond to achieve remarkable results. In acknowledgment of unwavering commitment, " + toDisplayString(unref(person).name) + " received the following awards: ", 1),
                        createVNode("ul", { class: "award-list" }, [
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
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (_ctx.activeSection === 3) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_p2, { class: "description" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(person).cv)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(person).cv), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "row-section" }, [
                  createVNode("div", { class: "column-b" }, [
                    createVNode("img", {
                      id: "main-img2",
                      src: unref(person).image,
                      alt: "Person Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "column2" }, [
                    createVNode("div", {
                      class: "button-container",
                      style: { "position": "relative", "top": "0", "z-index": "1" }
                    }, [
                      createVNode("button", {
                        class: ["section-button", { active: _ctx.activeSection === 1 }],
                        onClick: ($event) => _ctx.activeSection = 1
                      }, [
                        createVNode("br"),
                        createTextVNode(" BIO ")
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        class: ["section-button", { active: _ctx.activeSection === 2 }],
                        onClick: ($event) => _ctx.activeSection = 2
                      }, [
                        createVNode("br"),
                        createTextVNode(" AWARDS ")
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        class: ["section-button", { active: _ctx.activeSection === 3 }],
                        onClick: ($event) => _ctx.activeSection = 3
                      }, [
                        createVNode("br"),
                        createTextVNode(" CV ")
                      ], 10, ["onClick"])
                    ]),
                    createVNode("div", { class: "description-container1" }, [
                      _ctx.activeSection === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(_component_p2, { class: "description" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(person).description), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_p2, { class: "description" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(person).description2), 1)
                          ]),
                          _: 1
                        })
                      ])) : _ctx.activeSection === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(_component_p2, { class: "description" }, {
                          default: withCtx(() => [
                            createTextVNode(" At VenTour Capital, we believe in celebrating the outstanding contributions and achievements of our exceptional team members. Our dedicated professionals continually strive for excellence and consistently go above and beyond to achieve remarkable results. In acknowledgment of unwavering commitment, " + toDisplayString(unref(person).name) + " received the following awards: ", 1),
                            createVNode("ul", { class: "award-list" }, [
                              createVNode("li", null, toDisplayString(unref(person).award1), 1),
                              createVNode("br"),
                              unref(person).award2 != "" ? (openBlock(), createBlock("li", { key: 0 }, toDisplayString(unref(person).award2), 1)) : createCommentVNode("", true),
                              createVNode("br"),
                              unref(person).award3 != "" ? (openBlock(), createBlock("li", { key: 1 }, toDisplayString(unref(person).award3), 1)) : createCommentVNode("", true),
                              createVNode("br"),
                              unref(person).award4 != "" ? (openBlock(), createBlock("li", { key: 2 }, toDisplayString(unref(person).award4), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 1
                        })
                      ])) : _ctx.activeSection === 3 ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode(_component_p2, { class: "description" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(person).cv), 1)
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
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
              _push2(`<div class="column"${_scopeId}><div class="column"${_scopeId}><img id="main-img2"${ssrRenderAttr("src", unref(person).image)} alt="Person Image"${_scopeId}></div><div class="column2"${_scopeId}><div class="description-containera2"${_scopeId}><div class="button-container2" style="${ssrRenderStyle({ "position": "relative", "top": "0", "z-index": "1" })}"${_scopeId}><button class="${ssrRenderClass([{ active: _ctx.activeSection === 1 }, "section-button"])}"${_scopeId}><br${_scopeId}> BIO </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 2 }, "section-button"])}"${_scopeId}><br${_scopeId}> AWARDS </button><button class="${ssrRenderClass([{ active: _ctx.activeSection === 3 }, "section-button"])}"${_scopeId}><br${_scopeId}> CV </button></div>`);
              if (_ctx.activeSection === 1) {
                _push2(`<div class="description-container2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_p2, { class: "description2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(person).description)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(person).description), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_p2, { class: "description2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(person).description2)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(person).description2), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (_ctx.activeSection === 2) {
                _push2(`<div class="description-container2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_p3, { class: "description2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<ul${_scopeId2}><li${_scopeId2}>${ssrInterpolate(unref(person).award1)}</li><br${_scopeId2}>`);
                      if (unref(person).award2 != "") {
                        _push3(`<li${_scopeId2}>${ssrInterpolate(unref(person).award2)}</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<br${_scopeId2}>`);
                      if (unref(person).award3 != "") {
                        _push3(`<li${_scopeId2}>${ssrInterpolate(unref(person).award3)}</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<br${_scopeId2}>`);
                      if (unref(person).award4 != "") {
                        _push3(`<li${_scopeId2}>${ssrInterpolate(unref(person).award4)}</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</ul>`);
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
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (_ctx.activeSection === 3) {
                _push2(`<div class="description-container2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_p2, { class: "description2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(person).cv)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(person).cv), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "column" }, [
                  createVNode("div", { class: "column" }, [
                    createVNode("img", {
                      id: "main-img2",
                      src: unref(person).image,
                      alt: "Person Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "column2" }, [
                    createVNode("div", { class: "description-containera2" }, [
                      createVNode("div", {
                        class: "button-container2",
                        style: { "position": "relative", "top": "0", "z-index": "1" }
                      }, [
                        createVNode("button", {
                          class: ["section-button", { active: _ctx.activeSection === 1 }],
                          onClick: ($event) => _ctx.activeSection = 1
                        }, [
                          createVNode("br"),
                          createTextVNode(" BIO ")
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          class: ["section-button", { active: _ctx.activeSection === 2 }],
                          onClick: ($event) => _ctx.activeSection = 2
                        }, [
                          createVNode("br"),
                          createTextVNode(" AWARDS ")
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          class: ["section-button", { active: _ctx.activeSection === 3 }],
                          onClick: ($event) => _ctx.activeSection = 3
                        }, [
                          createVNode("br"),
                          createTextVNode(" CV ")
                        ], 10, ["onClick"])
                      ]),
                      _ctx.activeSection === 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "description-container2"
                      }, [
                        createVNode(_component_p2, { class: "description2" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(person).description), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_p2, { class: "description2" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(person).description2), 1)
                          ]),
                          _: 1
                        })
                      ])) : _ctx.activeSection === 2 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "description-container2"
                      }, [
                        createVNode(_component_p3, { class: "description2" }, {
                          default: withCtx(() => [
                            createVNode("ul", null, [
                              createVNode("li", null, toDisplayString(unref(person).award1), 1),
                              createVNode("br"),
                              unref(person).award2 != "" ? (openBlock(), createBlock("li", { key: 0 }, toDisplayString(unref(person).award2), 1)) : createCommentVNode("", true),
                              createVNode("br"),
                              unref(person).award3 != "" ? (openBlock(), createBlock("li", { key: 1 }, toDisplayString(unref(person).award3), 1)) : createCommentVNode("", true),
                              createVNode("br"),
                              unref(person).award4 != "" ? (openBlock(), createBlock("li", { key: 2 }, toDisplayString(unref(person).award4), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 1
                        })
                      ])) : _ctx.activeSection === 3 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "description-container2"
                      }, [
                        createVNode(_component_p2, { class: "description2" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(person).cv), 1)
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
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
        _push(`<div><div class="row-section"><div class="text-center"><p>COMPANIES IN SUPERVISION:</p></div></div>`);
        if (!_ctx.isMobile) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_desktop, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="row-section2"${_scopeId}><!--[-->`);
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
                  createVNode("div", { class: "row-section2" }, [
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
      _push(`</main></div>`);
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
//# sourceMappingURL=_id_-fc95f7ed.js.map
