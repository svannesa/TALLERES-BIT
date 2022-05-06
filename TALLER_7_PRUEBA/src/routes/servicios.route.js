const { Router } = require('express');
const router = Router();
const serviciosCtrl = require('../controller/servicios.controller');
const auth = require('../helper/auth');

router.post('/crearServicios', auth.verificarToken, serviciosCtrl.crearServicios);
router.get('/listarServicios', serviciosCtrl.listar)
router.get('/buscarPorCoincidenciaServicios/:nombre', serviciosCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciaServiciosMayusculas/:nombre', serviciosCtrl.buscarPorCoincidenciaMayusculas)

router.delete('/eliminarServicios/:id', auth.verificarToken, serviciosCtrl.eliminarServicios)

router.put('/actualizarServicios/:id', auth.verificarToken, serviciosCtrl.actualizarServicios)

module.exports = router