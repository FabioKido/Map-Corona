// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pt-br-js": () => import("./../src/pages/pt-br.js" /* webpackChunkName: "component---src-pages-pt-br-js" */),
  "component---src-pages-terms-policy-js": () => import("./../src/pages/terms-policy.js" /* webpackChunkName: "component---src-pages-terms-policy-js" */)
}

