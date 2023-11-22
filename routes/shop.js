const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('<h1>This is the default page</h1>');
})

module.exports = router;