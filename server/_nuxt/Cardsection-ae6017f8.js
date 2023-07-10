import { a as __nuxt_component_0$1 } from "../server.mjs";
import { withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const Cardsection_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Cardsection",
  __ssrInlineRender: true,
  props: ["image", "subtitle", "link", "area"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><head><meta name="description" content="Cards defined for Companies"></head><div class="row-c">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: __props.link }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="image-container-section"${_scopeId}><img class="img"${ssrRenderAttr("src", __props.image)} alt="Company Logo"${_scopeId}><p${_scopeId}><span class="subtitle2"${_scopeId}>CEO: ${ssrInterpolate(__props.subtitle)}</span></p><p${_scopeId}><span class="subtitle2"${_scopeId}>Area: ${ssrInterpolate(__props.area)}</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "image-container-section" }, [
                createVNode("img", {
                  class: "img",
                  src: __props.image,
                  alt: "Company Logo"
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cardsection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Cardsection-ae6017f8.js.map
