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
const _imports_2 = "" + __buildAssetsURL("consumer-team.8af0b2ea.png");
const consumer_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      activeSection: 1
    };
  }
};
const testimonial2Items = document.querySelectorAll(".item label");
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
    const ele = `.${testimonial2Items[index].className}`;
    const ele2 = document.querySelector(ele);
    ele2.dispatchEvent(evt);
    index++;
    if (index >= testimonialItems.length) {
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
  _push(ssrRenderComponent(_component_router_link, { to: "/healthcare" }, {
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
  _push(ssrRenderComponent(_component_router_link, { to: "/sustainability" }, {
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
  _push(`</div><h1 class="name">Consumer Goods Investments</h1><hr><div class="row"><div class="columna"><img id="area-img"${ssrRenderAttr("src", _imports_2)}></div><div class="columna2"><div class="button-container" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: $data.activeSection === 1 }, "section-button"])}"><br> DESCRIPTION </button><button class="${ssrRenderClass([{ active: $data.activeSection === 2 }, "section-button"])}"><br> PROJECTS </button></div><div class="description-containera">`);
  if ($data.activeSection === 1) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_p2, { class: "description" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Our company looks for opportunities in the consumer goods sector that are able to offer unique value propositions to customers, create new markets or disrupt existing ones. <br${_scopeId}> The company&#39;s consumer goods investments span across a variety of categories including food and beverage, beauty and personal care, and household goods. VenTour is interested in companies that leverage cutting-edge technologies to create new products and services that meet evolving consumer needs. The company also prioritizes businesses that have a strong brand identity and are able to connect with their customers on a personal level. `);
        } else {
          return [
            createTextVNode(" Our company looks for opportunities in the consumer goods sector that are able to offer unique value propositions to customers, create new markets or disrupt existing ones. "),
            createVNode("br"),
            createTextVNode(" The company's consumer goods investments span across a variety of categories including food and beverage, beauty and personal care, and household goods. VenTour is interested in companies that leverage cutting-edge technologies to create new products and services that meet evolving consumer needs. The company also prioritizes businesses that have a strong brand identity and are able to connect with their customers on a personal level. ")
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
          _push2(` Current Portfolio of the investment projects in the field of Consumer Goods: `);
        } else {
          return [
            createTextVNode(" Current Portfolio of the investment projects in the field of Consumer Goods: ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<ul class="comp-list"><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.nestle.it/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Nestlé</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.unilever.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Unilever</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.nike.com/it/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Nike</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.asahigroup-holdings.com/en/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Asahi Group </a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.kraftheinzcompany.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Kraft Heinz</a></li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><hr></div><div class="row"><div class="text-center"><p>HAPPY INVESTORS:</p></div></div><div id="flex-container" class="testimonials"><div id="left-zone"><ul class="list"><li class="item"><input type="radio" id="radio_testimonial2-1" name="basic_carousel" checked="checked"><label class="label_testimonial2-1" for="radio_testimonial2-1">Nestlè</label><div class="content-test content_testimonial2-1"><span class="picto"></span><p>&quot;I&#39;ve been investing with VenTour for a few years now and I couldn&#39;t be happier with their work in the consumer goods sector. Their expertise and guidance have helped our portfolio of companies grow tremendously.&quot;</p><p class="testimonialFrom">Mark Schneider, Chief Executive Officer</p><p class="testimonialState">Vevey, Switzerland</p></div></li><li class="item"><input type="radio" id="radio_testimonial2-2" name="basic_carousel"><label class="label_testimonial2-2" for="radio_testimonial2-2">Unilever</label><div class="content-test content_testimonial2-2"><span class="picto"></span><p>&quot;As an investor, it&#39;s always reassuring to see the companies you&#39;ve invested in succeed. VenTour&#39;s strategic investments in the consumer goods sector have consistently led to impressive results, and I&#39;m proud to be a part of it.&quot;</p><p class="testimonialFrom">Alan Jope, CEO</p><p class="testimonialState">London, UK</p><br></div></li><li class="item"><input type="radio" id="radio_testimonial2-3" name="basic_carousel"><label class="label_testimonial2-3" for="radio_testimonial2-3">NIKE</label><div class="content-test content_testimonial2-3"><span class="picto"></span><p>&quot;I&#39;ve invested in several venture capital firms over the years, but VenTour stands out in their commitment to their portfolio companies in the consumer goods industry. Their team&#39;s dedication and support have helped take our investments to the next level.&quot;</p><p class="testimonialFrom">John Donahoe, President</p><p class="testimonialState">Oregon, USA</p></div></li><li class="item"><input type="radio" id="radio_testimonial2-4" name="basic_carousel"><label class="label_testimonial2-4" for="radio_testimonial2-4">Kraft Heinz</label><div class="content-test content_testimonial2-4"><span class="picto"></span><p>&quot;VenTour&#39;s approach to investing in the consumer goods sector is truly unique. Their focus on sustainability and ethical practices in their portfolio companies has not only yielded great returns but has also made a positive impact on our environment and society. I&#39;m proud to be a part of their mission.&quot;</p><p class="testimonialFrom">Miguel Patricio, Chief Executive</p><p class="testimonialState"> Illinois, USA</p><br></div></li></ul></div><div id="right-zone"></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/consumer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const consumer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  consumer as default
};
//# sourceMappingURL=consumer-0728864c.js.map
