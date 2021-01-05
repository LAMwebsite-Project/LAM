const express = require('express');
const router = express.Router();

router.get('/:file', (req, res) => {
    res.sendFile('/resources/' + req.params.file, {root: '.'});
});

module.exports = router;