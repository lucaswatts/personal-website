const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/src/pages/index.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/src/pages/skills.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/lucaswatts/Desktop/personal-website/personal-website/src/pages/work.js")))
}

