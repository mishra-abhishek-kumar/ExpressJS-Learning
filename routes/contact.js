const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post('/success', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Form Successfully filled</h1>')
})

module.exports = router;