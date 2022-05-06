const { Router } = require('express');
const router = Router();
const MascotaCtrl = require('../controller/mascotas.controller');
const { route } = require('express/lib/application');

router.post('/crear', MascotaCtrl.crear);
router.get('/listar', MascotaCtrl.listar);

module.exports = router;