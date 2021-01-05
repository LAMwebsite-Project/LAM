const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
    res.render('homepage/homepage', {
        name: req.params.name
    });
});

module.exports = router;