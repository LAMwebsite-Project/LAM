const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();


router.get('*', (req, res) => {
    let language = languageHelper(req);

    let {title, errorh1, errorp} = require(`../languages/404_${language}.json`);

    console.log(`${title}, ${errorh1}, ${errorp}`)

    res.render('404/404');
});

module.exports = router;