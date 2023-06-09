import { _ as __nuxt_component_0 } from "./Cardsection-d6d901b9.js";
import { _ as _export_sfc, b as useRuntimeConfig } from "../server.mjs";
import { withAsyncContext, ref, computed, resolveComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-42162552.js";
import "destr";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("technology.3bd4598a.png");
const _imports_1 = "" + __buildAssetsURL("health.1f20c82d.png");
const _imports_2 = "" + __buildAssetsURL("customer.d6811fd3.png");
const _imports_3 = "" + __buildAssetsURL("sustainable.e0b5714f.png");
const index_vue_vue_type_style_index_0_scoped_c16dcef8_lang = "";
const __default__ = {
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
    animateCounters();
    window.addEventListener("scroll", handleScroll);
  },
  methods: {
    navigateToProjects() {
      this.$router.push({ name: "technology", hash: "#projects" });
    },
    filterAndNavigate(event) {
      event.preventDefault();
      if (this.areas === "Technology") {
        const targetSection = document.querySelector(event.target.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
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
  },
  methods: {
    updateText(newText) {
      this.rightColumnText = newText;
    }
  }
};
const _sfc_main = Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: companies } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/companies", "$d9mU0JHUxi")), __temp = await __temp, __restore(), __temp);
    const name = ref("");
    const areas = ref("");
    const MR = ref("");
    const filtered = computed(() => {
      const arrTot = [];
      for (let company of companies.value) {
        if (company.ceo != void 0) {
          if ((name.value == 0 || name.value == "") & (areas.value == 0 || areas.value == "") & (MR.value == 0 || MR.value == "")) {
            arrTot.push(company);
          } else if (company.name.toLowerCase().includes(name.value.toLowerCase()) & (company.areas == areas.value || (areas.value == 0 || areas.value == "")) & company.MostRelevant == MR.value)
            arrTot.push(company);
          console.log(MR.value);
        }
      }
      return arrTot;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Cardsection = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-c16dcef8><div class="containeri" data-v-c16dcef8><div class="col-md-4" data-v-c16dcef8><div class="image-text-overlay text-middle-left" data-v-c16dcef8><p data-v-c16dcef8><span class="overlay-title" data-v-c16dcef8>Ventour investments</span><br data-v-c16dcef8><span class="overlay-subtext" data-v-c16dcef8>We have a track record of identifying and nurtuing some of the most innovative and dynamic startups in the world!</span><br data-v-c16dcef8><span class="overlay-subsubtext" data-v-c16dcef8><em data-v-c16dcef8>*</em> Click the buttons to view all companies we have invested in, or select an investment area and click the buttons to filter.</span><div class="overlay-buttons" data-v-c16dcef8><a href="#title2" data-v-c16dcef8><button class="active" data-v-c16dcef8> Show all </button><button data-v-c16dcef8>Most Relevant Companies</button></a></div></p></div></div><div class="row4-a" data-v-c16dcef8><div class="title" data-v-c16dcef8><label for="all-team" data-v-c16dcef8><input type="radio" id="all-investments" value="" name="Investments-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(areas), "")) ? " checked" : ""} checked data-v-c16dcef8><h1 class="learn-more-2" style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8>ALL COMPANIES</h1><span class="checkmark" data-v-c16dcef8></span></label></div></div><div class="row4" data-v-c16dcef8><div class="column41" data-v-c16dcef8><div class="area-icons" data-v-c16dcef8><img${ssrRenderAttr("src", _imports_0)} alt="Tech" data-v-c16dcef8></div><div class="counter" data-target="100" data-v-c16dcef8></div><div class="link-text" data-v-c16dcef8><a class="learn-more" data-v-c16dcef8>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/technology" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8${_scopeId}>Technology Investments →</h1>`);
          } else {
            return [
              createVNode("h1", { style: { "color": "#033f52" } }, "Technology Investments →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><label for="Technology" data-v-c16dcef8><input type="radio" id="Technology" value="Technology" name="Investments-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(areas), "Technology")) ? " checked" : ""} data-v-c16dcef8><h1 class="learn-more" style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8>SELECT &amp; CHECK COMPANIES</h1><span class="checkmark" data-v-c16dcef8></span></label></div><div class="column4" data-v-c16dcef8><div class="area-icons" data-v-c16dcef8><img${ssrRenderAttr("src", _imports_1)} alt="Healthcare" data-v-c16dcef8></div><div class="counter" data-target="250" data-v-c16dcef8></div><div class="link-text" data-v-c16dcef8><a class="learn-more" data-v-c16dcef8>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/healthcare" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8${_scopeId}>Healthcare Investments →</h1>`);
          } else {
            return [
              createVNode("h1", { style: { "color": "#033f52" } }, "Healthcare Investments →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><label for="Healthcare" data-v-c16dcef8><input type="radio" id="Healthcare" value="Healthcare" name="Investments-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(areas), "Healthcare")) ? " checked" : ""} data-v-c16dcef8><h1 class="learn-more" style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8>SELECT &amp; CHECK COMPANIES</h1><span class="checkmark" data-v-c16dcef8></span></label></div><div class="column4" data-v-c16dcef8><div class="area-icons" data-v-c16dcef8><img${ssrRenderAttr("src", _imports_2)} alt="Goods" data-v-c16dcef8></div><div class="counter" data-target="120" data-v-c16dcef8></div><div class="link-text" data-v-c16dcef8><a class="learn-more" data-v-c16dcef8>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/consumer" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8${_scopeId}>Consumer Goods Investments →</h1>`);
          } else {
            return [
              createVNode("h1", { style: { "color": "#033f52" } }, "Consumer Goods Investments →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><label for="Consumer Goods" data-v-c16dcef8><input type="radio" id="Consumer Goods" value="Consumer Goods" name="Investments-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(areas), "Consumer Goods")) ? " checked" : ""} data-v-c16dcef8><h1 class="learn-more" style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8>SELECT &amp; CHECK COMPANIES</h1><span class="checkmark" href="#" data-v-c16dcef8></span></label></div><div class="column4" data-v-c16dcef8><div class="area-icons" data-v-c16dcef8><img${ssrRenderAttr("src", _imports_3)} alt="Sustainability" data-v-c16dcef8></div><div class="counter" data-target="270" data-v-c16dcef8></div><div class="link-text" data-v-c16dcef8><a class="learn-more" data-v-c16dcef8>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/sustainability" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8${_scopeId}>Sustainability Investments →</h1>`);
          } else {
            return [
              createVNode("h1", { style: { "color": "#033f52" } }, "Sustainability Investments →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><label for="Sustainability" data-v-c16dcef8><input type="radio" id="Sustainability" value="Sustainability" name="Investments-categories"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(areas), "Sustainability")) ? " checked" : ""} data-v-c16dcef8><h1 class="learn-more" style="${ssrRenderStyle({ "color": "#033f52" })}" data-v-c16dcef8>SELECT &amp; CHECK COMPANIES</h1><span class="checkmark" href="#" data-v-c16dcef8></span></label></div></div></div><section class="team-members-grid" data-v-c16dcef8><div id="title2" data-v-c16dcef8>PORTFOLIO SNAPSHOT <div class="form-container" data-v-c16dcef8><label for="age-filter" data-v-c16dcef8>Filter companies by name </label><input id="age-filter" type="text" placeholder="Search Company"${ssrRenderAttr("value", unref(name))} data-v-c16dcef8></div></div><div class="row-c" data-v-c16dcef8><div id="card-container" data-v-c16dcef8><!--[-->`);
      ssrRenderList(unref(filtered), (company) => {
        _push(ssrRenderComponent(_component_Cardsection, {
          subtitle: company.ceo,
          area: company.areas,
          image: company.image,
          link: "/companies/" + company.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><div class="row41" data-v-c16dcef8><div class="text-block" data-v-c16dcef8> Our Exit Strategies <p class="left-text" data-v-c16dcef8>${ssrInterpolate(_ctx.leftColumnText)}</p></div><div class="buttons-container" data-v-c16dcef8><div class="buttons" data-v-c16dcef8><!--[-->`);
      ssrRenderList(_ctx.buttons, (button) => {
        _push(`<div data-v-c16dcef8><button style="${ssrRenderStyle({ "color": "white" })}" data-v-c16dcef8><span data-v-c16dcef8>${ssrInterpolate(button.label)}</span></button></div>`);
      });
      _push(`<!--]--></div><div style="${ssrRenderStyle({ "align-items": "center", "margin": "5%" })}" data-v-c16dcef8><div class="right-text" data-v-c16dcef8><p data-v-c16dcef8>${ssrInterpolate(_ctx.rightColumnText)}</p></div></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/companies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c16dcef8"]]);
export {
  index as default
};
//# sourceMappingURL=index-5d3e3fb0.js.map
