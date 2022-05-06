const proveedorCtrl = {}
const proveedorModels = require('../models/proveedores.models')

proveedorCtrl.crearProveedor = async(req, res) => {
    const { nombre, nit, pais, direccion, telefono, correo } = req.body
    const nuevoProveedor = new proveedorModels({
        nombre,
        nit,
        pais,
        direccion,
        telefono,
        correo
    })
    const respuesta = await nuevoProveedor.save()
    res.json({
        mensaje: 'Proveedor  creado',
        respuesta
    })
}

proveedorCtrl.listar = async(req, res) => {
    const respuesta = await proveedorModels.find()
    res.json(respuesta)

}


proveedorCtrl.listarPais = async(req, res) => {
    const respuesta = await proveedorModels.findOne({ pais: pais })
    res.json(respuesta)
}


proveedorCtrl.buscarPorCoincidencia = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await proveedorModels.find({ nombre: { $regex: ".*" + nombre } })
    res.json(respuesta)
}

proveedorCtrl.buscarPorCoincidenciaMayusculas = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await proveedorModels.find({ nombre: { $regex: "^" + nombre, $options: 'i' } })
    res.json(respuesta)
}


proveedorCtrl.eliminarProveedor = async(req, res) => {

    const id = req.params.id
    await proveedorModels.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Proveedor Eliminado'
    })
}


proveedorCtrl.actualizarProveedor = async(req, res) => {

    const id = req.params.id
    await proveedorModels.findByIdAndUpdate({ _id: id })
    res.json({
        mensaje: 'Proveedor Actualizado'
    })
}


module.exports = proveedorCtrl