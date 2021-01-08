const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();

const maxQuestions = 10;
const defaultQuestions = 5;

router.get('/quiz', (req, res) => {
    let language = languageHelper(req, res);

    res.render('quiz/quiz', require(`../languages/quiz/${language}.json`));
});

router.get('/GET/quiz', (req, res) => {
    let language = languageHelper(req, res);
    let responseJSON = {};

    for(let x = 0; x < 5; x++) {
        let number = Math.floor(Math.random() * 10 + 1);
        let tempJSON = require(`../quiz_questions/${language}/${number}.json`);

        responseJSON[x + 1] = tempJSON;
    }

    res.json(responseJSON);
}); 

router.get('/GET/art', (req, res) => {
    let language = languageHelper(req, res);

    res.json(require(`../quiz_endings/${language}/${req.query.ABC}`));
});

module.exports = router;