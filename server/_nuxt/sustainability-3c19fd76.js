import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
import { _ as _imports_1 } from "./right-arrows-1e290cdd.js";
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
const _imports_2 = "" + __buildAssetsURL("sustainability-team.f11c6793.png");
const sustainability_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      activeSection: 1
    };
  }
};
const testimonial3Items = document.querySelectorAll(".item label");
let timer;
let index = 0;
function cycleTestimonials() {
  timer = setTimeout(() => {
    let evt;
    if (document.createEvent) {
      evt = document.createEvent("MouseEvent");
      evt.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
    } else {
      evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20
      });
    }
    const ele = `.${testimonialItems[index].className}`;
    const ele2 = document.querySelector(ele);
    ele2.dispatchEvent(evt);
    index++;
    if (index >= testimonial3Items.length) {
      index = 0;
    }
    cycleTestimonials();
    document.querySelector(".testimonials").addEventListener("click", () => {
      clearTimeout(timer);
    });
  }, 2e3);
}
cycleTestimonials();
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_p2 = resolveComponent("p2");
  _push(`<main${ssrRenderAttrs(mergeProps({ id: "back" }, _attrs))}><div class="info-group"><div class="arrow"><div class="arrow-left">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/consumer" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Left Arrow"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Left Arrow"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/companies" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="arrow-right"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Right Arrow"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "arrow-right" }, [
            createVNode("img", {
              src: _imports_1,
              alt: "Right Arrow"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="name">Sustainability Investments</h1><hr><div class="row"><div class="columna"><img id="area-img"${ssrRenderAttr("src", _imports_2)}></div><div class="columna2"><div class="button-container" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: $data.activeSection === 1 }, "section-button"])}"><br> DESCRIPTION </button><button class="${ssrRenderClass([{ active: $data.activeSection === 2 }, "section-button"])}"><br> PROJECTS </button></div><div class="description-containera">`);
  if ($data.activeSection === 1) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_p2, { class: "description" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` As a venture capital firm committed to sustainability, VenTour seeks to invest in companies that prioritize environmental, social, and governance (ESG) considerations. The firm is particularly interested in supporting innovative solutions that promote the transition to a low-carbon economy, enhance resource efficiency, and reduce waste. <br${_scopeId}> One area of focus for VenTour is renewable energy, including companies developing technologies for solar, wind, and geothermal power. The firm also seeks out opportunities in energy storage and distribution, as well as in the electrification of transportation.VenTour also supports companies focused on improving supply chain transparency and reducing food waste. `);
        } else {
          return [
            createTextVNode(" As a venture capital firm committed to sustainability, VenTour seeks to invest in companies that prioritize environmental, social, and governance (ESG) considerations. The firm is particularly interested in supporting innovative solutions that promote the transition to a low-carbon economy, enhance resource efficiency, and reduce waste. "),
            createVNode("br"),
            createTextVNode(" One area of focus for VenTour is renewable energy, including companies developing technologies for solar, wind, and geothermal power. The firm also seeks out opportunities in energy storage and distribution, as well as in the electrification of transportation.VenTour also supports companies focused on improving supply chain transparency and reducing food waste. ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else if ($data.activeSection === 2) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_p2, { class: "description" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Current Portfolio of the investment projects in the field of Sustainability: `);
        } else {
          return [
            createTextVNode(" Current Portfolio of the investment projects in the field of Sustainability: ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<ul class="comp-list"><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.ge.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">General Electric Co.</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.iberdrola.it/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Iberdrola SA</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.canadiansolar.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Canadian Solar, Inc. </a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.jinkosolar.com/en/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">JinkoSolar Holding Co., Ltd. </a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.enelx.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Enel X</a></li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><hr></div><div class="row"><div class="text-center"><p>HAPPY INVESTORS:</p></div></div><div id="flex-container" class="testimonials"><div id="left-zone"><ul class="list"><li class="item"><input type="radio" id="radio_testimonial3-1" name="basic_carousel" checked="checked"><label class="label_testimonial3-1" for="radio_testimonial3-1">Canadian Solar</label><div class="content-test content_testimonial3-1"><span class="picto"></span><p>&quot;I have been investing with VenTour for years, and I can say with confidence that they are one of the best in the business when it comes to sustainability. They have a clear vision of the kind of world they want to help create. It&#39;s been a pleasure to be a part of their journey.&quot; </p><p class="testimonialFrom">Shawn Qu, Founder</p><p class="testimonialState">Guelph, Canada</p></div></li><li class="item"><input type="radio" id="radio_testimonial3-2" name="basic_carousel"><label class="label_testimonial3-2" for="radio_testimonial3-2">Enel X</label><div class="content-test content_testimonial3-2"><span class="picto"></span><p>&quot;Working with VenTour has been a fantastic experience. Not only are they dedicated to sustainability, but they are also incredibly knowledgeable about the latest trends and technologies in the field. I feel confident that my investment is not only supporting a good cause, but also in the hands of experts who know how to make it grow.&quot;</p><p class="testimonialFrom">Francesco Venturini, CEO</p><p class="testimonialState">Rome, Italy</p><br></div></li><li class="item"><input type="radio" id="radio_testimonial3-3" name="basic_carousel"><label class="label_testimonial3-3" for="radio_testimonial3-3">Iberdrola SA</label><div class="content-test content_testimonial3-3"><span class="picto"></span><p>&quot;VenTour has truly shown us that investing in sustainability can be both profitable and good for the planet. They have a keen eye for identifying companies that are making a real impact on the environment, and their support has been instrumental in helping these businesses thrive.&quot;</p><p class="testimonialFrom">Juan de Urrutia, Founder</p><p class="testimonialState">Bilbao, Spain</p></div></li><li class="item"><input type="radio" id="radio_testimonial3-4" name="basic_carousel"><label class="label_testimonial3-4" for="radio_testimonial3-4">General Electric Co.</label><div class="content-test content_testimonial3-4"><span class="picto"></span><p>&quot;I am so impressed with VenTour&#39;s commitment to sustainability. Their portfolio of companies includes some of the most innovative and environmentally-conscious businesses I have ever seen. As an investor, I am proud to be associated with a company that is making a real difference in the world.&quot;</p><p class="testimonialFrom">Thomas Alva Edison, Founder</p><p class="testimonialState">Boston, MA</p><br></div></li></ul></div><div id="right-zone"></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sustainability.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sustainability = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  sustainability as default
};
//# sourceMappingURL=sustainability-3c19fd76.js.map
