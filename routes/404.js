const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();


router.get('*', (req, res) => {
    let language = languageHelper(req, res);

    let {lang, title, errorh1, errorp, pagesText} = require(`../languages/404_${language}.json`);

    res.render('404/404', {
        lang: lang,
        title: title,
        errorh1: errorh1,
        errorp: errorp,
        pagesText: pagesText
    });
});

module.exports = router;