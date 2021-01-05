function checkLanguage(req) {
    let cookie;
    if(req.cookies['lang'] == undefined) {
        cookie = setLanguage(req);
    } else {
        cookie = req.cookies['lang'];
    }

    return cookie.toUpperCase();
}

function setLanguage(req) {
    for(lang in req.acceptsLanguages()) {
        if(lang == 'nl') {
            res.cookie('lang', 'nl', {expires: 2147483647});
            return 'nl';
        }
    }

    res.cookie('lang', 'en', {expires: 2147483647});
    return 'en';
}

module.exports = checkLanguage;