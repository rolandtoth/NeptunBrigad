var articles = document.querySelectorAll('.articles article');

if (articles.length) {
    var now = Date.now();
    for (var i = 0; i < articles.length; i++) {
        if (now < parseInt(articles[i].getAttribute("data-premier-date"))) {
            var $premierInfo = articles[i].querySelector(".premier-info");
            if ($premierInfo) {
                $premierInfo.removeAttribute("style");
            }
        }
    }
}