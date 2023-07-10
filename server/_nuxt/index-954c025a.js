import { a as __nuxt_component_0$1, _ as _export_sfc, b as useRuntimeConfig } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, ref, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_0$2 } from "./Cardsection-ae6017f8.js";
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
const AreaFilter_vue_vue_type_style_index_0_lang = "";
const __default__$1 = {
  // Note that this code can be easily update to use checkbox and so "multifilter area"
  emits: ["update:areas"],
  methods: {
    isSelectedArea(areaName) {
      return this.value === areaName;
    },
    selectArea(areaName) {
      this.$emit("update:areas", areaName);
    }
  },
  mounted() {
    const counters = document.querySelectorAll(".counter");
    const isInView = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };
    const animateCounters = () => {
      counters.forEach((counter, index2) => {
        if (isInView(counter)) {
          const target = +counter.dataset.target;
          const start = performance.now();
          const duration = 2e3;
          const step = (timestamp) => {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            counter.textContent = `${value}+`;
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        } else {
          counter.textContent = "0+";
        }
      });
    };
    const handleScroll = () => {
      animateCounters();
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll);
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "AreaFilter",
  __ssrInlineRender: true,
  props: ["logo", "name", "data_target", "link", "value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "column41" }, _attrs))}><div class="area-icons"><img class="img"${ssrRenderAttr("src", __props.logo)} alt="AreaLogo"></div><div class="counter"${ssrRenderAttr("data-target", __props.data_target)}></div><div class="link-text"><a class="learn-more">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: __props.link }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 style="${ssrRenderStyle({ "color": "#033f52" })}"${_scopeId}>${ssrInterpolate(__props.name)} Investments →</h1>`);
          } else {
            return [
              createVNode("h1", { style: { "color": "#033f52" } }, toDisplayString(__props.name) + " Investments →", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><label${ssrRenderAttr("for", __props.name)}><input type="radio"${ssrRenderAttr("id", __props.name)}${ssrRenderAttr("value", __props.name)} name="Investments-categories"${ssrIncludeBooleanAttr(_ctx.isSelectedArea(__props.name)) ? " checked" : ""}><h1 class="learn-more" style="${ssrRenderStyle({ "color": "#033f52" })}">SELECT &amp; CHECK COMPANIES</h1><span class="checkmark"></span></label></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AreaFilter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const index_vue_vue_type_style_index_0_scoped_c4cc896f_lang = "";
const __default__ = {
  methods: {
    updateText(newText) {
      this.rightColumnText = newText;
    }
  },
  data() {
    return {
      areas: "",
      leftColumnText: "We are committed to helping our portfolio companies realize their full potential. One of the key ways is by working closely with our companies to develop and execute a successful exit strategy. Our goal is to help our companies achieve a successful exit that maximizes returns for our investors and provides a strong foundation for future growth and opportunities. Take a look at our exit strategies in the buttons below:",
      rightColumnText: "",
      buttons: [
        { id: 2, label: "IPO", text: "An Initial Public Offering is a process where a private company goes public and offers shares of stock to the public market. We prepare our companies for an IPO, including helping them build a strong management team, establishing governance and financial controls,and developing a compelling growth strategy. Our deep understanding of the public markets, combined with our network of investment bankers,allows us to guide our companies to achieve the best possible outcome." },
        { id: 3, label: "M & A", text: "Mergers & Acquisitions involves the acquisition of a company by another company often at a premiuim price. We work closely to identify potential acquirers and facilitate the M & A process, including valuation analysis, due diligence and negotiation. Our network of strategic buyers, private equity firms, and other potential acquirers enables us to help our companies to achieve transactions that maximize returns for our investors." },
        { id: 4, label: "Strategic Sale", text: "A strategic sale involves the scale of a company to a strategic buyer, such as a competitor or industry player. We have deep industry expertise and a broad network of strategic buyers, enabling us to help our portfolio companies identify potential acquirers and negotiate a successful sale. Our focus on building strong relationships with key players in the industry allows us to achieve the best possible outcome for our companies." },
        { id: 5, label: "Recapitalization", text: "Recapitalization involves restructuring the capital structure of a company, often through a combination of debt and equity. We work closely to evaluate their capital needs and develop comprehensive recapitalization plan that balances the companys growth objectives with its financial profile. We help the companies achieve a successful recapitalization that provides a strong foundation for future growth and opportunities." }
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: companies } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies", "$d9mU0JHUxi")), __temp = await __temp, __restore(), __temp);
    const { data: Allareas } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas", "$y1kSrS6gHq")), __temp = await __temp, __restore(), __temp);
    const name = ref("");
    const areas = ref("");
    const MR = ref("");
    const filtered = computed(() => {
      const arrTot = [];
      for (let company of companies.value) {
        if (company.ceo != void 0) {
          if ((name.value == 0 || name.value == "") & (areas.value == 0 || areas.value == "") & (MR.value == 0 || MR.value == "")) {
            arrTot.push(company);
          } else if (company.name.toLowerCase().includes(name.value.toLowerCase()) & (company.areas == areas.value || (areas.value == 0 || areas.value == "")) & (company.MostRelevant == MR.value || (MR.value == 0 || MR.value == "")))
            arrTot.push(company);
          console.log(MR.value);
        }
      }
      return arrTot;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AreaFilter = __nuxt_component_0;
      const _component_Cardsection = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c4cc896f><head data-v-c4cc896f><meta name="description" content="Explore the investments at VenTour - View a comprehensive list of all the investments made by VenTour, including details about the companies with their ceo and the area in which they are included" data-v-c4cc896f></head><main data-v-c4cc896f><div class="containeri" data-v-c4cc896f><div class="col-md-4" data-v-c4cc896f><div class="image-text-overlay text-middle-left" data-v-c4cc896f><p data-v-c4cc896f><span class="overlay-title" data-v-c4cc896f>Ventour investments</span><br data-v-c4cc896f><span class="overlay-subtext" data-v-c4cc896f>We have a track record of identifying and nurtuing some of the most innovative and dynamic startups in the world!</span><br data-v-c4cc896f><span class="overlay-subsubtext" data-v-c4cc896f><em data-v-c4cc896f>*</em> Click the buttons to view all companies we have invested in, or select an investment area and click the buttons to filter.</span><div class="overlay-buttons" data-v-c4cc896f><a href="#title2" data-v-c4cc896f><button class="active" data-v-c4cc896f> Show all </button><button data-v-c4cc896f>Most Relevant Companies</button></a></div></p></div></div><div class="row4-a" data-v-c4cc896f><div class="title" data-v-c4cc896f><label for="all-team" data-v-c4cc896f><input type="radio" id="all-investments" value="" name="Investments-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(areas), "")) ? " checked" : ""} checked data-v-c4cc896f><h1 class="learn-more-2" style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c4cc896f>ALL COMPANIES</h1><span class="checkmark" data-v-c4cc896f></span></label></div></div><div class="row4" data-v-c4cc896f><!--[-->`);
      ssrRenderList(unref(Allareas), (area) => {
        _push(ssrRenderComponent(_component_AreaFilter, {
          logo: area.logo,
          name: area.name,
          data_target: area.data_target,
          link: "/areas/" + area.id,
          value: unref(areas),
          "onUpdate:areas": ($event) => areas.value = $event
        }, null, _parent));
      });
      _push(`<!--]--></div></div><section class="team-members-grid" data-v-c4cc896f><div id="title2" data-v-c4cc896f>PORTFOLIO SNAPSHOT <div class="form-container" data-v-c4cc896f><label for="age-filter" data-v-c4cc896f>Filter companies by name </label><input id="age-filter" type="text" placeholder="Search Company"${ssrRenderAttr("value", unref(name))} data-v-c4cc896f></div></div><div class="row-c" data-v-c4cc896f><div id="card-container" data-v-c4cc896f><!--[-->`);
      ssrRenderList(unref(filtered), (company) => {
        _push(ssrRenderComponent(_component_Cardsection, {
          subtitle: company.ceo,
          area: company.areas,
          image: company.image,
          link: "/companies/" + company.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><div class="row41" data-v-c4cc896f><div class="text-block" data-v-c4cc896f> Our Exit Strategies <p class="left-text" data-v-c4cc896f>${ssrInterpolate(_ctx.leftColumnText)}</p></div><div class="buttons-container" data-v-c4cc896f><div class="buttons" data-v-c4cc896f><!--[-->`);
      ssrRenderList(_ctx.buttons, (button) => {
        _push(`<div data-v-c4cc896f><button style="${ssrRenderStyle({ "color": "white" })}" data-v-c4cc896f><span class="exits" data-v-c4cc896f>${ssrInterpolate(button.label)}</span></button></div>`);
      });
      _push(`<!--]--></div><div style="${ssrRenderStyle({ "align-items": "center", "margin": "5%" })}" data-v-c4cc896f><div class="right-text" data-v-c4cc896f><p data-v-c4cc896f>${ssrInterpolate(_ctx.rightColumnText)}</p></div></div></div></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/companies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4cc896f"]]);
export {
  index as default
};
//# sourceMappingURL=index-954c025a.js.map
