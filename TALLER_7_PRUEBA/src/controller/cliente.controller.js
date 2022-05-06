const clienteCtrl = {};
const clienteModel = require('../models/cliente.models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

clienteCtrl.crearCliente = async(req, res) => {
    const { nombre, apellido, cedula, placa, telefono, correo, contrasena } = req.body
    const nuevoCliente = new clienteModel({
        nombre,
        apellido,
        cedula,
        placa,
        telefono,
        correo,
        contrasena
    })

    //REGISTRO DEL CLIENTE EN EL SISTEMA

    const correoCliente = await clienteModel.findOne({ correo: correo })
    if (correoCliente) {
        res.json({
            mensaje: 'El Cliente ya está registrado'
        })
    } else {
        nuevoCliente.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: nuevoCliente._id }, 'Secreta')
        await nuevoCliente.save()
        res.json({
            mensaje: 'Bienvenido a AVN Motors',
            id: nuevoCliente._id,
            nombre: nuevoCliente.nombre,
            token
        })
    }
}

//LOGGIN

clienteCtrl.login = async(req, res) => {
    const { correo, contrasena } = req.body
    const cliente = await clienteModel.findOne({ correo: correo })
    if (!cliente) {
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, cliente.contrasena)
    if (match) {

        const token = jwt.sign({ _id: cliente._id }, 'Secreta')
        res.json({
            mensaje: 'Bienvenido a AVN Motors',
            id: cliente.id,
            nombre: cliente.nombre,
            token
        })

    } else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }

}


module.exports = clienteCtrl