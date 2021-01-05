const acceptedLanguages = ['en', 'nl'];

function checkLanguage(req) {
    let cookie = req.cookies['lang'];
    let accepted = false;
    
    for(lang in acceptedLanguages) {
        if(cookie == lang) {
            accepted = true;
        }
    }

    if(cookie == undefined || accepted == false) {
        cookie = setLanguage(req);
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