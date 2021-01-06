const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();


router.get('*', (req, res) => {
    let language = languageHelper(req, res);

    res.render('404/404', require(`../languages/404/${language}.json`));
});

module.exports = router;