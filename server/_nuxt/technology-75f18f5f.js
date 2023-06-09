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
const _imports_2 = "" + __buildAssetsURL("tech-team.401264c6.png");
const technology_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    let i = 2;
    return {
      activeSection: i
    };
  }
};
const testimonialItems = document.querySelectorAll(".item label");
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
  _push(ssrRenderComponent(_component_router_link, { to: "/companies" }, {
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
  _push(ssrRenderComponent(_component_router_link, { to: "/healthcare" }, {
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
  _push(`</div><h1 class="name">Technology Investments</h1><hr><div class="row"><div class="columna"><img id="area-img"${ssrRenderAttr("src", _imports_2)}></div><div class="columna2"><div class="button-container" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "1" })}"><button class="${ssrRenderClass([{ active: $data.activeSection === 1 }, "section-button"])}"><br> DESCRIPTION </button><button class="${ssrRenderClass([{ active: $data.activeSection === 2 }, "section-button"])}"><br> PROJECTS </button></div><div class="description-containera">`);
  if ($data.activeSection === 1) {
    _push(`<div id="section1">`);
    _push(ssrRenderComponent(_component_p2, { class: "description" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` VenTour understands the importance of technology investments and is committed to investing in cutting-edge technologies. We have a team of experienced professionals who have an eye for identifying promising technologies and the potential to change the world. By investing in technology, VenTour aims to support startups that are focused on creating innovative solutions to complex problems. <br${_scopeId}> VenTour has been investing in technology companies for years, contributing to the growth and success of some of the most innovative businesses in the industry. VenTour&#39;s extensive knowledge and expertise in technology investments have helped its portfolio companies reach their full potential. `);
        } else {
          return [
            createTextVNode(" VenTour understands the importance of technology investments and is committed to investing in cutting-edge technologies. We have a team of experienced professionals who have an eye for identifying promising technologies and the potential to change the world. By investing in technology, VenTour aims to support startups that are focused on creating innovative solutions to complex problems. "),
            createVNode("br"),
            createTextVNode(" VenTour has been investing in technology companies for years, contributing to the growth and success of some of the most innovative businesses in the industry. VenTour's extensive knowledge and expertise in technology investments have helped its portfolio companies reach their full potential. ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else if ($data.activeSection === 2) {
    _push(`<div id="projects">`);
    _push(ssrRenderComponent(_component_p2, { class: "description2" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Current Portfolio of the investment projects in the field of Technology: `);
        } else {
          return [
            createTextVNode(" Current Portfolio of the investment projects in the field of Technology: ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<ul class="comp-list"><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.microsoft.com/it-it" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Microsoft</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.dell.com/it-it" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Dell</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Intel</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.tsmc.com/english" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">Taiwan Semiconductor Manufacturing Co., Ltd</a></li><li style="${ssrRenderStyle({ "list-style": "none", "text-decoration": "none" })}"><a href="https://www.st.com/content/st_com/en.html" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none", "font-size": "medium" })}">STMicroelectronics</a></li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><hr></div><div class="row"><div class="text-center"><p>HAPPY INVESTORS:</p></div></div><div id="flex-container" class="testimonials"><div id="left-zone"><ul class="list"><li class="item"><input type="radio" id="radio_testimonial-1" name="basic_carousel" checked="checked"><label class="label_testimonial-1" for="radio_testimonial-1">Microsoft</label><div class="content-test content_testimonial-1"><span class="picto"></span><p>&quot;I&#39;ve been investing with VenTour for the past few years and I couldn&#39;t be happier with the results. Their team of experts really knows how to spot promising startups and help them grow. My portfolio has seen significant gains thanks to VenTour&#39;s strategic investments.&quot;</p><p class="testimonialFrom">Paul Gardner Allen, Founder</p><p class="testimonialState">Redmond, NY</p></div></li><li class="item"><input type="radio" id="radio_testimonial-2" name="basic_carousel"><label class="label_testimonial-2" for="radio_testimonial-2">DELL</label><div class="content-test content_testimonial-2"><span class="picto"></span><p>&quot;As a first-time investor, I was a bit nervous about putting my money into the hands of a venture capital firm. But VenTour&#39;s professionalism and transparency made me feel at ease. They keep me updated every step of the way and have exceeded my expectations in terms of returns.&quot;</p><p class="testimonialFrom">Michael Saul Dell, Owner</p><p class="testimonialState">Round Rock, TX</p><br></div></li><li class="item"><input type="radio" id="radio_testimonial-3" name="basic_carousel"><label class="label_testimonial-3" for="radio_testimonial-3">intel</label><div class="content-test content_testimonial-3"><span class="picto"></span><p>&quot;I&#39;ve been working with VenTour for several years now and I can confidently say they are one of the best venture capital firms out there. Their ability to identify and support high-growth companies is unmatched. ”</p><p class="testimonialFrom">Gordon Earle Moore, CEO</p><p class="testimonialState">Santa Clara, CA</p></div></li><li class="item"><input type="radio" id="radio_testimonial-4" name="basic_carousel"><label class="label_testimonial-4" for="radio_testimonial-4">ST Microelectronics</label><div class="content-test content_testimonial-4"><span class="picto"></span><p>&quot;Working with VenTour has been an absolute pleasure. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure success. They have helped me diversify my portfolio and achieve financial goals I never thought possible.&quot;</p><p class="testimonialFrom">Jean-Marc Chery, Chief Executive</p><p class="testimonialState">Geneva, Switzerland</p><br></div></li></ul></div><div id="right-zone"></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/technology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const technology = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  technology as default
};
//# sourceMappingURL=technology-75f18f5f.js.map
