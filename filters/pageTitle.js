const cfg = require("../input/data/cfg.json");
/**
 *
 */
module.exports = function (title) {

    let pageTitle;

    if (title) {
        pageTitle = title + " - " + cfg.siteName;
    } else {
        pageTitle = cfg.siteName + ' - ' + cfg.slogan;
    }

    return pageTitle;
};