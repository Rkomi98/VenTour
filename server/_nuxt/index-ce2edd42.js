import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const _imports_0 = "" + __buildAssetsURL("logo_transparent3.7b3f48ab.png");
const _imports_1 = "" + __buildAssetsURL("logo_transparent2.8f4fdd8c.png");
const _imports_2 = "" + __buildAssetsURL("logo_transparent.3415ce24.png");
const _imports_3 = "" + __buildAssetsURL("innovation.d793c2a7.png");
const _imports_4 = "" + __buildAssetsURL("fuel.0fbdf756.png");
const _imports_5 = "" + __buildAssetsURL("unlock.30df2bc0.png");
const _imports_6 = "" + __buildAssetsURL("worldwide.f899d368.png");
const _imports_7 = "" + __buildAssetsURL("europe.21df52b1.png");
const _imports_8 = "" + __buildAssetsURL("asia.d49d7887.png");
const _imports_9 = "" + __buildAssetsURL("america.9ee39619.png");
const _imports_10 = "" + __buildAssetsURL("Dell.61303fe9.png");
const _imports_11 = "" + __buildAssetsURL("nike.e9a28a5a.png");
const _imports_12 = "" + __buildAssetsURL("canadiansolar.195ea5ae.png");
const _imports_13 = "data:image/png;base64,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";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_h7 = resolveComponent("h7");
  const _component_h8 = resolveComponent("h8");
  _push(`<main${ssrRenderAttrs(mergeProps({ id: "back-h" }, _attrs))}><section class="homeintro"><div class="content2"><p class="content__container__text"> Fly with us to a journey of growth! </p><div class="content"><div class="content__container"><p class="content__container__text"> We are </p><ul class="content__container__list"><li class="content__container__list__item">inovation !</li><li class="content__container__list__item">power !</li><li class="content__container__list__item">potential !</li><li class="content__container__list__item">VenTour !</li></ul></div></div><p class="section-text4">Transforming the investment landscape and fueling inovation.<br> Our focus is your success.</p>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/history",
    class: "sec-tex"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="section-text4"${_scopeId}>LEARN MORE</p>`);
      } else {
        return [
          createVNode("p", { class: "section-text4" }, "LEARN MORE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><a href="#numbers"><img class="firstimg3"${ssrRenderAttr("src", _imports_0)}></a><a href="#numbers"><img class="firstimg2"${ssrRenderAttr("src", _imports_1)}></a><img class="firstimg"${ssrRenderAttr("src", _imports_2)}></section><section id="us"><div class="us-left-col"><div class="left-layout"><h5 class="u-section-text">why ventour</h5><h2 class="u-section-text2">What do we represent?</h2><p class="u-section-text3">&quot;Ven&quot; meaning &quot;come&quot;...Come in a tour with us!...At VenTour, we embody the spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a venture capital firm, we specialize in providing crucial support and funding to early-stage and high-growth companies that are reshaping industries and driving forward societal progress. We understand that the journey of transforming groundbreaking ideas into successful businesses can be challenging, which is why we strive to be more than just financial backers. Our mission is to be your strategic partner, offering not only capital but also expertise, guidance, and an extensive network of industry connections. </p>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="us-button"${_scopeId}>join us</a>`);
      } else {
        return [
          createVNode("a", { class: "us-button" }, "join us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="us-right-col"><div class="us-right-col1-layout"><div class="us-right-col1-layout-row"><div class="us-right-col1"><div class="us-right-col1-layout2"><div class="us-right-col1-layout2-card-1"><div class="us-right-col1-layout3"><img class="icon-circle"${ssrRenderAttr("src", _imports_3)}><h4 class="us-text1">Empowering Innovation</h4><p class="us-text2">Innovation is at the core of everything we do. We actively seek out the most innovative and disruptive ideas across a wide range of industries, from technology and healthcare to energy and beyond. </p></div></div></div><div class="us-right-col1-layout4"><div class="us-right-col1-layout2-card-2"><div class="us-right-col1-layout3"><img class="icon-circle"${ssrRenderAttr("src", _imports_4)}><h4 class="us-text1">Fuelling growth</h4><p class="us-text2">We believe in the transformative power of ideas.We are a leading venture capital firm dedicated to fueling the growth of groundbreaking startups and empowering them to reach their full potential. </p></div></div></div></div><div class="us-right-col1"><div class="us-right-col1-layout2"><div class="us-right-col1-layout2-card-3"><div class="us-right-col1-layout3"><img class="icon-circle"${ssrRenderAttr("src", _imports_5)}><h4 class="us-text1">Unlocking potential</h4><p class="us-text2">We partner with visionary entrepreneurs and startups at every stage of their journey, providing financial support, but also invaluable expertise, resources, and a vast network of industry connections. </p></div></div></div><div class="us-right-col1-layout4"><div class="us-right-col1-layout2-card-4"><div class="us-right-col1-layout3"><img class="icon-circle"${ssrRenderAttr("src", _imports_6)}><h4 class="us-text1">Global Reach, Local Impact</h4><p class="us-text2">We are rooted in startups in every country. Our experts combine deep industry knowledge with a passion for supporting entrepreneurs. We create a dynamic environment that drives positive change. </p></div></div></div></div></div></div></div></section><section id="numbers"><div class="midl-container"><h4 class="subtitle-midl">A wide investment map</h4><div class="midl-list"><div class="repeater"><div class="first-rep"><img class="rep-icon"${ssrRenderAttr("src", _imports_7)}>`);
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
  _push(`<p class="text-down">Committed to fueling innovation in Europe, where we have strategically allocated 60% of our investments. With a thriving startup ecosystem and a rich pool of talent, Europe offers immense growth potential for entrepreneurs and investors alike.</p></div></div><div class="first-rep2"><img class="rep-icon"${ssrRenderAttr("src", _imports_8)}>`);
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
  _push(`<p class="text-down">We recognize the immense opportunities in Asia&#39;s dynamic market. That&#39;s why we have dedicated 30% of our investments to this region, capitalizing on the rapid technological advancements and the unprecedented growth potential across various industries.</p></div></div><div class="first-rep3"><img class="rep-icon"${ssrRenderAttr("src", _imports_9)}>`);
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
  _push(`<p class="text-down">Unlocking the untapped potential of South America is a key focus for our venture capital investments. With 10% of our portfolio dedicated to this vibrant region, we aim to support visionary entrepreneurs and drive innovation in an emerging market filled with promising opportunities.</p></div></div></div></div></div></section><section id="best-comp"><h4 class="subtitle-midl">Our Top 4 Investments</h4><div class="container"><div class="box"><div class="imgBx"><img${ssrRenderAttr("src", _imports_10)}></div><div class="content"><div>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/27" }, {
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
  _push(`<p>Giving light to technology with one of the best trending companies in todays&#39; market. </p></div></div></div><div class="box"><div class="imgBx"><img${ssrRenderAttr("src", _imports_11)}></div><div class="content"><div>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/33" }, {
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
  _push(`<p>The top leading company in sportswear trusted on us to become the most wanted one. </p></div></div></div><div class="box"><div class="imgBx"><img${ssrRenderAttr("src", _imports_12)}></div><div class="content"><div>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/38" }, {
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
  _push(`<p>Producing power from the support they gained from us and leading the energy market. </p></div></div></div><div class="box"><div class="imgBx"><img${ssrRenderAttr("src", _imports_13)}></div><div class="content"><div>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/24" }, {
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
  _push(`<p>Being your insurance and health companion in international markets just like us are for our companies. </p></div></div></div></div></section><section class="areasrep"><h4 class="subtitle-midl">Leading in 4 directions</h4></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-ce2edd42.js.map
