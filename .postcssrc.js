// https://github.com/michael-ciniawsky/postcss-load-config
const precss = require('precss');
const cssnano = require('cssnano');
module.exports = {
  "plugins": {
    precss,
    cssnano,
    "postcss-mpvue-wxss":{},
  }
}

