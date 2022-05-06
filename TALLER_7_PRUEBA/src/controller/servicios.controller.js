const serviciosCtrl = {}
const serviciosModels = require('../models/servicios.models')

serviciosCtrl.crearServicios = async(req, res) => {
    const { nombre, descripcion, precio, tiempoEstimado, placa, fechaServicio } = req.body
    const nuevoServicios = new serviciosModels({
        nombre,
        descripcion,
        precio,
        tiempoEstimado,
        placa,
        fechaServicio
    })
    const respuesta = await nuevoServicios.save()
    res.json({
        mensaje: 'Servicios  creado',
        respuesta
    })
}

serviciosCtrl.listar = async(req, res) => {
    const respuesta = await serviciosModels.find()
    res.json(respuesta)

}

serviciosCtrl.buscarPorCoincidencia = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await serviciosModels.find({ nombre: { $regex: ".*" + nombre } })
    res.json(respuesta)
}

serviciosCtrl.buscarPorCoincidenciaMayusculas = async(req, res) => {
    const { nombre } = req.params;
    const respuesta = await serviciosModels.find({ nombre: { $regex: "^" + nombre, $options: 'i' } })
    res.json(respuesta)
}


serviciosCtrl.eliminarServicios = async(req, res) => {

    const id = req.params.id
    await serviciosModels.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Servicio Eliminado'
    })
}


serviciosCtrl.actualizarServicios = async(req, res) => {
    const id = req.params.id
    await serviciosModels.findByIdAndUpdate({ _id: id }, req.body)
    const respuesta = await serviciosModels.findById({ _id: id })
    res.json({
        mensaje: 'Servicio actualizado',
        respuesta
    })
}

module.exports = serviciosCtrl