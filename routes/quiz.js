const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();

router.get('/quiz', (req, res) => {
    let language = languageHelper(req, res);

    let {lang, title} = require(`../languages/quiz/${language}.json`);

    res.render('quiz/quiz', {
        lang: lang,
        title: title,
    });
});

router.post('/quiz', (req, res) => {
    let language = languageHelper(req, res);

    let responseJSON = require(`../quiz_questions/${language}/1.json`);
    
    res.json(responseJSON);
}); 

module.exports = router;