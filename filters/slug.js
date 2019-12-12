const slugify = require("slugify");

module.exports = function (input) {
    const options = {
        replacement: "-",
        remove: /[&,+()$~%.'":*?<>{}]/g,
        lower: true
    };

    return input ? slugify(input, options) : false;
}