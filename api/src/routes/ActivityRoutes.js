const { Router } = require('express');
const router = Router();
const {postActivity, getActivites} = require('../controllers/ActivityControllers');

router.post('/', postActivity)
router.get('/', getActivites)

module.exports = router;