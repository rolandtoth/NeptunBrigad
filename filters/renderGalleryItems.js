const cfg = require("../input/data/cfg.json");
const glob = require("glob");

module.exports = function (dirname) {

    var thumbs = glob.sync(`assets/images/gallery/${dirname}/*-thumb.*`),
        markup = "";

    if (thumbs) {
        thumbs.forEach(thumb => {
            let largeImage = thumb.replace('-thumb.', '.');
            markup += `<a href="/${largeImage}" target="_blank"><img src="/${thumb}" width="${cfg.gallery.thumb.width}" height="${cfg.gallery.thumb.height}" alt=""/></a>`;
        });
    }

    return markup;
};