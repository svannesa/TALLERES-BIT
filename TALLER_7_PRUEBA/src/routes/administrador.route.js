const { Router } = require('express');
const router = Router();
const administradorCtrl = require('../controller/administrador.controller');

router.post('/crearAdministrador', administradorCtrl.crearAdministrador);
router.post('/login', administradorCtrl.login);


module.exports = router