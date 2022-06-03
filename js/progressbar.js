var lang = {
    "html": "90%",
    "css": "80%",
    "javascript": "70%",
    "react": "65%",
    "angular": "50%"
};

var multiply = 4;

$.each(lang, function (language, pourcent) {

    var delay = 700;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});