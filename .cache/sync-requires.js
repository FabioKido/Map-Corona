const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/home/kido/JavaScript/Saúde/Coronavirus/src/pages/index.js"))),
  "component---src-pages-terms-policy-js": hot(preferDefault(require("/home/kido/JavaScript/Saúde/Coronavirus/src/pages/terms-policy.js")))
}

