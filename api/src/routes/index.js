const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const bodyParser = require('body-parser');
const CountryRoutes = require('./CountryRoutes');
const ActivityRoutes = require('./ActivityRoutes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(bodyParser.json());

//rutas
router.use('/countries', CountryRoutes)
router.use('/activity', ActivityRoutes)

module.exports = router;
