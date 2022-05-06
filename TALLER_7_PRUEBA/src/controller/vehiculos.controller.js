const vehiculosCtrl = {}
const vehiculosModels = require('../models/vehiculos.models')

vehiculosCtrl.crearVehiculos = async(req, res) => {
    const { tipo, marca, modelo, placa, estadoSOAT, descripcionFalla } = req.body
    const nuevoVehiculos = new vehiculosModels({
        tipo,
        marca,
        modelo,
        placa,
        estadoSOAT,
        descripcionFalla
    })
    const respuesta = await nuevoVehiculos.save()
    res.json({
        mensaje: 'Vehiculos  creado',
        respuesta
    })
}

vehiculosCtrl.listar = async(req, res) => {
    const respuesta = await vehiculosModels.find()
    res.json(respuesta)

}
vehiculosCtrl.listarMarca = async(req, res) => {
    const respuesta = await vehiculosModels.findOne({ marca: marca })
    res.json(respuesta)
}

vehiculosCtrl.buscarPorCoincidencia = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await vehiculosModels.find({ nombre: { $regex: ".*" + nombre } })
    res.json(respuesta)
}

vehiculosCtrl.buscarPorCoincidenciaMayusculas = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await vehiculosModels.find({ nombre: { $regex: "^" + nombre, $options: 'i' } })
    res.json(respuesta)
}


vehiculosCtrl.eliminarVehiculos = async(req, res) => {

    const id = req.params.id
    await vehiculosModels.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Vehiculo Eliminado'
    })
}


vehiculosCtrl.actualizarVehiculos = async(req, res) => {

    const id = req.params.id
    await vehiculosModels.findByIdAndUpdate({ _id: id })
    res.json({
        mensaje: 'Servicio Actualizado'
    })
}


module.exports = vehiculosCtrl