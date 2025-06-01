import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/hookable/dist/index.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/unctx/dist/index.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/radix3/dist/index.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/defu/dist/defu.mjs";
import "C:/Users/Argyn/Desktop/donpollo/Part2/donpollo/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>hi</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  login as default
};
//# sourceMappingURL=login-BIcQx8X8.js.map
