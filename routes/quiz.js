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


    let amount = req.query.amount;
    amount = parseInt(amount);

    if(amount == undefined || amount == null || Number.isNaN(amount) || amount <= 0) {
        amount = 5; // Default hoeveelheid
    } else if(amount > 10) { // max hoeveelheid
        amount = 10
    }

    let responseJSON = {amount: amount};
    
    res.json(responseJSON);
}); 

module.exports = router;