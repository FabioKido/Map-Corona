const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/kido/JavaScript/Saúde/Coronavirus/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/kido/JavaScript/Saúde/Coronavirus/src/pages/index.js"))),
  "component---src-pages-pt-br-js": hot(preferDefault(require("/home/kido/JavaScript/Saúde/Coronavirus/src/pages/pt-br.js")))
}

