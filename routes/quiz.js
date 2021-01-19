const languageHelper = require('../helpers/language');
const express = require('express');
const router = express.Router();

router.get('/quiz', (req, res) => {
    let language = languageHelper(req, res);

    res.render('quiz/quiz', require(`../languages/quiz/${language}.json`));
});

router.get('/GET/quiz', (req, res) => {
    let language = languageHelper(req, res);
    let responseJSON = {};
    let used = []

    for(let x = 0; x < 5; x++) {
        
        let number = Math.floor(Math.random() * 10 + 1);

        while(used.includes(number)) {
            number = Math.floor(Math.random() * 10 + 1);
        } 

        let tempJSON = require(`../quiz_questions/${language}/${number}.json`);

        responseJSON[x + 1] = tempJSON;
        used.push(number)
    }

    res.json(responseJSON);
}); 

router.get('/GET/quizEnding', (req, res) => {
    let language = languageHelper(req, res);

    res.json(require(`../quiz_endings/${language}/${req.query.abc}.json`));
});

module.exports = router;