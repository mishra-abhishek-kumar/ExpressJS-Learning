const router = require('express').Router();
const contactController = require('../controllers/contacForm');

router.get('/', contactController.getContactForm);

router.post('/success', contactController.getSuccessPage);

module.exports = router;