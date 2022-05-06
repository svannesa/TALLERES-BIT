const { Router } = require('express');
const router = Router();
const proveedorCtrl = require('../controller/proveedores.controller');
const auth = require('../helper/auth');

router.post('/crearProveedor', auth.verificarToken, proveedorCtrl.crearProveedor);
router.get('/listarProveedor', proveedorCtrl.listar)
router.get('/listarProveedorPais/:pais', proveedorCtrl.listarPais)
router.get('/buscarPorCoincidenciaProveedor/:nombre', proveedorCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciaProveedorMayusculas/:nombre', proveedorCtrl.buscarPorCoincidenciaMayusculas)

router.delete('/eliminarProveedor/:id', auth.verificarToken, proveedorCtrl.eliminarProveedor)

router.put('/actualizarProveedor/:id', auth.verificarToken, proveedorCtrl.actualizarProveedor)

module.exports = router;