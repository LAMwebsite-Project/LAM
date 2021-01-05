const acceptedLanguages = ['en', 'nl'];

function checkLanguage(req, res) {
    let cookie = req.cookies['lang'];
    let accepted = false;
    
    for(lang in acceptedLanguages) {
        if(cookie == acceptedLanguages[lang]) {
            accepted = true;
        }
    }

    if(cookie == undefined || accepted == false) {
        cookie = setLanguage(req, res);
    }

    return cookie.toUpperCase();
}

function setLanguage(req, res) {
    for(lang in req.acceptsLanguages()) {
        if(lang == 'nl') {
            res.cookie('lang', 'nl', {maxAge: 604800000});
            return 'nl';
        }
    }

    res.cookie('lang', 'en', {maxAge: 604800000});
    return 'en';
}

module.exports = checkLanguage;