const { Router } = require('express');
const router = Router();
const vehiculosCtrl = require('../controller/vehiculos.controller');
const auth = require('../helper/auth');

router.post('/crearVehiculos', auth.verificarToken, vehiculosCtrl.crearVehiculos);
router.get('/listarVehiculos', vehiculosCtrl.listar)
router.get('/listarVehiculosMarca/:marca', vehiculosCtrl.listarMarca)
router.get('/buscarPorCoincidenciaVehiculos/:nombre', vehiculosCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciaVehiculosMayusculas/:nombre', vehiculosCtrl.buscarPorCoincidenciaMayusculas)

router.delete('/eliminarVehiculos/:id', auth.verificarToken, vehiculosCtrl.eliminarVehiculos)

router.put('/actualizarVehiculos/:id', auth.verificarToken, vehiculosCtrl.actualizarVehiculos)

module.exports = router