import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./left-arrows-6c3bfe1f.js";
import { _ as _imports_1 } from "./right-arrows-1e290cdd.js";
import { useSSRContext } from "vue";
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
const Carousel_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      cards: [
        {
          image: "https://images.unsplash.com/photo-1652109629663-1fbc7b2ff7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
          title: "VenTour: A Century of Pioneering Investments",
          text: "Everything started in 1907 and none of us knew that be would witness the birth of VenTour, a trailblazing venture capital company that has shaped industries and empowered entrepreneurs for over a hundred years."
        },
        {
          image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          title: "Forging a Legacy: VenTour's Early Years of Innovation",
          text: "The relentless determination and tireless efforts marked VenTour's formative years, as visionary founders and dedicated teams worked tirelessly to lay the foundation for a venture capital empire. It took us years and years of hardworking hours and study to rise up till here."
        },
        {
          image: "https://media.wnyc.org/i/800/0/c/85/1/47244u.jpg",
          title: "Sealing the Future: VenTour's Inaugural Contract",
          text: "Now we look back in 1920, at the historic moment of the pioneers of VenTour gather to sign their first groundbreaking contract, igniting a new era of investment and setting the stage for unprecedented growth."
        },
        {
          image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          title: "Fueling Ambition: VenTour's Journey Driven by Passion",
          text: "The driving force behind VenTour's remarkable journey is our unwavering passion for innovation and bold investments, which  propels us to new heights in the ever-evolving landscape of venture capital."
        },
        {
          image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          title: "The Power of Collaboration: VenTour's Collective Vision",
          text: "Through years we have experienced  the energy and collective wisdom of VenTour's dedicated team as they gather for a transformative meeting, strategizing and shaping the future of investments with their diverse expertise and shared commitment."
        },
        {
          image: "https://media.istockphoto.com/id/530686057/photo/portrait-of-young-man-holding-trophy-standing-in-conference-room-smiling-to-applauding-audience.jpg?b=1&s=170667a&w=0&k=20&c=of1xAxrNRRRN6p1V7cRhBiTW0O-lIEQxhCDOGwJu0L4=",
          title: "Excellence Recognized:Best Company of the Year",
          text: 'Witness a moment of well-deserved celebration as a proud member of VenTour holds the prestigious award for "Best Company of the Year 2023", a testament to their relentless pursuit of excellence in the realm of venture capital.'
        }
      ],
      innerStyles: {},
      step: "",
      transitioning: false,
      currentCardIndex: 0
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    sendEmail() {
      const email = "ventourteam@gmail.com";
      const subject = "General information [Insert Topic]";
      const body = "Hello, I have some questions about [continue].";
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    handleMouseScroll(event) {
      const deltaX = event.deltaX;
      if (deltaX > 0) {
        this.next();
      } else if (deltaX < 0) {
        this.prev();
      }
    },
    setStep() {
      this.$refs.inner.scrollWidth;
      this.cards.length;
      this.step = `0%`;
    },
    next() {
      if (this.transitioning)
        return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
      this.currentCardIndex = this.currentCardIndex % this.cards.length;
      this.cards[this.currentCardIndex].showText = true;
    },
    prev() {
      if (this.transitioning)
        return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
      this.currentCardIndex = (this.currentCardIndex + this.cards.length) % this.cards.length;
      this.cards[this.currentCardIndex].showText = true;
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(_attrs)}><div id="carousel-container"><div class="carousel"><div class="inner" style="${ssrRenderStyle($data.innerStyles)}"><!--[-->`);
  ssrRenderList($data.cards, (card, index) => {
    _push(`<div class="card"><div class="card-content"><img class="img"${ssrRenderAttr("src", card.image)}><div class="text-container2">`);
    if (index === $data.currentCardIndex) {
      _push(`<div class="card-info"><h2 class="card-title">${ssrInterpolate(card.title)}</h2><p class="card-text">${ssrInterpolate(card.text)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="arrow-c"><div class="left-arrow-container"><img class="left-arrow"${ssrRenderAttr("src", _imports_0)}></div><div class="right-arrow-container"><img class="right-arrow"${ssrRenderAttr("src", _imports_1)}></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Carousel as default
};
//# sourceMappingURL=Carousel-5b263e8a.js.map
