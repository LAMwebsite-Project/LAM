const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let language = languageHelper(req, res);

    res.render('homepage/homepage', require(`../languages/homepage/${language}.json`));
});

module.exports = router;