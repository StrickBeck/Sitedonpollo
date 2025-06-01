import { _ as __nuxt_component_0 } from "./nuxt-link-CmV0wPuW.js";
import { defineComponent, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-DfvD6GOm.js";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/klona/dist/index.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/unctx/dist/index.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/radix3/dist/index.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("image.0-TS9EJL.png");
const _imports_1 = "" + __buildAssetsURL("youtube.D1xzDStd.png");
const _imports_2 = "" + __buildAssetsURL("facebook.DFt5a5XP.png");
const _imports_3 = "" + __buildAssetsURL("github.nmw778zG.png");
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  __name: "defalt",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-47926J27Y9"
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-47926J27Y9');            
            `,
          type: "text/javascript"
        }
      ],
      _dangerouslyDisableSanitizersByTagID: {
        gtag: ["innerHTML"]
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header class="flex flex-row w-full bg-blue-900"><div class="basis-1/4 items-center justify-start px-8"><a href="http://localhost:3000/" class="w-16 h-16"><img${ssrRenderAttr("src", _imports_0)} class="h-16 w-16 bg-transparent"></a></div><div class="basis-1/4"></div><nav class="basis-1/2 flex flex-row items-center justify-end px-8 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/meme",
        class: "my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Memes`);
          } else {
            return [
              createTextVNode("Memes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Lab3",
        class: "my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lab3`);
          } else {
            return [
              createTextVNode("Lab3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/logout",
        class: "my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`LogOut`);
          } else {
            return [
              createTextVNode("LogOut")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header><main class="p-5 flex flex-row w-full bg-[url(/assets/images/donpollobg.jpg)] h-screen bg-center bg-no-repeat bg-cover text-white">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="flex flex-row w-full bg-gray-800 items-center justify-center text-white px-4 py-2 gap-4"><a href="https://www.youtube.com/"><img${ssrRenderAttr("src", _imports_1)} class="w-16 h-16"></a><a href="https://www.facebook.com/"><img${ssrRenderAttr("src", _imports_2)} class="w-16 h-16 bg-transparent"></a><a href="https://github.com/"><img${ssrRenderAttr("src", _imports_3)} class="w-16 h-16 bg-transparent"></a></footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/defalt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=defalt-C1j22h_K.js.map
