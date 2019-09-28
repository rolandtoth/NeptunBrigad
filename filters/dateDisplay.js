/*
A date formatter filter for Nunjucks
*/
module.exports = function (date, part) {

  let d = (date === "now") ? new Date() : new Date(date)

  let month = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december"
  ]

  if (part === 'year') {
    return d.getUTCFullYear()
  } else if (part === 'timestamp') {
    return Date.parse(date)
  } else if (part === 'toISOString') {
    return new Date(date).toISOString()
  } else if (part === 'monthAndDay') {
    return `${month[d.getMonth()]} ${d.getDate()}.`
  } else {
    return `${d.getUTCFullYear()}. ${month[d.getMonth()]} ${d.getDate()}.`
  }
}