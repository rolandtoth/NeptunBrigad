module.exports = function (arr, asc = true, locale = "en") {
    arr.sort(new Intl.Collator(locale).compare);

    return asc ? arr : arr.reverse();
};