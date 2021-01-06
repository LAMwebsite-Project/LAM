const express = require('express');
const router = express.Router();

router.get('/:page/:file', (req, res) => {
    res.sendFile('/resources/' + req.params.page + '/' + req.params.file, {root: '.'});
});

module.exports = router;