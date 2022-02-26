const { Router } = require('express');
const router = Router();

const { getCountries, getCountryById } = require('../controllers/CountryControllers');

router.get('/', getCountries)
router.get('/:id', getCountryById)

module.exports = router;