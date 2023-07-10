import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const topinvestments_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Page of Most Relevant Projects - VenTour"></head><main id="backTI"><div class="col-md-4TI"><div class="image-text-overlay text-middle-left"><p><span class="overlay-title">TOP ACTUAL INVESTMENTS</span><br><span class="overlay-subtext">In VenTour we invest in long lasting companies, known worlwide for their success!</span><br></p></div><ul id="section-top"><input type="radio" name="radio-btn" id="img-1" checked><li id="img-container"><div id="img-inner">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/27" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="https://assets.website-files.com/5e33539ac1dec48c992bdaae/5e5993706f7f75a7ce21dc93_DellTechnologiesWorld_3DExhibits_Fullscreen.jpg"${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: "https://assets.website-files.com/5e33539ac1dec48c992bdaae/5e5993706f7f75a7ce21dc93_DellTechnologiesWorld_3DExhibits_Fullscreen.jpg" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><label for="img-6" class="sb-bignav" title="Previous">‹</label><label for="img-2" class="sb-bignav" title="Next">›</label></li><input type="radio" name="radio-btn" id="img-2"><li id="img-container"><div id="img-inner">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/33" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2022/12/Nike-1.jpg"${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: "https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2022/12/Nike-1.jpg" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><label for="img-1" class="sb-bignav" title="Previous">‹</label><label for="img-3" class="sb-bignav" title="Next">›</label></li><input type="radio" name="radio-btn" id="img-3"><li id="img-container"><div id="img-inner">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/38" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="https://www.solarchoice.net.au/wp-content/uploads/Canadian-Solar-Banner.png"${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: "https://www.solarchoice.net.au/wp-content/uploads/Canadian-Solar-Banner.png" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><label for="img-2" class="sb-bignav" title="Previous">‹</label><label for="img-4" class="sb-bignav" title="Next">›</label></li><input type="radio" name="radio-btn" id="img-4"><li id="img-container"><div id="img-inner">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies/24" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="https://www.fair360.com/media/2022/12/cigna-building.jpg"${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: "https://www.fair360.com/media/2022/12/cigna-building.jpg" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><label for="img-3" class="sb-bignav" title="Previous">‹</label><label for="img-5" class="sb-bignav" title="Next">›</label></li></ul><section class="topbutton"><div class="col3top">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/companies",
    class: "nav-link-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="card13top"${_scopeId}><div class="go-cornertop"${_scopeId}></div><h3${_scopeId}>CHECK ALL INVESTMENTS</h3></a>`);
      } else {
        return [
          createVNode("a", { class: "card13top" }, [
            createVNode("div", { class: "go-cornertop" }),
            createVNode("h3", null, "CHECK ALL INVESTMENTS")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/topinvestments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const topinvestments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  topinvestments as default
};
//# sourceMappingURL=topinvestments-b1986a9c.js.map
