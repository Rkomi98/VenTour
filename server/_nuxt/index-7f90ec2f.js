import { a as __nuxt_component_0$1, b as useRuntimeConfig } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, ref, withAsyncContext, resolveComponent, unref, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { u as useFetch } from "./fetch-ee284798.js";
import "destr";
import "devalue";
import "klona";
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
const AreaHome_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "AreaHome",
  __ssrInlineRender: true,
  props: ["name", "p1", "ph", "p2", "link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "column" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "area-router"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-area"${_scopeId}><div class="icon"${_scopeId}></div><h3${_scopeId}>${ssrInterpolate(__props.name)}</h3><p${_scopeId}>${ssrInterpolate(__props.p1)} <span class="highlight"${_scopeId}>${ssrInterpolate(__props.ph)}</span> ${ssrInterpolate(__props.p2)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "card-area" }, [
                createVNode("div", { class: "icon" }),
                createVNode("h3", null, toDisplayString(__props.name), 1),
                createVNode("p", null, [
                  createTextVNode(toDisplayString(__props.p1) + " ", 1),
                  createVNode("span", { class: "highlight" }, toDisplayString(__props.ph), 1),
                  createTextVNode(" " + toDisplayString(__props.p2), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AreaHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _imports_0 = "" + __buildAssetsURL("logo_transparent3.7b3f48ab.png");
const _imports_1 = "" + __buildAssetsURL("logo_transparent2.8f4fdd8c.png");
const _imports_2 = "" + __buildAssetsURL("logo_transparent.3415ce24.png");
const _imports_3 = "" + __buildAssetsURL("innovation.d793c2a7.png");
const _imports_4 = "" + __buildAssetsURL("fuel.af12869f.png");
const _imports_5 = "" + __buildAssetsURL("unlock.09a63d0c.png");
const _imports_6 = "" + __buildAssetsURL("worldwide.f243909d.png");
const _imports_7 = "" + __buildAssetsURL("europe.21df52b1.png");
const _imports_8 = "" + __buildAssetsURL("asia.d49d7887.png");
const _imports_9 = "" + __buildAssetsURL("america.9ee39619.png");
const _imports_10 = "" + __buildAssetsURL("Dell.61303fe9.png");
const _imports_11 = "" + __buildAssetsURL("nike.e9a28a5a.png");
const _imports_12 = "" + __buildAssetsURL("canadiansolar.195ea5ae.png");
const _imports_13 = "data:image/png;base64,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";
const index_vue_vue_type_style_index_0_lang = "";
ref("");
const __default__ = {
  data() {
    return {
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
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: Allareas } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas", "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_desktop = resolveComponent("desktop");
      const _component_mobile = resolveComponent("mobile");
      const _component_h7 = resolveComponent("h7");
      const _component_h8 = resolveComponent("h8");
      const _component_AreaHome = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Home page of VenTour - Discover the best investment opportunities."></head><main><section class="responsive-section1"><div class="column-container"><div class="column-left2"><div class="content__container"><ul class="content__container__list"><li class="content__container__list__item">Innovation !</li><li class="content__container__list__item">Power !</li><li class="content__container__list__item">Potential !</li><li class="content__container__list__item">VenTour !</li></ul></div><h2> Fly with us to a journey of growth!</h2><p class="section-text4">Transforming the investment landscape and fueling innovation.<br><br>Our focus is your success! </p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/aboutus",
        class: "sec-tex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="section-text41"${_scopeId}>LEARN MORE</p>`);
          } else {
            return [
              createVNode("p", { class: "section-text41" }, "LEARN MORE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="column-right"><div class="row-container"><div class="row-top1"><a href="#numbers"><img class="firstimg3"${ssrRenderAttr("src", _imports_0)} alt="In 3 continents"></a><a href="#areasrep"><img class="firstimg2"${ssrRenderAttr("src", _imports_1)} alt="4 investment areas"></a></div><div class="row-bottom1"><img class="firstimg"${ssrRenderAttr("src", _imports_2)} alt="We are growth"></div></div></div></div></section><section class="responsive-section">`);
      if (!_ctx.isMobile) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="column-container"${_scopeId}><div class="column-left"${_scopeId}><h1 class="u-section-text"${_scopeId}>why ventour</h1><h2${_scopeId}>What do we represent?</h2><p${_scopeId}>&quot;Ven&quot; meaning &quot;come&quot;...Come in a tour with us!...At VenTour, we embody the spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a venture capital firm, we specialize in providing crucial support and funding to early-stage and high-growth companies that are reshaping industries and driving forward societal progress. <br${_scopeId}> <br${_scopeId}>We understand that the journey of transforming groundbreaking ideas into successful businesses can be challenging, which is why we strive to be more than just financial backers. Our mission is to be your strategic partner, offering not only capital but also expertise, guidance, and an extensive network of industry connections.</p><div class="sec-butt"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a class="us-button"${_scopeId2}>join us</a>`);
                  } else {
                    return [
                      createVNode("a", { class: "us-button" }, "join us")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="column-right"${_scopeId}><div class="row-container"${_scopeId}><div class="row-top"${_scopeId}><div class="card card11"${_scopeId}><img class="icon-circle"${ssrRenderAttr("src", _imports_3)} alt="Innovation"${_scopeId}><h2 class="titleofcard"${_scopeId}>Empowering Innovation</h2><p${_scopeId}>Innovation is at the core of everything we do. We actively seek out the most innovative and disruptive ideas across a wide range of industries, from technology and healthcare to energy and beyond. </p></div><div class="card card11"${_scopeId}><img class="icon-circle"${ssrRenderAttr("src", _imports_4)} alt="Growth"${_scopeId}><h2 class="titleofcard"${_scopeId}>Fuelling growth</h2><p${_scopeId}>We believe in the transformative power of ideas.We are a leading venture capital firm dedicated to fueling the growth of groundbreaking startups and empowering them to reach their full potential.</p></div></div><div class="row-bottom"${_scopeId}><div class="card card11"${_scopeId}><img class="icon-circle"${ssrRenderAttr("src", _imports_5)} alt="Potential"${_scopeId}><h2 class="titleofcard"${_scopeId}>Unlocking potential</h2><p${_scopeId}>We partner with visionary entrepreneurs and startups at every stage of their journey, providing financial support, but also invaluable expertise, resources, and a vast network of industry connections.</p></div><div class="card card11"${_scopeId}><img class="icon-circle"${ssrRenderAttr("src", _imports_6)} alt="Global reach"${_scopeId}><h2 class="titleofcard"${_scopeId}>Global Reach, Local Impact</h2><p${_scopeId}>We are rooted in startups in every country. Our experts combine deep industry knowledge with a passion for supporting entrepreneurs. We create a dynamic environment that drives positive change. </p></div></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "column-container" }, [
                  createVNode("div", { class: "column-left" }, [
                    createVNode("h1", { class: "u-section-text" }, "why ventour"),
                    createVNode("h2", null, "What do we represent?"),
                    createVNode("p", null, [
                      createTextVNode('"Ven" meaning "come"...Come in a tour with us!...At VenTour, we embody the spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a venture capital firm, we specialize in providing crucial support and funding to early-stage and high-growth companies that are reshaping industries and driving forward societal progress. '),
                      createVNode("br"),
                      createTextVNode(),
                      createVNode("br"),
                      createTextVNode("We understand that the journey of transforming groundbreaking ideas into successful businesses can be challenging, which is why we strive to be more than just financial backers. Our mission is to be your strategic partner, offering not only capital but also expertise, guidance, and an extensive network of industry connections.")
                    ]),
                    createVNode("div", { class: "sec-butt" }, [
                      createVNode(_component_router_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createVNode("a", { class: "us-button" }, "join us")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "column-right" }, [
                    createVNode("div", { class: "row-container" }, [
                      createVNode("div", { class: "row-top" }, [
                        createVNode("div", { class: "card card11" }, [
                          createVNode("img", {
                            class: "icon-circle",
                            src: _imports_3,
                            alt: "Innovation"
                          }),
                          createVNode("h2", { class: "titleofcard" }, "Empowering Innovation"),
                          createVNode("p", null, "Innovation is at the core of everything we do. We actively seek out the most innovative and disruptive ideas across a wide range of industries, from technology and healthcare to energy and beyond. ")
                        ]),
                        createVNode("div", { class: "card card11" }, [
                          createVNode("img", {
                            class: "icon-circle",
                            src: _imports_4,
                            alt: "Growth"
                          }),
                          createVNode("h2", { class: "titleofcard" }, "Fuelling growth"),
                          createVNode("p", null, "We believe in the transformative power of ideas.We are a leading venture capital firm dedicated to fueling the growth of groundbreaking startups and empowering them to reach their full potential.")
                        ])
                      ]),
                      createVNode("div", { class: "row-bottom" }, [
                        createVNode("div", { class: "card card11" }, [
                          createVNode("img", {
                            class: "icon-circle",
                            src: _imports_5,
                            alt: "Potential"
                          }),
                          createVNode("h2", { class: "titleofcard" }, "Unlocking potential"),
                          createVNode("p", null, "We partner with visionary entrepreneurs and startups at every stage of their journey, providing financial support, but also invaluable expertise, resources, and a vast network of industry connections.")
                        ]),
                        createVNode("div", { class: "card card11" }, [
                          createVNode("img", {
                            class: "icon-circle",
                            src: _imports_6,
                            alt: "Global reach"
                          }),
                          createVNode("h2", { class: "titleofcard" }, "Global Reach, Local Impact"),
                          createVNode("p", null, "We are rooted in startups in every country. Our experts combine deep industry knowledge with a passion for supporting entrepreneurs. We create a dynamic environment that drives positive change. ")
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
              _push2(`<div class="column-container-Mobile"${_scopeId}><div class="column-left-Mobile"${_scopeId}><h1 class="u-section-text-mobile"${_scopeId}>why ventour</h1><h2${_scopeId}>What do we represent?</h2><p${_scopeId}>&quot;Ven&quot; meaning &quot;come&quot;...Come in a tour with us!...At VenTour, we embody the spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a venture capital firm, we specialize in providing crucial support and funding to early-stage and high-growth companies that are reshaping industries and driving forward societal progress. <br${_scopeId}> <br${_scopeId}>We understand that the journey of transforming groundbreaking ideas into successful businesses can be challenging, which is why we strive to be more than just financial backers. Our mission is to be your strategic partner, offering not only capital but also expertise, guidance, and an extensive network of industry connections.</p><div class="sec-butt2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a class="us-button"${_scopeId2}>join us</a>`);
                  } else {
                    return [
                      createVNode("a", { class: "us-button" }, "join us")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="columnMobile"${_scopeId}><div class="card card11Mobile"${_scopeId}><img class="icon-circle-mobile"${ssrRenderAttr("src", _imports_3)} alt="Innovation"${_scopeId}><h2 class="titleofcardMobile"${_scopeId}>Empowering Innovation</h2><p${_scopeId}>Innovation is at the core of everything we do. We actively seek out the most innovative and disruptive ideas across a wide range of industries, from technology and healthcare to energy and beyond. </p></div><div class="card card11Mobile"${_scopeId}><img class="icon-circle-mobile"${ssrRenderAttr("src", _imports_4)} alt="Growth"${_scopeId}><h2 class="titleofcardMobile"${_scopeId}>Fuelling growth</h2><p${_scopeId}>We believe in the transformative power of ideas.We are a leading venture capital firm dedicated to fueling the growth of groundbreaking startups and empowering them to reach their full potential.</p></div><div class="card card11Mobile"${_scopeId}><img class="icon-circle-mobile"${ssrRenderAttr("src", _imports_5)} alt="Potential"${_scopeId}><h2 class="titleofcardMobile"${_scopeId}>Unlocking potential</h2><p${_scopeId}>We partner with visionary entrepreneurs and startups at every stage of their journey, providing financial support, but also invaluable expertise, resources, and a vast network of industry connections.</p></div><div class="card card11Mobile"${_scopeId}><img class="icon-circle-mobile"${ssrRenderAttr("src", _imports_6)} alt="Global reach"${_scopeId}><h2 class="titleofcardMobile"${_scopeId}>Global Reach, Local Impact</h2><p${_scopeId}>We are rooted in startups in every country. Our experts combine deep industry knowledge with a passion for supporting entrepreneurs. We create a dynamic environment that drives positive change. </p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "column-container-Mobile" }, [
                  createVNode("div", { class: "column-left-Mobile" }, [
                    createVNode("h1", { class: "u-section-text-mobile" }, "why ventour"),
                    createVNode("h2", null, "What do we represent?"),
                    createVNode("p", null, [
                      createTextVNode('"Ven" meaning "come"...Come in a tour with us!...At VenTour, we embody the spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a venture capital firm, we specialize in providing crucial support and funding to early-stage and high-growth companies that are reshaping industries and driving forward societal progress. '),
                      createVNode("br"),
                      createTextVNode(),
                      createVNode("br"),
                      createTextVNode("We understand that the journey of transforming groundbreaking ideas into successful businesses can be challenging, which is why we strive to be more than just financial backers. Our mission is to be your strategic partner, offering not only capital but also expertise, guidance, and an extensive network of industry connections.")
                    ]),
                    createVNode("div", { class: "sec-butt2" }, [
                      createVNode(_component_router_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createVNode("a", { class: "us-button" }, "join us")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "columnMobile" }, [
                    createVNode("div", { class: "card card11Mobile" }, [
                      createVNode("img", {
                        class: "icon-circle-mobile",
                        src: _imports_3,
                        alt: "Innovation"
                      }),
                      createVNode("h2", { class: "titleofcardMobile" }, "Empowering Innovation"),
                      createVNode("p", null, "Innovation is at the core of everything we do. We actively seek out the most innovative and disruptive ideas across a wide range of industries, from technology and healthcare to energy and beyond. ")
                    ]),
                    createVNode("div", { class: "card card11Mobile" }, [
                      createVNode("img", {
                        class: "icon-circle-mobile",
                        src: _imports_4,
                        alt: "Growth"
                      }),
                      createVNode("h2", { class: "titleofcardMobile" }, "Fuelling growth"),
                      createVNode("p", null, "We believe in the transformative power of ideas.We are a leading venture capital firm dedicated to fueling the growth of groundbreaking startups and empowering them to reach their full potential.")
                    ]),
                    createVNode("div", { class: "card card11Mobile" }, [
                      createVNode("img", {
                        class: "icon-circle-mobile",
                        src: _imports_5,
                        alt: "Potential"
                      }),
                      createVNode("h2", { class: "titleofcardMobile" }, "Unlocking potential"),
                      createVNode("p", null, "We partner with visionary entrepreneurs and startups at every stage of their journey, providing financial support, but also invaluable expertise, resources, and a vast network of industry connections.")
                    ]),
                    createVNode("div", { class: "card card11Mobile" }, [
                      createVNode("img", {
                        class: "icon-circle-mobile",
                        src: _imports_6,
                        alt: "Global reach"
                      }),
                      createVNode("h2", { class: "titleofcardMobile" }, "Global Reach, Local Impact"),
                      createVNode("p", null, "We are rooted in startups in every country. Our experts combine deep industry knowledge with a passion for supporting entrepreneurs. We create a dynamic environment that drives positive change. ")
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
      _push(`</section><section id="numbers"><div class="midl-container"><h4 class="subtitle-midl">A wide investment map</h4><div class="midl-list"><div class="repeater"><div class="first-rep"><img class="rep-icon"${ssrRenderAttr("src", _imports_7)} alt="Europe">`);
      _push(ssrRenderComponent(_component_h7, { class: "number-text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`EUROPE`);
          } else {
            return [
              createTextVNode("EUROPE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-container-list">`);
      _push(ssrRenderComponent(_component_h8, { class: "text-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`strategically allocated 60% of our investments`);
          } else {
            return [
              createTextVNode("strategically allocated 60% of our investments")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-down">Committed to fueling innovation in Europe, where we have strategically allocated 60% of our investments. With a thriving startup ecosystem and a rich pool of talent, Europe offers immense growth potential for entrepreneurs and investors alike.</p></div></div><div class="first-rep2"><img class="rep-icon"${ssrRenderAttr("src", _imports_8)} alt="Asia">`);
      _push(ssrRenderComponent(_component_h7, { class: "number-text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ASIA`);
          } else {
            return [
              createTextVNode("ASIA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-container-list">`);
      _push(ssrRenderComponent(_component_h8, { class: "text-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`dedicated 30% of our investments to this region`);
          } else {
            return [
              createTextVNode("dedicated 30% of our investments to this region")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-down">We recognize the immense opportunities in Asia&#39;s dynamic market. That&#39;s why we have dedicated 30% of our investments to this region, capitalizing on the rapid technological advancements and the unprecedented growth potential across various industries.</p></div></div><div class="first-rep3"><img class="rep-icon"${ssrRenderAttr("src", _imports_9)} alt="South America">`);
      _push(ssrRenderComponent(_component_h7, { class: "number-text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SOUTH AMERICA`);
          } else {
            return [
              createTextVNode("SOUTH AMERICA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-container-list">`);
      _push(ssrRenderComponent(_component_h8, { class: "text-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`10% of our portfolio dedicated to this vibrant region`);
          } else {
            return [
              createTextVNode("10% of our portfolio dedicated to this vibrant region")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-down">Unlocking the untapped potential of South America is a key focus for our venture capital investments. With 10% of our portfolio dedicated to this vibrant region, we aim to support visionary entrepreneurs and drive innovation in an emerging market filled with promising opportunities.</p></div></div></div></div></div></section><section id="best-comp"><h4 class="subtitle-midl">Our Top 4 Investments</h4><div class="container-top4"><div class="box1"><div class="imgBx"><img${ssrRenderAttr("src", _imports_10)} alt="Dell Logo"></div><div class="content"><div><p>Giving light to technology with one of the best trending companies in todays&#39; market. </p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/companies/27",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Read More</h2>`);
          } else {
            return [
              createVNode("h2", null, "Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="box1"><div class="imgBx"><img${ssrRenderAttr("src", _imports_11)} alt="Nike Logo"></div><div class="content"><div><p>The top leading company in sportswear trusted on us to become the most wanted one. </p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/companies/33",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Read More</h2>`);
          } else {
            return [
              createVNode("h2", null, "Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="box1"><div class="imgBx"><img${ssrRenderAttr("src", _imports_12)} alt="CanadianSolar Logo"></div><div class="content"><div><p>Producing power from the support they gained from us and leading the energy market. </p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/companies/38",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Read More</h2>`);
          } else {
            return [
              createVNode("h2", null, "Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="box1"><div class="imgBx"><img${ssrRenderAttr("src", _imports_13)} alt="Cigna Logo"></div><div class="content"><div><p>Being your insurance and health companion in international markets just like us are for our companies. </p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/companies/24",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Read More</h2>`);
          } else {
            return [
              createVNode("h2", null, "Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section id="areasrep"><h4 class="subtitle-midl">Leading in 4 directions</h4>`);
      if (!_ctx.isMobile) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row-areas"${_scopeId}><!--[-->`);
              ssrRenderList(unref(Allareas), (area) => {
                _push2(ssrRenderComponent(_component_AreaHome, {
                  name: area.name,
                  p1: area.p1,
                  ph: area.ph,
                  p2: area.p2,
                  link: "/areas/" + area.id
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "row-areas" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(Allareas), (area) => {
                    return openBlock(), createBlock(_component_AreaHome, {
                      name: area.name,
                      p1: area.p1,
                      ph: area.ph,
                      p2: area.p2,
                      link: "/areas/" + area.id
                    }, null, 8, ["name", "p1", "ph", "p2", "link"]);
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
              _push2(`<div class="column"${_scopeId}><!--[-->`);
              ssrRenderList(unref(Allareas), (area) => {
                _push2(ssrRenderComponent(_component_AreaHome, {
                  name: area.name,
                  p1: area.p1,
                  ph: area.ph,
                  p2: area.p2,
                  link: "/areas/" + area.id
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "column" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(Allareas), (area) => {
                    return openBlock(), createBlock(_component_AreaHome, {
                      name: area.name,
                      p1: area.p1,
                      ph: area.ph,
                      p2: area.p2,
                      link: "/areas/" + area.id
                    }, null, 8, ["name", "p1", "ph", "p2", "link"]);
                  }), 256))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-7f90ec2f.js.map
