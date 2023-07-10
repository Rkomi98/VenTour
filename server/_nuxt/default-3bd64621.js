import { a as __nuxt_component_0$2, _ as _export_sfc, b as useRuntimeConfig } from "../server.mjs";
import { withCtx, createTextVNode, toDisplayString, useSSRContext, ref, withAsyncContext, resolveComponent, createVNode, unref, openBlock, createBlock, Fragment, renderList, Transition, withDirectives, vShow, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { u as useFetch } from "./fetch-ee284798.js";
import "destr";
import "devalue";
import "klona";
import { _ as _imports_0$1, a as _imports_1 } from "./linkedin-11d60358.js";
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
import "ohash";
import "./asyncData-ddf0e9e2.js";
const AreaHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  __name: "AreaHeader",
  __ssrInlineRender: true,
  props: ["name", "link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<p${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AreaHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _imports_0 = "" + __buildAssetsURL("logo-witho-bck-slog.eb8eae90.png");
const TheHeader_vue_vue_type_style_index_0_scoped_b53bc76f_lang = "";
const searchText = ref("");
const __default__ = {
  data() {
    return {
      isMobile: false,
      navOpen: false,
      navOpen2: false,
      isSearchExpanded: false,
      searchText: ""
    };
  },
  methods: {
    toggleSearch(event) {
      event.stopPropagation();
      if (this.isSearchExpanded) {
        this.isSearchExpanded = false;
      } else {
        this.isSearchExpanded = true;
        this.$nextTick(() => this.$refs.searchInput.focus());
      }
    },
    search() {
      const arrTot = [];
      const pages = [
        { text: "Page 1", link: "/page1" },
        { text: "Page 2", link: "/page2" },
        { text: "Page 3", link: "/page3" }
        // ... more pages
      ];
      const searchTerm = searchText.value.toLowerCase();
      console.log("Searching for: ", this.searchText);
      for (const page of pages) {
        if (page.text.toLowerCase().includes(searchTerm)) {
          arrTot.push(page);
        }
      }
      return arrTot;
    },
    detectMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    closeNavbar() {
      this.navOpen = false;
      this.navOpen2 = false;
    }
  },
  mounted() {
    this.isMobile = this.detectMobile();
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search")) {
        this.isSearchExpanded = false;
      }
    });
    this.$router.beforeEach((to, from, next) => {
      this.navOpen = false;
      this.navOpen2 = false;
      next();
    });
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TheHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: Allareas } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas", "$ebWqjtA5wu")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_desktop = resolveComponent("desktop");
      const _component_router_link = resolveComponent("router-link");
      const _component_AreaHeader = __nuxt_component_0$1;
      const _component_mobile = resolveComponent("mobile");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b53bc76f>`);
      if (!_ctx.isMobile) {
        _push(`<div data-v-b53bc76f>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="header-container" data-v-b53bc76f${_scopeId}><header data-v-b53bc76f${_scopeId}><h4 data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="logo"${ssrRenderAttr("src", _imports_0)} alt="VenTour Logo" data-v-b53bc76f${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "logo",
                        src: _imports_0,
                        alt: "VenTour Logo"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</h4><nav data-v-b53bc76f${_scopeId}><span data-v-b53bc76f${_scopeId}><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/aboutus",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`About Us`);
                  } else {
                    return [
                      createTextVNode("About Us")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></span>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/people",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Our Team`);
                  } else {
                    return [
                      createTextVNode("Our Team")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="dropdown" data-v-b53bc76f${_scopeId}><div class="dropdown-toggle" data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/companies",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Investments`);
                  } else {
                    return [
                      createTextVNode("Investments")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="dropdown-menu" data-v-b53bc76f${_scopeId}><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/companies",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Areas`);
                  } else {
                    return [
                      createTextVNode("Areas")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div class="sub-menu" data-v-b53bc76f${_scopeId}><!--[-->`);
              ssrRenderList(unref(Allareas), (area) => {
                _push2(ssrRenderComponent(_component_AreaHeader, {
                  name: area.name,
                  link: "/areas/" + area.id
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div></div>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/topinvestments",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Top Investments`);
                  } else {
                    return [
                      createTextVNode("Top Investments")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/contact",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Get In Touch`);
                  } else {
                    return [
                      createTextVNode("Get In Touch")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</nav></header></div>`);
            } else {
              return [
                createVNode("div", { class: "header-container" }, [
                  createVNode("header", null, [
                    createVNode("h4", null, [
                      createVNode(_component_router_link, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "logo",
                            src: _imports_0,
                            alt: "VenTour Logo"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("nav", null, [
                      createVNode("span", null, [
                        createVNode("p", null, [
                          createVNode(_component_router_link, {
                            to: "/aboutus",
                            class: "nav-link",
                            "exact-active-class": "active-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("About Us")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(_component_router_link, {
                        to: "/people",
                        class: "nav-link",
                        "exact-active-class": "active-link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Our Team")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "dropdown" }, [
                        createVNode("div", { class: "dropdown-toggle" }, [
                          createVNode(_component_router_link, {
                            to: "/companies",
                            class: "nav-link",
                            "exact-active-class": "active-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Investments")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "dropdown-menu" }, [
                          createVNode("p", null, [
                            createVNode(_component_router_link, {
                              to: "/companies",
                              class: "nav-link",
                              "exact-active-class": "active-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Areas")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "sub-menu" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(Allareas), (area) => {
                              return openBlock(), createBlock(_component_AreaHeader, {
                                name: area.name,
                                link: "/areas/" + area.id
                              }, null, 8, ["name", "link"]);
                            }), 256))
                          ])
                        ])
                      ]),
                      createVNode(_component_router_link, {
                        to: "/topinvestments",
                        class: "nav-link",
                        "exact-active-class": "active-link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Top Investments")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_router_link, {
                        to: "/contact",
                        class: "nav-link",
                        "exact-active-class": "active-link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Get In Touch")
                        ]),
                        _: 1
                      })
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
        _push(`<div data-v-b53bc76f>`);
        _push(ssrRenderComponent(_component_mobile, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="navbar" data-v-b53bc76f${_scopeId}><header data-v-b53bc76f${_scopeId}><a class="navbar-item" data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_0)} width="50" height="50" alt="VenTour Logo" data-v-b53bc76f${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0,
                        width: "50",
                        height: "50",
                        alt: "VenTour Logo"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</a><div id="sidemenu" class="sidemenu" data-v-b53bc76f${_scopeId}><button class="${ssrRenderClass([{ active: _ctx.navOpen }, "sidemenu__btn"])}" data-v-b53bc76f${_scopeId}><span class="top" data-v-b53bc76f${_scopeId}></span><span class="mid" data-v-b53bc76f${_scopeId}></span><span class="bottom" data-v-b53bc76f${_scopeId}></span></button><nav class="sidemenu__nav" style="${ssrRenderStyle(_ctx.navOpen ? null : { display: "none" })}" data-v-b53bc76f${_scopeId}><div class="sidemenu__wrapper" data-v-b53bc76f${_scopeId}><ul class="sidemenu__list" data-v-b53bc76f${_scopeId}><span data-v-b53bc76f${_scopeId}><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/aboutus",
                class: "nav-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`About Us`);
                  } else {
                    return [
                      createTextVNode("About Us")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></span><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/people",
                class: "nav-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Our Team`);
                  } else {
                    return [
                      createTextVNode("Our Team")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div class="dropdown" data-v-b53bc76f${_scopeId}><div class="dropdown-toggle" data-v-b53bc76f${_scopeId}><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/companies",
                class: "nav-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Investments`);
                  } else {
                    return [
                      createTextVNode("Investments")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div id="sidemenu" class="sidemenu2" data-v-b53bc76f${_scopeId}><button class="${ssrRenderClass([{ active: _ctx.navOpen2 }, "sidemenu__btn"])}" data-v-b53bc76f${_scopeId}><span class="vert" data-v-b53bc76f${_scopeId}></span><span class="horiz" data-v-b53bc76f${_scopeId}></span></button><nav class="sidemenu__nav2" style="${ssrRenderStyle(_ctx.navOpen2 ? null : { display: "none" })}" data-v-b53bc76f${_scopeId}><div class="sidemenu__wrapper" data-v-b53bc76f${_scopeId}><ul class="sidemenu__list2" data-v-b53bc76f${_scopeId}><!--[-->`);
              ssrRenderList(unref(Allareas), (area) => {
                _push2(ssrRenderComponent(_component_AreaHeader, {
                  name: area.name,
                  link: "/areas/" + area.id
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul></div></nav></div></div></div><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/topinvestments",
                class: "nav-link",
                "exact-active-class": "active-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Top Investments`);
                  } else {
                    return [
                      createTextVNode("Top Investments")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><p data-v-b53bc76f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/contact",
                class: "nav-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Get In Touch`);
                  } else {
                    return [
                      createTextVNode("Get In Touch")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></ul></div></nav></div></header></div>`);
            } else {
              return [
                createVNode("div", { class: "navbar" }, [
                  createVNode("header", null, [
                    createVNode("a", { class: "navbar-item" }, [
                      createVNode(_component_router_link, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            width: "50",
                            height: "50",
                            alt: "VenTour Logo"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", {
                      id: "sidemenu",
                      class: "sidemenu"
                    }, [
                      createVNode("button", {
                        class: ["sidemenu__btn", { active: _ctx.navOpen }],
                        onClick: ($event) => _ctx.navOpen = !_ctx.navOpen
                      }, [
                        createVNode("span", { class: "top" }),
                        createVNode("span", { class: "mid" }),
                        createVNode("span", { class: "bottom" })
                      ], 10, ["onClick"]),
                      createVNode(Transition, { name: "translateX" }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("nav", { class: "sidemenu__nav" }, [
                            createVNode("div", { class: "sidemenu__wrapper" }, [
                              createVNode("ul", { class: "sidemenu__list" }, [
                                createVNode("span", null, [
                                  createVNode("p", null, [
                                    createVNode(_component_router_link, {
                                      to: "/aboutus",
                                      class: "nav-link"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("About Us")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("p", null, [
                                  createVNode(_component_router_link, {
                                    to: "/people",
                                    class: "nav-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Our Team")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "dropdown" }, [
                                  createVNode("div", { class: "dropdown-toggle" }, [
                                    createVNode("p", null, [
                                      createVNode(_component_router_link, {
                                        to: "/companies",
                                        class: "nav-link"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Investments")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", {
                                      id: "sidemenu",
                                      class: "sidemenu2"
                                    }, [
                                      createVNode("button", {
                                        class: ["sidemenu__btn", { active: _ctx.navOpen2 }],
                                        onClick: ($event) => _ctx.navOpen2 = !_ctx.navOpen2
                                      }, [
                                        createVNode("span", { class: "vert" }),
                                        createVNode("span", { class: "horiz" })
                                      ], 10, ["onClick"]),
                                      createVNode(Transition, { name: "translateX" }, {
                                        default: withCtx(() => [
                                          withDirectives(createVNode("nav", { class: "sidemenu__nav2" }, [
                                            createVNode("div", { class: "sidemenu__wrapper" }, [
                                              createVNode("ul", { class: "sidemenu__list2" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(Allareas), (area) => {
                                                  return openBlock(), createBlock(_component_AreaHeader, {
                                                    name: area.name,
                                                    link: "/areas/" + area.id
                                                  }, null, 8, ["name", "link"]);
                                                }), 256))
                                              ])
                                            ])
                                          ], 512), [
                                            [vShow, _ctx.navOpen2]
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("p", null, [
                                  createVNode(_component_router_link, {
                                    to: "/topinvestments",
                                    class: "nav-link",
                                    "exact-active-class": "active-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Top Investments")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", null, [
                                  createVNode(_component_router_link, {
                                    to: "/contact",
                                    class: "nav-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Get In Touch")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ], 512), [
                            [vShow, _ctx.navOpen]
                          ])
                        ]),
                        _: 1
                      })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b53bc76f"]]);
const _imports_2 = "" + __buildAssetsURL("instagram.58fcf7c1.png");
const TheFooter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      isMobile: false
    };
  },
  // Only for website seen by mobile 
  methods: {
    detectMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  },
  mounted() {
    this.isMobile = this.detectMobile();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_desktop = resolveComponent("desktop");
  const _component_mobile = resolveComponent("mobile");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (!$data.isMobile) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_desktop, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="footer-dark"${_scopeId}><footer${_scopeId}><div class="container-f"${_scopeId}><div class="rowf"${_scopeId}><div class="col-md-3 col-sm-6 item text-right"${_scopeId}><h3${_scopeId}>Services</h3><ul${_scopeId}><li${_scopeId}><a href="#"${_scopeId}>Web design</a></li><li${_scopeId}><a href="#"${_scopeId}>Development</a></li><li${_scopeId}><a href="#"${_scopeId}>Terms &amp; Policy</a></li></ul></div><div class="col-md-3 col-sm-6 item text-middle"${_scopeId}><h3${_scopeId}>Contacts</h3><ul${_scopeId}><li${_scopeId}><a href="https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz" target="_blank"${_scopeId}>Address: Politecnico di Milano</a></li><li${_scopeId}><a href="tel:+393123456789"${_scopeId}>Phone: +39 312 345 6789</a></li><li${_scopeId}><a href="mailto:ventourteam@gmail.com" target="_blank"${_scopeId}>Email: ventourteam@gmail.com</a></li></ul></div></div><div class="col-md-3 col-sm-6 item"${_scopeId}><div class="social-iconsf"${_scopeId}><a href="#"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="Facebook"${_scopeId}></a><a href="#"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="LinkedIn"${_scopeId}></a><a href="#"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Instagram"${_scopeId}></a><div class="copy-right"${_scopeId}>© 2020 VenTour. All rights reserved.</div></div></div></div></footer></div>`);
        } else {
          return [
            createVNode("div", { class: "footer-dark" }, [
              createVNode("footer", null, [
                createVNode("div", { class: "container-f" }, [
                  createVNode("div", { class: "rowf" }, [
                    createVNode("div", { class: "col-md-3 col-sm-6 item text-right" }, [
                      createVNode("h3", null, "Services"),
                      createVNode("ul", null, [
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "Web design")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "Development")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "Terms & Policy")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "col-md-3 col-sm-6 item text-middle" }, [
                      createVNode("h3", null, "Contacts"),
                      createVNode("ul", null, [
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",
                            target: "_blank"
                          }, "Address: Politecnico di Milano")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "tel:+393123456789" }, "Phone: +39 312 345 6789")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "mailto:ventourteam@gmail.com",
                            target: "_blank"
                          }, "Email: ventourteam@gmail.com")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-md-3 col-sm-6 item" }, [
                    createVNode("div", { class: "social-iconsf" }, [
                      createVNode("a", { href: "#" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Facebook"
                        })
                      ]),
                      createVNode("a", { href: "#" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "LinkedIn"
                        })
                      ]),
                      createVNode("a", { href: "#" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "Instagram"
                        })
                      ]),
                      createVNode("div", { class: "copy-right" }, "© 2020 VenTour. All rights reserved.")
                    ])
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
          _push2(`<div class="footer-dark"${_scopeId}><footer${_scopeId}><div class="container-f2"${_scopeId}><div class="rowf2"${_scopeId}><div class="Services"${_scopeId}><h3${_scopeId}>Services</h3><ul${_scopeId}><li${_scopeId}><a href="#"${_scopeId}>Web design</a></li><li${_scopeId}><a href="#"${_scopeId}>Development</a></li><li${_scopeId}><a href="#"${_scopeId}>Terms &amp; Policy</a></li></ul><div class="Space"${_scopeId}><p${_scopeId}></p></div></div><div class="Services"${_scopeId}><h3${_scopeId}>Contacts</h3><ul${_scopeId}><li${_scopeId}><a href="https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz" target="_blank"${_scopeId}>Address: Politecnico di Milano</a></li><li${_scopeId}><a href="tel:+393123456789"${_scopeId}>Phone: +39 312 345 6789</a></li><li${_scopeId}><a href="mailto:ventourteam@gmail.com" target="_blank"${_scopeId}>Email: ventourteam@gmail.com</a></li></ul></div><div class="Services"${_scopeId}><div class="social-iconsf2"${_scopeId}><a href="#"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="Facebook"${_scopeId}></a><a href="#"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="LinkedIn"${_scopeId}></a><a href="#"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Instagram"${_scopeId}></a></div><div class="copy-right2"${_scopeId}><p${_scopeId}>© 2020 VenTour <br${_scopeId}> All rights reserved. </p></div></div></div></div></footer></div>`);
        } else {
          return [
            createVNode("div", { class: "footer-dark" }, [
              createVNode("footer", null, [
                createVNode("div", { class: "container-f2" }, [
                  createVNode("div", { class: "rowf2" }, [
                    createVNode("div", { class: "Services" }, [
                      createVNode("h3", null, "Services"),
                      createVNode("ul", null, [
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "Web design")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "Development")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "Terms & Policy")
                        ])
                      ]),
                      createVNode("div", { class: "Space" }, [
                        createVNode("p")
                      ])
                    ]),
                    createVNode("div", { class: "Services" }, [
                      createVNode("h3", null, "Contacts"),
                      createVNode("ul", null, [
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz",
                            target: "_blank"
                          }, "Address: Politecnico di Milano")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "tel:+393123456789" }, "Phone: +39 312 345 6789")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "mailto:ventourteam@gmail.com",
                            target: "_blank"
                          }, "Email: ventourteam@gmail.com")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "Services" }, [
                      createVNode("div", { class: "social-iconsf2" }, [
                        createVNode("a", { href: "#" }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: "Facebook"
                          })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "LinkedIn"
                          })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "Instagram"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "copy-right2" }, [
                        createVNode("p", null, [
                          createTextVNode("© 2020 VenTour "),
                          createVNode("br"),
                          createTextVNode(" All rights reserved. ")
                        ])
                      ])
                    ])
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
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_TheFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-3bd64621.js.map
