import { _ as __nuxt_component_1 } from "./nuxt-link-956616fe.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, ref, computed, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, b as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-42162552.js";
import "destr";
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
const Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: ["image", "title", "subtitle", "link", "area"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="image-container"><span class="subtitle"><img class="img"${ssrRenderAttr("src", __props.image)}><h2>${ssrInterpolate(__props.title)}</h2><div class="clickable-image-container">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: __props.link }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover-content"${_scopeId}><img class="img"${ssrRenderAttr("src", __props.image)}${_scopeId}><h3${_scopeId}><span class="subtitle"${_scopeId}>${ssrInterpolate(__props.title)}</span></h3><p${_scopeId}><span class="subtitle"${_scopeId}>${ssrInterpolate(__props.subtitle)}</span></p><p${_scopeId}><span class="subtitle"${_scopeId}>${ssrInterpolate(__props.area)}</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "hover-content" }, [
                createVNode("img", {
                  class: "img",
                  src: __props.image
                }, null, 8, ["src"]),
                createVNode("h3", null, [
                  createVNode("span", { class: "subtitle" }, toDisplayString(__props.title), 1)
                ]),
                createVNode("p", null, [
                  createVNode("span", { class: "subtitle" }, toDisplayString(__props.subtitle), 1)
                ]),
                createVNode("p", null, [
                  createVNode("span", { class: "subtitle" }, toDisplayString(__props.area), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></span></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const index_vue_vue_type_style_index_0_scoped_8ba7a3a9_lang = "";
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
const _sfc_main = Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: people } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people", "$86ry0ThwyT")), __temp = await __temp, __restore(), __temp);
    const team = ref("");
    const filtered = computed(() => {
      if (team.value == 0 || team.value == "")
        return people.value;
      const arr = [];
      for (let person of people.value) {
        if (person.team == team.value) {
          arr.push(person);
        }
      }
      return arr;
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_desktop = resolveComponent("desktop");
      const _component_mobile = resolveComponent("mobile");
      const _component_Card = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-8ba7a3a9><section class="container custom-container" data-v-8ba7a3a9><div class="co-container" data-v-8ba7a3a9><div class="header-center" data-v-8ba7a3a9><h2 data-v-8ba7a3a9> Meet Our Team</h2></div></div><div class="row-a" data-v-8ba7a3a9><div class="container-a" data-v-8ba7a3a9><div class="col-a" data-v-8ba7a3a9><a class="card1r" href="#header1" data-v-8ba7a3a9><h3 data-v-8ba7a3a9>MANAGEMENT<br data-v-8ba7a3a9>DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9>They develop and implement strategic plans, set organizational goals, and provide leadership to drive the company&#39;s growth and success. </p></a></div><div class="col-a" data-v-8ba7a3a9><a class="card1r" href="#header2" data-v-8ba7a3a9><h3 data-v-8ba7a3a9>INVESTMENT <br data-v-8ba7a3a9>DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9>They conduct thorough research, assess risk factors, and make informed investment decisions to optimize the company&#39;s financial performance.</p></a></div><div class="col-a" data-v-8ba7a3a9><a class="card1r" href="#header3" data-v-8ba7a3a9><h3 data-v-8ba7a3a9>OPERATIONS &amp; FINANCE DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9>They monitor cash flow and implement cost-saving measures while maintaining quality standards to support the company&#39;s overall objectives.</p></a></div><div class="col-a" data-v-8ba7a3a9><a class="card1r" href="#header3" data-v-8ba7a3a9><h3 data-v-8ba7a3a9>ADVISORING <br data-v-8ba7a3a9>DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9>They offer valuable insights, assess risks, and provide recommendations on key decisions, helping the company navigate on every challenge.</p></a></div></div></div></section><section class="department-section" data-v-8ba7a3a9>`);
      if (!_ctx.isMobile) {
        _push(`<div data-v-8ba7a3a9>`);
        _push(ssrRenderComponent(_component_desktop, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row" data-v-8ba7a3a9${_scopeId}><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>MANAGEMENT DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They develop and implement strategic plans, set organizational goals, and provide leadership to drive the company&#39;s growth and success.</p></div><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>INVESTMENT DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They conduct thorough research, assess risk factors, and make informed investment decisions to optimize the company&#39;s financial performance.</p></div><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>OPS &amp; FINANCE DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They monitor cash flow, manage resources, and implement cost-saving measures while maintaining quality standards to support the company&#39;s overall objectives.</p></div><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>ADVISORING DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They offer valuable insights, assess risks, and provide recommendations on key decisions, helping the company navigate challenges and capitalize on opportunities.</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "MANAGEMENT DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They develop and implement strategic plans, set organizational goals, and provide leadership to drive the company's growth and success.")
                  ]),
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "INVESTMENT DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They conduct thorough research, assess risk factors, and make informed investment decisions to optimize the company's financial performance.")
                  ]),
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "OPS & FINANCE DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They monitor cash flow, manage resources, and implement cost-saving measures while maintaining quality standards to support the company's overall objectives.")
                  ]),
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "ADVISORING DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They offer valuable insights, assess risks, and provide recommendations on key decisions, helping the company navigate challenges and capitalize on opportunities.")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-8ba7a3a9>`);
        _push(ssrRenderComponent(_component_mobile, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row18" data-v-8ba7a3a9${_scopeId}><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>MANAGEMENT DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They develop and implement strategic plans, set organizational goals, and provide leadership to drive the company&#39;s growth and success.</p></div><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>INVESTMENT DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They conduct thorough research, assess risk factors, and make informed investment decisions to optimize the company&#39;s financial performance.</p></div></div><div class="row18" data-v-8ba7a3a9${_scopeId}><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>FINANCE DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They monitor cash flow, manage resources, and implement cost-saving measures while maintaining quality standards to support the company&#39;s overall objectives.</p></div><div class="card1o" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>ADVISORING DEPARTMENT</h3><p class="small-a" data-v-8ba7a3a9${_scopeId}>They offer valuable insights, assess risks, and provide recommendations on key decisions, helping the company navigate challenges and capitalize on opportunities.</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "row18" }, [
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "MANAGEMENT DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They develop and implement strategic plans, set organizational goals, and provide leadership to drive the company's growth and success.")
                  ]),
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "INVESTMENT DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They conduct thorough research, assess risk factors, and make informed investment decisions to optimize the company's financial performance.")
                  ])
                ]),
                createVNode("div", { class: "row18" }, [
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "FINANCE DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They monitor cash flow, manage resources, and implement cost-saving measures while maintaining quality standards to support the company's overall objectives.")
                  ]),
                  createVNode("div", { class: "card1o" }, [
                    createVNode("h3", null, "ADVISORING DEPARTMENT"),
                    createVNode("p", { class: "small-a" }, "They offer valuable insights, assess risks, and provide recommendations on key decisions, helping the company navigate challenges and capitalize on opportunities.")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</section><section id="team-members-grid" data-v-8ba7a3a9><div class="grid-container" data-v-8ba7a3a9><div id="filter-container" data-v-8ba7a3a9><div class="grid-x" data-v-8ba7a3a9><div class="cell small-12 filter-title" data-v-8ba7a3a9>Filter By Department:</div><div class="dropdown-grid-filter-container" data-v-8ba7a3a9><div class="dropdown-grid-filter grid-x align-middle" data-v-8ba7a3a9><label for="all-team" data-v-8ba7a3a9> ALL <input type="radio" id="all-team" value="" name="team-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(team), "")) ? " checked" : ""} checked data-v-8ba7a3a9><span class="checkmark" data-v-8ba7a3a9></span></label><label for="investment-team" data-v-8ba7a3a9> MANAGEMENT <input type="radio" id="Management-Team" value="Management Team" name="team-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(team), "Management Team")) ? " checked" : ""} data-v-8ba7a3a9><span class="checkmark" data-v-8ba7a3a9></span></label><label for="investor-relations" data-v-8ba7a3a9> INVESTMENT <input type="radio" id="Investment-Team" value="Investment Team" name="team-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(team), "Investment Team")) ? " checked" : ""} data-v-8ba7a3a9><span class="checkmark" data-v-8ba7a3a9></span></label><label for="finance-operations" data-v-8ba7a3a9> FINANCE <input type="radio" id="finance-operations" value="Operations and Finance Team" name="team-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(team), "Operations and Finance Team")) ? " checked" : ""} data-v-8ba7a3a9><span class="checkmark" data-v-8ba7a3a9></span></label><label for="finance-operations" data-v-8ba7a3a9> ADVISORING BOARD <input type="radio" id="finance-operations" value="Advisoring Board Team" name="team-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(team), "Advisoring Board Team")) ? " checked" : ""} data-v-8ba7a3a9><span class="checkmark" data-v-8ba7a3a9></span></label></div></div></div></div></div><div id="card-container" data-v-8ba7a3a9><!--[-->`);
      ssrRenderList(unref(filtered), (person) => {
        _push(ssrRenderComponent(_component_Card, {
          image: person.image,
          title: person.name,
          subtitle: person.role,
          team: person.team,
          area: person.area,
          link: "/people/" + person.id
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="col3f" data-v-8ba7a3a9>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/companies",
        class: "nav-link-end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="card13" data-v-8ba7a3a9${_scopeId}><h3 data-v-8ba7a3a9${_scopeId}>CHECK OUR INVESTMENTS</h3><div class="go-corner" data-v-8ba7a3a9${_scopeId}><div class="go-arrow" data-v-8ba7a3a9${_scopeId}> → </div></div></a>`);
          } else {
            return [
              createVNode("a", { class: "card13" }, [
                createVNode("h3", null, "CHECK OUR INVESTMENTS"),
                createVNode("div", { class: "go-corner" }, [
                  createVNode("div", { class: "go-arrow" }, " → ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ba7a3a9"]]);
export {
  index as default
};
//# sourceMappingURL=index-12136c6d.js.map
