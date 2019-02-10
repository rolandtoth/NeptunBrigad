const cfgDynamic = require("../input/data/cfgDynamic.js");

module.exports = (url) => `${url}?v=${cfgDynamic().version}`;