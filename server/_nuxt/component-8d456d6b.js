import { getCurrentInstance, toRefs, reactive } from "vue";
import { d as useNuxtApp, e as useHead, u as useRoute } from "../server.mjs";
import { a as useAsyncData } from "./fetch-42162552.js";
const NuxtComponentIndicator = "__nuxt_component";
async function runLegacyAsyncData(res, fn) {
  const nuxt = useNuxtApp();
  const route = useRoute();
  const vm = getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, toRefs(reactive(data.value)));
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData && !options.head) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = (setup == null ? void 0 : setup(props, ctx)) || {};
      const promises = [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      if (options.head) {
        const nuxtApp = useNuxtApp();
        useHead(typeof options.head === "function" ? () => options.head(nuxtApp) : options.head);
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
      });
    }
  };
};
export {
  defineNuxtComponent as d
};
//# sourceMappingURL=component-8d456d6b.js.map
