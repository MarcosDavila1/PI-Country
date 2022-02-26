const { Router } = require('express');
const router = Router();
const postActivity = require('../controllers/ActivityControllers');

router.post('/', postActivity)

module.exports = router;