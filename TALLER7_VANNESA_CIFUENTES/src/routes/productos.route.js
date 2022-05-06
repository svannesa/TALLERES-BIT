const { Router } = require('express');
const router = Router();
const productosCtrl = require('../controller/productos.controller');
const auth = require('../helper/auth');

router.post('/crearProductos', auth.verificarToken, productosCtrl.crearProductos);
router.get('/listarProductos', productosCtrl.listar)
router.get('/listarProductosMarca/:marca', productosCtrl.listarMarca)
router.get('/buscarPorCoincidenciaProductos/:nombre', productosCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciaProductosMayusculas/:nombre', productosCtrl.buscarPorCoincidenciaMayusculas)

router.delete('/eliminarProductos/:id', auth.verificarToken, productosCtrl.eliminarProductos)

router.put('/actualizarProductos/:id', auth.verificarToken, productosCtrl.actualizarProductos)

module.exports = router