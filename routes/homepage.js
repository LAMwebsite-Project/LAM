const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let language = languageHelper(req, res);

    let {lang, title} = require(`../languages/homepage_${language}.json`);

    res.render('homepage/homepage', {
        lang: lang,
        title: title,
    });
});

module.exports = router;