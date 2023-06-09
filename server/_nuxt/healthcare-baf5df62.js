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
const _imports_2 = "" + __buildAssetsURL("health-team.0feb24fa.png");
const healthcare_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      activeSection: 1
    };
  }
};
const testimonial1Items = document.querySelectorAll(".item label");
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
    if (index >= testimonial1Items.length) {
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
  _push(ssrRenderComponent(_component_router_link, { to: "/technology" }, {
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
  _push(ssrRenderComponent(_component_router_link, { to: "/consumer" }, {
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
  _push(`</div><h1 class="name">Healthcare Investments</h1><hr><div class="row"><div class="columna"><img id="area-img"${ssrRenderAttr("src", _imports_2)}></div><div class="columna2"><div class="button-container" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: $data.activeSection === 1 }, "section-button"])}"><br> DESCRIPTION </button><button class="${ssrRenderClass([{ active: $data.activeSection === 2 }, "section-button"])}"><br> PROJECTS </button></div><div class="description-containera">`);
  if ($data.activeSection === 1) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_p2, { class: "description" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Our company has a strong track record of identifying promising healthcare startups and helping them grow and succeed. VenTour invests in a variety of healthcare sectors, including biotechnology, medical devices, and digital health.Investments are targeted at companies that are developing cutting-edge technologies and products that can improve patient outcomes, reduce healthcare costs, and increase access to care. <br${_scopeId}> Our goal is to help every portfolio company to navigate the complex healthcare landscape and bring their innovations to market as quickly and efficiently as possible. `);
        } else {
          return [
            createTextVNode(" Our company has a strong track record of identifying promising healthcare startups and helping them grow and succeed. VenTour invests in a variety of healthcare sectors, including biotechnology, medical devices, and digital health.Investments are targeted at companies that are developing cutting-edge technologies and products that can improve patient outcomes, reduce healthcare costs, and increase access to care. "),
            createVNode("br"),
            createTextVNode(" Our goal is to help every portfolio company to navigate the complex healthcare landscape and bring their innovations to market as quickly and efficiently as possible. ")
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
          _push2(` Current Portfolio of the investment projects in the field of Healthcare: `);
        } else {
          return [
            createTextVNode(" Current Portfolio of the investment projects in the field of Healthcare: ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<ul class="comp-list"><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.unitedhealthgroup.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">UnitedHealth Group, Inc.</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.cardinalhealth.com/en.html" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Cardinal Health, Inc.</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.cigna.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">The Cigna Group</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none", "font-size": "medium" })}"><a href="https://www.elevancehealth.com/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}">Elevance Health, Inc. Ltd</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.pfizer.it/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Pfizer Inc</a></li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><hr></div><div class="row"><div class="text-center"><p>HAPPY INVESTORS:</p></div></div><div id="flex-container" class="testimonials"><div id="left-zone"><ul class="list"><li class="item"><input type="radio" id="radio_testimonial1-1" name="basic_carousel" checked="checked"><label class="label_testimonial1-1" for="radio_testimonial1-1">UnitedHealth Group</label><div class="content-test content_testimonial1-1"><span class="picto"></span><p>&quot;As a healthcare professional, I am thrilled to be a part of VenTour&#39;s investment portfolio. Their commitment to improving patient outcomes through innovative technology and services is truly inspiring. I have no doubt that their investments will continue to make a significant impact on the healthcare industry.&quot;</p><p class="testimonialFrom">Richard T. Burke, Founder</p><p class="testimonialState">Minnetonka, MN</p></div></li><li class="item"><input type="radio" id="radio_testimonial1-2" name="basic_carousel"><label class="label_testimonial1-2" for="radio_testimonial1-2">Cigna Group</label><div class="content-test content_testimonial1-2"><span class="picto"></span><p>&quot;VenTour&#39;s expertise and guidance have been instrumental in helping our healthcare startup succeed. Their understanding of the market and willingness to take risks has allowed us to develop groundbreaking solutions that have the potential to transform patient care.&quot;</p><p class="testimonialFrom">Mike Crompton, CEO</p><p class="testimonialState">Round Rock, TX</p><br></div></li><li class="item"><input type="radio" id="radio_testimonial1-3" name="basic_carousel"><label class="label_testimonial1-3" for="radio_testimonial1-3">CardinalHealth</label><div class="content-test content_testimonial1-3"><span class="picto"></span><p>&quot;Working with VenTour has been an incredibly positive experience. Their team is knowledgeable, professional, and committed to supporting companies that are making a real difference in healthcare. I have no doubt that their investments will have a lasting impact on the industry and improve the lives of countless patients.&quot;</p><p class="testimonialFrom">Robert D. Walter, Founder</p><p class="testimonialState">Dublin, OH</p></div></li><li class="item"><input type="radio" id="radio_testimonial1-4" name="basic_carousel"><label class="label_testimonial1-4" for="radio_testimonial1-4">Pfizer</label><div class="content-test content_testimonial1-4"><span class="picto"></span><p>&quot;As an investor, I appreciate VenTour&#39;s approach to healthcare investments. They are focused on supporting companies that are developing innovative solutions to some of the biggest challenges in healthcare. Their commitment to making a positive impact is evident in their portfolio, and I am proud to be a part of it.&quot;</p><p class="testimonialFrom">Charles Erhart, Founder</p><p class="testimonialState">New York, NY</p><br></div></li></ul></div><div id="right-zone"></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/healthcare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const healthcare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  healthcare as default
};
//# sourceMappingURL=healthcare-baf5df62.js.map
