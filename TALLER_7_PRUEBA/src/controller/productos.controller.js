const productosCtrl = {}
const productosModels = require('../models/productos.models')

productosCtrl.crearProductos = async(req, res) => {
    const { nombre, marca, cantidad, descripcion, precio, estadoGarantia } = req.body
    const nuevoProductos = new productosModels({
        nombre,
        marca,
        cantidad,
        descripcion,
        precio,
        estadoGarantia
    })
    const respuesta = await nuevoProductos.save()
    res.json({
        mensaje: 'Producto  creado',
        respuesta
    })
}

productosCtrl.listar = async(req, res) => {
    const respuesta = await productosModels.find()
    res.json(respuesta)

}


productosCtrl.listarMarca = async(req, res) => {
    const respuesta = await productosModels.findOne({ marca: marca })
    res.json(respuesta)
}


productosCtrl.buscarPorCoincidencia = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await productosModels.find({ nombre: { $regex: ".*" + nombre } })
    res.json(respuesta)
}

productosCtrl.buscarPorCoincidenciaMayusculas = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await productosModels.find({ nombre: { $regex: "^" + nombre, $options: 'i' } })
    res.json(respuesta)
}


productosCtrl.eliminarProductos = async(req, res) => {

    const id = req.params.id
    await productosModels.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Producto Eliminado'
    })
}

productosCtrl.actualizarProductos = async(req, res) => {
    const id = req.params.id
    await productosModels.findByIdAndUpdate({ _id: id }, req.body)
    const respuesta = await productosModels.findById({ _id: id })
    res.json({
        mensaje: 'Producto actualizado con ÉXITO',
        respuesta
    })
}

module.exports = productosCtrl